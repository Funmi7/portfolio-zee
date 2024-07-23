import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@component/utils/Functions";
import { navItems } from "./TopNavigation";

type MobileSideMenuProps = {
  isOpen: boolean;
  handleToggleMenu: (bool: boolean) => void;
};
const MobileSideMenu: FC<MobileSideMenuProps> = ({
  isOpen,
  handleToggleMenu,
}) => {
  const routePath = usePathname();
  return (
    <div
      className={cn(
        "md:hidden fixed top-0 right-0 h-screen w-64 bg-white dark:bg-black-100 shadow-xl transform transition-transform z-10 py-4 px-8",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
      style={{ transitionDuration: "300ms" }}
    >
      <button
        className="flex items-center justify-center w-10 h-10 text-gray-500 focus:outline-none"
        onClick={() => handleToggleMenu(false)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav className="flex flex-col mt-4">
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
              onClick={() => handleToggleMenu(false)}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileSideMenu;
