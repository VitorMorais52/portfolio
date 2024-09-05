"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useMemo } from "react";

import { Logo, Burguer } from "./_components/icons/";

type PageGuideType = {
  path: string;
  underlineSize: string;
};

interface PagesGuide {
  [key: string]: PageGuideType;
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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

  const currentPage = useMemo(() => {
    const regex = "/([^/]+)";
    const match = pathname.match(regex);
    return match ? match[1] : "home";
  }, [pathname]);

  const [currentItemPosition, setCurrentItemPosition] = useState<{
    x: number;
    width: number;
  }>({
    x: 0,
    width: 0,
  });

  const updatePosition = useCallback(() => {
    const el = document.getElementById(currentPage)?.getBoundingClientRect();
    const parent = document
      .getElementById("navbarContainer")
      ?.getBoundingClientRect();
    if (el && parent) {
      setCurrentItemPosition({ x: el.left - parent.left, width: el.width });
    }
  }, [currentPage]);

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [updatePosition]);

  return (
    <div className="overflow-x-hidden mb-[60px]">
      <Header pagesGuide={pagesGuide} underlinePosition={currentItemPosition} />
      {children}
    </div>
  );
}

type HeaderProps = {
  pagesGuide: PagesGuide;
  underlinePosition: { x: number; width: number };
};

const Header = ({ pagesGuide, underlinePosition }: HeaderProps) => (
  <header
    id="headbar"
    className="w-[1280px] flex items-center justify-between px-4 mx-auto mt-24 relative 2xl:mt-16"
  >
    <Link
      href={pagesGuide.home.path}
      className="absolute left-0 animate-rotateY-once"
    >
      <Logo />
    </Link>
    <nav id="navbarContainer" className="mr-auto ml-auto relative">
      <ul className="flex">
        {Object.entries(pagesGuide).map(([name, pageInfo]) => (
          <li id={name} key={name}>
            <Link href={pageInfo.path} className="capitalize px-2">
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Underline position={underlinePosition} />
    </nav>
    <button className="absolute right-0">
      <Burguer />
    </button>
  </header>
);

type UnderlineProps = {
  position: { x: number; width: number };
};

const Underline = ({ position }: UnderlineProps) => (
  <div
    id="navbarUndeline"
    className="bg-white h-0.5 mt-1 absolute transition-all duration-500"
    style={{
      left: `${position.x}px`,
      width: `${position.width}px`,
    }}
  />
);
