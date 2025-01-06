import { createTRPCRouter, publicProcedure } from "../trpc";

export const jobRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const j = await ctx.db.job.findMany();

    return j;
  }),
});
