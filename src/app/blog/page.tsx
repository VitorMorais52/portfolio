import Section from "../_components/pages/blog/Section";
import { IPosts } from "../_lib/interfaces/post";

export default async function Blog() {
  const data = await fetch("http://localhost:3000/api/posts");
  const posts: IPosts = await data.json();

  return (
    <main className="mx-4 flex min-h-screen flex-col items-center max-w-7xl xl:mx-auto mb-[72px]">
      {Object.entries(posts).map(([key, section]) => (
        <Section key={key} section={section} />
      ))}
    </main>
  );
}
