import { CustomerInterface } from "../interfaces/Customer";

export const usersReview: CustomerInterface[] = [
  {
    location: "Warsaw, Poland",
    rate: 4.5,
  },
  {

    location: "Shanxi, China",
    rate: 4.5,
  },
  {
    location: "Seoul, South Korea",
    rate: 4.5,
  },
  {
    location: "Warsaw, Poland",
    rate: 4.5,
  },
  {
    location: "Shanxi, China",
    rate: 4.5,
  },
  {
    location: "Seoul, South Korea",
    rate: 4.5,
  },
];

import { FooterData } from "../interfaces/Links";


export const linksData: FooterData = {
  sections: [
    {
      title: "Product",
      links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
    },
    {
      title: "Engage",
      links: ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"],
    },
    {
      title: "Earn Money",
      links: ["Affiliate", "Become Partner"],
    },
  ],
};