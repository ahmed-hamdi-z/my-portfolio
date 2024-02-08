"use client";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";
import ThemeSwitch from "@/components/theme-switch";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "#about", icon: <HiUser /> },
  { name: "projects", path: "#projects", icon: <HiRectangleGroup /> },
  { name: "experience", path: "#experience", icon: <HiViewColumns /> },

  {
    name: "contact",
    path: "#contact",
    icon: <HiEnvelope />,
  },
  {
    name: "theme",
    path: "",
    icon: <ThemeSwitch />,
  },
];

import Link from "next/link";

const Header = () => {
  return (
    <nav
      className=" flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
    bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen  "
    >
      {/* inner */}
      <div
        className=" flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10
     px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 dark:bg-white/10 bg-zinc-300/10 backdrop-blur-sm text-3xl xl:text xl:rounded-full"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path && "text-zinc-700 dark:text-zinc-300/90"}
           relative flex items-center group hover:text-accent transition-all duration-300 `}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div
                className={"absolute pr-14 right-0 hidden xl:group-hover:flex"}
              >
                <div
                  className={
                    "relative flex bg-white dark:bg-zinc-700 text-primary items-center p-[6px] rounded-[3px]"
                  }
                >
                  <div
                    className={
                      "text-[12px] leading-none font-semibold capitalize"
                    }
                  >
                    {link.name}
                  </div>
                  {/*triangle*/}
                  <div
                    className={
                      "absolute -right-2 border-solid border-l-white dark:border-l-zinc-700 border-l-8 border-r-0 border-y-transparent border-y-[6px]"
                    }
                  ></div>
                </div>
              </div>
              {/* icons */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
