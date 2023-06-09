"use client";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(montserrat.className, "bg-[#FAFAFA]")}>
        <div className="px-6 py-5">{children}</div>
      </body>
    </html>
  );
}
