"use client";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const DashboardLeft = () => {
  const { logInLogOutStatus } = useSelector((state) => state.logingStatus);
  const pathName = usePathname();

  return (
    <>
      <div className="basis-1/5">
        <div className="flex">
          <MdManageAccounts className="text-cyan-100  text-3xl mt-0.5 mr-2" />
          <h1 className="font-sans text-2xl text-gray-400">Account</h1>
        </div>
        <hr className="w-10/12 bg-gray-400 mt-2" />
        <div>
          <Link href={logInLogOutStatus ? "/dashboard" : "login"}>
            <div className="flex justify-between mx-5 cursor-pointer hover:font-semibold delay-100 transition-all hover:text-gray-400">
              <h2
                className={`mt-5 font-sans ${
                  pathName === "/dashboard"
                    ? "text-cyan-300 font-bold"
                    : "text-gray-300"
                }`}
              >
                My account
              </h2>
              <MdKeyboardDoubleArrowRight className="text-gray-300 text-2xl mt-5" />
            </div>
          </Link>
          <div className="ml-2">
            <hr className="w-11/12  mt-2 border-[-1px]  border-gray-500" />
          </div>
        </div>
        <div>
          <Link href={logInLogOutStatus ? "/dashboard/favorites" : "login"}>
            <div className="flex justify-between mx-5 cursor-pointer hover:font-semibold delay-100 transition-all hover:text-gray-400">
              <h2
                className={` mt-5 font-sans ${
                  pathName === "/dashboard/favorites"
                    ? "text-cyan-300 font-bold"
                    : "text-gray-300"
                }`}
              >
                Favorites
              </h2>
              <MdKeyboardDoubleArrowRight className="text-gray-300 text-2xl mt-5" />
            </div>
          </Link>
          <div className="ml-2">
            <hr className="w-11/12  mt-2 border-[-1px]  border-gray-500" />
          </div>
        </div>
        <div>
          <Link href={logInLogOutStatus ? "/dashboard/settings" : "login"}>
            <div className="flex justify-between mx-5 cursor-pointer hover:font-semibold delay-100 transition-all hover:text-gray-400">
              <h2
                className={`mt-5 font-sans ${
                  pathName === "/dashboard/settings"
                    ? "text-cyan-300 font-bold"
                    : "text-gray-300"
                }`}
              >
                Settings
              </h2>
              <MdKeyboardDoubleArrowRight className="text-gray-300 text-2xl mt-5" />
            </div>
          </Link>
          <div className="ml-2">
            <hr className="w-11/12  mt-2 border-[-1px]  border-gray-500" />
          </div>
        </div>
        <div>
          <Link href={logInLogOutStatus ? "/dashboard/phone-number" : "login"}>
            <div className="flex justify-between mx-5 cursor-pointer hover:font-semibold delay-100 transition-all hover:text-gray-400 ">
              <h2
                className={` mt-5 font-sans ${
                  pathName === "/dashboard/phone-number"
                    ? "text-cyan-300 font-bold"
                    : "text-gray-300"
                }`}
              >
                Phone Number
              </h2>
              <MdKeyboardDoubleArrowRight className="text-gray-300 text-2xl mt-5" />
            </div>
          </Link>
          <div className="ml-2">
            <hr className="w-11/12  mt-2 border-[-1px]  border-gray-500" />
          </div>
        </div>
        {/* job sections  */}

        <div className="mt-7">
          <div className="flex">
            <FaUserGroup className="text-cyan-100  text-2xl mt-1 mr-2" />
            <h1 className="font-sans text-2xl text-gray-400">Jobs</h1>
          </div>
          <hr className="w-10/12 bg-gray-400 mt-2" />

          <div>
            <Link href={logInLogOutStatus ? "/dashboard/profile" : "login"}>
              <div className="flex justify-between mx-5 cursor-pointer hover:font-semibold delay-100 transition-all hover:text-gray-400">
                <h2
                  className={` mt-5 font-sans ${
                    pathName === "/dashboard/profile"
                      ? "text-cyan-300 font-bold"
                      : "text-gray-300"
                  }`}
                >
                  My Profile
                </h2>
                <MdKeyboardDoubleArrowRight className="text-gray-300 text-2xl mt-5" />
              </div>
            </Link>
            <div className="ml-2">
              <hr className="w-11/12  mt-2 border-[-1px]  border-gray-500" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mx-5 mb-5 cursor-pointer hover:font-semibold delay-100 transition-all hover:text-gray-400">
              <h2 className="text-gray-300 mt-5 font-sans ">
                Profile Database
              </h2>
              <MdKeyboardDoubleArrowRight className="text-gray-300 text-2xl mt-5" />
            </div>
            {/* <div className="ml-2 mb-4">
              <hr className="w-11/12  mt-2 border-[-1px]  border-gray-500" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLeft;
