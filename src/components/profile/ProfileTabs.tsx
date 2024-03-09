import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import AddCategoryModal from "./AddCategoryModal";
import Link from "next/link";

const tabs = [
  { id: 1, name: "RECENT blog" },
  { id: 2, name: "All blog posts", total: 22 },
  { id: 3, name: "Archived" },
];
type ProfileTabsProps = {
  tab: number;
  setTab: (newTab: number) => void;
};

const ProfileTabs: React.FC<ProfileTabsProps> = ({ tab, setTab }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-6 max-h-fit min-h-[80px] h-full w-full max-w-theme px-theme mx-auto py-3">
        <div className="flex items-center gap-x-[8px] sm:gap-x-[15px] md:gap-x-[43px]">
          {tabs.map((item: any, index: number) => (
            <Button
              onClick={() => setTab(item.id)}
              className={`bg-transparent shadow-none  hover:shadow-none border-b-[3px] font-montserrat p-0 rounded-none uppercase text-xs md:text-sm font-bold leading-[16px] text-nowrap ${
                item.id === tab
                  ? "text-primary !border-[#FFA903] "
                  : "text-white border-transparent"
              }`}
              placeholder=""
              key={index}
            >
              {item.name}{" "}
              {item?.total && (
                <span className="text-sm text-white font-normal">
                  {item.total}
                </span>
              )}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-x-[22px]">
          <Button
            onClick={() => setOpen(true)}
            className="text-black bg-[#C9C9C9] hover:bg-primary rounded-[5px] py-[10px] md:py-[15px] px-[15px] md:px-[19px] shadow-none hover:shadow-none font-inter text-xs sm:text-[13px] font-bold normal-case"
            placeholder=""
          >
            Add Category
          </Button>
          <Link href="/write-blog">
            <Button
              className="text-black bg-primary rounded-[5px] py-[10px] md:py-[15px] px-[15px] md:px-[19px] shadow-none hover:shadow-none font-inter text-xs sm:text-[13px] font-bold normal-case"
              placeholder=""
            >
              Write Article
            </Button>
          </Link>
        </div>
      </div>
      <AddCategoryModal open={open} handleClose={handleClose} />
    </>
  );
};

export default ProfileTabs;
