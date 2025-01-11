"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo/logo-black.png";
import { useSignInContext } from "@/app/contexts/SignInContext";
import FormButton from "@/app/components/FormButton";

const Register = ({ handleLogInOn }: { handleLogInOn: () => void }) => {
  const [isChecked, setIsChecked] = useState(true);
  const { handleSignInOff } = useSignInContext();

  return (
    <div className="max-w-[640px] mx-auto">
      <Image src={Logo} width={256} height={53} alt="jadetimes logo" className="mx-auto" priority />
      <div className="font-semibold text-xl text-heading mt-8 text-center md:text-4xl">Register for a Jadetimes Account</div>
      <p className="text-sm text-center mt-2">You must be 18 or over to register for a Jadetimes account</p>
      <form>
        <div className="md:grid md:grid-cols-2 md:gap-6 mt-4">
          <input className="inputStyles" type="text" name="firstname" placeholder="First name" autoComplete="off" aria-label="first name" autoFocus />
          <input className="inputStyles" type="text" name="lastname" placeholder="Last name" autoComplete="off" aria-label="last name" />
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
          />
          <input className="inputStyles" type="password" name="password" placeholder="Password" autoComplete="off" aria-label="password" required />
        </div>
        <div className="my-6 flex">
          <div className="mr-2 relative w-6 h-6 flex items-center justify-center">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="appearance-none w-6 h-6 border-2 border-neutral-300 absolute cursor-pointer duration-300 focus-visible:outline-none focus:border-neutral-900 lg:hover:border-neutral-900"
              checked={isChecked}
              onChange={() => setIsChecked((prevChecked) => !prevChecked)}
            />
            {isChecked && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
            )}
          </div>
          <label htmlFor="checkbox">Join the community</label>
        </div>
        <p className="text-sm">
          By clicking Register, you accept our{" "}
          <Link href="/terms-and-conditions" className="underline" onClick={handleSignInOff}>
            Terms
          </Link>{" "}
          of use. Find out about our{" "}
          <Link href="/privacy-policy" className="underline" onClick={handleSignInOff}>
            Privacy
          </Link>{" "}
          and{" "}
          <Link href="/cookies-policy" className="underline" onClick={handleSignInOff}>
            Cookies
          </Link>{" "}
          Policy
        </p>
        <FormButton className="mt-6">Register</FormButton>
      </form>
      <div className="text-sm text-center mt-6">
        Already have a Jadetimes Account ?{" "}
        <button className="underline font-medium text-heading" onClick={handleLogInOn}>
          Log In
        </button>
      </div>
      <Link href="/terms-and-conditions" className="underline text-xs block w-fit mx-auto mt-2" onClick={handleSignInOff}>
        Find out more about Jadetimes accounts
      </Link>
    </div>
  );
};

export default Register;
