"use client";
import { useUserLoginStatusQuery } from "@/Redux/Features/AuthApi/authApi";
import { usePostProductMutation } from "@/Redux/Features/ProductApi/productApi";
import {
  allBrandName,
  areaLocations,
  corrospondingBrandAccessoriesName,
  corrospondingModelNames,
  divitionLocation,
} from "@/utils/Location";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PostForm = () => {
  const router = useRouter();
  const [divitionLocationValue, setDivitionLocation] = useState();
  const [subArea, setSubArea] = useState([]);
  const [accessoriesName, setAccessoriesName] = useState();
  const [accessoriesModel, setAccessoriesModel] = useState([]);
  const [accessoriesModelNo, setAccessoriesModelNo] = useState([]);
  const [accessoriesModelValue, setAccessoriesModelValue] = useState();

  useEffect(() => {
    setSubArea([]);
    areaLocations[divitionLocationValue]?.map((subLocation) =>
      setSubArea((prev) => [...prev, subLocation])
    );
  }, [divitionLocationValue, accessoriesModelValue]);
  // brand name and type

  useEffect(() => {
    setAccessoriesModel([]);
    setAccessoriesModelNo([]);
    corrospondingBrandAccessoriesName[accessoriesName]?.map((accModel) =>
      setAccessoriesModel((prev) => [...prev, accModel])
    );
  }, [accessoriesName]);
  useEffect(() => {
    setAccessoriesModelNo([]);
    corrospondingModelNames[accessoriesModelValue]?.map((model) =>
      setAccessoriesModelNo((prev) => [...prev, model])
    );
  }, [accessoriesModelValue]);

  // useState Value
  const [title, setTitle] = useState("");
  // const [location, setLocation] = useState(divitionLocationValue);
  const [subLocation, setSubLocation] = useState("");
  // const [productType, setProductType] = useState(accessoriesName);
  // const [productName, setProductName] = useState(accessoriesModelValue);
  const [productModel, setProductModel] = useState("");
  const [conditions, setConditions] = useState("");
  const [price, setPrice] = useState("");
  const [priceType, setPriceType] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [productDesc, setProductDesc] = useState("");

  // redux message
  const [err, setErr] = useState("");
  const [errStatus, setErrStatus] = useState(false);

  // redux mutation query
  const [postProduct, { data: submitProduct, isLoading, error }] =
    usePostProductMutation();
  const { data: userLoginStatus } = useUserLoginStatusQuery();
  const { _id } = userLoginStatus?.data || {};
  useEffect(() => {
    if (error) {
      setErrStatus(true);
      setErr(error?.data?.message);
      setTimeout(() => {
        setErrStatus(false);
      }, 3000);
    } else if (submitProduct?.status === true) {
      router.replace("/product");
      setErrStatus(true);
      setErr("Submit Success");
      setTimeout(() => {
        setErrStatus(false);
      }, 3000);
    }
  }, [error, submitProduct]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    try {
      if (userLoginStatus?.status === true) {
        postProduct({
          data: {
            creatorId: _id,
            title,
            userLocation: divitionLocationValue,
            userSubLocation: subLocation,
            accessoriesType: accessoriesName,
            accessoriesBrandName: accessoriesModelValue,
            accessoriesModelName: productModel,
            conditions,
            productPrice: price,
            productPriceType: priceType,
            imageLink,
            description: productDesc,
          },
        });
      } else {
        setErr("Submit Error Data");
        setTimeout(() => {
          setErrStatus(false);
        }, 3000);
      }
    } catch (error) {
      setErr("Submit Error Data");
      setTimeout(() => {
        setErrStatus(false);
      }, 3000);
    }
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-slate-800 w-full mt-3 rounded-sm  transition-all delay-150  px-3 py-3">
        <div className="w-full flex ">
          <div className="flex flex-col mt-3 ml-7 w-1/2 mx-4">
            <label htmlFor="title" className="text-gray-400  mb-1">
              Title
            </label>
            <input
              required
              maxLength={40}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
              placeholder="Enter Product Title"
              className="px-2 py-1 border-b border-b-orange-300 w-full  focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white placeholder-gray-400"
            />
          </div>

          {/* locations  start */}
          <div className="flex w-1/2 mt-1 mx-4">
            <div className="flex flex-col mt-3 w-1/2">
              <label htmlFor="name" className="text-gray-400 ml-3  mb-1">
                Location
              </label>

              <select
                required
                onChange={(e) => setDivitionLocation(e.target.value)}
                className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
              >
                {divitionLocation?.map((divition, index) => {
                  return (
                    <option className="bg-slate-800" key={index}>
                      {divition}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col mt-3 w-1/2 ">
              <label htmlFor="name" className="text-gray-400 ml-3 mb-1">
                Sub-Location
              </label>

              <select
                required
                onChange={(e) => setSubLocation(e.target.value)}
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
        </div>

        {/* second row in form  */}

        <div className="w-full flex mt-6">
          {/* accessoriesType and Model  */}

          <div className="flex flex-col mt-3 w-1/2">
            <label htmlFor="name" className="text-gray-400 ml-3  mb-1">
              Accessories Type
            </label>

            <select
              required
              onChange={(e) => setAccessoriesName(e.target.value)}
              className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
            >
              {allBrandName?.map((brand, index) => {
                return (
                  <option value={brand} className="bg-slate-800" key={index}>
                    {brand}
                  </option>
                );
              })}
            </select>
          </div>
          {/* model  */}
          <div className="flex  flex-col mt-3 w-1/3 ">
            <label htmlFor="name" className="text-gray-400 ml-3 mb-1">
              Accessories Brand Name
            </label>

            <select
              required
              onChange={(e) => setAccessoriesModelValue(e.target.value)}
              className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
            >
              {accessoriesModel?.length > 1 ? (
                accessoriesModel?.map((model, index) => {
                  return (
                    <option value={model} className="bg-slate-800" key={index}>
                      {model}
                    </option>
                  );
                })
              ) : (
                <option className="bg-slate-800">Accessories Brand Name</option>
              )}
            </select>
          </div>
          <div className="flex flex-col mt-3 w-1/2">
            <label htmlFor="name" className="text-gray-400 ml-3  mb-1">
              Accessories Model
            </label>

            <select
              required
              onChange={(e) => setProductModel(e.target.value)}
              className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
            >
              {accessoriesModelNo?.length > 1 ? (
                accessoriesModelNo?.map((model, index) => {
                  return (
                    <option value={model} className="bg-slate-800" key={index}>
                      {model}
                    </option>
                  );
                })
              ) : (
                <option className="bg-slate-800">Model No</option>
              )}
            </select>
          </div>
        </div>
        {/* third row  */}
        <div className="w-full mt-6 flex">
          <div className="flex flex-col mt-3 w-1/3">
            <label htmlFor="Gender" className="text-gray-400 ml-4 mb-1">
              Conditions
            </label>

            <select
              required
              onChange={(e) => setConditions(e.target.value)}
              className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
            >
              <option className="bg-slate-800">Select</option>
              <option className="bg-slate-800">Used</option>
              <option className="bg-slate-800">Brand New!</option>
            </select>
          </div>
          <div className="flex flex-col mt-3 w-1/3 mx-2">
            <label htmlFor="ProductPrice" className="text-gray-400 ml-4 mb-1">
              Product Price
            </label>
            <input
              required
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              id="ProductPrice"
              name="ProductPrice"
              placeholder="Enter Product Price"
              className="px-2 py-1 border-b border-b-orange-300 w-full  focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col mt-3 w-1/3">
            <label htmlFor="ptype" className="text-gray-400 ml-4 mb-1">
              Product Price Type
            </label>
            <select
              required
              onChange={(e) => setPriceType(e.target.value)}
              className="px-4 py-1 border-b border-b-orange-300 mx-3 focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white"
            >
              <option className="bg-slate-800">Select</option>
              <option className="bg-slate-800">Fixed</option>
              <option className="bg-slate-800">Negletable</option>
            </select>
          </div>
        </div>

        {/* fourth row  */}
        <div className="w-full mt-6 flex">
          <div className="flex flex-col mt-3 w-1/2 mx-2">
            <label htmlFor="ProductLink" className="text-gray-400 ml-4 mb-1">
              Product Image Link
            </label>
            <input
              required
              onChange={(e) => setImageLink(e.target.value)}
              type="text"
              id="ProductLink"
              name="ProductLink"
              placeholder="Enter Product Image Link"
              className="px-2 py-1 border-b border-b-orange-300 w-full  focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col mt-3 w-1/2 mx-2">
            <label
              htmlFor="Productdesctiption"
              className="text-gray-400 ml-4 mb-1"
            >
              Product Description
            </label>
            <textarea
              maxLength={300}
              required
              onChange={(e) => setProductDesc(e.target.value)}
              type="text"
              id="Productdesctiption"
              name="Productdesctiption"
              placeholder="About Product Description"
              className="px-2 py-1 border w-full border-orange-300  focus:outline-none focus:border-blue-500 rounded-md transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-400 bg-transparent text-white placeholder-gray-400"
            />
          </div>
        </div>
        {errStatus && err?.length > 4 && (
          <div className="text-center mt-2">
            <span className="text-red-400 bg-gray-600 px-2 rounded-sm py-0.5">
              {err}
            </span>
          </div>
        )}
        <div className="text-end">
          <div className="mt-5  ml-5">
            <button
              disabled={isLoading}
              type="submit"
              className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-300 text-gray-300 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-300/90 dark:hover:bg-blue-200/40  dark:text-gray-200 dark:hover:text-gray-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
