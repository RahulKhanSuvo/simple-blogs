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
          <h2 className="font-bold hover:bg-gray-500 text-[#F13B3B]">
            BlogVault
          </h2>
        </div>
        <div className="">
          <Link className="hover:bg-gray-200 px-3 py-1 rounded" href={"/"}>
            Home
          </Link>
          <Link
            className="hover:bg-gray-200 px-3 py-1 rounded"
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
            <div className="space-x-2">
              <LoginLink className=" px-2 py-1 rounded shadow-md shadow-[#ddddff] bg-[#ddddff] ">
                Sign in
              </LoginLink>
              <RegisterLink className=" px-2 py-1 rounded shadow-md shadow-[#37375e] bg-[#212138] text-white ">
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
