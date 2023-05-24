"use client";
import { auth } from "#/firebase/firebase-config";
import useFetchLocalStorage from "#/hooks/useFetchLocalStorage";
import { LOGIN_ACCESS_TOKEN, setToken } from "#/utils/localStorage";
import { LeftOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Tabs, TabsProps, notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import FoodItem from "./FoodItem";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Combo lẩu",
    children: <FoodItem />,
  },
  {
    key: "2",
    label: "Mì trộn",
    children: <FoodItem />,
  },
];

const LoginPage = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <>
      <div className="flex items-center mb-6">
        <LeftOutlined />
        <h1 className="text-lg text-[#1C1243] font-bold mx-auto">Món ăn</h1>
        <Button
          type="primary"
          className="!bg-primary-color !w-11 h-11 rounded-xl"
          icon={<PlusOutlined style={{ fontSize: 18, marginBottom: 4 }} />}
        />
      </div>
      <Input
        size="large"
        placeholder="Nhập tên món cần tìm"
        className="mb-6"
        prefix={
          <SearchOutlined style={{ fontSize: "16px", color: "#A29EB6" }} />
        }
      />
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default LoginPage;
