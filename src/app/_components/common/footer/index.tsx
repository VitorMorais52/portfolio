import FooterNavigation from "./FooterNavigation";

interface FooterProps {
  pagesName: string[];
}

const Footer = ({ pagesName }: FooterProps) => {
  return (
    <footer>
      <FooterNavigation pagesName={pagesName} />
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
  );
};

export default Footer;
