import mysql.connector
conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='root',
        database='AuctionHub'
)
cursor = conn.cursor()