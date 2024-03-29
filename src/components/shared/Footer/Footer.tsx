import { iFooterBg } from "@/lib/utils/icons";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const { pathname } = useRouter();
  return (
    <>
      {!pathname.includes("/account") && (
        <div className="min-h-[370px] bg-black flex flex-col justify-between items-center ">
          <div></div>
          <div className="flex justify-center items-center">
            <div className="relative flex justify-center items-end w-full">
              {iFooterBg}
              <form className="absolute flex items-center justify-between h-[48px] max-w-[279px] mx-auto bg-white rounded-[46px] mt-5">
                <input
                  className="flex-grow w-full h-full rounded-l-[46px] text-base leading-[14px] placeholder:text-[#7E7F81] text-black outline-none border-none px-3"
                  type="email"
                  placeholder="Your email"
                  required
                />
                <Button
                  placeholder=""
                  className="bg-primary text-white rounded-[46px] w-[96px] h-[48px]"
                >
                  SEND
                </Button>
              </form>
            </div>
          </div>

          <div className="pb-[38px] flex flex-col gap-8 md:flex-row md:justify-between items-center w-full max-w-theme px-theme">
            <div className="uppercase flex items-center gap-x-[16px] md:gap-x-[28px]">
              <p className="text-[#7E7F81] font-semibold text-[10px] md:text-xs leading-[14px]">
                ABOUT
              </p>
              <p className="text-[#7E7F81] font-semibold text-[10px] md:text-xs leading-[14px]">
                CONTACT US
              </p>
              <p className="text-[#7E7F81] font-semibold text-[10px] md:text-xs leading-[14px]">
                help
              </p>
              <p className="text-[#7E7F81] font-semibold text-[10px] md:text-xs leading-[14px]">
                legal
              </p>
              <p className="text-[#7E7F81] font-semibold text-[10px] md:text-xs leading-[14px]">
                store
              </p>
            </div>
            <div>
              <svg
                width="108"
                height="26"
                viewBox="0 0 108 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101.5 0H88.5C84.9253 0 82 2.92532 82 6.5V19.5006C82 23.0744 84.9253 26.0006 88.5 26.0006H101.5C105.075 26.0006 108 23.0744 108 19.5006V6.5C108 2.92532 105.075 0 101.5 0ZM105.833 19.5006C105.833 21.8894 103.89 23.8339 101.5 23.8339H88.5C86.1109 23.8339 84.1668 21.8894 84.1668 19.5006V6.5C84.1668 4.11062 86.1109 2.16677 88.5 2.16677H101.5C103.89 2.16677 105.833 4.11062 105.833 6.5V19.5006Z"
                  fill="#7E7F81"
                />
                <path
                  d="M101.215 15.4444H99.0094V24.3749H95.7413C95.7413 24.3749 95.7413 19.4953 95.7413 15.4444H94.1877V12.288H95.7413V10.2464C95.7413 8.78427 96.3528 6.49951 99.0394 6.49951L101.461 6.51006V9.57397C101.461 9.57397 99.9895 9.57397 99.7034 9.57397C99.4172 9.57397 99.0104 9.73651 99.0104 10.4338V12.2886H101.5L101.215 15.4444Z"
                  fill="#7E7F81"
                />
                <path
                  d="M60.5 0H47.5C43.9253 0 41 2.92532 41 6.5V19.5006C41 23.0744 43.9253 26.0006 47.5 26.0006H60.5C64.0747 26.0006 67 23.0744 67 19.5006V6.5C67 2.92532 64.0747 0 60.5 0ZM64.8332 19.5006C64.8332 21.8894 62.8901 23.8339 60.5 23.8339H47.5C45.1109 23.8339 43.1668 21.8894 43.1668 19.5006V6.5C43.1668 4.11062 45.1109 2.16677 47.5 2.16677H60.5C62.8901 2.16677 64.8332 4.11062 64.8332 6.5V19.5006Z"
                  fill="#7E7F81"
                />
                <path
                  d="M61.0522 8.90345C60.9951 8.92088 60.9375 8.93744 60.8796 8.95311C60.6829 9.00631 60.5397 8.76027 60.68 8.6102C60.8273 8.45275 60.9571 8.27848 61.0661 8.09069C61.1684 7.91472 60.9883 7.71 60.8058 7.79518C60.427 7.97172 60.026 8.10788 59.608 8.19906C59.5404 8.21378 59.4707 8.1904 59.4214 8.14112C57.5026 6.22528 54.1719 7.87536 54.5744 10.5859C54.594 10.7179 54.4848 10.8325 54.3542 10.8217C52.1914 10.6417 50.2688 9.61409 48.9172 8.07035C48.8191 7.95832 48.6398 7.98562 48.5792 8.12248C48.1233 9.15473 48.3167 10.3694 49.0716 11.2081C49.2121 11.3641 49.0639 11.6105 48.8648 11.5494C48.6711 11.49 48.4862 11.4108 48.3126 11.3141V11.3505C48.3126 12.4368 48.915 13.3828 49.8031 13.8706C49.9831 13.9695 49.9523 14.2811 49.6482 14.2586C49.4937 14.2473 49.3811 14.4092 49.4476 14.5518C49.8256 15.3623 50.57 15.9671 51.4671 16.1511C51.6484 16.1883 51.6922 16.4311 51.5356 16.5314C50.6387 17.1059 49.6217 17.4075 48.5952 17.436C48.3825 17.4418 48.3187 17.7341 48.5097 17.8298C49.603 18.3774 50.8351 18.6873 52.1394 18.6873C57.4044 18.6873 60.2822 14.313 60.2822 10.5188C60.2822 10.4312 60.2814 10.3436 60.2789 10.2563C60.2771 10.1878 60.3079 10.1235 60.362 10.0828C60.69 9.83593 60.9916 9.55337 61.2606 9.24212C61.3959 9.08555 61.2482 8.84361 61.0522 8.90345Z"
                  fill="#7E7F81"
                />
                <path
                  d="M19.5 0H6.5C2.92532 0 0 2.92532 0 6.5V19.5006C0 23.0744 2.92532 26.0006 6.5 26.0006H19.5C23.0747 26.0006 26 23.0744 26 19.5006V6.5C26 2.92532 23.0747 0 19.5 0ZM23.8332 19.5006C23.8332 21.8894 21.8901 23.8339 19.5 23.8339H6.5C4.11093 23.8339 2.16677 21.8894 2.16677 19.5006V6.5C2.16677 4.11062 4.11093 2.16677 6.5 2.16677H19.5C21.8901 2.16677 23.8332 4.11062 23.8332 6.5V19.5006Z"
                  fill="#7E7F81"
                />
                <path
                  d="M13.0002 6.49951C9.40963 6.49951 6.50024 9.40921 6.50024 12.9995C6.50024 16.5885 9.40963 19.5001 13.0002 19.5001C16.5898 19.5001 19.5002 16.5885 19.5002 12.9995C19.5002 9.40921 16.5898 6.49951 13.0002 6.49951ZM13.0002 17.3334C10.6072 17.3334 8.66702 15.3931 8.66702 12.9995C8.66702 10.6059 10.6072 8.66628 13.0002 8.66628C15.3932 8.66628 17.3335 10.6059 17.3335 12.9995C17.3335 15.3931 15.3932 17.3334 13.0002 17.3334Z"
                  fill="#7E7F81"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#7E7F81] font-semibold text-xs leading-[14px]">
                © 2020 Sportsblog.com A GoBlog Site
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
