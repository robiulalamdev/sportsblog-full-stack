import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/Home/HomePage";
import MainLayout from "@/layout/MainLayout";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <HomePage />
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
