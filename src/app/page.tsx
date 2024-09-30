export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-7xl mx-auto mb-[72px]">
      <section className="flex flex-col">
        <h1 className="mt-[86px] text-[24px]">I&apos;m a Frontend Developer</h1>
        <span className="font-extralight text-[14px] text-center">
          Who are you?
        </span>
      </section>

      <section className="w-full mt-[86px]">
        <h2 className="text-center text-[18px]">What do I have to offer?</h2>
        <div className="mt-[42px] mx-8 mb-8 w-full justify-items-start grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <section className="flex flex-col w-fit">
            <h3>I have the base stack</h3>
            <p className="font-extralight">HTML, CSS and JavaScript</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3>The popular</h3>
            <p className="font-extralight">
              ReactJS, NextJS, VueJS, TypeScript
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3>I’ve already worked as Backend Developer using</h3>
            <p className="font-extralight">
              NodeJS, PHP and Laravel, MariaDB and Docker
            </p>
          </section>
          <section className="flex flex-col w-fit">
            <h3>For version control</h3>
            <p className="font-extralight">Git, GitLab, GitHub and Bitbucket</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3>The tools I&apos;m familiar with</h3>
            <p className="font-extralight">NodeJS, PHP and Laravel, MariaDB</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3>For layout design</h3>
            <p className="font-extralight">Figma and Adobe XD</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3>Communication platforms </h3>
            <p className="font-extralight">Teams, Slack and Discord</p>
          </section>
          <section className="flex flex-col w-fit">
            <h3>Favorite agile methodologies</h3>
            <p className="font-extralight">Scrum and Kanban</p>
          </section>
        </div>
      </section>

      <section className="my-[42px]">
        <h2 className="text-center">What products have I worked on?</h2>
        <p className="mt-2 font-extralight text-center">
          CRM, ERP, Institutional Pages, Landing Pages and a Realtime Chat
        </p>
      </section>

      <section>
        <h2 className="text-center">About me</h2>
        <p className="mt-2 font-extralight text-center">
          My name is João Morais, I’m a Brazilian Developer and I’ve been
          working with development for over 4 years.
        </p>
        <p className="font-extralight text-center">
          I believe that a good work environment is based on good and clear
          communication. Technical skills alone are not enough.
        </p>
        <p className="font-extralight text-center">
          I like to be responsible with my work and I think that consistency is
          more important than intensity.
        </p>
        <p className="font-extralight text-center">
          Don&apos;t tell me what you want, tell me what you&apos;ve been doing.
        </p>
      </section>
    </main>
  );
}
