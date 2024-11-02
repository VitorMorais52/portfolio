export default function Blog() {
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center max-w-7xl xl:mx-auto mb-[72px]">
      <article className="flex flex-col items-center sm:flex-row w-full justify-between mt-[72px] bg-[#242323] rounded-[4px] p-4">
        <div className="w-full sm:w-[68%] xl:w-[84%]">
          <header>
            <p className="text-[14px] text-[#B0B0B0]">
              <time dateTime="2023-09-06">Sep 6, 2023</time>
              <span className="ml-4">5 min read</span>
            </p>
            <h2 className="text-[18px] mt-4 mb-2">About me</h2>
          </header>
          <p className="line-clamp-6 xs:line-clamp-none overflow-hidden text-ellipsis mb-4">
            Enthusiastic about technology and its continuous advancement, always
            learning more about the new features and tools that have been
            appearing, but also improving myself in what I already work on
          </p>
          <footer className="flex mb-[12px]">
            <p className="flex items-center">
              <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
              <span>John Doe</span>
            </p>
          </footer>
        </div>
        <div className="my-auto w-[14%] min-w-[180px] aspect-square bg-[#161616] rounded-[4px]" />
      </article>
      <section
        id="best-skills-sections"
        className="flex flex-col w-full items-center justify-center mt-8"
      >
        <h2 className="text-[24px] font-bold xl:mb-0 mt-4">Best Skills</h2>
        <div className="gap-4 md:gap-[2%] justify-center xl:justify-between flex float w-full flex-wrap items-center">
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-none overflow-hidden text-ellipsis mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]" />
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-none overflow-hidden text-ellipsis mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]" />
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-none overflow-hidden text-ellipsis mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]" />
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-none overflow-hidden text-ellipsis mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]" />
          </article>
        </div>
      </section>
      <section
        id="experiences-sections"
        className="flex flex-col w-full items-center justify-center mt-8"
      >
        <h2 className="text-[24px] font-bold mt-4">Experiences</h2>
        <div className="gap-4 md:gap-[2%] justify-center xl:justify-between flex float w-full flex-wrap items-center">
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-none overflow-hidden text-ellipsis mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]" />
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-none overflow-hidden text-ellipsis mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]" />
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-none overflow-hidden text-ellipsis mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]" />
          </article>
          <article className="flex flex-col items-center xs:flex-row w-full md:w-[49%] xl:max-w-[624px] justify-between mt-[2%] bg-[#242323] rounded-[4px] p-4">
            <div className="w-full xs:w-[77%]">
              <header>
                <p className="text-[14px] text-[#B0B0B0]">
                  <time dateTime="2023-09-06">Sep 6, 2023</time>
                  <span className="ml-4">5 min read</span>
                </p>
                <h2 className="text-[18px] mt-4 mb-2">About me</h2>
              </header>
              <p className="line-clamp-3 xs:line-clamp-none overflow-hidden text-ellipsis mb-4 mr-4">
                Enthusiastic about technology and its continuous advancement,
                always learning more...
              </p>
              <footer className="flex mb-[12px]">
                <p className="flex items-center">
                  <span className="mr-2 w-[32px] h-[32px] rounded-[100%] bg-[#D9D9D9]" />
                  <span>John Doe</span>
                </p>
              </footer>
            </div>
            <div className="my-auto w-[21%] min-w-[120px] aspect-square bg-[#161616] rounded-[4px]" />
          </article>
        </div>
      </section>
    </main>
  );
}
