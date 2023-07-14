import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import "moment/locale/vi";
import { Button, UpdatePost } from "../../components";
import { apiDeletePost } from "../../services";
import Swal from "sweetalert2";

const ManagePost = () => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const { postOfCurrent, dataEdit } = useSelector((state) => state.post);
  const [updateData, setUpdateData] = useState(false);
  useEffect(() => {
    !dataEdit && dispatch(actions.getPostsLimitAdmin());
  }, [dataEdit, updateData]);

  useEffect(() => {
    !dataEdit && setIsEdit(false);
  }, [dataEdit]);

  const checkStatus = (datetime) => {
    let todayInSeconds = new Date().getTime();
    let expiredDayInSeconds = datetime.getTime();
    return todayInSeconds <= expiredDayInSeconds
      ? "Đang hoạt động"
      : "Đã hết hạn";
  };

  const handleDeletePost = async (postId) => {
    const response = await apiDeletePost(postId);
    if (response?.data.err === 0) setUpdateData((prev) => !prev);
    else {
      Swal.fire("Oops!", "Xóa thất bại", "error");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-3xl font-medium ">Quản lý tin đăng</h1>
        {/* <select className="outline-none border p-2 border-gray-200 rounded-md">
          <option value="">Lọc theo trạng thái</option>
        </select> */}
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-gray-100">
            <th className="border p-2 flex-1">Mã tin</th>
            <th className="border p-2 flex-1">Ảnh đại diện</th>
            <th className="border p-2 flex-1">Tiêu đề</th>
            <th className="border p-2 flex-1">Giá</th>
            {/* <th className="border p-2 flex-1">Ngày bắt đầu</th> */}
            {/* <th className="border p-2 flex-1">Ngày hết hạn</th> */}
            {/* <th className="border p-2 flex-1">Trạng thái</th> */}
            <th className="border p-2 flex-1">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {!postOfCurrent ? (
            <tr>
              <td>nhap</td>
            </tr>
          ) : (
            postOfCurrent?.map((item) => {
              return (
                <tr className="flex items-center h-16" key={item.id}>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">
                    {item?.overviews?.code}
                  </td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">
                    <img
                      src={JSON.parse(item?.images?.image)[0] || ""}
                      alt="avatar-post"
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">
                    {`${item?.title?.slice(0, 40)}`}
                  </td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">
                    {item?.attributes?.price}
                  </td>
                  {/* <td className="border px-2 flex-1 h-full flex justify-center items-center">
                    {item?.overviews?.created?.split("T")[0]}
                  </td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">
                    {item?.overviews?.expired?.split("T")[0]}
                  </td>
                  <td className="border px-2 flex-1 h-full flex justify-center items-center">
                    {checkStatus(
                      new Date(item?.overviews?.expired?.split("T")[0])
                    )}
                  </td> */}
                  <td className="border px-2 flex-1 h-full flex justify-center items-center gap-4">
                    <Button
                      text="Sửa"
                      bgColor="bg-yellow-300"
                      textColor="text-white"
                      onClick={() => {
                        dispatch(actions.editData(item));
                        setIsEdit(true);
                      }}
                    />
                    <Button
                      text="Xóa"
                      bgColor="bg-red-500"
                      textColor="text-white"
                      onClick={() => handleDeletePost(item.id)}
                    />
                  </td>
                  <td></td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
    </div>
  );
};

export default ManagePost;
