import Header from "@/components/shared/Header/Header";
import MainLayout from "@/layout/MainLayout";
import dynamic from "next/dynamic";
import React, { ReactElement, useState } from "react";

const WriteBlogForm = dynamic(
  () => import("@/components/write-blog/WriteBlogForm"),
  { ssr: false }
);

const WriteBlog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Header className="bg-black" />
      <div className="min-h-screen bg-white max-w-theme mx-auto px-theme mb-[100px]">
        <WriteBlogForm />
      </div>
    </div>
  );
};

export default WriteBlog;

WriteBlog.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
