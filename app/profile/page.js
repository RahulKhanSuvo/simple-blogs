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
    <div className="text-center">
      <h3>Hi {user.family_name || "use"}</h3>
      <p>Welcome to your Profile</p>
    </div>
  );
}
export default Profile;
