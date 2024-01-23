import Image from "next/image";
import Inventory from "../../../public/Images/inventory-1.png";
import Link from "next/link";
import Counter from "../Counter/Counter";

const Homes = () => {
  return (
    <div className=" text-white flex justify-between mt-[8%] ">
      <div className="basis-1/2 mt-4">
        <h2 className="text-5xl font-serif">
          Inventory & Stock <br /> Management Solution !
        </h2>
        <p className="font-serif my-4">
          Inventory system to control and manage proucts in the <br /> warehouse
          in real timeand integrated to make it easier to develop <br /> your
          business.
        </p>
        <Link href="/product">
          <p className="border-2 inline px-3 py-1 cursor-pointer transition-all delay-75 rounded-sm tracking-tight hover:tracking-wide hover:origin-top-right">
            Free Trail 1 Month
          </p>
        </Link>
        <div className="font-serif font-bold text-2xl mt-4">
          <div className="flex">
            <div className="flex mr-3">
              <Counter end={143} duration={3} />K
            </div>
            <div className="flex mr-3">
              <Counter end={352} duration={5} />K
            </div>
            <div className="flex mr-2">
              <Counter end={7052} duration={7} />K
            </div>
          </div>
        </div>
        <div>
          <p className="mt-2 ">Brand Owners Active Users Partners</p>
        </div>
      </div>
      <div className="basis-1/2 ">
        <Image draggable={false} src={Inventory} />
      </div>
    </div>
  );
};

export default Homes;
