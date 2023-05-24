import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import FoodImage from "#/assets/images/Hotdog.png";
import CostImage from "#/assets/images/cost-icon.png";

import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <LeftOutlined />
        <h1 className="text-lg text-[#1C1243] font-bold mx-auto">Trang chủ</h1>
      </div>
      <p className="text-lg text-[#1C1243] font-bold my-7">Chọn một cái</p>
      <div className="flex gap-2">
        <div className="w-[156px]  h-[210px] flex flex-col gap-2 justify-center items-center rounded-2xl border border-[#eae9eb] p-8 shadow-lg">
          <Image
            src={FoodImage}
            width={40}
            alt="Picture of the author"
            className="mx-auto"
            quality={100}
          />
          <span className="text-lg text-[#1C1243] font-bold">Món ăn</span>
          <p className="text-center text-[#A29EB6] text-xs font-medium">
            Danh sách các món ăn của quán
          </p>
        </div>
        <div className="w-[156px]  h-[210px] flex flex-col gap-2 justify-center items-center rounded-2xl border border-[#eae9eb] p-8 shadow-lg">
          <Image
            src={CostImage}
            width={40}
            alt="Picture of the author"
            className="mx-auto"
            quality={100}
          />
          <span className="text-lg text-[#1C1243] font-bold">Cost</span>
          <p className="text-center text-[#A29EB6] text-xs font-medium">
            Chi phí nguyên vật liệu trên từng món
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
