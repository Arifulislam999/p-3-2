"use client";
import {
  getSortTagByUser,
  getSortTextByUser,
} from "@/Redux/Features/ProductApi/productSlice";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
const ProductLeftSide = () => {
  const { sortText } = useSelector((state) => state.productMonitoring);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(true);
  const [locationarea, setLocation] = useState(true);
  const [adsText, setAdsText] = useState(sortText);
  const [tag, setTag] = useState("");
  const handlerCategory = () => {
    setCategory((prev) => !prev);
  };
  const handlerLocation = () => {
    setLocation((prev) => !prev);
  };
  useEffect(() => {
    dispatch(getSortTextByUser(adsText));

    dispatch(getSortTagByUser(tag));
  }, [adsText, tag]);
  return (
    <>
      <div className="basis-1/4">
        <p className="text-gray-400 mb-1.5">Sort results by</p>
        <select
          onChange={(e) => setAdsText(e.target.value)}
          className="cursor-pointer bg-slate-800 border border-black text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-1.5 dark:bg-slate-800 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          <option className="pt-3 font-serif font-medium">
            Date:Newest on top
          </option>
          <option className="pt-3 font-serif font-medium">
            Date:Oldest on top
          </option>
          <option className="pt-3 font-serif font-medium">
            Price:High to low
          </option>
          <option className="pt-3 font-serif font-medium">
            Price:Low to high
          </option>
        </select>
        <div className="mt-6 font-serif text-gray-400">
          <p>Filter ads by</p>
          <div className="flex items-center my-3">
            <input
              id="URGENT"
              onChange={(e) => setTag(tag === "urgent" ? "" : "urgent")}
              type="checkbox"
              value={tag}
              className="w-3.5 h-3.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="URGENT"
              className="ms-2 text-xs px-1.5 rounded-sm bg-red-400 cursor-pointer font-medium text-gray-900 dark:text-gray-200"
            >
              URGENT
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="FEATURED"
              onChange={(e) => setTag(tag === "featured" ? "" : "featured")}
              type="checkbox"
              value={tag}
              className="w-3.5 h-3.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="FEATURED"
              className="ms-2  text-xs px-1.5 rounded-sm bg-blue-400 cursor-pointer font-medium text-gray-900 dark:text-gray-200"
            >
              FEATURED
            </label>
          </div>
        </div>
        {/* Category */}
        <div>
          <div className="flex justify-between ">
            <p className="text-gray-400 font-serif">Category</p>
            {category && (
              <span
                onClick={handlerCategory}
                className="mt-2 text-gray-400 text-xl mr-10 cursor-pointer"
              >
                <IoIosArrowDropup />
              </span>
            )}
            {!category && (
              <span
                onClick={handlerCategory}
                className="mt-2 text-gray-400 text-xl mr-10 cursor-pointer"
              >
                <IoIosArrowDropdown />
              </span>
            )}
          </div>
          {category && (
            <div>
              <h1 className="text-gray-500 text-xl font-serif mt-2">
                All Categorys
              </h1>

              <div>
                <p className="text-gray-300 delay-150 transaction-transition-all hover:text-gray-400 mt-2 font-mono cursor-pointer text-sm">
                  Laptops (252)
                </p>
                <p className="text-gray-300 delay-150 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Desktop Computers (864)
                </p>
                <p className="text-gray-300 delay-150 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Phones & Tablets Accessories (464)
                </p>
                <p className="text-gray-300 delay-150 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Audio & Sound Systems (34)
                </p>
                <p className="text-gray-300 delay-150 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Home Electronics (134)
                </p>
                <p className="text-gray-300 delay-150 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Tv & Video Accessories (534)
                </p>
                <p className="text-gray-300 delay-150 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Others (34)
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Location of bangladesh. */}
        <hr className="mt-3 w-3/4 bg-gray-600" />
        <div>
          <div className="flex justify-between">
            <p className="text-gray-400 font-serif mt-3">Location</p>
            {locationarea && (
              <span
                onClick={handlerLocation}
                className="mt-3 text-gray-400 text-xl mr-10 cursor-pointer"
              >
                <IoIosArrowDropup />
              </span>
            )}
            {!locationarea && (
              <span
                onClick={handlerLocation}
                className="mt-3 text-gray-400 text-xl mr-10 cursor-pointer"
              >
                <IoIosArrowDropdown />
              </span>
            )}
          </div>
          {locationarea && (
            <div>
              <h1 className="text-gray-500  text-xl font-serif mt-2">
                All of Bangladesh
              </h1>
              <div className="mb-5">
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 mt-2 font-mono cursor-pointer text-sm">
                  Dhaka (2,034)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Dhaka Division (2,564)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Khulna (2,034)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Chattogram (2,034)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Chattogram Division (2,034)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Sylhet (2,034)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Mymensingh (2,034)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Rajshahi (5,074)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Rajshahi Division (2,034)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Rangpur (298)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 text-sm mt-2 font-mono cursor-pointer">
                  Rangpur Division (534)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 mt-2 text-sm font-mono cursor-pointer">
                  Barishal (5,034)
                </p>
                <p className="text-gray-300 delay-100 transaction-transition-all hover:text-gray-400 mt-2 text-sm font-mono cursor-pointer">
                  Barishal Division (1,034)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductLeftSide;
