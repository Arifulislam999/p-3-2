"use client";
import { Noto_Sans } from "next/font/google";
import car from "../../../../public/Images/car.jpg";
import { getTimeDifferenceFromNow } from "@/utils/timeDifference";
import Link from "next/link";
import Loader from "@/Loader/Loader";
const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});
const MyAccountPost = ({ product, loading }) => {
  const {
    title,
    accessoriesBrandName,
    createdAt,
    creatorId,
    imageLink,
    userLocation,
    productPrice,
    _id,
  } = product || {};
  return !loading ? (
    <Link
      href={`/productdetails?_title=${title}&id=${_id}&creator_id=${creatorId?._id}`}
    >
      <div className="mt-3">
        <div className="flex shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer bg-slate-900/50 w-11/12 mt-3 rounded-sm hover:bg-slate-800/50 transition-all delay-150">
          <div className="my-2 ml-2  ">
            <img
              width={180}
              className="h-28  rounded-sm"
              src={imageLink ? imageLink : car}
              alt="car"
            />
          </div>
          <div className=" ml-6 mt-2 ">
            <div className="text-gray-400 font-serif">
              <h2
                className={`text-xl  font-thin text-gray-400 ${Poppin.className}`}
              >
                {title}
              </h2>
              <h2>{userLocation}</h2>
              <h2>{accessoriesBrandName}</h2>
              <h1 className="text-xl text-teal-500 font-mono">
                Tk <span>{new Intl.NumberFormat().format(productPrice)}</span>৳
              </h1>
            </div>
          </div>
        </div>
        {/* <div className=" relative">
        <span className="absolute ml-[81.5%]  mt-[-26px] text-gray-600 ">
          2 minutes
        </span>
      </div> */}
        <div className=" text-end w-11/12 mt-[-30px]">
          <p className=" text-gray-500 mr-2">
            {getTimeDifferenceFromNow(createdAt)}
          </p>
        </div>
      </div>
    </Link>
  ) : (
    <Loader />
  );
};

export default MyAccountPost;
