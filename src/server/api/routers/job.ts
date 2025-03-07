import { createTRPCRouter, publicProcedure } from "../trpc";

export const jobRouter = createTRPCRouter({
  getAllOpen: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.job.findMany({
      where: {
        open: true,
      },
    });
  }),
});
