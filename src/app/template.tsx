"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useRef } from "react";

import { Logo, Burguer } from "./_components/icons/";

const pagesName = ["home", "blog", "institutional", "ecommerce", "resume"];

const Header = () => {
  const pathname = usePathname();

  const currentPage = useMemo(() => {
    const regex = "/([^/]+)";
    const match = pathname.match(regex);
    return match ? match[1] : "home";
  }, [pathname]);

  return (
    <header
      id="headbar"
      className="xl:w-[1280px] xl:mx-auto mx-4 flex items-center justify-between px-4 mt-12 sm:mt-24 relative 2xl:mt-16"
    >
      <Link href="\" className="absolute left-0">
        <Logo />
      </Link>
      <nav
        id="navbarContainer"
        className="mt-4 sm:mt-0 mr-auto ml-auto relative"
      >
        <ul className="hidden sm:flex">
          {pagesName.map((name) => (
            <li id={name} key={name} className="relative">
              <Link href={`\\${name}`} className="capitalize px-2">
                {name}
              </Link>
              {currentPage === name && <Underline />}
            </li>
          ))}
        </ul>
      </nav>
      <Menu />
    </header>
  );
};

const Menu = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("translate-x-full");
      menuRef.current.classList.toggle("translate-x-0");

      menuRef.current.classList.toggle("opacity-0");
      menuRef.current.classList.toggle("opacity-100");
    }
  };

  return (
    <div id="menu-container">
      <button className="absolute top-0 right-0" onClick={toggleMenu}>
        <Burguer />
      </button>
      <div
        ref={menuRef}
        id="menu"
        className="fixed 2xl:absolute flex flex-col w-[300px] h-[100vh] bg-black top-[-16px] right-[-16px] transform translate-x-full opacity-0 transition-all duration-500 ease-in-out"
      >
        <button
          className="flex mt-16 sm:mt-28 2xl:mt-4 ml-4"
          onClick={toggleMenu}
        >
          <Burguer />
        </button>
        <nav id="navigation" className="mt-8 ml-4">
          <ul className="flex flex-col gap-4">
            {pagesName.map((name) => (
              <li key={name} className="flex w-fit">
                <a>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Underline = () => (
  <div
    id="navbarUndeline"
    className="bg-white h-0.5 mt-1 absolute transition-all duration-500"
    style={{
      width: `100%`,
    }}
  />
);

const Navigation = () => {
  return (
    <nav
      id="navigation"
      className="border-t-[1px] border-t-[#111111] mt-[84px] mb-[42px]"
    >
      <ul className="mt-4 w-full px-2 justify-center justify-items-center grid gap-6 grid-cols-[repeat(auto-fit,minmax(min-content,90px))] sm:flex w-fit mx-auto">
        {pagesName.map((name) => (
          <li key={name} className="flex w-fit">
            <a>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-hidden mb-8">
      <Header />
      {children}
      <footer>
        <Navigation />
        <section
          id="rights-reserved"
          className="sm:w-fit sm:flex sm:mx-auto sm:gap-4"
        >
          <p className="m-auto text-center sm:m-0 sm:w-fit">
            &copy; 2024 Morais Tech.
          </p>{" "}
          <p className="m-auto text-center sm:m-0 sm:w-fit">
            All rights reserved.
          </p>
        </section>
      </footer>
    </div>
  );
}
