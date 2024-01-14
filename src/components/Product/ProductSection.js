"use client";
import { useGetAllProductsQuery } from "@/Redux/Features/ProductApi/productApi";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";
import ProductCart from "./ProductCart";
import ProductLeftSide from "./ProductLeftSide";
import { FaLocationDot } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import Loader from "@/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotlalProductSlice,
  paginationPageCount,
} from "@/Redux/Features/ProductApi/productSlice";
import { useSearchParams } from "next/navigation";
const ProductSection = () => {
  const searchParams = useSearchParams();
  const pageNumber = searchParams?.get("page");
  const { pageCount } = useSelector((state) => state.productMonitoring);
  const dispatch = useDispatch();
  const {
    data: allProducts,
    isLoading,
    isSuccess,
  } = useGetAllProductsQuery({ page: Number(pageNumber) });
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        paginationPageCount(
          Math.ceil(Number(allProducts?.totalProductCount) / 5)
        )
      );

      dispatch(getTotlalProductSlice(pageCount));
    }
  }, [allProducts, isSuccess, pageCount]);
  return !isLoading ? (
    <div>
      <div className="mt-8 bg-slate-800 min-h-full rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
        <div className="flex justify-between mb-2">
          <div className="mt-4 px-4 text-white  text-xl flex">
            <span className="text-lg mr-2 mt-1">
              <FaLocationDot />
            </span>
            <h2 className="font-serif">Select Location</h2>
          </div>
          <div className="mt-4 px-4 text-white  text-xl flex">
            <span className="text-lg mr-2 mt-1">
              <FaBagShopping />
            </span>
            <h2 className="font-serif">All Product List</h2>
          </div>
          <div className="mt-4 w-1/3 mr-4">
            <div className="bg-gray-100 rounded border border-gray-200 flex items-center">
              <button className="py-2 px-4 bg-white text-gray-600 rounded-l border-r border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none">
                Search
              </button>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="flex justify-between mx-3 mt-2">
          <ProductLeftSide />
          <div className="basis-3/4 mb-3">
            <Carousel />

            {allProducts?.data?.map((data, index) => (
              <ProductCart singleProduct={data} key={index} />
            ))}

            {/* <hr className="mt-1 w-11/12" /> */}
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default ProductSection;
// bg-[#002150]
