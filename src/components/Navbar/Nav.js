"use client";
import Link from "next/link";
import UserAccount from "../User/UserAccount";
import { useUserLoginStatusQuery } from "@/Redux/Features/AuthApi/authApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logStatus, userAccountNo } from "@/Redux/Features/AuthApi/authSlice";
import { usePathname } from "next/navigation";

const Nav = () => {
  const dispatch = useDispatch();
  const { logInLogOutStatus } = useSelector((state) => state.logingStatus);
  const { data: loggedinStatus, isSuccess } = useUserLoginStatusQuery();
  const { status } = loggedinStatus || {};
  useEffect(() => {
    if (isSuccess && status) {
      dispatch(logStatus(status));
      dispatch(userAccountNo(loggedinStatus?.data._id));
    }
  }, [status, isSuccess]);
  const pathName = usePathname();

  return (
    <div>
      <div className=" text-white">
        <div className="pt-4 flex justify-between ">
          <div className="inline border-white border-4 rounded-full border-solid cursor-pointer">
            <Link href="/product?page=1">
              <span className="font-extrabold  text-2xl p-2 ">P</span>
            </Link>
          </div>

          <div>
            <ul className="flex">
              <Link href={"/"}>
                <li
                  className={`font-semibold px-2 cursor-pointer hover:font-bold hover:tracking-wide ${
                    pathName === "/" && "text-cyan-400"
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href={"/product?page=1"}>
                <li
                  className={`font-semibold px-2 cursor-pointer hover:font-bold hover:tracking-wide ${
                    pathName === "/product" && "text-cyan-400"
                  }`}
                >
                  Product
                </li>
              </Link>

              <Link href={logInLogOutStatus === true ? "/postads" : "/login"}>
                <li className=" px-2 cursor-pointer hover:font-bold hover:tracking-wide bg-blue-500 hover:bg-blue-700 text-white mr-3 delay-100 transition-all rounded">
                  POST AD
                </li>
              </Link>
              {logInLogOutStatus === false ? (
                <Link href="/login">
                  <button
                    type="button"
                    className="py-1.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none  dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 transition-all delay-75"
                  >
                    Login
                  </button>
                </Link>
              ) : (
                <div>
                  <Link href="/dashboard">
                    <UserAccount
                      userImage={loggedinStatus?.data?.userImageLink}
                    />
                  </Link>
                </div>
              )}
              {/* <li className="font-semibold px-2 cursor-pointer hover:font-bold hover:tracking-wide">
                Logout
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
