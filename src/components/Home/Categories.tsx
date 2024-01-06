import { categories } from "@/lib/utils/cotegories";
import { Button } from "@material-tailwind/react";
import React from "react";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[19.5px] gap-y-[19.69px] max-w-theme mx-auto px-theme mt-[60.31px]">
      {categories.map((item: { id: number; name: string }, index: number) => (
        <Button
          className="h-[75px] shadow-none hover:shadow-none hover:bg-black hover:text-white bg-white font-medium font-inter text-[18px] leading-[21px] text-black border-[0.368px] border-black rounded-[0.736px]"
          key={index}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
