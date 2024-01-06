import { iArchive, iDelete, iDot, iEdit, iElipsisV } from "@/lib/utils/icons";
import {
  Button,
  IconButton,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const ProfileRecentBlogCard = ({ blog }: any) => {
  return (
    <div>
      <div className="max-h-[231px] h-full overflow-hidden rounded-[10px] relative">
        <Image
          className="h-full w-full object-cover hover:scale-110 duration-700 rounded-[10px]"
          src={blog.cover_image}
          alt=""
        />
        <div className="absolute top-[18px] right-[15px]">
          <Popover placement="bottom-end">
            <PopoverHandler>
              <IconButton
                size="sm"
                className="bg-transparent p-0 shadow-none hover:shadow-none"
                placeholder=""
              >
                {iElipsisV}
              </IconButton>
            </PopoverHandler>
            <PopoverContent
              className="bg-white px-[9px] min-w-[200px] py-[13px]"
              placeholder=""
            >
              <Button
                className="flex items-center gap-x-[8.29px] bg-white p-0 h-10 text-[#141A28] w-full hover:text-primary shadow-none hover:shadow-none"
                placeholder=""
              >
                <div className="size-[25px]">{iEdit}</div>{" "}
                <span className="text-[14px]">Edit</span>
              </Button>
              <Button
                className="flex items-center gap-x-[8.29px] bg-white p-0 h-10 text-[#141A28] w-full hover:text-primary shadow-none hover:shadow-none"
                placeholder=""
              >
                <div className="size-[25px]">{iArchive}</div>{" "}
                <span className="text-[14px]">Archive</span>
              </Button>
              <Button
                className="flex items-center gap-x-[8.29px] bg-white p-0 h-10 text-[#141A28] w-full hover:text-primary shadow-none hover:shadow-none"
                placeholder=""
              >
                <div className="size-[25px]">{iDelete}</div>{" "}
                <span className="text-[14px]">Delete</span>
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <h1 className="text-[#141A28] text-[18px] font-bold leading-[25px] mt-[16px] font-montserrat">
        {blog.title}
      </h1>
      <div className="mt-[12px] flex items-center gap-2">
        <p className="text-[#141A28] text-sm leading-[22.4px]">
          by {blog.author_name}
        </p>
        {iDot}
        <p className="text-[#7E7F81] text-sm leading-[22.4px]">
          {blog.createdAt}
        </p>
      </div>
    </div>
  );
};

export default ProfileRecentBlogCard;
