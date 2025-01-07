"use client";

import { useSignInContext } from "@/app/contexts/SignInContext";

const SignInButton = ({ className }: { className: string }) => {
  const { handleSignInOn } = useSignInContext();
  return (
    <button className={`text-nowrap ${className}`} onClick={handleSignInOn} aria-label="signin window pop in">
      Sign In
    </button>
  );
};

export default SignInButton;
