import author from "../../assets/images/home/author.png";
import rb1 from "../../assets/images/home/rb1.png";
import rb2 from "../../assets/images/home/rb2.png";
import { IPopularBlogs, IRecentBlogs } from "../types/globals";

// popular images
import pb1 from "../../assets/images/home/pb1.png";
import pb2 from "../../assets/images/home/pb2.png";
import pb3 from "../../assets/images/home/pb3.png";
import pb4 from "../../assets/images/home/pb4.png";
import pb_author from "../../assets/images/home/pb_author.png";

export const recentBlogs: IRecentBlogs[] = [
  {
    id: 1,
    title: "Boeser says report of potential trade from Canucks",
    cover_image: rb1,
    author_img: author,
    author_name: "Gabie Sheber",
    createdAt: "May 22, 2020",
  },
  {
    id: 1,
    title: "Boeser says report of potential trade from Canucks",
    cover_image: rb2,
    author_img: author,
    author_name: "Gabie Sheber",
    createdAt: "May 22, 2020",
  },
  {
    id: 1,
    title: "Boeser says report of potential trade from Canucks",
    cover_image: rb2,
    author_img: author,
    author_name: "Gabie Sheber",
    createdAt: "May 22, 2020",
  },
  {
    id: 1,
    title: "Boeser says report of potential trade from Canucks",
    cover_image: rb2,
    author_img: author,
    author_name: "Gabie Sheber",
    createdAt: "May 22, 2020",
  },
  {
    id: 1,
    title: "Boeser says report of potential trade from Canucks",
    cover_image: rb2,
    author_img: author,
    author_name: "Gabie Sheber",
    createdAt: "May 22, 2020",
  },
  {
    id: 1,
    title: "Boeser says report of potential trade from Canucks",
    cover_image: rb2,
    author_img: author,
    author_name: "Gabie Sheber",
    createdAt: "May 22, 2020",
  },
];

export const popularBlogs: IPopularBlogs[] = [
  {
    id: 1,
    title: "The CNY MV, that UFM100.3 has invited Xuan Sports to be in!!!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    cover_image: pb1,
    author_img: pb_author,
    author_name: "john madrick",
    createdAt: "11 Jan 2023",
    read_time: "4 min read",
  },
  {
    id: 2,
    title: "Empowering Active Aging through Community Engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    cover_image: pb2,
    author_img: pb_author,
    author_name: "john madrick",
    createdAt: "11 Jan 2023",
    read_time: "4 min read",
  },
  {
    id: 3,
    title: "CONGRATULATIONS Team Siaw Lim Hood Sun Thong!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    cover_image: pb3,
    author_img: pb_author,
    author_name: "john madrick",
    createdAt: "11 Jan 2023",
    read_time: "6 min read",
  },
  {
    id: 4,
    title:
      "Xuan Sports little warriors-in-training, all beaming with excitement.....",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    cover_image: pb4,
    author_img: pb_author,
    author_name: "john madrick",
    createdAt: "11 Jan 2023",
    read_time: "10 min read",
  },
];
