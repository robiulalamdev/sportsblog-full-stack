import { StaticImageData } from "next/dist/shared/lib/image-external";

export type IRecentBlogs = {
  id: number;
  title: string;
  cover_image: StaticImageData;
  author_img: StaticImageData;
  author_name: string;
  createdAt: string;
};

export type IPopularBlogs = {
  id: number;
  title: string;
  description: string;
  cover_image: StaticImageData;
  author_img: StaticImageData;
  author_name: string;
  createdAt: string;
  read_time: string;
};
