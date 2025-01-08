"use client";

import useSwitch from "@/app/hooks/useSwitch";
import CloseButton from "@/app/components/CloseButton";
import Register from "@/app/components/authform/Register";
import LogIn from "@/app/components/authform/LogIn";
import { useSignInContext } from "@/app/contexts/SignInContext";
import useStopScroll from "@/app/hooks/useStopScroll";

const SignIn = () => {
  const { isSignIn, handleSignInOff } = useSignInContext();
  const [isLogIn, handleLogInOn, handleLogInOff] = useSwitch();
  useStopScroll(isSignIn);

  return (
    <>
      {isSignIn && (
        <div className="fixed w-screen top-0 bottom-0 left-0 z-[100] bg-white text-neutral-900 p-4 pt-16 overflow-y-auto custom-screen">
          {isLogIn ? <LogIn handleLogInOff={handleLogInOff} /> : <Register handleLogInOn={handleLogInOn} />}
          <div className="absolute top-0 left-0 right-0 p-4 max-w-[1376px] mx-auto">
            <div className="ml-auto flex items-center justify-center w-8 h-8 lg:h-[2.0625rem]">
              <CloseButton className="text-black w-[1.7rem]" onClick={handleSignInOff} ariaLabel="signin window pop out" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
