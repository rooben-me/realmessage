"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";

const ChatInput = () => {
  const [input, setInput] = useState<string>("");

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");
  };

  return (
    <form className="relative" onSubmit={addMessage}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="w-full flex-1 rounded-full border border-gray-200/60 bg-grey-bg p-3 pl-5 text-base text-zinc-600 placeholder:text-zinc-400"
        placeholder="say something awesome..."
      />
      {!!input ? (
        <Button className="absolute top-2 right-2" type="submit">
          Send
        </Button>
      ) : null}
    </form>
  );
};

export default ChatInput;
