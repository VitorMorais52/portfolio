import {
  Bricks,
  Screen,
  Database,
  Git,
  Tools,
  Design,
  Message,
  Management,
  Styling,
} from "./_components/common/icons";
import Introducing from "./_components/pages/home/Introducing";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-7xl mx-auto mb-[72px]">
      <section id="introducing" className="flex flex-col px-4">
        <h1 className="mt-[86px] text-[24px]">I&apos;m a Software Engineer</h1>
        <Introducing />
      </section>

      <section id="hard-skills" className="w-full mt-[86px] px-4">
        <h2 className="text-center text-[18px]">What do I have to offer?</h2>
        <div className="mt-8 mb-8 w-full justify-items-start grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,auto))]">
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Bricks className="mr-2" /> I have the base stack
            </h3>
            <p className="font-extralight mt-1">HTML, CSS and JavaScript.</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Screen className="mr-2" /> The popular
            </h3>
            <p className="font-extralight mt-1">
              ReactJS, NextJS, VueJS and TypeScript.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Styling className="mr-2" /> For styling
            </h3>
            <p className="font-extralight mt-1">
              Styled-components, Sass and Bootstrap.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Database className="mr-2" /> I’ve already worked as Backend
              Developer using
            </h3>
            <p className="font-extralight mt-1">
              NodeJS, PHP and Laravel, MariaDB and Docker.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Git className="mr-2" /> For version control
            </h3>
            <p className="font-extralight mt-1">
              Git, GitLab, GitHub and Bitbucket.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Design className="mr-2" /> For layout design
            </h3>
            <p className="font-extralight mt-1">Figma and Adobe XD.</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Tools className="mr-2" /> The tools I&apos;m familiar with
            </h3>
            <p className="font-extralight mt-1">
              Google Tag Manager, Google Analytics and Atlassian resources.
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Message className="mr-2" />
              Communication platforms
            </h3>
            <p className="font-extralight mt-1">Teams, Slack and Discord.</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3 className="flex">
              <Management className="mr-2" />
              Favorite agile methodologies
            </h3>
            <p className="font-extralight mt-1">Scrum and Kanban.</p>
          </section>
        </div>
      </section>

      <section id="product-types" className="mt-[42px] px-4">
        <h2 className="text-center">What kind of products have I worked on?</h2>
        <p className="mt-2 font-extralight text-center">
          CRM, ERP, Institutional Pages, Landing Pages and a Realtime Chat.
        </p>
      </section>

      <section id="about-me" className="w-full mt-[86px] px-4">
        <h2 className="text-center">About me</h2>
        <p className="mt-2 font-extralight text-center">
          My name is João Morais, I’m a Brazilian Software Engineer and I’ve
          been working with development for over 4 years.
        </p>
        <p className="font-extralight text-center">
          I believe that a good work environment is based on good and clear
          communication. Technical skills alone are not enough.
        </p>
      </section>
    </main>
  );
}
