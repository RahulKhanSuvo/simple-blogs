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
      <nav className="container  text-center mx-auto py-4 flex justify-between">
        <div>
          <Link href={"/"}>
            <h2 className="font-bold md:text-lg  text-[#F13B3B]">BlogVault</h2>
          </Link>
        </div>
        <div className="space-x-1 md:space-x-0">
          <Link className="hover:bg-gray-200 md:px-3 py-1 rounded" href={"/"}>
            Home
          </Link>
          <Link
            className="hover:bg-gray-200 md:px-3 py-1 rounded"
            href={"/profile"}
          >
            Profile
          </Link>
        </div>
        <div>
          {isUserAuthenticated ? (
            <>
              <LogoutLink className="bg-[#F13B3B] text-white px-4 py-2 rounded shadow-[#f13b3ba8] shadow-md">
                Logout
              </LogoutLink>
            </>
          ) : (
            <div className="space-x-2 ">
              <LoginLink className=" md:px-2 px-1 py-1 rounded shadow-md shadow-[#ddddff] bg-[#ddddff] ">
                Login
              </LoginLink>
              <RegisterLink className=" px-1 md:px-2 py-1 rounded shadow-md shadow-[#37375e] bg-[#212138] text-white ">
                Sign up
              </RegisterLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
