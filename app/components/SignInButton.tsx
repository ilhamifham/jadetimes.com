"use client";

import { useSignInContext } from "@/app/contexts/SignInContext";
import useStopScroll from "../hooks/useStopScroll";

const SignInButton = ({ className }: { className: string }) => {
  const { isSignIn, handleSignInOn } = useSignInContext();
  useStopScroll(isSignIn);
  return (
    <button className={`text-nowrap ${className}`} onClick={handleSignInOn} aria-label="signin window pop in">
      Sign In
    </button>
  );
};

export default SignInButton;
