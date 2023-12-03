import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Dashboard Page</h1>
      <p>This is the dashboard page</p>
      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="text-yellow-400 font-bold hover:scale-105 hover:underline hover:text-yellow-500"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
