"use client";
import { Noto_Sans } from "next/font/google";
import DashboardLeft from "../DashboardLeft";
import { IoCall } from "react-icons/io5";
import { useUserLoginStatusQuery } from "@/Redux/Features/AuthApi/authApi";
import Loader from "@/Loader/Loader";
const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});
const PhoneNumber = () => {
  const {
    data: userLoginStatus,
    isLoading,
    isSuccess,
  } = useUserLoginStatusQuery(undefined, { refetchOnMountOrArgChange: true });
  const { data } = userLoginStatus || {};
  return !isLoading ? (
    <>
      <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-slate-800 w-full mt-3 rounded-sm  transition-all delay-150 flex px-3">
        <DashboardLeft />
        <div className="basis-4/5">
          <h2
            className={`text-gray-500 text-2xl ml-2 font-sans ${Poppin.className}`}
          >
            Phone Number
          </h2>
          <hr className="w-11/12 bg-gray-400 mt-2" />
          <div className="mt-6 flex">
            <IoCall className="text-3xl text-gray-400" />
            <p className="text-white text-2xl ml-5">
              {isSuccess && data?.phone}
            </p>
          </div>
          <hr className="w-11/12 bg-gray-400 mt-4" />
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default PhoneNumber;
