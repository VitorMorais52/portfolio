import { posts } from "../_lib/services/posts";
import Section from "../_components/pages/blog/Section";

export default function Blog() {
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center max-w-7xl xl:mx-auto mb-[72px]">
      {Object.entries(posts).map(([key, section]) => (
        <Section key={key} section={section} />
      ))}
    </main>
  );
}
