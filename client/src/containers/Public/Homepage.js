import React from "react";
import { Province } from "../../components";
import { List } from "./index";

const Homepage = () => {
  return (
    <div className="border border-red-500 w-full flex flex-col gap-3">
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[100%]">
          <List />
        </div>
        {/* <div className="w-[30%] border-green-500">Sidebar</div> */}
      </div>
    </div>
  );
};

export default Homepage;
