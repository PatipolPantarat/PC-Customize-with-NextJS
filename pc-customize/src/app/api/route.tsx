import { log } from "console";

export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(
    !request
      ? "https://dummyjson.com/users?limit=5"
      : `https://dummyjson.com/users/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  log(data);

  return Response.json({ data });
}
