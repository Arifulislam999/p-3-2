"use client";
import { Rings } from "react-loader-spinner";
import "./loader.css";
const Loader = () => {
  return (
    <div>
      <div className="loader">
        <div className="i-loader">
          <Rings
            visible={true}
            height="90"
            width="90"
            color="#FF4433"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
