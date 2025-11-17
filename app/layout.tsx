import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Ajith Kumar | Web Developer with 9.5+ Years Experience in Angular, React & Next.js",
  description:
    "Senior Web Developer with 9.5+ years of experience building enterprise-grade web apps using Angular, React, and Next.js. Proficient in CMS integration, performance optimization, CI/CD, and Agile collaboration.",
  icons: [
    {
      rel: "icon",
      url: "/images/profile-image.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
