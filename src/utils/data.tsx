import { CustomerInterface } from "../interfaces/Customer";
import { Viezh, Yessica, Kim } from "./SVGS";

export const usersReview: CustomerInterface[] = [
  {
    customer: "Viezh Robert",
    location: "Warsaw, Poland",
    description:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    rate: 4.5,
    image: Viezh,
  },
  {
    customer: "Yessica Christy",
    location: "Shanxi, China",
    description:
      "I like it because I like to travel far and still can connect with high speed.",
    rate: 4.5,
    image: Yessica,
  },
  {
    customer: "Kim Young Jou",
    location: "Seoul, South Korea",
    description:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    rate: 4.5,
    image: Kim,
  },
  {
    customer: "Juan Carlos",
    location: "Warsaw, Poland",
    description:  "I've been using LaslesVPN for a while now, and I must say it's been a nice experience. The connection is reliable, and the speed is great.",
    rate: 4.5,
    image: Viezh,
  },
  {
    customer: "Martin Perez",
    location: "Shanxi, China",
    description: "I'm quite pleased with LaslesVPN's performance. The service is good, and I've found it to be a reliable solution for maintaining my online privacy while I travel. Streaming and browsing have been smooth.",
    rate: 4.5,
    image: Yessica,
  },
  {
    customer: "Pedro Guy",
    location: "Seoul, South Korea",
    description: "I've tried a few VPN services, but LaslesVPN stands out. The connection is better than others I've used, and the security features give me peace of mind.",
    rate: 4.5,
    image: Kim,
  },
];
