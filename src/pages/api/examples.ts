import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.example.create({
    data: {
      text: req.query["q"] as string,
    },
  });
  const examples = await prisma.example.findMany();
  res.status(200).json(examples);
};

export default examples;
