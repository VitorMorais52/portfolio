import Link from "next/link";

interface FooterNavigationProps {
  pagesName: string[];
}

const FooterNavigation = ({ pagesName }: FooterNavigationProps) => {
  return (
    <nav
      id="navigation"
      className="border-t-[1px] border-t-[#111111] mt-[84px] mb-[42px]"
    >
      <ul className="mt-4 w-full px-2 justify-center justify-items-center grid gap-6 grid-cols-[repeat(auto-fit,minmax(min-content,90px))] sm:flex w-fit mx-auto">
        {pagesName.map((name) => (
          <li key={name} className="flex w-fit">
            <Link href={`\\${name}`} className="capitalize px-2">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
