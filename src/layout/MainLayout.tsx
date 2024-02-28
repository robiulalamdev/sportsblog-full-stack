import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div className="h-full w-full">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
