import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-800`}>
        <div className="bg-white p-[1.3rem]">
          <Link className="pr-4" href="/">
            Home
          </Link>
          <Link className="pr-4" href="/list">
            List
          </Link>
          <Link className="pr-4" href="/cart">
            Cart
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
// page.js를 감싸는 파일
// <head> 태크 내용들을 여기에 적는다.
// 페이지 간에 공유하고 싶은 내용들 ( 상단메뉴 .. 등등)
