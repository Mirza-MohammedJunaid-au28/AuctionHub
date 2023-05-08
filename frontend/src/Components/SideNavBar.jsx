import React from "react";
import ProductList from "./ProductList";

export const SideNavBar = () => {
  return (
    <div className="flex w-screen h-screen">
      {" "}
      <div className=" border-2 w-[300px] px-3 py-9 h-screen bg-[#9EE5ED]">
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2] text-left border-b-4 border-red-500">
          Live Bids
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2]  text-left border-b-4 border-red-500">
          Order History
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2]  text-left border-b-4 border-red-500">
          Queries
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2]  text-left border-b-4 border-red-500">
          Responses
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2]  text-left border-b-4 border-red-500">
          Unsold
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2]  text-left border-b-4 border-red-500">
          Successful Bids
        </p>
      </div>
      <div className="w-[1200px] p-9">
        <ProductList />
      </div>
    </div>
  );
};
