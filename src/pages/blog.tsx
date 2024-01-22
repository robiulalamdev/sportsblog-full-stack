import { CreateBlogInput } from "@/schema/blog.schema";
import { CreateCategoryInput } from "@/schema/category.schema";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const Blog = () => {
  const { handleSubmit, register } = useForm<CreateCategoryInput>();
  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["posts.create-category"], {
    onSuccess: ({ id }) => {
      console.log(id);
      //   router.push(`/categories/${id}`);
    },
  });

  function onSubmit(values: CreateCategoryInput) {
    mutate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && error.message}

      <h1>Create category</h1>

      <input type="text" placeholder="Your post title" {...register("name")} />

      <br />
      <button>Create Category</button>
    </form>
  );
};

export default Blog;
