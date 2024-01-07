import AccountSidebar from "@/components/account/AccountSidebar";
import MyProfile from "@/components/account/accountTabContentArea/MyProfile";
import Security from "@/components/account/accountTabContentArea/Security";
import MainLayout from "@/layout/MainLayout";
import { Button } from "@material-tailwind/react";
import React, { ReactElement, useState } from "react";

const routes = [
  { id: 1, name: "Account Settings" },
  { id: 2, name: "My Profile" },
  { id: 3, name: "Security" },
];

const AccountPage = () => {
  const [tab, setTab] = useState(2);
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row md:items-start md:justify-between max-w-theme mx-auto px-theme">
      <div className="hidden md:block w-full max-w-[330px]">
        <AccountSidebar tab={tab} setTab={setTab} />
      </div>
      <div className="md:hidden h-10 flex items-center mt-5">
        <div className="flex items-center gap-x-[15px] md:gap-x-[43px]">
          {routes.map((item: any, index: number) => (
            <Button
              onClick={() => setTab(item.id)}
              className={`bg-transparent shadow-none  hover:shadow-none border-b-[3px] font-montserrat p-0 rounded-none uppercase text-xs md:text-sm font-bold leading-[16px] text-nowrap ${
                item.id === tab
                  ? "text-[#141A28] !border-[#FFA903] "
                  : "text-[#7E7F81] border-transparent"
              }`}
              placeholder=""
              key={index}
            >
              {item.name}{" "}
              {item?.total && (
                <span className="text-sm text-[#7E7F81] font-normal">
                  {item.total}
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>
      <div className="bg-white sm:px-[16px] md:px-[40px] pt-[15px] md:pt-[30px] flex-grow">
        {tab === 2 && <MyProfile />}
        {tab === 3 && <Security />}
      </div>
    </div>
  );
};

export default AccountPage;

AccountPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
