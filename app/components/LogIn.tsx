"use client";

import FormButton from "@/app/components/FormButton";
import ResetPassword from "@/app/components/ResetPassword";
import useSwitch from "@/app/hooks/useSwitch";

const LogIn = ({ handleLogInOff }: { handleLogInOff: () => void }) => {
  const [isResetPassword, handleResetPasswordOn, handleResetPasswordOff] =
    useSwitch();

  return (
    <div className="max-w-[640px] md:w-[308px] mx-auto">
      {isResetPassword ? (
        <ResetPassword handleResetPasswordOff={handleResetPasswordOff} />
      ) : (
        <>
          <div className="font-medium text-heading text-center text-4xl">
            Log In
          </div>
          <div className="text-sm text-center my-4">
            New to this site ?{" "}
            <button
              className="underline font-medium text-heading"
              onClick={handleLogInOff}
            >
              Sign In
            </button>
          </div>
          <form className="flex flex-col gap-6">
            <input
              className="inputStyles"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              aria-label="email"
              required
              pattern="^.+@.+\.[a-zA-Z]{2,63}$"
              maxLength={250}
              autoFocus
            />
            <input
              className="inputStyles"
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              aria-label="password"
              required
            />
            <button
              className="underline w-fit text-sm"
              onClick={handleResetPasswordOn}
            >
              Forgot Password ?
            </button>
            <FormButton>Log In</FormButton>
          </form>
          <div className="flex items-center justify-center my-6">
            <span className="border-t border-neutral-300 w-full mr-4"></span>
            <span>or</span>
            <span className="border-t border-neutral-300 w-full ml-4"></span>
          </div>
          <div className="text-neutral-900 flex items-center justify-center gap-5">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-google w-6"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-facebook w-6"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default LogIn;
