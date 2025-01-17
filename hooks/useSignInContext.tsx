import { useContext } from "react";
import { SignInContext } from "@/contexts/SignInContext";

const useSignInContext = () => {
  const context = useContext(SignInContext);
  if (!context) {
    throw new Error("useSignInContext must be used within a SignInContextProvider");
  }
  return context;
};

export default useSignInContext;
