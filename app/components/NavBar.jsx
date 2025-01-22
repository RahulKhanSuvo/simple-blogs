import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="container mx-auto space-x-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
      </nav>
    </>
  );
};

export default NavBar;
