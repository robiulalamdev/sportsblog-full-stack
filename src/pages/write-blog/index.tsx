import dynamic from "next/dynamic";
import React, { useState } from "react";

const WriteBlogForm = dynamic(
  () => import("@/components/write-blog/WriteBlogForm"),
  { ssr: false }
);

const WriteBlog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-white max-w-theme mx-auto px-theme mb-[100px]">
      <WriteBlogForm />
    </div>
  );
};

export default WriteBlog;
