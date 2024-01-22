import z from "zod";

export const createBlogSchema = z.object({
  title: z
    .string({ required_error: "Title is Required" })
    .max(256, "Max title length is 356"),
  cover_image: z.string({
    required_error: "cover image is Required",
  }),
  content: z.string({ required_error: "content is Required" }),
  category: z.string({ required_error: "category is Required" }),
  publish: z.date({ required_error: "publish is Required" }),
  tags: z
    .array(z.string())
    .max(5, "you can add max 5 tags")
    .nullable()
    .optional(),
});

export type CreateBlogInput = z.TypeOf<typeof createBlogSchema>;

export const getSingleBlogSchema = z.object({
  categoryId: z.string(),
});
