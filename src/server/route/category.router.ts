import {
  createCategorySchema,
  getSingleCategorySchema,
} from "../../schema/category.schema";
import * as trpc from "@trpc/server";
import { createRouter } from "../createRouter";

export const categoryRouter = createRouter()
  .mutation("create-category", {
    input: createCategorySchema,
    async resolve({ ctx, input }: any) {
      // if (!ctx.user) {
      //   new trpc.TRPCError({
      //     code: "FORBIDDEN",
      //     message: "Can not create a category while logged out",
      //   });
      // }

      const post = await ctx.prisma.category.create({
        data: {
          ...input,
        },
      });

      return post;
    },
  })
  .query("categories", {
    resolve({ ctx }: any) {
      return ctx.prisma.category.findMany();
    },
  })
  .query("single-category", {
    input: getSingleCategorySchema,
    resolve({ input, ctx }: any) {
      return ctx.prisma.category.findUnique({
        where: {
          id: input.categoryId,
        },
      });
    },
  });
