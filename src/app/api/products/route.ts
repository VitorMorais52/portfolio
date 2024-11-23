import { products } from "src/app/_lib/data/products";

export async function GET() {
  return Response.json(products, { status: 200 });
}
