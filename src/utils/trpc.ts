import type { AppRouter } from "../pages/api/trpc/trpcRouter";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
