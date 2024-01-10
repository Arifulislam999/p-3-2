"use client";
import { RxCross2 } from "react-icons/rx";
const FullImage = ({ image, setExpan }) => {
  const handlerCross = () => {
    setExpan((prev) => !prev);
  };
  return (
    <div>
      <div className="absolute mt-4 ml-[95%]">
        <span
          className="cursor-pointer text-3xl text-white font-semibold hover:text-gray-500"
          onClick={handlerCross}
        >
          <RxCross2 />
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center h-screen">
        <img
          alt="image"
          priority={true}
          className=" h-full w-2/3 z-10 my-2 border-2 rounded-md border-gray-600"
          src={image}
        />
      </div>
    </div>
  );
};

export default FullImage;
