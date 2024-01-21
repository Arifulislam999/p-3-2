"use client";
import { getTimeDifferenceFromNow } from "@/utils/timeDifference";
import car from "../../../public/Images/car1.jpeg";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
const roboto = Roboto_Slab({
  weight: "400",
  subsets: ["latin"],
});
const ProductCart = ({ singleProduct }) => {
  const {
    _id,
    userLocation,
    accessoriesType,
    createdAt,
    productPrice,
    imageLink,
    title,
    tag,
    creatorId,
  } = singleProduct || {};
  return (
    <Link
      href={`/productdetails?_title=${title}&id=${_id}&creator_id=${creatorId}`}
    >
      <div className="flex relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-slate-900/50 cursor-pointer  w-11/12 2xl:w-9/12 mt-3 rounded-sm hover:bg-slate-800/50 transition-all delay-150">
        <div className="my-2 ml-2  ">
          <img
            width={180}
            className=" h-28 rounded-sm border border-gray-400"
            src={imageLink ? imageLink : car}
            alt={title}
          />
        </div>
        <div className=" ml-6 mt-2 ">
          <div className="text-gray-400 font-serif">
            <h2
              className={`text-xl  font-thin text-gray-300 ${roboto.className}`}
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
        {tag === "urgent" && (
          <div
            className="text-cyan-600 absolute text-3xl top-2 right-2"
            title="Urgent Sell"
          >
            <BiSolidBadgeCheck />
          </div>
        )}
      </div>
      {/* <div className=" relative">
        <span className="absolute ml-[81.5%]  mt-[-26px] text-gray-600 ">
          2 minutes
        </span>
      </div> */}
      <div className=" text-end w-11/12 mt-[-30px] 2xl:w-9/12">
        <p className=" text-gray-600 mr-2">
          {getTimeDifferenceFromNow(createdAt)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCart;
// bg-[#002756]
