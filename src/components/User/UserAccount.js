"use client";
import Image from "next/image";
import user from "../../../public/Images/user.jpg";
const UserAccount = ({ userImage }) => {
  return (
    <div>
      <Image
        width={10}
        height={10}
        alt="user"
        src={userImage ? userImage : user}
        className="w-9 h-9 rounded-full cursor-pointer mt-[-4px] border-2 border-gray-300"
      />
    </div>
  );
};

export default UserAccount;
