import { categories } from "@/lib/utils/cotegories";
import { Button } from "@material-tailwind/react";
import React from "react";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-[19.5px] gap-y-[19.69px] max-w-theme mx-auto px-theme mt-[30px]">
      {categories.map((item: { id: number; name: string }, index: number) => (
        <Button
          placeholder=""
          className="h-[50px] shadow-none hover:shadow-none hover:bg-[#FFA903] hover:text-black bg-transparent font-medium font-inter text-[14px] leading-[21px] text-white border-[0.368px] border-[#F3F3F3] rounded-[45.68px] normal-case"
          key={index}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
