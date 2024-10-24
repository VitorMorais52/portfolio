import Link from "next/link";
import Underline from "./Underline";
import Menu from "./Menu";
import { Logo } from "../icons/";

interface HeaderProps {
  currentPage: string;
  pagesName: string[];
}

const pagesName = ["home", "blog", "institutional", "ecommerce", "resume"];

const Header = ({ currentPage }: HeaderProps) => {
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
      <Menu pagesName={pagesName} />
    </header>
  );
};

export default Header;
