"use client";
import { Noto_Sans } from "next/font/google";
import Image from "next/image";
import car from "../../../../public/Images/car.jpg";
import { getTimeDifferenceFromNow } from "@/utils/timeDifference";
import Link from "next/link";
const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});
const FavoritesLists = ({ product }) => {
  const {
    accessoriesType,
    title,
    createdAt,
    imageLink,
    productPrice,
    _id,
    creatorId,
    userLocation,
  } = product || {};
  return (
    <Link
      href={`/productdetails?_title=${title}&id=${_id}&creator_id=${creatorId}`}
    >
      <div className="mt-2">
        <div className="flex shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer bg-slate-900/50 w-11/12 mt-3 rounded-sm hover:bg-slate-800/50 transition-all delay-150">
          <div className="my-2 ml-2  ">
            <img
              className="h-28 w-44 mt-1 rounded-sm border border-gray-400"
              src={imageLink ? imageLink : car}
              alt={title}
            />
          </div>
          <div className=" ml-6 mt-2 ">
            <div className="text-gray-400 font-serif">
              <h2
                className={`text-xl  font-thin text-gray-300 ${Poppin.className}`}
              >
                {title}
              </h2>
              <h2>{userLocation}</h2>
              <h2>{accessoriesType}</h2>
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
          <p className=" text-gray-600 mr-2">
            {getTimeDifferenceFromNow(createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FavoritesLists;
