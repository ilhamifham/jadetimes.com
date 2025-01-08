import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-white.png";
import LinkToHome from "@/app/components/LinkToHome";
import LinkToMembership from "@/app/components/LinkToMembership";
import TodayDate from "@/app/components/header/TodayDate";
import SearchIcon from "@/app/components/SearchIcon";
import SignInButton from "@/app/components/SignInButton";
import SideNav from "@/app/components/header/SideNav";
import TopNav from "@/app/components/header/TopNav";

const Header = () => {
  return (
    <header className="bg-neutral-900 text-white sticky top-0 z-40">
      <div className="p-4 flex flex-row items-center justify-between max-w-[1376px] mx-auto">
        <div className="relative max-w-[1280px] flex flex-row items-center gap-4 justify-between flex-1 px-4">
          <LinkToHome className="block w-44 absolute left-1/2 -translate-x-1/2">
            <Image src={Logo} width={176} height={37} alt="jadetimes" priority />
          </LinkToHome>
          <div className="hidden lg:flex flex-row gap-4 items-center">
            <LinkToMembership className="font-semibold text-[0.625rem]" />
            <TodayDate className="text-xs" />
          </div>
          <SignInButton className="hidden lg:block text-xs" />
        </div>
        <SideNav />
        <Link href="/search" className="flex items-center justify-center w-8" aria-label="search in jadetimes.com">
          <SearchIcon className="w-[1.45rem]" />
        </Link>
      </div>
      <TopNav />
    </header>
  );
};

export default Header;
