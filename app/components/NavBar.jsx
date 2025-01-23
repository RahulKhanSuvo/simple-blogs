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
    <>
      <nav className="container text-center mx-auto space-x-3 flex justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
        {isUserAuthenticated ? (
          <>
            <LogoutLink>Logout</LogoutLink>
          </>
        ) : (
          <>
            <LoginLink>Sign in </LoginLink>
            <RegisterLink>Sign up</RegisterLink>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
