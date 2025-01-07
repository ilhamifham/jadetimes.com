"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationPaths from "@/app/data/navigationPaths";

const SubNav = ({ item }: { item: number }) => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:block max-w-[1280px] mx-auto pt-3">
      <ul className="text-heading text-xs flex flex-row gap-4 items-center justify-center">
        {navigationPaths[item].submenus?.map((menu) => (
          <li key={menu.key}>
            <Link
              href={menu.to}
              className={`block border-y-2 border-y-transparent duration-300 hover:border-b-heading ${
                pathname === menu.to ? "border-b-heading" : "border-b-transparent"
              }`}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
