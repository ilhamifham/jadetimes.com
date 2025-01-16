"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationPaths from "@/data/navigationPaths";

const SubNav = ({ item }: { item: number }) => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:block max-w-[1280px] mx-auto pt-3">
      <ul className="text-heading text-xs flex flex-row gap-4 items-center justify-center">
        {navigationPaths[item].submenus?.map((submenu) => (
          <li key={submenu.key}>
            <Link
              href={submenu.to}
              className={`block border-y-2 border-y-transparent duration-300 hover:border-b-heading ${
                pathname === submenu.to ? "border-b-heading" : "border-b-transparent"
              }`}
            >
              {submenu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
