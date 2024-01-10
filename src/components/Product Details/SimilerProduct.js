"use client";
import Image from "next/image";
import laptops from "../../../public/Images/laptop.jpeg";
import { Roboto_Slab } from "next/font/google";
const roboto = Roboto_Slab({
  weight: "400",
  subsets: ["latin"],
});
const SimilerProduct = () => {
  return (
    <>
      <div className="flex  mr-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] cursor-pointer bg-slate-900/50  w-[48%] mt-3 rounded-sm hover:bg-slate-900/20 transition-all delay-150 ">
        <div className="p-2" draggable={false}>
          <Image
            src={laptops}
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
              Title name:about Title arif
            </h2>
            <h2>Location</h2>
            <h2>Accessories name.</h2>
            <h1 className="text-xl text-teal-500 font-mono">
              Tk{" "}
              <span className="font-mono">
                {new Intl.NumberFormat().format(25261)}
              </span>
              ৳
            </h1>
          </div>

          <div className=" text-end mr-1.5 mt-[-10px]">
            <p className=" text-gray-600 ">just now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilerProduct;
