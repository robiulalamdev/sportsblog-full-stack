/* eslint-disable react/no-unescaped-entities */
import ThemeBreadcrumb from "@/components/common/ThemeBreadcrumb";
import { iDot, iF, iLink, iLinkedin, iTwitter } from "@/lib/utils/icons";
import Image from "next/image";
import React, { ReactElement } from "react";
import author from "../../assets/images/home/pb_author.png";
import { Button } from "@material-tailwind/react";
import img1 from "../../assets/images/blog-details/img1.png";
import Link from "next/link";
import PopularBlogPageCard from "@/components/blogs/PopularBlogPageCard";
import { popularBlogs } from "@/lib/utils/globalData";
import { IPopularBlogs } from "@/lib/types/globals";
import MainLayout from "@/layout/MainLayout";

const BlogDetails = () => {
  return (
    <div className="max-w-theme mx-auto px-theme">
      <div className="max-w-[768px] mx-auto mt-12 md:mt-[112px] mb-[80px]">
        <ThemeBreadcrumb
          items={[
            { title: "Blog", isLink: true, link: "/blogs", isCurrent: false },
            {
              title: "Current Events",
              isLink: false,
              link: "/blogs",
              isCurrent: true,
            },
          ]}
        />
        <h1 className="text-[22px] md:text-[32px] lg:text-[48px] text-black font-bold font-roboto md:leading-[57.6px] mt-6">
          Blues must treat Qualifiers like playoffs, Allen says
        </h1>

        <div className="mt-[48px] flex justify-between items-center gap-8 flex-wrap">
          <div className="mt-[10.32px] flex items-center gap-[13.77px]">
            <Image
              className="size-[41.296px] rounded-full object-cover"
              src={author}
              alt=""
            />
            <div className="flex flex-col gap-[6px]">
              <p className="text-[#141A28] text-[14px] font-roboto font-semibold leading-[18.4px]">
                by Mike Fink
              </p>
              <div className="flex items-center gap-[6.99px] text-black text-[12.045px] leading-[18.4px] font-roboto">
                <p className="text-black text-sm leading-[18.4px] font-roboto">
                  11 Jan 2022
                </p>
                {iDot}
                <p className="text-black text-sm leading-[18.4px] font-roboto">
                  5 min read
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Button
              className="size-[32px] p-0 rounded-full shadow-none hover:shadow-none bg-[#F4F4F4] flex justify-center items-center text-black hover:bg-primary hover:text-white"
              placeholder=""
            >
              {iLink}
            </Button>
            <Button
              className="size-[32px] p-0 rounded-full shadow-none hover:shadow-none bg-[#F4F4F4] flex justify-center items-center text-black hover:bg-primary hover:text-white"
              placeholder=""
            >
              {iLinkedin}
            </Button>
            <Button
              className="size-[32px] p-0 rounded-full shadow-none hover:shadow-none bg-[#F4F4F4] flex justify-center items-center text-black hover:bg-primary hover:text-white"
              placeholder=""
            >
              {iTwitter}
            </Button>
            <Button
              className="size-[32px] p-0 rounded-full shadow-none hover:shadow-none bg-[#F4F4F4] flex justify-center items-center text-black hover:bg-primary hover:text-white"
              placeholder=""
            >
              {iF}
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-[80px]">
        <Image
          className="w-full max-h-[600px] object-contain rounded-[5px]"
          src={img1}
          alt=""
        />

        <div className="max-w-[768px] mx-auto mt-[30px] md:mt-[104px]">
          <h1 className="text-black font-bold text-[25px] md:text-[47px] leading-[48px]">
            Introduction
          </h1>
          <p className="text-justify text-base leading-[24px] text-black mt-6 font-roboto">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </p>
          <p className="text-justify text-base leading-[24px] text-black mt-6 font-roboto">
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </p>

          <Image
            className="w-full max-h-[400px] object-contain rounded-[5px] mt-[64px]"
            src={img1}
            alt=""
          />
          <div className="border-l border-black mt-4 pl-2 text-black text-sm leading-[21px] font-roboto">
            <p>Image caption goes here</p>
          </div>

          <p className="mt-[68px] font-roboto text-xl font-bold leading-[28px] text-black">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla.
          </p>
          <p className="mt-4 text-black text-base leading-[24px]">
            Collaboratively deploy intuitive partnerships whereas customized
            e-markets. Energistically maintain performance based strategic theme
            areas whereas just in time methodologies. Phosfluorescently drive
            functionalized intellectual capital and.
          </p>

          <div className="border-l-[2px] border-black pl-6 font-inter text-xl text-black mt-[36px]">
            <i>
              "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus."
            </i>
          </div>

          <p className="text-justify text-base leading-[24px] text-black mt-6 font-roboto">
            Tristique odio senectus nam posuere ornare leo metus, ultricies.
            Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
            Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
            suscipit accumsan. Cursus viverra aenean magna risus elementum
            faucibus molestie pellentesque. Arcu ultricies sed mauris
            vestibulum.
          </p>

          <h1 className="text-black font-bold text-[32px] leading-[48px] mt-[40px]">
            Conclusion
          </h1>
          <p className="text-justify text-base leading-[24px] text-black mt-5 font-roboto">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </p>
          <p className="text-justify text-base leading-[24px] text-black mt-4 font-roboto">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
            condimentum mi massa. In tincidunt pharetra consectetur sed duis
            facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
            dictum eget nibh tortor commodo cursus.
          </p>
          <p className="text-justify text-base leading-[24px] text-black mt-4 font-roboto">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
            aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
            morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
            dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
            tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
            gravida enim posuere cursus diam.
          </p>
        </div>

        <div className="mt-[80px] flex justify-between items-center gap-8 flex-wrap max-w-[768px] mx-auto mb-[48px]">
          <div>
            <h1 className="text-[18px] font-roboto font-semibold leading-[27px] text-black">
              Share this post
            </h1>
            <div className="flex items-center gap-x-2 mt-4">
              <Button
                className="size-[32px] p-0 rounded-full shadow-none hover:shadow-none bg-[#F4F4F4] flex justify-center items-center text-black hover:bg-primary hover:text-white"
                placeholder=""
              >
                {iLink}
              </Button>
              <Button
                className="size-[32px] p-0 rounded-full shadow-none hover:shadow-none bg-[#F4F4F4] flex justify-center items-center text-black hover:bg-primary hover:text-white"
                placeholder=""
              >
                {iLinkedin}
              </Button>
              <Button
                className="size-[32px] p-0 rounded-full shadow-none hover:shadow-none bg-[#F4F4F4] flex justify-center items-center text-black hover:bg-primary hover:text-white"
                placeholder=""
              >
                {iTwitter}
              </Button>
              <Button
                className="size-[32px] p-0 rounded-full shadow-none hover:shadow-none bg-[#F4F4F4] flex justify-center items-center text-black hover:bg-primary hover:text-white"
                placeholder=""
              >
                {iF}
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-2 flex-wrap">
            {["Mom", "Food", "Books", "WordPress"].map(
              (tag: string, index: number) => (
                <Link
                  href={`/blogs?tag=${tag.toLocaleLowerCase()}`}
                  key={index}
                >
                  <Button
                    className="px-[8px] py-[4px] bg-[#F4F4F4] text-black rounded shadow-none hover:shadow-none text-sm font-semibold leading-[21px]"
                    placeholder=""
                  >
                    {tag}
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-black w-full mb-5 max-w-[768px] mx-auto"></div>
      </section>

      <div className="mt-[30px] md:mt-[131px] pb-8">
        <div className="flex justify-between items-center mb-[34px]">
          <div>
            <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-bold text-black leading-[42px] font-roboto">
              Popular
            </h1>
            <p className="text-black text-[18px] font-roboto leading-[27px] mt-6 hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <Button
            placeholder=""
            className="hover:shadow-primary hover:bg-primary hover:border-white hover:text-white border border-black text-black bg-white font-inter text-sm md:text-base leading-[24px] px-6 py-1 md:py-3 rounded-[5px]"
          >
            View all
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[16px] md:gap-x-[32px] gap-y-[40px] md:gap-y-[80px] mx-auto">
          {popularBlogs.map((item: IPopularBlogs, index: number) => (
            <PopularBlogPageCard key={index} blog={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

BlogDetails.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
