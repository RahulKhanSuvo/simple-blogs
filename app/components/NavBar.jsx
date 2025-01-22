import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Home</Link>
      </nav>
    </>
  );
};

export default NavBar;
