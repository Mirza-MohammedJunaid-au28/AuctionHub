import React, { useState } from "react";
import { useEffect } from "react";
import check from "../assets/check.png";
const ProductList = () => {
  const [auctions, setAuctions] = useState();
  const [items, setItems] = useState();
  const [makeBid, setMakeBid] = useState(false);
  const [bidValue, setBidValue] = useState();

  const handleBit = (e) => {
    setBidValue(e.target.value);
  };

  const handleMakeBid = (auction_id, bidValue) => {
    console.log("[Make Bid] . . .");
    // console.log("Bid Value : ", bidValue);
    if (bidValue !== undefined) {
      fetch("http://localhost:5000/makeBids", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          auction_id: auction_id,
          price: bidValue,
        }),
      })
        // .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
    else{
     console.log('It is still undefined') 
    }
    setMakeBid(true);
  };

  useEffect(() => {
    console.log("[FetchData UseEffect] . . .");
    async function fetchData() {
      const response = await fetch("http://localhost:5000/liveAuction");
      const json = await response.json();
      setAuctions(json["data"]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("[Bid Value Use Effect] . . .");
    console.log("use effect bidvalue", bidValue);
  }, [bidValue]);

  //  let newItems
  useEffect(() => {
    console.log("[Render Live Auction Use Effect] . . .");
    const newItems = () => {
      return auctions?.map((element) => {
        return (
          <div className="grid grid-cols-3 gap-[0px]">
            <div className="w-[300px] h-fit border-2 rounded-lg  bg-white shadow-lg p-2">
              <div>
                <img
                  className=" w-[300px]"
                  src={element[0]}
                  alt="Car d image"
                  style={{ height: "200px" }}
                />
              </div>
              <ul className="grid grid-cols-2 p-0 m-0">
                <div className="flex align-items-center gap-1">
                  <li className="text-left ">Product:</li>
                  <span className="inline-block"> {element[1]}</span>
                </div>
                <div className="flex align-items-center gap-1">
                  <li className="text-left">Start Price:</li>
                  <span> {element[2]}</span>
                </div>
                <li className="text-left">Bids Till now: {element[7]}</li>
                <div className="flex align-items-center gap-1">
                  <li className="text-left ">Current Bid:</li>
                  <span> {element[6]}</span>
                </div>
              </ul>
              <div className="d-flex">
                <p>Bid Ends at: </p>
                <p className=" text-red-600">
                {element[3]} {element[4]} 
                </p>
              </div>
              <div className="flex gap-2">
                <div className=" cursor-pointer bg-blue-600 w-[150px] rounded  text-white">
                  Post a Question
                </div>
                <input
                  className=" outline-2 w-[100px] px-2 border-2 rounded-2xl "
                  placeholder="Make a bid (in Rs.)"
                  onChange={handleBit}
                  value={bidValue}
                  style={{ backgroundColor: 'white' }}
                ></input>
                <button
                  onClick={() => {
                    handleMakeBid(element[5], bidValue);
                    console.log("Send Request");
                  }}
                >
                  <img src={check} className="w-[20px]" />
                </button>
              </div>
            </div>
          </div>
        );
      });
    };
    setItems(newItems);
  }, [auctions,bidValue]);

  return (
    <div className="grid grid-cols-3 grid-auto-rows  gap-x-[0px] gap-y-4">
      {items}
    </div>
  );
};

export default ProductList;
