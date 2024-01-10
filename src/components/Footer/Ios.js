import React from "react";

const Ios = ({ text1, text2, symbol }) => {
  return (
    <div className="bg-black text-gray-300 flex w-32 ml-2 cursor-pointer text-center justify-center rounded-md">
      <div className="text-2xl mx-1 mt-3">{symbol}</div>
      <div>
        <span className="text-xs ml-1">{text1}</span> <br />
        <span className="text-sm">{text2}</span>
      </div>
    </div>
  );
};

export default Ios;
