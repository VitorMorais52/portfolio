export default function Blog() {
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center justify-between max-w-7xl xl:mx-auto mb-[72px]">
      <article className="justify-between flex w-full mt-[72px] bg-[#242323] rounded-[4px] p-4">
        <div>
          <header>
            <p className="text-[14px] text-[#B0B0B0]">
              <time dateTime="2023-09-06">Sep 6, 2023</time>
              <span className="ml-4">5 min read</span>
            </p>
            <h2 className="text-[18px] mt-4 mb-2">About me</h2>
          </header>
          <p className="max-w-[700px] mb-4">
            Enthusiastic about technology and its continuous advancement, always
            learning more about the new features and tools that have been
            appearing, but also improving myself in what I already work on
          </p>
          <footer className="mb-[12px]">
            <p className="flex items-center">
              <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
              <span>John Doe</span>
            </p>
          </footer>
        </div>
        <div className="my-auto w-[180px] h-[180px] bg-[#161616] rounded-[4px]" />
      </article>
      <section
        id="best-skills-sections"
        className="flex flex-col w-full items-center justify-center mt-8"
      >
        <h2 className="text-[24px] font-bold mb-8 xl:mb-0">Best Skills</h2>
        <div className="gap-4 justify-center xl:justify-between flex float w-full flex-wrap items-center">
          <article className="w-full md:max-w-[354px] lg:max-w-[464px] xl:max-w-[624px] flex justify-between xl:mt-8 bg-[#242323] rounded-[4px] p-4">
            <div>
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="max-w-[494px] mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[140px] h-[140px] bg-[#161616] rounded-[4px]" />
          </article>
          <article className="w-full md:max-w-[354px] lg:max-w-[464px] xl:max-w-[624px] flex justify-between xl:mt-8 bg-[#242323] rounded-[4px] p-4">
            <div>
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="max-w-[494px] mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[140px] h-[140px] bg-[#161616] rounded-[4px]" />
          </article>
          <article className="w-full md:max-w-[354px] lg:max-w-[464px] xl:max-w-[624px] flex justify-between xl:mt-8 bg-[#242323] rounded-[4px] p-4 ">
            <div>
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="max-w-[494px] mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[140px] h-[140px] bg-[#161616] rounded-[4px]" />
          </article>
          <article className="w-full md:max-w-[354px] lg:max-w-[464px] xl:max-w-[624px] flex justify-between xl:mt-8 bg-[#242323] rounded-[4px] p-4 ">
            <div>
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="max-w-[494px] mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[140px] h-[140px] bg-[#161616] rounded-[4px]" />
          </article>
        </div>
      </section>
      <section
        id="experiences-sections"
        className="flex flex-col w-full items-center justify-center mt-8"
      >
        <h2 className="text-[24px] font-bold">Experiences</h2>
        <div className="justify-center xl:justify-between flex float gap-4 w-full flex-wrap items-center">
          <article className="w-full md:max-w-[354px] lg:max-w-[464px] xl:max-w-[624px] flex justify-between mt-8 bg-[#242323] rounded-[4px] p-4">
            <div>
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="max-w-[494px] mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[140px] h-[140px] bg-[#161616] rounded-[4px]" />
          </article>
          <article className="w-full md:max-w-[354px] lg:max-w-[464px] xl:max-w-[624px] flex justify-between mt-8 bg-[#242323] rounded-[4px] p-4">
            <div>
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="max-w-[494px] mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[140px] h-[140px] bg-[#161616] rounded-[4px]" />
          </article>
          <article className="w-full md:max-w-[354px] lg:max-w-[464px] xl:max-w-[624px] flex justify-between mt-8 bg-[#242323] rounded-[4px] p-4">
            <div>
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="max-w-[494px] mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[140px] h-[140px] bg-[#161616] rounded-[4px]" />
          </article>
          <article className="w-full md:max-w-[354px] lg:max-w-[464px] xl:max-w-[624px] flex justify-between mt-8 bg-[#242323] rounded-[4px] p-4">
            <div>
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="max-w-[494px] mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[140px] h-[140px] bg-[#161616] rounded-[4px]" />
          </article>
        </div>
      </section>
    </main>
  );
}
