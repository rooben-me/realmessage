import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: "01c33e1f209afdf5bea1",
  secret: process.env.PUSHER_SECRET,
  cluster: "ap2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("01c33e1f209afdf5bea1", {
  cluster: "ap2",
  forceTLS: true,
});
