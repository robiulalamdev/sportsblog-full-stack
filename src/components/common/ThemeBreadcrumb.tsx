import Link from "next/link";
import React from "react";

const ThemeBreadcrumb = ({ items }: any) => {
  return (
    <div className="flex items-center gap-x-2">
      {items?.length > 0 &&
        items.map((item: any, index: number) => (
          <div className="flex items-center gap-x-2" key={index}>
            {item?.isLink ? (
              <Link href={item.link} className="">
                <p
                  className={`font-roboto text-base text-black ${
                    item.isCurrent && "font-semibold"
                  }`}
                >
                  {item.title}
                </p>
              </Link>
            ) : (
              <p
                className={`font-roboto text-base text-black ${
                  item.isCurrent && "font-semibold"
                }`}
              >
                {item.title}
              </p>
            )}

            {index + 1 < items?.length && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 3L11 8L6 13" stroke="black" stroke-width="1.5" />
              </svg>
            )}
          </div>
        ))}
    </div>
  );
};

export default ThemeBreadcrumb;
