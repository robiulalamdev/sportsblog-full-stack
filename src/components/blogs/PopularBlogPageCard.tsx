import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularBlogPageCard = ({ blog }: any) => {
  return (
    <div className="bg-white h-fit">
      <div className="max-h-[300px] h-full overflow-hidden rounded-[5px]">
        <Image
          className="h-full min-h-[300px] w-full object-cover hover:scale-110 duration-700 rounded-[5px]"
          src={blog.cover_image}
          alt=""
        />
      </div>
      <div className="pt-[18px] pb-[22px]">
        <h1 className="text-black text-base font-semibold leading-[14px] font-roboto">
          {blog.read_time}
        </h1>
        <h1 className="text-[#141A28] text-[24px] font-bold leading-[33px] mt-[11.9px] font-roboto">
          {blog.title}
        </h1>
        <h1 className="text-black text-base leading-[18.33px] mt-[4.88px] font-roboto">
          {blog.description}
        </h1>
        <Link
          className="flex items-center gap-2 mt-6 text-black font-roboto text-base hover:text-primary"
          href="/popular/slug"
        >
          <p>Read more</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9603 11.1423C15.18 11.362 15.18 11.7181 14.9603 11.9378L9.22541 17.6727C9.00573 17.8923 8.64963 17.8923 8.42996 17.6727L8.16476 17.4075C7.94508 17.1878 7.94508 16.8317 8.16476 16.612L13.2367 11.5401L8.16476 6.46812C7.94508 6.24844 7.94508 5.89234 8.16476 5.67267L8.42996 5.40747C8.64963 5.18779 9.00573 5.18779 9.22541 5.40747L14.9603 11.1423Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PopularBlogPageCard;
