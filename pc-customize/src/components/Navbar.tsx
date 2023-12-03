"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
  ];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginFunction = () => {
    setIsLoggedIn(true);
  };

  return (
    <header>
      <nav className="text-white font-bold bg-gray-800 flex justify-between px-10 w-full h-16 items-center">
        <Link href="/">Logo</Link>
        <div>
          {navigation.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mx-2"
            >
              {name}
            </Link>
          ))}
        </div>
        {isLoggedIn ? (
          <button
            className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            <Link href="/authentication">Login</Link>
          </button>
        )}
      </nav>
    </header>
  );
}
