"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationPaths from "@/app/data/navigationPaths";

const TopNav = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden bg-neutral-50 lg:block">
      <ul className="flex flex-row flex-wrap gap-7 p-3 px-4 justify-center text-[0.813rem] font-semibold max-w-[1376px] mx-auto">
        {navigationPaths.slice(0, 14).map((path) => (
          <li key={path.key}>
            <Link href={path.to} className={`${pathname === path.to ? "text-accent" : "text-heading"}`}>
              {path.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
