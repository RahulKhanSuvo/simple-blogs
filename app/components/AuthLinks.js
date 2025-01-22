"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function AuthLinks() {
  return (
    <div className="flex space-x-4">
      <LoginLink>
        <button>Sign In</button>
      </LoginLink>
      <RegisterLink>
        <button>Sign Up</button>
      </RegisterLink>
    </div>
  );
}
