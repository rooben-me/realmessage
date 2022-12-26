import { Message } from "@/types";
import { fromNow } from "@/utils/date";

type Props = {
  message: Message;
};

const MessageCard = ({ message }: Props) => {
  const isUser = false;

  const { username, created_at, message: messageText } = message;

  const messageSentTime = new Date(created_at);

  return (
    <div className={`flex w-fit flex-col ${isUser && "ml-auto"}`}>
      <span className="mb-2 flex items-center text-sm text-gray-600">
        <p className="inline-block max-w-[4rem] truncate">{username}</p>
        &nbsp;-&nbsp;
        <span>{fromNow(messageSentTime)}</span>
      </span>
      <div
        className={`rounded-xl py-3.5 px-3.5 ${
          isUser
            ? "rounded-tr-none bg-electricViolet-600 text-white"
            : "rounded-tl-none border border-gray-200/60 bg-white text-zinc-800"
        }`}
      >
        <p className="text-base">{messageText}</p>
      </div>
    </div>
  );
};

export default MessageCard;
