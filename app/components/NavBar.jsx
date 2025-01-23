import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";
import React from "react";
const NavBar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  return (
    <div className="bg-white">
      <nav className=" container  text-center mx-auto py-4 flex justify-between">
        <div>
          <h2 className="font-bold text-[#F13B3B]">BlogVault</h2>
        </div>
        <div className="space-x-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/profile"}>Profile</Link>
        </div>
        <div>
          {isUserAuthenticated ? (
            <>
              <LogoutLink className="bg-[#F13B3B] text-white px-4 py-2 rounded shadow-[#f13b3ba8] shadow-md">
                Logout
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink>Sign in</LoginLink>
              <RegisterLink>Sign up</RegisterLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
