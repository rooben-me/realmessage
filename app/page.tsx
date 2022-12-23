import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";

export default function HomePage() {
  return (
    <main className="relative w-full">
      <MessageList />
      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-5xl rounded-t-2xl border border-gray-200/60 bg-white p-6">
        <ChatInput />
      </div>
    </main>
  );
}
