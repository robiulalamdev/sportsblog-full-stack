import { createRouter } from "../createRouter";
import { categoryRouter } from "./category.router";
import { userRouter } from "./user.router";

export const appRouter = createRouter()
  .merge("users.", userRouter)
  .merge("categories.", categoryRouter);

export type AppRouter = typeof appRouter;
