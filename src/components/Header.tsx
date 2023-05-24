import Image from "next/image";
import React from "react";
import LogoutIcon from "#/assets/svgs/signout-icon.svg";
import { auth } from "#/firebase/firebase-config";
import { signOut } from "firebase/auth";
import { clearToken } from "#/utils/localStorage";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        clearToken();
        router.push("/login");
      })
      .catch((error) => {});
  };
  return (
    <div className="w-full p-3 flex justify-end items-center h-10 bg-white drop-shadow-md gap-3">
      <span className="text-sm">Xin chào ông chủ</span>
      <Image
        src={LogoutIcon}
        width={20}
        height={20}
        alt="Picture of the author"
        quality={100}
        onClick={handleLogout}
      />
    </div>
  );
};

export default Header;
