"use client";

import { useState, useRef, useEffect } from "react";
import Footer from "../Footer/Footer";
import { FaShareAlt } from "react-icons/fa";
import laptop from "../../../public/Images/laptop.jpeg";
import { BiShare } from "react-icons/bi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaBluetooth } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import FullImage from "./FullImage";
import SimilerProduct from "./SimilerProduct";
import Link from "next/link";
import ProductDetailsRight from "./ProductDetailsRight";
import { Lato } from "next/font/google";
import { useSearchParams } from "next/navigation";
import {
  useGetSemilerProductQuery,
  useGetSingleProductDetailsQuery,
} from "@/Redux/Features/ProductApi/productApi";
import Loader from "@/Loader/Loader";
import { getDateWithMonth } from "@/utils/timeAndDataWithMonth";
import { getProductDateTime } from "@/utils/getProductDateTime";
const Latos = Lato({
  weight: "400",
  subsets: ["latin"],
});
const ProductDetailsPage = () => {
  const searchParams = useSearchParams();
  const searchId = searchParams.get("id");
  const searchCreatorId = searchParams.get("creator_id");
  const [expanImage, setExpan] = useState(false);
  const [share, setShare] = useState(false);

  const fullImage = () => {
    setExpan((prev) => !prev);
  };
  const handlerShare = () => {
    setShare((prev) => !prev);
  };
  // div calculation start
  const divRef = useRef(null);
  const [height, setHeight] = useState(766);
  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.offsetHeight);
    }
  }, [divRef, height]);

  // redux query formula
  const { data: singleProductDetails, isLoading } =
    useGetSingleProductDetailsQuery({
      id: searchId,
      creator_id: searchCreatorId,
    });
  const { data } = singleProductDetails || {};
  const {
    accessoriesBrandName,
    accessoriesModelName,
    conditions,
    creatorId,
    description,
    imageLink,
    productPrice,
    productPriceType,
    accessoriesType,
    title,
    userLocation,
    userSubLocation,
    createdAt,
    _id,
  } = data || {};

  // semiler product query
  const { data: semilerProducts, isSuccess: semilerProductSuccess } =
    useGetSemilerProductQuery({ productName: accessoriesType, id: _id });

  return !isLoading ? (
    <div>
      {expanImage && (
        <div className="fixed -mt-[81px] z-20 w-[84%] bg-slate-800">
          <FullImage setExpan={setExpan} image={imageLink} />
        </div>
      )}

      {/* product details div start  */}

      <div
        ref={divRef}
        className="mt-6 bg-slate-800 min-h-full rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
      >
        <div className="mx-4 flex justify-between">
          <div>
            <h2
              className={`text-gray-300 font-semibold text-2xl pt-2 ${Latos.className}`}
            >
              {title} .({conditions})
            </h2>
            <h2 className={`text-gray-400 text-sm ${Latos.className} `}>
              Posted on {getDateWithMonth(createdAt)}{" "}
              {getProductDateTime(createdAt)},{" "}
              <span className="capitalize">
                {userSubLocation}, {userLocation}
              </span>
            </h2>
          </div>
          <div className="mt-4 relative">
            <div className="flex">
              <span
                className="text-white text-2xl cursor-pointer mr-2"
                onClick={handlerShare}
              >
                <FaShareAlt />
              </span>
              <span
                className="text-white text-3xl cursor-pointer mt-[-3px]"
                title="Favorite"
              >
                <CiStar />
              </span>
            </div>

            {share && (
              <div className="flex bg-blue-100   py-2 transition-all delay-200  rounded-sm absolute mt-[-30px] ml-[-105px]">
                <span className="text-blue-500 text-2xl cursor-pointer mx-1">
                  <FaFacebookSquare />
                </span>
                <span className="text-green-500 text-2xl cursor-pointer mx-1">
                  <IoLogoWhatsapp />
                </span>
                <span className="text-blue-500 text-2xl cursor-pointer mx-1">
                  <FaBluetooth />
                </span>
              </div>
            )}
          </div>
        </div>
        {/* expan arrow symbol  */}

        <div className="absolute mr-2  ml-[52%]">
          <span
            className="text-white   text-2xl  mr-10  p-1 rounded-sm mt-2 cursor-pointer"
            onClick={fullImage}
          >
            <FaExpandArrowsAlt />
          </span>
        </div>

        <div className="mx-4 my-5 flex justify-between">
          <div className="basis-2/3 h-[450px] bg-slate-900 shadow-xl flex flex-col items-center justify-center">
            <div className=" flex flex-col items-center justify-center">
              <img
                alt={title}
                className="w-5/12 absolute h-[450px] border border-cyan-300/40"
                src={imageLink ? imageLink : laptop}
              />
            </div>
          </div>
          {/* product details right  start */}
          <div className="basis-1/3 ml-2">
            <ProductDetailsRight creator={creatorId} height={height} />
          </div>
        </div>
        <div className="mx-4">
          <h2 className="text-teal-500 text-2xl font-mono font-bold">
            Tk{" "}
            <span className="font-mono">
              {new Intl.NumberFormat().format(productPrice)}
            </span>
            <span className="text-xs ml-0.5 text-gray-300 font-thin italic">
              ({productPriceType})
            </span>
          </h2>
          <p className="mt-4 font-serif text-xl text-gray-400">
            Product Location:{" "}
            <span className="text-gray-300 font-mono">
              {userLocation}
              <span className="text-sm italic text-gray-500">
                {" "}
                ({userSubLocation})
              </span>
            </span>
          </p>
          <p className="font-serif text-md text-gray-400">
            Condition:{" "}
            <span className="text-gray-300 font-mono">{conditions}</span>
          </p>
          <p className=" font-serif text-md text-gray-400">
            Brand:{" "}
            <span className="text-gray-300 font-mono">
              {accessoriesBrandName}
            </span>
          </p>
          <p className=" font-serif text-md text-gray-400">
            Model:{" "}
            <span className="text-gray-300 font-mono">
              {accessoriesModelName}
            </span>
          </p>
        </div>
        <div>
          <h2 className="mt-4 mx-4 text-2xl text-gray-500 font-serif">
            Description
          </h2>
          <div className="max-h-max w-2/3 text-justify">
            <p
              className={`mx-5 my-2 pb-4 text-gray-300 capitalize ${Latos.className}`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Similar ads  start */}
      <div className="mt-2 bg-slate-800 min-h-full rounded-md shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
        <h2 className="m-3 text-gray-400 text-xl font-serif pt-2  italic">
          Similar ads
        </h2>
        <hr className="w-full" />
        <div className="ml-4 flex flex-wrap justify-center">
          {semilerProductSuccess &&
            semilerProducts?.data.map((singleProduct, index) => (
              <SimilerProduct semilerProduct={singleProduct} key={index} />
            ))}
        </div>
        <div className="text-center">
          <Link href="/product">
            <button
              type="button"
              className="py-2 my-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
            >
              <span className="text-xl">
                <BiShare />
              </span>
              Back
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default ProductDetailsPage;
