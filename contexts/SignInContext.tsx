"use client";

import { createContext } from "react";
import useSwitch from "@/hooks/useSwitch";

interface SignInContexType {
  isSignIn: boolean;
  handleSignInOn: () => void;
  handleSignInOff: () => void;
}

export const SignInContext = createContext<SignInContexType | null>(null);

const SignInContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isSignIn, handleSignInOn, handleSignInOff] = useSwitch();
  return <SignInContext.Provider value={{ isSignIn, handleSignInOn, handleSignInOff }}>{children}</SignInContext.Provider>;
};

export default SignInContextProvider;
