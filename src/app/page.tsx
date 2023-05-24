"use client";
import Header from "#/components/Header";
import { auth } from "#/firebase/firebase-config";
import useFetchLocalStorage from "#/hooks/useFetchLocalStorage";
import { LOGIN_ACCESS_TOKEN, setToken } from "#/utils/localStorage";
import { Button, Form, Input, notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Dashboard from "./dashboard/page";
import Sidebar from "#/components/Sidebar";
import LoginPage from "./login/page";

const Page = () => {
  const router = useRouter();
  const { data } = useFetchLocalStorage({
    key: LOGIN_ACCESS_TOKEN,
  });

  return (
    <div className="px-6 py-5">
      <Dashboard />
    </div>
  );
};

export default Page;
