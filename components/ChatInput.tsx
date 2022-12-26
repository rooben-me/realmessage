"use client";

import { FormEvent, useState, useCallback } from "react";
import Button from "./Button";
import { v4 as uuid } from "uuid";
import { Message } from "@/types";
import useSWR from "swr";
import fetcher from "@/utils/fetchMessages";

const ChatInput = () => {
  const [input, setInput] = useState<string>("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "ruban",
      email: "rubankumar.nkl@gmail.com",
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form className="relative" onSubmit={addMessage}>
      <input
        value={input}
        onChange={useCallback((e: any) => setInput(e.target.value), [input])}
        type="text"
        className="w-full flex-1 rounded-full border border-gray-200/60 bg-grey-bg p-3 pl-5 text-base text-zinc-600 placeholder:text-zinc-400"
        placeholder="say something awesome..."
      />
      {!!input ? (
        <Button
          disabled={!input}
          className="absolute top-2 right-2"
          type="submit"
        >
          Send
        </Button>
      ) : null}
    </form>
  );
};

export default ChatInput;
