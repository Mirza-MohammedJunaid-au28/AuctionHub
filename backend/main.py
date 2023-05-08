from flask import Flask,render_template,redirect,session,request,send_file,jsonify
from db import conn,cursor
import secrets
import string
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
import cloudinary
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

cloudinary.config(cloud_name = "dftin82rh",api_key = "778892232981745",api_secret = "fsc3Dy0zC3FNscrcWrBQevKQahA",secure = True)
alphabet = string.ascii_letters + string.digits
print('working')
watermark_transformation = {
            'overlay': {
                'font_family': 'Verdana',
                'font_size': 60,
                'text': 'AuctionHub.com',
                'text_align': 'center',
                'text_valign': 'bottom',
                'color': 'black',
                'stroke': 'white',
                'stroke_width': 4,
                'opacity': 60
            },
            'gravity': 'south_east'
        }
@app.route('/createAuction',methods=['POST'])
def createAuction():
    obj=request.get_json()
    image = obj['product_image']
    name = obj['product_name']
    price = obj['product_price']
    expiry_time = obj['expiry_time']
    expiry_date = obj['expiry_date']
    category = obj['category']
    email = 'Mirza Mohammed Junaid' 
    random_key = '#' + ''.join(secrets.choice(alphabet) for i in range(5))
    upload_result = cloudinary.uploader.upload(image,folder='AuctionHub')
    image_url = upload_result['secure_url']
    reverse_bidding='false'
    cursor.execute('INSERT INTO userauction(email,image,ProductName,ProductPrice,expiry_time,expiry_date,category,AuctionId,reversedBidding) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)', (email,image_url,name,price,expiry_time,expiry_date,category,random_key,reverse_bidding))
    cursor.execute('INSERT INTO liveauction(AuctionId,BiddingPrices,FAQs,BidderDetail,noOfBids) VALUES (%s,%s,%s,%s,%s)', (random_key,price,'null','null',0))
    conn.commit()
    print("[New Auction Created] . . .")
    return jsonify({'msg' : 'Inserted Successfully'})
        

@app.route('/liveAuction')
def liveAuction():
    cursor.execute('SELECT ua.image,ua.productname,ua.productprice,ua.expiry_time,ua.expiry_date,ua.auctionid,la.biddingprices,la.noofbids,ua.category FROM userauction ua JOIN liveauction la ON ua.auctionid = la.auctionid;')
    result = cursor.fetchall()
    passData = jsonify({'data':result})
    print('[Live Auction is Fetched & Passed to the Client] . . .')
    return passData
    
@app.route("/makeBids", methods=["POST"])
def makeBids():
    json_data = request.get_json();
    auction_id = json_data['auction_id']
    bidding_price = json_data['price']
    bidding_price = str(bidding_price).replace(',', '')
    bidding_price = int(bidding_price)
    bidder_email = 'mirzamohdjunaid8655@gmail.com'
    price_checker = "SELECT BiddingPrices FROM liveAuction WHERE AuctionId = %s"
    cursor.execute(price_checker, (auction_id,))
    price_checker_result = cursor.fetchone()
    last_bid = price_checker_result[0]
    last_bid = last_bid.replace(',', '')
    last_bid = int(last_bid)
    reverse_bid = "SELECT reversedBidding FROM userauction WHERE AuctionId = %s"
    cursor.execute(reverse_bid, (auction_id,))
    rev_data = cursor.fetchone()
    rev_data = rev_data[0]
    if price_checker_result:
        if rev_data == 'false':
            if bidding_price > last_bid:
                cursor.execute('update liveauction set BiddingPrices = %s where AuctionId=%s', (bidding_price,auction_id))
                cursor.execute('update liveauction set  BidderDetail = %s where AuctionId=%s', (bidder_email,auction_id))
                nbids = "SELECT noOfBids FROM liveAuction WHERE AuctionId = %s"
                cursor.execute(nbids, (auction_id,))
                temp = cursor.fetchone()
                temp =int(temp[0]) + 1
                cursor.execute('update liveauction set  noOfBids = %s where AuctionId=%s', (temp,auction_id))
                conn.commit()
                return jsonify({'message' : "true"})
                
            else:
                return jsonify({'message' : "false"})
        else:
            if bidding_price < last_bid:
                cursor.execute('update liveauction set BiddingPrices = %s where AuctionId=%s', (bidding_price,auction_id))
                cursor.execute('update liveauction set  BidderDetail = %s where AuctionId=%s', (bidder_email,auction_id))
                nbids = "SELECT noOfBids FROM liveAuction WHERE AuctionId = %s"
                cursor.execute(nbids, (auction_id,))
                temp = cursor.fetchone()
                temp =int(temp[0]) + 1
                cursor.execute('update liveauction set  noOfBids = %s where AuctionId=%s', (temp,auction_id))
                conn.commit()
                return jsonify({'message' : "Bid Successfully!!"})
            else:
                return jsonify({'message' : "Bid Price cannot be greater than current price!!"})
    else:
        return jsonify({'message' : "Auction not found!!"})

if __name__ == '__main__':
    app.run(debug=True)