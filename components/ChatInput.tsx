import React from "react";
import Button from "./Button";

const ChatInput = () => {
  return (
    <form>
      <input
        type="text"
        className="w-full flex-1 rounded-full border border-gray-200/60 bg-grey-bg p-3 pl-5 text-base text-zinc-600 placeholder:text-zinc-400"
        placeholder="say something awesome..."
      />
    </form>
  );
};

export default ChatInput;
