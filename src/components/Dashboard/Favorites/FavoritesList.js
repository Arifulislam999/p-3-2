"use client";
import { Noto_Sans } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import FavoritesLists from "./FavoritesLists";
import Link from "next/link";
import { useUserFavoriteProductQuery } from "@/Redux/Features/ProductApi/productApi";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/Loader/Loader";
import PaginationFavorite from "./PaginateFavorite";
import { useEffect } from "react";
import {
  getTotlalProductSlice,
  paginationPageCount,
} from "@/Redux/Features/ProductApi/productSlice";
import { useSearchParams } from "next/navigation";

const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});
const FavoritesList = () => {
  const dispatch = useDispatch();
  const urlPage = useSearchParams();
  const pageNumber = urlPage.get("page") || 1;
  const { userId } = useSelector((state) => state.logingStatus);
  const { pageCount } = useSelector((state) => state.productMonitoring);
  const {
    data: userFavoriteItem,
    isSuccess,
    isLoading,
  } = useUserFavoriteProductQuery(
    { pageNo: Number(pageNumber) || 1, userid: userId },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        paginationPageCount(
          Math.ceil(Number(userFavoriteItem?.productCount) / 3)
        )
      );
      dispatch(getTotlalProductSlice(pageCount || 1));
    }
  }, [isSuccess, userFavoriteItem, pageNumber, pageCount]);

  return !isLoading ? (
    <div className="mb-3">
      <h2 className={`text-gray-500 text-2xl  font-sans ${Poppin.className}`}>
        Favorites
      </h2>
      <hr className="w-11/12 bg-gray-400 mt-2" />
      {!userFavoriteItem?.data?.length > 0 ? (
        <div>
          <div>
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
                    <Link href={userId ? "/product" : "/login"}>
                      <button className=" px-2 py-2 cursor-pointer text-xl  hover:font-bold hover:tracking-wide bg-blue-500 hover:bg-blue-700 text-white mr-3 delay-100 transition-all rounded">
                        Add Favorites
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        isSuccess &&
        userFavoriteItem?.data?.map((item, index) => (
          <FavoritesLists product={item} key={index} />
        ))
      )}
      {userFavoriteItem?.data?.length && <PaginationFavorite />}
    </div>
  ) : (
    <Loader />
  );
};

export default FavoritesList;
