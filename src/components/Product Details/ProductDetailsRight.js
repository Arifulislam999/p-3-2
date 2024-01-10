"use client";
import { useState, useEffect } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoChatbubbles } from "react-icons/io5";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
const ProductDetailsRight = ({ height, creator }) => {
  const [info, setInfo] = useState(true);
  const handlerInformation = () => {
    setInfo((prev) => !prev);
  };
  const [scrollLength, setScrollLength] = useState(0);
  const trackScrolling = () => {
    const scrollY = window.scrollY;
    setScrollLength(scrollY);
  };

  useEffect(() => {
    const scrollY = window.scrollY;
    setScrollLength(scrollY);
    window.addEventListener("scroll", trackScrolling);
    return () => {
      window.removeEventListener("scroll", trackScrolling);
    };
  }, []);
  //  css code

  const dynamicMarginTop = `${height - 415}px`;
  const divStyle = {
    position: scrollLength < height - 415 ? "fixed" : "absolute",
    width: "27%",
    marginTop: scrollLength > height - 415 ? dynamicMarginTop : "0px",
    // Add more CSS properties as needed
  };

  // creator comes form rtq query
  const { name, phone, email } = creator || {};
  return (
    <>
      <div style={divStyle}>
        <p className="mt-2 px-3  border-spacing-0.5 border border-cyan-400/25 py-1 text-gray-400 font-serif">
          For sale by{" "}
          <span className="font-bold italic capitalize text-lg text-gray-300 font-serif">
            {name?.length > 19 ? name?.slice(0, 19) : name}
          </span>
        </p>
        <div
          className=" px-3 border-spacing-0.5 border border-cyan-400/25 py-2 cursor-pointer text-gray-400 font-serif"
          onClick={handlerInformation}
        >
          <span className="flex">
            <span className="text-2xl mt-0.5 text-cyan-600">
              <BiSolidPhoneCall />
            </span>
            <span className="mx-3 text-lg font-serif">Call seller</span>
            <br />
          </span>
          {info && (
            <span className="ml-8 text-gray-400 font-serif text-xs ">
              Click to show information
            </span>
          )}
          {!info && (
            <div>
              <span className="font-thin text-sm text-gray-300 font-mono ml-8 bg-gray-500 px-2 py-0.5 rounded-sm">
                {phone}
              </span>

              {email?.length <= 20 && (
                <span className="font-thin text-sm text-gray-300 font-mono ml-1 bg-gray-500 px-2 py-0.5 rounded-sm">
                  {email}
                </span>
              )}
            </div>
          )}
        </div>
        <div className="cursor-pointer">
          <p className=" px-3 flex  border-spacing-0.5 border border-cyan-400/25 py-1 text-gray-400 font-serif">
            <span className="text-2xl ">
              <IoChatbubbles />
            </span>
            <span className="font-bold ml-3 text-lg text-gray-300 font-serif">
              Chat
            </span>
          </p>
        </div>
        <div className="mt-3 border-spacing-0.5 border border-cyan-400">
          <p className=" px-3 flex   py-1 text-gray-400 font-serif">
            <span className="text-2xl mt-0.5">
              <AiTwotoneSafetyCertificate />
            </span>
            <span className="font-semibold ml-2 text-lg text-gray-300 font-serif">
              Safety tips
            </span>
          </p>
          <div className="flex px-3 mt-2">
            <span className="text-sm text-gray-400 mt-0.5">
              <GoDotFill />
            </span>
            <span className=" ml-2 text-sm text-gray-500 font-serif">
              Meet in a safe & public place
            </span>
          </div>
          <div className="flex px-3 mt-2">
            <span className="text-sm text-gray-400 mt-0.5">
              <GoDotFill />
            </span>
            <span className=" ml-2 text-sm text-gray-500 font-serif">
              Don’t pay in advance
            </span>
          </div>
          <div className="flex px-3 mt-2">
            <span className="text-sm text-gray-400 mt-0.5">
              <GoDotFill />
            </span>
            <span className=" ml-2 text-sm text-gray-500 font-serif">
              Don’t say more information
            </span>
          </div>
          <div className="text-center my-3">
            <span className="cursor-pointer text-cyan-400 text-md ">
              See all safety tips
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsRight;
