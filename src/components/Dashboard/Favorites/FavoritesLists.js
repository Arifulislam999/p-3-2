"use client";
import { Noto_Sans } from "next/font/google";
import Image from "next/image";
import car from "../../../../public/Images/car.jpg";
const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});
const FavoritesLists = () => {
  return (
    <div className="mt-2">
      <div className="flex shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer bg-[#002756] w-11/12 mt-3 rounded-sm hover:bg-[#002760] transition-all delay-150">
        <div className="my-2 ml-2  ">
          <Image width={180} className="h-28  rounded-sm" src={car} alt="car" />
        </div>
        <div className=" ml-6 mt-2 ">
          <div className="text-gray-400 font-serif">
            <h2
              className={`text-xl  font-thin text-gray-300 ${Poppin.className}`}
            >
              Title name:Corsair LPX 8GB 2400 mhz
            </h2>
            <h2>Location</h2>
            <h2>Accessories name.</h2>
            <h1 className="text-xl text-teal-500 font-mono">Tk 2021৳</h1>
          </div>
        </div>
      </div>
      {/* <div className=" relative">
        <span className="absolute ml-[81.5%]  mt-[-26px] text-gray-600 ">
          2 minutes
        </span>
      </div> */}
      <div className=" text-end w-11/12 mt-[-30px]">
        <p className=" text-gray-600 mr-2">20 minutes</p>
      </div>
    </div>
  );
};

export default FavoritesLists;
