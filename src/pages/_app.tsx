import "@/styles/globals.css";
import "react-quill/dist/quill.snow.css";
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrpcProvider } from "@/utils/trpc-provider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ThemeProvider>
      <TrpcProvider>
        <Component {...pageProps} />
      </TrpcProvider>
    </ThemeProvider>
  );
}

export default MyApp;
