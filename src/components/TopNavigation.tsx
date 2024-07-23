"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@component/utils/Functions";
import MobileSideMenu from "./MobileSideMenu";

export const navItems = {
  "/": {
    name: "Home",
  },
  "/projects": {
    name: "Projects",
  },
  "/skills": {
    name: "Skills",
  },
  "/growth": {
    name: "Growth",
  },
  "/contact-details": {
    name: "Contact Me",
  },
};

const TopNavigation = () => {
  const routePath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = (bool: boolean) => setIsOpen(bool);

  return (
    <div className="lg:sticky lg:top-0 bg-white dark:bg-black-100  py-4 z-10">
      <nav
        className="hidden md:flex flex-row justify-between max-w-7xl mx-auto my-0 items-center relative  px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div>LOGO</div>
        <div className="flex flex-row space-x-0 gap-8">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={cn(
                  "transition-all text-neutral-500 hover:text-neutral-900 dark:text-white dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1",
                  path === routePath
                    ? "text-purple dark:text-purple"
                    : "transparent"
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
      <nav className="md:hidden flex w-full justify-between">
        <div>LOGO</div>
        <div>
          <button
            className="flex items-center justify-center w-10 h-10 text-gray-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>
      <MobileSideMenu isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
    </div>
  );
};

export default TopNavigation;
