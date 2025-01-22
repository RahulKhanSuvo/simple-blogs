import Link from "next/link";
import React from "react";
import AuthLinks from "./AuthLinks";

const NavBar = () => {
  return (
    <>
      <nav className="container text-center mx-auto space-x-3 flex justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
        <AuthLinks></AuthLinks>
      </nav>
    </>
  );
};

export default NavBar;
