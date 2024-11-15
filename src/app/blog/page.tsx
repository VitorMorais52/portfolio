import { posts } from "../_lib/services/posts";
import Post from "../_components/pages/blog/post";

export default function Blog() {
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center max-w-7xl xl:mx-auto mb-[72px]">
      {posts.highlighted.map((post) => (
        <Post key={post.title} post={post} />
      ))}
      <section
        id="best-skills-sections"
        className="flex flex-col w-full items-center justify-center mt-8"
      >
        <h2 className="text-[24px] font-bold xl:mb-0 mt-4">Best Skills</h2>
        <div className="gap-4 md:gap-[2%] justify-center md:justify-between flex float w-full flex-wrap items-center">
          {posts.bestSkills.map((post) => (
            <Post key={post.title} post={post} />
          ))}
        </div>
      </section>
      <section
        id="experiences-sections"
        className="flex flex-col w-full items-center justify-center mt-8"
      >
        <h2 className="text-[24px] font-bold mt-4">Experiences</h2>
        <div className="gap-4 md:gap-[2%] justify-center md:justify-between flex float w-full flex-wrap items-center">
          {posts.experiences.map((post) => (
            <Post key={post.title} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
