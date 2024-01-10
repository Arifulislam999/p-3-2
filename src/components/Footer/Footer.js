"use client";
import Ios from "./Ios";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <hr className="w-full h-0.5 bg-blue-500 my-2" />
      <div className="my-5 flex justify-between">
        <div className="text-white ">
          <h1 className="text-gray-400 font-medium mb-2">Download our app</h1>
          <div className="flex">
            <Ios
              symbol={<IoLogoGooglePlaystore />}
              text1="GET IT ON"
              text2="Google Play"
            />
            <Ios
              symbol={<FaAppStoreIos />}
              text1="Download on"
              text2="App Store"
            />
          </div>
          <div>
            <p className="text-gray-200 mt-2">Connect with</p>
            <div className="text-white flex">
              <span className="mt-1 text-lg mr-2">
                <FaFacebookSquare />
              </span>
              <span className="text-gray-500 mt-1 font-serif text-sm flex  cursor-pointer hover:text-gray-600">
                Like us on facebook
              </span>
            </div>
            <div className="text-white flex">
              <span className="mt-1 text-lg mr-2">
                <MdAlternateEmail />
              </span>
              <span className="text-gray-500 mt-0.5 font-serif text-sm flex  cursor-pointer hover:text-gray-600">
                p_shop201@gmail.com
              </span>
            </div>
          </div>
          <div>
            <p className="text-gray-200 mt-2">Other countries</p>
            <div className="text-white flex">
              <span className="text-gray-500 font-serif text-xs   cursor-pointer hover:text-gray-600 table">
                India
              </span>
              <span className="ml-2 text-gray-500 font-serif text-xs   cursor-pointer hover:text-gray-600 table">
                Pakistan
              </span>
              <span className="ml-2 text-gray-500 font-serif text-xs   cursor-pointer hover:text-gray-600 table">
                Sri Lanka
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-gray-200 text-lg">More from pShop</h2>
          <span className="text-gray-400 hover:text-gray-500 mt-4 cursor-pointer ">
            Sell fast
          </span>
          <br />
          <span className="text-gray-400  cursor-pointer hover:text-gray-500">
            Membership
          </span>
          <br />
          <span className="text-gray-400  cursor-pointer hover:text-gray-500">
            Banner Ads
          </span>
          <br />
          <span className="text-gray-400 cursor-pointer  hover:text-gray-500">
            Ad Promotions
          </span>
          <br />
          <span className="text-gray-400  cursor-pointer hover:text-gray-500">
            BikesGuide
          </span>
        </div>
        <div>
          <h2 className="text-gray-200 text-lg">More & Support</h2>
          <p className="text-gray-400 hover:text-gray-500 mt-4 cursor-pointer ">
            FAQ
          </p>
          <p className="text-gray-400  cursor-pointer hover:text-gray-500">
            Stay Safe
          </p>
          <p className="text-gray-400  cursor-pointer hover:text-gray-500">
            Contact Us
          </p>
        </div>
        <div>
          <h2 className="text-gray-200 text-lg">Follow More pShop</h2>
          <p className="text-gray-400 hover:text-gray-500 mt-4 cursor-pointer ">
            Blog
          </p>
          <p className="text-gray-400  cursor-pointer hover:text-gray-500">
            Facebook
          </p>
          <p className="text-gray-400  cursor-pointer hover:text-gray-500">
            Twitter
          </p>
          <p className="text-gray-400 cursor-pointer  hover:text-gray-500">
            Youtube
          </p>
        </div>
        <div>
          <h2 className="text-gray-200 text-lg">About pShop</h2>
          <p className="text-gray-400 hover:text-gray-500 mt-4 cursor-pointer ">
            About Us
          </p>
          <p className="text-gray-400  cursor-pointer hover:text-gray-500">
            Careers
          </p>
          <p className="text-gray-400  cursor-pointer hover:text-gray-500">
            Terms & Conditions
          </p>
          <p className="text-gray-400 cursor-pointer  hover:text-gray-500">
            Privacy policy
          </p>
          <p className="text-gray-400  cursor-pointer hover:text-gray-500">
            Sitemap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
