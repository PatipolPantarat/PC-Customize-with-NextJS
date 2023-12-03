import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
