/* eslint-disable @next/next/no-img-element */
import { categories } from "@/lib/utils/cotegories";
import { iArrowDownSm, iSmClose } from "@/lib/utils/icons";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];

const WriteBlogForm = () => {
  const [tags, setTags] = useState([
    "Karate",
    "Kick Boxing",
    "Daido Juku Kudo",
  ]);
  const [newTag, setNewTag] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [coverImg, setCoverImg] = useState(null);

  const cateRef = useRef<any>();
  const coverImageRef = useRef<any>();

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
          <textarea
            className="w-full min-h-[100px] h-fit font-montserrat text-[35px] md:text-[46px] font-extrabold placeholder:text-[#D9DBDF] text-black text-center border-none outline-none"
            placeholder="Title..."
          ></textarea>

          <div className="mt-[64px]">
            {coverImg && (
              <img
                className="max-h-[688px] w-full object-contain rounded-[5px] mb-5"
                src={URL.createObjectURL(coverImg)}
                alt=""
              />
            )}
            <div
              onClick={() => coverImageRef.current.click()}
              className="w-full h-[84px] bg-[#F5F7F9]  border-dashed rounded-[7px] border-[2px] border-[#D9DBDF] flex justify-center items-center cursor-pointer"
            >
              <p className="text-sm text-[#7E7F81] leading-[14px]">
                Add Cover Image
              </p>
            </div>
            <input
              onChange={(e: any) => setCoverImg(e.target.files[0])}
              ref={coverImageRef}
              type="file"
              accept=".png, .jpg, .jpeg"
              multiple={false}
              className="hidden"
            />
          </div>
        </div>
        <div className="mt-[64px]">
          <ReactQuill
            theme="snow"
            style={{ minHeight: "400px" }}
            value={content}
            placeholder="Write here...."
            onChange={(newContent) => setContent(newContent)}
            modules={modules}
            formats={formats}
            className="placeholder:text-[#D9DBDF] text-xl"
          />
        </div>
        <div className="grid grid-cols-1 gap-[40px] mt-[64px]">
          <div>
            <label
              className="text-[#141A28] text-[18px] md:text-[25px] font-semibold font-montserrat"
              htmlFor="tags"
            >
              Select a category
            </label>
            <Popover placement="bottom-end">
              <PopoverHandler ref={cateRef}>
                <Button
                  placeholder=""
                  className={`bg-[#F6F7F9] border-none rounded-[5px] outline-none w-full h-[60px] md:h-[80px] mt-4 px-4 text-base text-black leading-[14px] shadow-none hover:shadow-none text-left normal-case font-normal flex justify-between items-center`}
                >
                  {category ? (
                    <span className="flex-grow">{category}</span>
                  ) : (
                    <span className="text-[#7E7F81] flex-grow">
                      Select a category
                    </span>
                  )}
                  {iArrowDownSm}
                </Button>
              </PopoverHandler>
              <PopoverContent
                className="grid grid-cols-1 max-w-[460px] max-h-[454px] overflow-y-auto w-full p-0 shadow-none !bg-white rounded-[5px] shadow-[rgba(0, 0, 0, 0.15)] shadow border-none"
                placeholder=""
              >
                {categories.map(
                  (cate: { id: number; name: string }, index: number) => (
                    <Button
                      onClick={() => {
                        setCategory(cate.name);
                        cateRef.current.click();
                      }}
                      key={index}
                      placeholder=""
                      className="h-[46px] bg-white text-[#141A28] hover:!bg-[#F5F7F9] rounded-none shadow-none border-none normal-case text-left outline-none pl-[24px] pr-3 hover:shadow-none"
                    >
                      {cate.name}
                    </Button>
                  )
                )}
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label
              className="text-[#141A28] text-[18px] md:text-[25px] font-semibold font-montserrat"
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
              className="bg-[#F6F7F9] border-none rounded-[5px] outline-none w-full h-[60px] md:h-[80px] mt-4 px-4 text-base placeholder:text-[#7E7F81] text-black leading-[14px]"
              type="text"
              placeholder="Add new tag"
            />
            <div className="flex items-center flex-wrap gap-[6px] mt-2">
              {tags.map((tag: string, index: number) => (
                <Button
                  className="border-[2px] border-[#D9DBDF] rounded-[40px] w-fit min-h-[20px] sm:min-h-[30px] bg-white shadow-none hover:shadow-none 
                  text-xs sm:text-sm leading-[12px] text-[#7E7F81] flex items-center justify-between gap-2 px-2"
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
          </div>
          <div className="mt-[63px] flex items-center gap-4 md:gap-[30px]">
            <Button
              className="bg-primary shadow-none hover:shadow-none w-[201px] h-[50px] rounded-[50px] text-xs md:text-sm font-bold text-black leading-[16px]"
              placeholder=""
            >
              PUBLISH now
            </Button>
            <Button
              className="bg-[#F3F3F3] shadow-none hover:shadow-none w-[201px] h-[50px] rounded-[50px] text-xs md:text-sm font-bold text-black leading-[16px]"
              placeholder=""
            >
              Schedule
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteBlogForm;
