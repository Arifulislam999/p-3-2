"use client";
import { Noto_Sans } from "next/font/google";
import { FaBoxOpen } from "react-icons/fa6";
import MyAccountPost from "./MyAccountPost";
import Link from "next/link";
import { useUserLoginStatusQuery } from "@/Redux/Features/AuthApi/authApi";
import Loader from "@/Loader/Loader";
import { useGetAllProductSpecificUserQuery } from "@/Redux/Features/ProductApi/productApi";
import PaginationAccount from "./PaginationAccount";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotlalProductSlice,
  paginationPageCount,
} from "@/Redux/Features/ProductApi/productSlice";
const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});
const MyAccount = () => {
  const dispatch = useDispatch();
  const {
    data: userLoginData,
    isSuccess,
    isLoading,
  } = useUserLoginStatusQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { data } = userLoginData || {};
  const urlPage = useSearchParams();
  const pageNumber = urlPage.get("page");
  // all post product specific user
  const {
    data: allProductSpecificUser,
    isLoading: specificUserLoading,
    isSuccess: specificUserSuccess,
  } = useGetAllProductSpecificUserQuery(
    { pageNo: Number(pageNumber) || 1 },
    { refetchOnMountOrArgChange: true }
  );
  const { pageCount } = useSelector((state) => state.productMonitoring);

  useEffect(() => {
    if (specificUserSuccess) {
      dispatch(
        paginationPageCount(
          Math.ceil(Number(allProductSpecificUser?.totalProductCount) / 3)
        )
      );
      dispatch(getTotlalProductSlice(pageCount || 1));
    }
  }, [pageNumber, specificUserSuccess, allProductSpecificUser, pageCount]);
  return !specificUserLoading ? (
    <div className="mb-5">
      <h2
        className={`text-gray-500 text-2xl capitalize ml-2 font-sans ${Poppin.className}`}
      >
        {(isSuccess && data?.name) || "unKnown"}
      </h2>
      <hr className="w-11/12 bg-gray-400 mt-2" />
      {/* if not any product yet or blank  */}

      {!allProductSpecificUser?.data?.length > 0 ? (
        <div>
          <div className="flex justify-around mx-20 mt-[100px]">
            <FaBoxOpen className="text-7xl text-orange-200" />
            <div className="text-center">
              <h2 className="text-2xl text-gray-500">
                You don't have any ads yet.
              </h2>

              <h2 className="text-gray-400 text-md">
                Click the Post an add now!button to post your ad.Here is not
                avable post yet.
              </h2>
              <div className="text-center mt-4">
                <Link href="/postads">
                  <button className=" px-2 py-2 cursor-pointer text-xl  hover:font-bold hover:tracking-wide bg-blue-500 hover:bg-blue-700 text-white mr-3 delay-100 transition-all rounded">
                    Post your ad now!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        allProductSpecificUser?.data?.map((Product, index) => (
          <MyAccountPost
            product={Product}
            key={index}
            loading={specificUserLoading}
          />
        ))
      )}
      {allProductSpecificUser?.data?.length > 0 && <PaginationAccount />}
    </div>
  ) : (
    <Loader />
  );
};

export default MyAccount;
