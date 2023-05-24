import React from "react";
import Image from "next/image";
import LogoImage from "#/assets/images/logo.png";
import FoodImage from "#/assets/images/Hotdog.png";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[240px] bg-[#F7C83C] min-h-screen h-full flex flex-col p-4">
      <Link href="/">
        <Image
          src={LogoImage}
          width={100}
          alt="Picture of the author"
          className="mx-auto"
          quality={100}
        />
      </Link>
      <span className="text-black font-semibold text-lg">MENU</span>
      <div className="flex flex-col p-2">
        <Link href="/posts">
          <Image
            src={FoodImage}
            width={30}
            height={30}
            alt="Picture of the author"
            className="mx-auto"
            quality={100}
          />
        </Link>
        <Link href="/todos">Todo</Link>
      </div>
    </div>
  );
};

export default Sidebar;
