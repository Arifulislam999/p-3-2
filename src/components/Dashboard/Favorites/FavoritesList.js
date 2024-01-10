"use client";
import { Noto_Sans } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import FavoritesLists from "./FavoritesLists";
const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});
const FavoritesList = () => {
  return (
    <div>
      <div>
        <div>
          <h2
            className={`text-gray-500 text-2xl  font-sans ${Poppin.className}`}
          >
            Favorites
          </h2>
          <hr className="w-11/12 bg-gray-400 mt-2" />
          <div>
            <div className="flex justify-around mx-20 mt-[100px]">
              <IoIosStar className="text-7xl text-orange-200" />
              <div className="text-center">
                <h2 className="text-2xl text-gray-500">
                  You haven't marked any ads as favorite yet.
                </h2>

                <h2 className="text-gray-400 text-md">
                  Click on the star symbol on any ad to save it as a favorite.
                  Start to browse ads to find ads you would like to favorite.
                </h2>
                <div className="text-center mt-4">
                  <button className=" px-2 py-2 cursor-pointer text-xl  hover:font-bold hover:tracking-wide bg-blue-500 hover:bg-blue-700 text-white mr-3 delay-100 transition-all rounded">
                    Add Favorites
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* if Favorites add any where  */}
      {/* <FavoritesLists /> */}
    </div>
  );
};

export default FavoritesList;
