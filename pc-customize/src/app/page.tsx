import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <div className="flex flex-col items-center">
        <Link
          href="/dashboard"
          className="text-yellow-400 font-bold hover:scale-105 hover:underline hover:text-yellow-500"
        >
          Go to Dashboard
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Link
          href="/login"
          className="text-yellow-400 font-bold hover:scale-105 hover:underline hover:text-yellow-500"
        >
          Login
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Link
          href="/api/route.tsx"
          className="text-yellow-400 font-bold hover:scale-105 hover:underline hover:text-yellow-500"
        >
          Data
        </Link>
      </div>
    </>
  );
}
