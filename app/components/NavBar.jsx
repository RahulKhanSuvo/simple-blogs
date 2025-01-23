"use client";
import Link from "next/link";
import React from "react";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeAuth,
} from "@kinde-oss/kinde-auth-nextjs";
const NavBar = () => {
  const { isAuthenticated, user } = useKindeAuth();
  return (
    <>
      <nav className="container text-center mx-auto space-x-3 flex justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
        {isAuthenticated ? (
          <>
            <LogoutLink>Log out</LogoutLink>
          </>
        ) : (
          <>
            <LoginLink>Sign In</LoginLink>
            <RegisterLink>Sign Up</RegisterLink>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
