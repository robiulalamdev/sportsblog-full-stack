import { createUserSchema, filterQuery } from "./userSchema";
import { createUserHandler, getUsersHandler } from "./userController";
import { t } from "./trpc";

const userRouter = t.router({
  createUser: t.procedure
    .input(createUserSchema)
    .mutation(({ input }) => createUserHandler({ input })),
  getUsers: t.procedure
    .input(filterQuery)
    .query(({ input }) => getUsersHandler({ filterQuery: input })),
});

export default userRouter;
