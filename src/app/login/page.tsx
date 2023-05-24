"use client";
import { auth } from "#/firebase/firebase-config";
import useFetchLocalStorage from "#/hooks/useFetchLocalStorage";
import { LOGIN_ACCESS_TOKEN, setToken } from "#/utils/localStorage";
import { Button, Form, Input, notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const { data } = useFetchLocalStorage({
    key: LOGIN_ACCESS_TOKEN,
  });

  useEffect(() => {
    if (data.length > 0) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [data, router]);

  const handleSignIn = async (values: any) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        values.username,
        values.password
      ).then((userCredential: any) => {
        // Signed in
        const user = userCredential.user.accessToken;
        setToken(user);
        router.push("/");
      });
    } catch (error) {
      console.log("It seems your password was wrong");
    }
  };

  return (
    <div>
      <div className="w-full max-w-[600px] flex flex-col justify-center items-center h-full min-h-screen bg-[#F7C83C]">
        <h1 className="font-bold text-4xl text-[#566C93] mb-14">ĐĂNG NHẬP</h1>
        <Form
          name="basic"
          style={{ width: 450 }}
          onFinish={handleSignIn}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="h-[50px]" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="h-[50px]" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#f05f5e] rounded-md w-full h-[50px] text-[22px]  shadow-config"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
