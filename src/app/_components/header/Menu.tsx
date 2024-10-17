import { useRef } from "react";
import { Burguer } from "../icons/";

interface MenuProps {
  currentPage: string;
  pagesName: string[];
}

const Menu = ({ currentPage, pagesName }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonMenuRef = useRef<HTMLButtonElement>(null);

  const forBlackBG = "fixed 2xl:absolute ";
  const forNotBlackBG = "fixed pt-1 2xl:pt-16";

  const stylesByPage: Record<string, string> = {
    home: forBlackBG,
    blog: forBlackBG,
    resume: forNotBlackBG,
    institutional: forNotBlackBG,
    ecommerce: forNotBlackBG,
  };

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("translate-x-full");
      menuRef.current.classList.toggle("translate-x-0");

      menuRef.current.classList.toggle("opacity-0");
      menuRef.current.classList.toggle("opacity-100");
    }

    if (
      buttonMenuRef.current &&
      ["institutional", "ecommerce"].includes(currentPage)
    ) {
      buttonMenuRef.current.classList.toggle("translate-x-full");
      buttonMenuRef.current.classList.toggle("translate-x-0");

      buttonMenuRef.current.classList.toggle("opacity-0");
      buttonMenuRef.current.classList.toggle("opacity-100");
    }
  };

  return (
    <div id="menu-container">
      <button
        className="absolute top-0 right-0 transform translate-x-0 opacity-100 transition-all duration-500 ease-in-out"
        onClick={toggleMenu}
        ref={buttonMenuRef}
      >
        <Burguer />
      </button>
      <div
        ref={menuRef}
        id="menu"
        className={`${stylesByPage[currentPage]} flex flex-col w-[300px] h-[100vh] bg-black top-[-16px] right-[-16px] transform translate-x-full opacity-0 transition-all duration-500 ease-in-out`}
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

export default Menu;
