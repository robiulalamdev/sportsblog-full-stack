import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { iClose, iDelete, iEdit } from "@/lib/utils/icons";

type AddCategoryModal = {
  open: boolean;
  handleClose: () => void;
};

type Category = {
  id: number;
  name: string;
};

const AddCategoryModal: React.FC<AddCategoryModal> = ({
  open,
  handleClose,
}) => {
  const [edit, setEdit] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  // State for input values
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [editedCategoryName, setEditedCategoryName] = useState<string>("");

  // Function to add a new category
  const addCategory = () => {
    if (newCategoryName) {
      const newCategory: Category = {
        id: categories.length + 1,
        name: newCategoryName,
      };
      setCategories((prevCategories) => [...prevCategories, newCategory]);
      setNewCategoryName("");
    }
  };

  // Function to delete a category
  const deleteCategory = (id: number) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== id)
    );
  };

  const editCategory = (index: number, updatedName: string) => {
    const updatedCategories = [...categories];
    updatedCategories[index].name = updatedName.trim();
    setCategories(updatedCategories);
  };

  return (
    <>
      <Dialog
        placeholder=""
        open={open}
        handler={() => handleClose()}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="bg-white"
      >
        <div className="relative bg-white max-w-[9203px] h-fit min-h-[437px]">
          <div
            onClick={() => handleClose()}
            className="absolute top-2 right-2 size-[38px] cursor-pointer"
          >
            {iClose}
          </div>

          <div className="pt-[80px] md:pt-[108px] px-[25px] md:px-[98px]">
            <div className="flex flex-col md:flex-row items-center gap-[20px]">
              <input
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                type="text"
                className="bg-[#F3F3F3] h-[60px] w-full border border-[#757575] rounded-[5px] px-3 outline-none"
              />
              <Button
                onClick={addCategory}
                className="bg-primary text-black text-[20px] font-semibold leading-[24px] h-[60px] w-full md:w-[199px] shadow-none hover:shadow-none rounded-[5px]"
                placeholder=""
              >
                ADD
              </Button>
            </div>
            <div className="mt-[35px] grid grid-cols-1 gap-y-[25px]">
              {categories.map((category, index: number) => (
                <div
                  key={index}
                  className="flex flex-col-reverse md:flex-row md:items-center gap-[20px]"
                >
                  <input
                    value={category.name}
                    onChange={(e) => editCategory(index, e.target.value)}
                    type="text"
                    disabled={edit === category.id ? false : true}
                    className="w-full h-[54px] border-[2px] border-[#D9DBDF] outline-none bg-white rounded-[5px] px-3"
                  />
                  <div className="flex items-center gap-[10px] w-[199px]">
                    {category.id === edit ? (
                      <Button
                        onClick={() => setEdit(0)}
                        className="bg-[#F3F3F3] text-black text-[20px] font-semibold leading-[24px] size-[54px] p-3 shadow-none hover:shadow-none rounded-[5px]"
                        placeholder=""
                      >
                        {iEdit}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setEdit(category.id)}
                        className="bg-[#F3F3F3] text-black text-[20px] font-semibold leading-[24px] size-[54px] p-3 shadow-none hover:shadow-none rounded-[5px]"
                        placeholder=""
                      >
                        {iEdit}
                      </Button>
                    )}
                    <Button
                      onClick={() => deleteCategory(category.id)}
                      className="bg-[#F3F3F3] text-black text-[20px] font-semibold leading-[24px] size-[54px] p-3 shadow-none hover:shadow-none rounded-[5px]"
                      placeholder=""
                    >
                      {iDelete}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddCategoryModal;
