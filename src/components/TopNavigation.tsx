"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@component/utils/Functions";

const navItems = {
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
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 ">
        <nav
          className="flex flex-row justify-between items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div>LOGO</div>
          <div className="flex flex-row space-x-0 gap-8">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  //   className="transition-all text-neutral-500 hover:text-neutral-900 dark:text-white dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1"
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
      </div>
    </aside>
  );
};

export default TopNavigation;
