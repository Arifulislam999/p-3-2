"use client";
import DashboardLeft from "../DashboardLeft";
import { Noto_Sans } from "next/font/google";
import userImage from "../../../../public/Images/user.jpg";
import Image from "next/image";
import { areaLocations, divitionLocation } from "@/utils/Location";
import { useEffect, useState } from "react";
import {
  useUserLoginStatusQuery,
  useUserUpdateMutation,
} from "@/Redux/Features/AuthApi/authApi";
import { useRouter } from "next/navigation";
const Poppin = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});

const Profile = () => {
  const router = useRouter();
  const { data: userLoginStatus } = useUserLoginStatusQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { data: userData } = userLoginStatus || {};
  const [userUpdate, { isLoading }] = useUserUpdateMutation();
  const [divitionLocationValue, setDivitionLocation] = useState();
  const [subArea, setSubArea] = useState([]);

  useEffect(() => {
    setSubArea([]);
    areaLocations[divitionLocationValue]?.map((subLocation) =>
      setSubArea((prev) => [...prev, subLocation])
    );
  }, [divitionLocationValue]);

  // input state
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [userSubLocation, setUserLocaSub] = useState("");
  useEffect(() => {
    setLink(userData?.userImageLink);
    setName(userData?.name);
    setPhone(userData?.phone);
    setGender(userData?.gender);
    setDob(userData?.dob);
    setUserLocaSub(userData?.userSubLocation);
  }, [userData]);
  const handlerClick = async () => {
    try {
      await userUpdate({
        data: {
          userImage: link,
          phone: userData?.phone,
          name,
          gender,
          dob,
          userLocation: divitionLocationValue,
          userSubLocation,
        },
      });
      router.replace("/dashboard/settings");
    } catch (error) {
      console.log("Not update user data.");
    }
  };

  return (
    <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-slate-800 w-full mt-3 rounded-sm  transition-all delay-150 flex px-3">
      <DashboardLeft />
      <div className="basis-4/5">
        <div>
          <h2
            className={`text-gray-500 text-2xl  font-sans ${Poppin.className}`}
          >
            My Profile
          </h2>
          <hr className="w-11/12 bg-gray-400 mt-2" />
        </div>
        <div className="ml-3">
          <h2 className="text-2xl font-sans mb-5 font-semibold text-gray-600 mt-5">
            Change Details
          </h2>
          <p className="text-cyan-200  ">
            Phone No:{" "}
            <span className="text-white underline ml-2">
              {userData?.phone || null}
            </span>
          </p>
          <div className="flex mt-10">
            <div>
              <Image
                width={55}
                height={55}
                src={link ? link : userImage}
                alt="image"
                className="rounded-full border-2 border-green-400 h-14 mt-3"
              />
            </div>
            <div className="flex flex-col mt-3 ml-7 w-3/4">
              <label htmlFor="name" className="text-gray-400  mb-1">
                Image Url Link
              </label>
              <input
                onChange={(e) => setLink(e.target.value)}
                value={link || ""}
                type="text"
                id="name"
                name="name"
                placeholder="Enter image url link"
                className="px-2 py-1 border-b border-b-orange-300 w-full  focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex  w-full">
            <div className="flex flex-col mt-3 w-full">
              <label htmlFor="name" className="text-gray-400  mb-1">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name || ""}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col mt-3 w-full">
              <label htmlFor="number" className="text-gray-400  mb-1">
                Phone
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone || ""}
                type="number"
                id="number"
                disabled={true}
                name="number"
                placeholder="Enter your phone number"
                className="px-4 py-1 border-b border-b-orange-300 pointer-events-none  mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex  w-full">
            <div className="flex flex-col mt-3 w-full">
              <label htmlFor="Gender" className="text-gray-400  mb-1">
                Gender
              </label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender || ""}
                className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
              >
                <option className="bg-slate-800">Gender</option>
                <option className="bg-slate-800">Male</option>
                <option className="bg-slate-800">Female</option>
                <option className="bg-slate-800">Other</option>
              </select>
            </div>

            <div className="flex flex-col mt-3 w-full">
              <label htmlFor="date" className="text-gray-400  mb-1">
                Date of Birth
              </label>
              <input
                onChange={(e) => setDob(e.target.value)}
                value={dob || ""}
                type="date"
                id="date"
                name="date"
                placeholder="Enter your phone number"
                className="px-4 py-1 border-b border-b-orange-300  mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col mt-3 w-full">
              <label htmlFor="name" className="text-gray-400  mb-1">
                Location
              </label>

              <select
                onChange={(e) => setDivitionLocation(e.target.value)}
                className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
              >
                {divitionLocation?.map((divition, index) => {
                  return (
                    <option
                      value={divition}
                      className="bg-slate-800"
                      key={index}
                    >
                      {divition}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col mt-3 w-full ">
              <label htmlFor="name" className="text-gray-400  mb-1">
                Sub-Location
              </label>

              <select
                onChange={(e) => setUserLocaSub(e.target.value)}
                className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
              >
                {subArea?.length > 1 ? (
                  subArea?.map((subLocation, index) => {
                    return (
                      <option
                        value={subLocation}
                        className="bg-slate-800"
                        key={index}
                      >
                        {subLocation}
                      </option>
                    );
                  })
                ) : (
                  <option className="bg-slate-800">Sub Location</option>
                )}
              </select>
            </div>
          </div>

          <div className="my-5  ml-5">
            <button
              onClick={handlerClick}
              type="button"
              disabled={isLoading}
              className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/70 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
