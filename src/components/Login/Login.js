"use client";
import { GiPriceTag } from "react-icons/gi";
import { LuSearchCode } from "react-icons/lu";
import { ImPriceTags } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserLoginMutation } from "@/Redux/Features/AuthApi/authApi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logStatus } from "@/Redux/Features/AuthApi/authSlice";
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState();
  const [errors, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [userLogin, { data: loginSubmitData, isSuccess, isLoading, error }] =
    useUserLoginMutation();
  useEffect(() => {
    if (isSuccess && loginSubmitData?.status === true) {
      router.push("/product");
      dispatch(logStatus(true));
    } else if (error?.data) {
      setErrorMessage(error?.data?.message);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error, loginSubmitData, isSuccess]);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await userLogin({ data: { phone } });
    } catch (error) {
      console.log("Data Not Entry in db.");
    }
  };

  return (
    <div className="mt-[4%] ">
      <form onSubmit={handlerSubmit}>
        <div className="min-h-max p-6 bg-slate-800 flex rounded-md items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div className="flex justify-end mb-4 text-xl cursor-pointer ">
              <Link href={"/product?page=1"}>
                <span className="text-white hover:text-gray-400">
                  <RxCross2 />
                </span>
              </Link>
            </div>
            <div>
              <div className="bg-slate-900 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-xl italic">Post an ad</p>
                    <p className="text-gray-400">
                      Login to post your ad and keep track of it in your
                      account.
                    </p>
                    <div className="mt-6 flex">
                      <span className="text-2xl">
                        <GiPriceTag />
                      </span>
                      <p className="text-gray-400 ml-2 mt-0.5">
                        Start posting your own ads.
                      </p>
                    </div>
                    <div className="mt-4 flex">
                      <span className="text-2xl">
                        <LuSearchCode />
                      </span>
                      <p className="text-gray-400 ml-2 mt-0.5">
                        Mark ads as favorite and view them later.
                      </p>
                    </div>
                    <div className="mt-4 flex">
                      <span className="text-2xl">
                        <ImPriceTags />
                      </span>
                      <p className="text-gray-400 ml-2 mt-0.5">
                        View and manage your ads at your convenience.
                      </p>
                    </div>
                  </div>
                  {/* form design start */}
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5 text-gray-300 text-lg ">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          type="number"
                          name="phoneNumber"
                          id="phphoneNumberone"
                          className="h-10  mt-1 rounded px-4 w-full bg-slate-800 border-0 focus:outline-none "
                          placeholder="Your phone number"
                        />
                      </div>

                      {/* <div className="md:col-span-5 text-lg text-gray-300 ">
                        <label htmlFor="email">
                          Email Address
                          <span className="text-xs text-gray-400">
                            (Optional)
                          </span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border-0 focus:outline-none mt-1 rounded px-4 w-full bg-slate-800 "
                          placeholder="email@domain.com"
                        />
                      </div> */}

                      {errors && errorMessage?.length > 1 && (
                        <div className="md:col-span-5 text-center ">
                          <div className="inline-flex items-end">
                            <span className="text-red-400 bg-gray-600 py-0.5 px-5 rounded-sm">
                              {errorMessage}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="md:col-span-5 text-right my-2">
                        <div className="inline-flex items-end">
                          <button
                            disabled={isLoading}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="mt-2 flex md:col-span-5 w-96 ">
                          <hr className="w-full mt-4 mr-5 bg-red-300" />
                          <span className="text-gray-300 text-lg">or</span>
                          <hr className="w-full mt-4 ml-5 bg-red-300" />
                        </div>
                      </div>
                      <div className="text-center mt-10">
                        <div className="inline-flex items-end">
                          <Link href="/registation">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Registation
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
