"use client";

import laptops from "../../../public/Images/laptop.jpeg";
import { Roboto_Slab } from "next/font/google";
import { getTimeDifferenceFromNow } from "@/utils/timeDifference";
import Link from "next/link";
const roboto = Roboto_Slab({
  weight: "400",
  subsets: ["latin"],
});
const SimilerProduct = ({ semilerProduct }) => {
  const {
    _id,
    accessoriesType,
    createdAt,
    creatorId,
    imageLink,
    productPrice,
    title,
    userLocation,
  } = semilerProduct || {};
  return (
    <>
      <div className="flex relative  mr-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer bg-slate-900/50  w-[48%] mt-3 rounded-sm hover:bg-slate-900/20 transition-all delay-150 ">
        <Link
          className="flex"
          href={`/productdetails?_title=${title}&id=${_id}&creator_id=${creatorId}`}
        >
          <div className="p-2" draggable={false}>
            <img
              src={imageLink ? imageLink : laptops}
              priority={true}
              alt="laptop"
              width={200}
              className="h-28 w-56  rounded-sm"
            />
          </div>
          <div className=" ml-3 mt-2  w-full">
            <div className="text-gray-400 font-serif">
              <h2
                className={`text-xl  font-thin text-gray-300 ${roboto.className}`}
              >
                {title?.length > 32 ? title?.slice(0, 31) : title}
              </h2>
              <h2>{userLocation}</h2>
              <h2>{accessoriesType}</h2>
              <h1 className="text-xl text-teal-500 font-mono">
                Tk{" "}
                <span className="font-mono">
                  {new Intl.NumberFormat().format(productPrice)}
                </span>
                ৳
              </h1>
            </div>
            {/* time section  */}
            <div className="absolute bottom-0.5 right-0  mr-1">
              <p className=" text-gray-600  ">
                {getTimeDifferenceFromNow(createdAt)}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SimilerProduct;
