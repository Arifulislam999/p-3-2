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
            color="#1197C1"
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

// import "./loader.css";
// const Loader = () => {
//   return (
//     <div className="center">
//       <div className="ring">
//         <span className="sp">loading...</span>
//       </div>
//     </div>
//   );
// };

// export default Loader;
