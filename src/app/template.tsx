"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { Logo, Burguer } from "./_components/icons/";

type PageGuideType = {
  path: string;
  underlineSize: string;
};

interface PagesGuide {
  [key: string]: PageGuideType;
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-hidden mb-[60px]">
      <Header />
      {children}
      <footer>
        <p className="m-auto text-center">
          &copy; 2024 Morais Tech. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

const Header = () => {
  const pathname = usePathname();

  const currentPage = useMemo(() => {
    const regex = "/([^/]+)";
    const match = pathname.match(regex);
    return match ? match[1] : "home";
  }, [pathname]);

  const pagesGuide: PagesGuide = useMemo(
    () => ({
      home: { path: "/", underlineSize: "60px" },
      blog: { path: "/blog", underlineSize: "60px" },
      institutional: { path: "/institutional", underlineSize: "60px" },
      ecommerce: { path: "/ecommerce", underlineSize: "60px" },
      resume: { path: "/resume", underlineSize: "60px" },
    }),
    []
  );

  return (
    <header
      id="headbar"
      className="w-[1280px] flex items-center justify-between px-4 mx-auto mt-24 relative 2xl:mt-16"
    >
      <Link href={pagesGuide.home.path} className="absolute left-0">
        <Logo />
      </Link>
      <nav id="navbarContainer" className="mr-auto ml-auto relative">
        <ul className="flex">
          {Object.entries(pagesGuide).map(([name, pageInfo]) => (
            <li id={name} key={name} className="relative">
              <Link href={pageInfo.path} className="capitalize px-2">
                {name}
              </Link>
              {currentPage === name && <Underline />}
            </li>
          ))}
        </ul>
      </nav>
      <button className="absolute right-0">
        <Burguer />
      </button>
    </header>
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
