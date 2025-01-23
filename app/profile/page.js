"use client";

import React, { useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

function Profile() {
  const { isAuthenticated, user } = useKindeAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/api/auth/login?`);
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold">Hi {user?.family_name || "user"}</h1>
      <p className="text-gray-600">Welcome to your profile!</p>
    </div>
  );
}

export default Profile;
