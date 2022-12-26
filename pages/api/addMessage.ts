import { Message } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ body: "Method Not Allowed" });
  }

  const { message } = req.body;

  // Replace client date with server date
  const newMessage = {
    ...message,
    created_at: Date.now(),
  };

  // push to redis
  await redis.hset("messages", message.id, JSON.stringify(newMessage));

  res.status(200).json({ message: newMessage });
}
