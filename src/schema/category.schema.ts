import z from "zod";

export const createCategorySchema = z.object({
  name: z
    .string({ required_error: "Category Name is Required" })
    .max(120, "Max title length is 120"),
});

export type CreateCategoryInput = z.TypeOf<typeof createCategorySchema>;

export const getSingleCategorySchema = z.object({
  categoryId: z.string(),
});
