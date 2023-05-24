import Image from "next/image";
import React from "react";
import FoodImage from "#/assets/images/Hotdog.png";
import { Typography } from "antd";

const FoodItem = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full flex justify-between shadow-md px-6 py-4 rounded-lg border border-solid border-[#f7f6f4]">
        <div className="flex gap-4">
          <Image
            src={FoodImage}
            width={40}
            alt="Picture of the author"
            quality={100}
          />
          <div className="">
            <span className="font-medium text-xs text-[#A29EB6]">
              Combo lẩu
            </span>
            <p className="font-bold text-base">Lẩu thái hải sản</p>
          </div>
        </div>
        <span>30.000đ</span>
      </div>
      <div className="w-full flex justify-between shadow-md px-6 py-4 rounded-lg border border-solid border-[#f7f6f4]">
        <div className="flex gap-4">
          <Image
            src={FoodImage}
            width={40}
            alt="Picture of the author"
            quality={100}
          />
          <div className="">
            <span className="font-medium text-xs text-[#A29EB6]">
              Combo lẩu
            </span>
            <p className="font-bold text-base">Lẩu thái hải sản</p>
          </div>
        </div>
        <span>30.000đ</span>
      </div>
      <div className="w-full flex justify-between shadow-md px-6 py-4 rounded-lg border border-solid border-[#f7f6f4]">
        <div className="flex gap-4">
          <Image
            src={FoodImage}
            width={40}
            alt="Picture of the author"
            quality={100}
          />
          <div className="">
            <span className="font-medium text-xs text-[#A29EB6]">
              Combo lẩu
            </span>
            <p className="font-bold text-base">Lẩu thái hải sản</p>
          </div>
        </div>
        <span>30.000đ</span>
      </div>
      <div className="w-full flex justify-between shadow-md px-6 py-4 rounded-lg border border-solid border-[#f7f6f4]">
        <div className="flex gap-4">
          <Image
            src={FoodImage}
            width={40}
            alt="Picture of the author"
            quality={100}
          />
          <div className="">
            <span className="font-medium text-xs text-[#A29EB6]">
              Combo lẩu
            </span>
            <p className="font-bold text-base">Lẩu thái hải sản</p>
          </div>
        </div>
        <span>30.000đ</span>
      </div>
    </div>
  );
};

export default FoodItem;
