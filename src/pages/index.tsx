import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/Home/HomePage";
import MainLayout from "@/layout/MainLayout";
import { ReactElement, useEffect, useMemo } from "react";
import { trpc } from "../utils/trpc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = trpc.getUsers.useQuery({ limit: 10, page: 1 });
  console.log(data);

  return (
    <main className={`bg-[#3B3B3B] ${inter.className}`}>
      <HomePage />
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
