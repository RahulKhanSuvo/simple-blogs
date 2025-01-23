import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }
  return (
    <div className="text-center container md:mx-auto  bg-white mt-10">
      <div className="">
        <h3 className="text-lg">
          Hi{" "}
          <span className="text-[#F13B3B] font-bold ">
            {user.family_name || "user"}
          </span>
        </h3>
        <p>Welcome to your Profile</p>
      </div>
    </div>
  );
}
export default Profile;
