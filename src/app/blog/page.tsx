import { headers } from "next/headers";
import Section from "../_components/pages/blog/Section";
import { IPosts } from "../_lib/interfaces/post";
import RainBackground from "../_components/common/backgrounds/RainBackground";

export default async function Blog() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  const data = await fetch(`${protocol}://${host}/api/posts`);
  const posts: IPosts = await data.json();

  return (
    <>
      <RainBackground />
      <main className="relative z-10 mx-4 flex min-h-screen flex-col items-center max-w-7xl xl:mx-auto mb-[72px]">
        {Object.entries(posts).map(([key, section]) => (
          <Section key={key} section={section} />
        ))}
      </main>
    </>
  );
}
