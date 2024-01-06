import { iSmClose } from "@/lib/utils/icons";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const WriteBlogForm = () => {
  const [tags, setTags] = useState([
    "Karate",
    "Kick Boxing",
    "Daido Juku Kudo",
  ]);
  const [newTag, setNewTag] = useState("");

  const handleRemoveTag = (index: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const handleAddTag = () => {
    if (newTag.trim() !== "") {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleInputChange = (e: any) => {
    setNewTag(e.target.value);
  };

  const handleInputKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleAddTag();
    }
  };
  return (
    <div>
      <form className="mt-[55px] max-w-[1029px] mx-auto">
        <div className="max-w-[600px] mx-auto">
          <input
            type="text"
            className="w-full h-fit font-montserrat text-[46px] font-extrabold placeholder:text-[#D9DBDF] text-black text-center border-none outline-none"
            placeholder="Title..."
          />

          <div className="w-full h-[84px] bg-[#F5F7F9] mt-[64px] border-dashed rounded-[7px] border-[2px] border-[#D9DBDF] flex justify-center items-center">
            <p className="text-sm text-[#7E7F81] leading-[14px]">
              Add Cover Image
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[40px] mt-[64px]">
          <div>
            <label
              className="text-[#141A28] text-[25px] font-semibold font-montserrat"
              htmlFor="tags"
            >
              Add tags for your article
            </label>
            <span className="text-base text-[#7E7F81] leading-[16px] block mt-2">
              Add or edit tags (up to 5){" "}
            </span>
            <input
              value={newTag}
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
              className="bg-[#F6F7F9] border-none rounded-[5px] outline-none w-full h-[80px] mt-4 px-4 text-base placeholder:text-[#7E7F81] text-black leading-[14px]"
              type="text"
              placeholder="Add new tag"
            />
            <div className="flex items-center flex-wrap gap-[6px] mt-2">
              {tags.map((tag: string, index: number) => (
                <Button
                  className="border-[2px] border-[#D9DBDF] rounded-[40px] w-fit min-h-[30px] bg-white shadow-none hover:shadow-none text-sm leading-[12px] text-[#7E7F81] flex items-center justify-between gap-2 px-2"
                  key={index}
                  placeholder=""
                >
                  <span>{tag}</span>
                  <div
                    onClick={() => handleRemoveTag(index)}
                    className="cursor-pointer"
                  >
                    {iSmClose}
                  </div>
                </Button>
              ))}
            </div>

            <div className="mt-[63px] flex items-center gap-[30px]">
              <Button
                className="bg-primary shadow-none hover:shadow-none w-[201px] h-[50px] rounded-[50px] text-sm font-bold text-black leading-[16px]"
                placeholder=""
              >
                PUBLISH now
              </Button>
              <Button
                className="bg-[#F3F3F3] shadow-none hover:shadow-none w-[201px] h-[50px] rounded-[50px] text-sm font-bold text-black leading-[16px]"
                placeholder=""
              >
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteBlogForm;
