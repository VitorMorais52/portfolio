import { useRef } from "react";
import { Burguer } from "../icons";
import Link from "next/link";

interface MenuProps {
  pagesName: string[];
}

const Menu = ({ pagesName }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonMenuRef = useRef<HTMLButtonElement>(null);
  const overlayMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("translate-x-full");
      menuRef.current.classList.toggle("translate-x-0");

      menuRef.current.classList.toggle("opacity-0");
      menuRef.current.classList.toggle("opacity-100");
    }

    if (overlayMenuRef.current) {
      overlayMenuRef.current.classList.toggle("fixed");
      overlayMenuRef.current.classList.toggle("opacity-50");
      overlayMenuRef.current.classList.toggle("opacity-0");
      overlayMenuRef.current.classList.toggle("contrast-[0.95]");
    }

    if (buttonMenuRef.current) {
      buttonMenuRef.current.classList.toggle("translate-x-full");
      buttonMenuRef.current.classList.toggle("translate-x-0");

      buttonMenuRef.current.classList.toggle("opacity-0");
      buttonMenuRef.current.classList.toggle("opacity-100");
    }
  };

  return (
    <div id="menu-container" className="flex sm:hidden">
      <button
        className="w-fit absolute top-0 right-0 transform translate-x-0 opacity-100 transition-all duration-500 ease-in-out"
        onClick={toggleMenu}
        ref={buttonMenuRef}
      >
        <Burguer />
      </button>
      <div
        ref={overlayMenuRef}
        id="menu-overlay"
        onClick={toggleMenu}
        className="z-10 bg-black opacity-0 top-0 bottom-0 left-0 right-0 transition-all duration-500"
      />
      <div
        ref={menuRef}
        id="menu"
        className={`z-10 h-screen fixed pt-1 2xl:pt-16 flex flex-col w-[240px] sm:w-[300px] h-[100vh] bg-black top-0 right-[-16px] transform translate-x-full opacity-0 transition-all duration-500 ease-in-out`}
      >
        <button
          className="w-fit flex mt-[44px] sm:mt-[92px] 2xl:mt-0 ml-4"
          onClick={toggleMenu}
        >
          <Burguer />
        </button>
        <nav id="navigation" className="mt-8 ml-2">
          <ul className="flex flex-col gap-4">
            {pagesName.map((name) => (
              <li key={name} className="flex w-fit">
                <Link href={`\\${name}`} className="capitalize px-2">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
