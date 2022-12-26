import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import { Message } from "@/types";

export default async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000/"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;

  return (
    <main className="h-full w-full">
      <MessageList initialMessages={messages} />
      <div className="sticky inset-x-0 bottom-0 mx-auto w-full max-w-5xl rounded-t-2xl border border-gray-200/60 bg-white p-6">
        <ChatInput />
      </div>
    </main>
  );
}
