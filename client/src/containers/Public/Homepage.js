import React, { useEffect } from "react";
import { Province, ItemSidebar, RelatedPost } from "../../components";
import { List, Pagination } from "./index";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const Homepage = () => {
  const { categories, prices } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
  }, []);
  return (
    <div className="w-full flex flex-col gap-3">
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[40%] flex flex-col gap-4 justify-start items-center">
          <ItemSidebar content={categories} title="Danh sách dịch vụ" />
          <ItemSidebar
            isDouble={true}
            type="priceCode"
            content={prices}
            title="Xem theo giá"
          />
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
