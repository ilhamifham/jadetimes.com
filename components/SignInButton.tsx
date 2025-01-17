"use client";

import useSignInContext from "@/hooks/useSignInContext";
import useStopScroll from "@/hooks/useStopScroll";

const SignInButton = ({ className }: { className: string }) => {
  const { isSignIn, handleSignInOn } = useSignInContext();
  useStopScroll(isSignIn);
  return (
    <button className={`text-nowrap ${className}`} onClick={handleSignInOn}>
      Sign In
    </button>
  );
};

export default SignInButton;
