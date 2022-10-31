import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { prisma } from "../../db/client";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      await prisma.example.create({ data: input || "" });
      const examples = await prisma.example.findMany();
      console.log(examples);
      return {
        greeting: `Hello ${examples[0]?.text ?? "world"}`,
      };
    }),
});
