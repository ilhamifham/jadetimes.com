"use client";

import { MouseEvent, useRef } from "react";
import Link from "next/link";
import useSwitch from "@/hooks/useSwitch";
import useKey from "@/hooks/useKey";
import useStopScroll from "@/hooks/useStopScroll";
import navigationPaths from "@/data/navigationPaths";
import mobileNavigationPaths from "@/data/mobileNavigationPaths";
import SignInButton from "@/components/SignInButton";
import LinkToMembership from "@/components/LinkToMembership";
import ChevronIcon from "@/components/ChevronIcon";
import CloseButton from "@/components/CloseButton";

const SideNav = () => {
  const [isNav, handleNavOn, handleNavOff] = useSwitch();
  const [key, handleKey] = useKey(null);
  const scrollTopRef = useRef<HTMLDivElement>(null);
  useStopScroll(isNav);

  function handleNavItem() {
    handleNavOff();
    handleKey(null);
    scrollTopRef.current?.scrollTo(0, 0);
  }

  function stopHandleNav(event: MouseEvent) {
    event.stopPropagation();
  }

  return (
    <>
      <button className="flex items-center text-white justify-center w-8 -order-1" onClick={handleNavOn}>
        <span className="sr-only">Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>
      <nav className={`bg-[#00000080] fixed h-full w-screen left-0 top-0 z-50 ${isNav ? "visible" : "invisible"}`} onClick={handleNavItem}>
        <div
          className={`bg-neutral-900 border-r border-r-neutral-700 text-white max-w-[20.5rem] duration-300 h-full overflow-y-auto relative flex flex-col p-4 lg:py-4 lg:px-9 ${
            isNav ? "-translate-x-0" : "-translate-x-full"
          }`}
          ref={scrollTopRef}
          onClick={stopHandleNav}
        >
          <SignInButton className="text-sm self-end my-[0.4rem] lg:hidden" />
          <LinkToMembership className="w-fit text-sm mb-3 mt-4 lg:hidden" onClick={handleNavItem} />
          <ul>
            <li>
              <Link
                href="#subscribe-to-newsletter"
                className="block w-fit font-semibold py-2 lg:text-[0.813rem] lg:font-normal lg:pt-[0.3rem] text-nowrap lg:mb-4"
                onClick={handleNavItem}
              >
                Subscribe to newsletters
              </Link>
            </li>
            {navigationPaths.map((path) => (
              <li className="lg:text-sm lg:border-b lg:border-b-neutral-800" key={path.key}>
                {path.submenus ? (
                  <div className="flex flex-row justify-between">
                    <Link href={path.to} onClick={handleNavItem} className="block py-2 w-3/4 flex-grow text-white">
                      {path.name}
                    </Link>
                    <button className="flex items-center justify-end w-1/4" onClick={() => handleKey(path.key)}>
                      <span className="sr-only">Dropdown</span>
                      <ChevronIcon rotate="90deg" className={`w-5 duration-300 ${key === path.key ? "flip-horizontal" : ""}`.trim()} />
                    </button>
                  </div>
                ) : (
                  <Link href={path.to} onClick={handleNavItem} className="block py-2 text-white">
                    {path.name}
                  </Link>
                )}
                {path.submenus && (
                  <ul
                    className={`w-full text-neutral-400 duration-300 grid ${
                      key === path.key ? "max-h-screen" : "invisible overflow-y-hidden max-h-0"
                    }`}
                  >
                    {path.submenus.map((submenu) => (
                      <li key={submenu.key}>
                        <Link href={submenu.to} onClick={handleNavItem} className="block pl-2 py-2">
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="text-sm border-b border-b-neutral-800 hidden lg:block">
              <Link href="/team" onClick={handleNavItem} className="block py-2 text-white">
                Team
              </Link>
            </li>
            <li className="text-sm border-b border-b-neutral-800 hidden lg:block">
              <Link href="/store" onClick={handleNavItem} className="block py-2 text-white">
                Jadetimes Store
              </Link>
            </li>
            <li className="text-sm border-b border-b-neutral-800 hidden lg:block">
              <Link href="/advertise-with-us" onClick={handleNavItem} className="block py-2 text-white">
                Get Published Online Articles
              </Link>
            </li>
            <li className="text-sm hidden lg:block">
              <Link href="/careers" onClick={handleNavItem} className="block py-2 text-white">
                Join Jadetimes Media
              </Link>
            </li>
          </ul>
          <ul className="border-t border-neutral-700 mt-3 py-4 lg:hidden">
            {mobileNavigationPaths.map((path) => (
              <li key={path.key}>
                <Link href={path.to} className="block w-fit py-2" onClick={handleNavItem}>
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-xs mt-auto lg:hidden">
            <div>&copy; 2024 Jadetimes Media LLC.</div>
            <div>All Rights Reserved</div>
          </div>
          <div className="absolute w-8 flex items-center justify-center left-[0.85rem] top-4 my-[0.17rem] lg:left-[unset] lg:right-[2.22rem]">
            <CloseButton className="w-[1.7rem]" onClick={handleNavItem} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
