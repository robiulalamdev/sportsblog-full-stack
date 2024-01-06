import WriteBlogForm from "@/components/write-blog/WriteBlogForm";
import React, { useState } from "react";

const WriteBlog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-white max-w-theme mx-auto px-theme">
      {isOpen ? "" : <WriteBlogForm />}
    </div>
  );
};

export default WriteBlog;
