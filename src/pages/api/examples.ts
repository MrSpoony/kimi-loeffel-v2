import type { NextApiRequest, NextApiResponse } from "next";

export default async function examples(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({example: "test"});
}