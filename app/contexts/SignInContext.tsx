"use client";

import { createContext, useContext } from "react";
import useSwitch from "../../hooks/useSwitch";

interface SignInContexType {
  isSignIn: boolean;
  handleSignInOn: () => void;
  handleSignInOff: () => void;
}

const SignInContext = createContext<SignInContexType | null>(null);

export const SignInContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isSignIn, handleSignInOn, handleSignInOff] = useSwitch();
  return <SignInContext.Provider value={{ isSignIn, handleSignInOn, handleSignInOff }}>{children}</SignInContext.Provider>;
};

export const useSignInContext = () => {
  const context = useContext(SignInContext);
  if (!context) {
    throw new Error("useSignInContext must be used within a SignInContextProvider");
  }
  return context;
};
