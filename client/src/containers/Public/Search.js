import React from "react";
import { Button, SearchItem } from "../../components";
import icons from "../../ultils/icons";

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;
const Search = () => {
  return (
    <div className="p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2 ">
      <SearchItem
        IconBefore={<MdOutlineHouseSiding />}
        fontWeight
        IconAfter={<BsChevronRight />}
        text="Loại hình du lịch"
      />
      <SearchItem
        IconBefore={<HiOutlineLocationMarker />}
        IconAfter={<BsChevronRight />}
        text="Địa điểm"
      />
      <SearchItem
        IconBefore={<TbReportMoney />}
        IconAfter={<BsChevronRight />}
        text="Chọn giá tour"
      />
      <button
        type="button"
        className="outline-none py-2 px-4 w-full bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
      >
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
