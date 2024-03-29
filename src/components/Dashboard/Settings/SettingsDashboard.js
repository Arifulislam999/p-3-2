"use client";
import { Noto_Sans } from "next/font/google";
import DashboardLeft from "../DashboardLeft";
import {
  useUserLogOutQuery,
  useUserLoginStatusQuery,
} from "@/Redux/Features/AuthApi/authApi";
import Loader from "@/Loader/Loader";
import { useRouter } from "next/navigation";
import userImage from "../../../../public/Images/user.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logStatus } from "@/Redux/Features/AuthApi/authSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDeleteUserMutation } from "@/Redux/Features/ProductApi/productApi";
import Modals from "@/components/Modals/Modals";
import {
  modalStatus,
  modalStatusDelete,
} from "@/Redux/Features/ProductApi/productSlice";
const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});
const SettingsDashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { logInLogOutStatus, userId } = useSelector(
    (state) => state.logingStatus
  );
  const { modals, modalDelete } = useSelector(
    (state) => state.productMonitoring
  );
  const {
    data: userLoginStatus,
    isLoading,
    isSuccess,
  } = useUserLoginStatusQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { data } = userLoginStatus || {};
  const {} = useUserLogOutQuery(undefined, {
    skip: logInLogOutStatus,
  });
  // delete user
  const [deleteUser, { data: deleteuserData, isLoading: deleteLoading }] =
    useDeleteUserMutation();
  useEffect(() => {
    if (deleteuserData?.status === true) {
      router.push("/product");
      dispatch(logStatus(false));
      localStorage.setItem("token", "");
    }
    if (modalDelete === true) {
      deleteUser(userId);
      dispatch(modalStatusDelete(false));
    }
  }, [deleteuserData, modalDelete]);
  const handlerDelete = () => {
    try {
      dispatch(modalStatus(true));
    } catch (error) {
      console.log("error occured:", error?.message);
    }
  };
  return !isLoading ? (
    <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-slate-800 w-full mt-3 rounded-sm  transition-all delay-150 flex px-3">
      <DashboardLeft />
      {modals && <Modals message={"আপনি কি আপনার একাউন্টটি ডিলিট করতে চান।"} />}
      <div className="basis-4/5">
        <div>
          <h2
            className={`text-gray-500 text-2xl ml-2  font-sans ${Poppin.className}`}
          >
            Settings
          </h2>
          <hr className="w-11/12 bg-gray-400 mt-2" />
        </div>
        <div className="sm:flex justify-between">
          <div className="ml-3">
            <h2 className="text-2xl font-sans mb-5 font-semibold text-gray-600 mt-5">
              Account Details
            </h2>
            <p className="text-cyan-200  ">
              Phone No:{" "}
              <span className="text-white underline">
                {isSuccess && data?.phone}
              </span>
            </p>
            <div className="flex flex-col mt-3">
              <label
                htmlFor="name"
                className="text-gray-400 text-2xl  font-bold  mb-1"
              >
                Name:<span className="text-blue-200"> {data?.name || ""}</span>
              </label>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="text-gray-400 text-xl  mb-1">
                Location :
                <span className="text-blue-200">
                  {data?.userLocation || null}
                </span>
              </label>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="text-gray-400 text-xl  mb-1">
                Sub Location :
                <span className="text-blue-200">
                  {data?.userSubLocation || null}
                </span>
              </label>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="text-gray-400 text-xl  mb-1">
                Gender :
                <span className="text-blue-200"> {data?.gender || null}</span>
              </label>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="text-gray-400 text-xl  mb-1">
                Birthday:
                <span className="text-blue-200"> {data?.dob || null}</span>
              </label>
            </div>
          </div>
          <div className="mr-[10%] text-center">
            <Image
              width={250}
              height={350}
              src={data?.userImageLink ? data?.userImageLink : userImage}
              alt="image"
              className="rounded-sm border-2 border-green-400 h-56 mt-3"
            />

            <div className="mt-3 ">
              <span className="text-xl text-gray-500">
                Email: {isSuccess && data?.email}
              </span>
            </div>
          </div>
        </div>
        <hr className="w-11/12 bg-gray-400 mt-3" />
        <div className="flex mb-5">
          <div className="mt-5  ml-5">
            <button
              onClick={handlerDelete}
              disabled={deleteLoading}
              type="button"
              className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-cyan-400 text-gray-300 hover:bg-cyan-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-cyan-300/70 dark:hover:bg-cyan-200/40  dark:text-gray-200 dark:hover:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Delete account
            </button>
          </div>
          <div className="mt-5  ml-5">
            <button
              onClick={() => {
                dispatch(logStatus(false)),
                  router.push("/product"),
                  localStorage.setItem("token", "");
              }}
              type="button"
              className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-300 text-gray-300 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-red-300/80 dark:hover:bg-red-200/40  dark:text-gray-200 dark:hover:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default SettingsDashboard;
