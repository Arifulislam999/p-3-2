import React from "react";
import "./modals.css";
import { useDispatch } from "react-redux";
import {
  modalStatus,
  modalStatusDelete,
} from "@/Redux/Features/ProductApi/productSlice";
const Modals = ({ message }) => {
  const dispatch = useDispatch();
  const handlerNo = () => {
    dispatch(modalStatus(false));
  };
  const handlerYes = () => {
    dispatch(modalStatusDelete(true));
    localStorage.setItem("token", "");
  };
  return (
    <div className="h-modal " onClick={handlerNo}>
      <div className="gradient-box">
        <div>
          <p>{message}</p>
        </div>
        <div className="flex mt-5">
          <button
            onClick={handlerYes}
            className="border bg-green-300 px-3 py-0.5 cursor-pointer rounded-sm mr-1"
          >
            হ্যা
          </button>
          <button
            onClick={handlerNo}
            className="border bg-red-300 px-3 py-0.5 cursor-pointer ml-1 rounded-sm"
          >
            না
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
