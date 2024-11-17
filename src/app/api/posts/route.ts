import { posts } from "src/app/_lib/data/posts";

export async function GET() {
  return Response.json(posts, { status: 200 });
}
