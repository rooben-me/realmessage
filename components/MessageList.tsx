"use client";

import { useEffect } from "react";
import useSWR from "swr";
import fetcher from "@/utils/fetchMessages";
import MessageCard from "./MessageCard";
import { Message } from "@/types";
import { clientPusher } from "@/pusher-api";

type Props = {
  initialMessages: Message[];
};

const MessageList = ({ initialMessages }: Props) => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages.find((message) => message.id === data.id)) return;

      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    <div className="p-6">
      {(messages || initialMessages)?.map((message) => (
        <div key={message.id} className="py-4">
          <MessageCard message={message} />
        </div>
      ))}
    </div>
  );
};

export default MessageList;
