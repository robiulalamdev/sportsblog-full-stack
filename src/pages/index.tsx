import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/Home/HomePage";
import MainLayout from "@/layout/MainLayout";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-[#3B3B3B] ${inter.className}`}>
      <HomePage />
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
