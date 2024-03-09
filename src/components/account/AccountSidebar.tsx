import { Button } from "@material-tailwind/react";
import React from "react";

const routes = [
  { id: 1, name: "Account Settings" },
  { id: 2, name: "My Profile" },
  { id: 3, name: "Security" },
];
type AccountSidebarProps = {
  tab: number;
  setTab: (newTab: number) => void;
};

const AccountSidebar: React.FC<AccountSidebarProps> = ({ tab, setTab }) => {
  return (
    <div className="bg-[#2D2D2D] max-w-[330px] w-full min-h-screen flex justify-center items-start rounded-r-[32px] border-b-[1px] border-r-[1px] border-white">
      <div className="grid grid-cols-1 gap-y-[28px] max-w-[228px] mt-[65px]">
        {routes.map((route: any, index: number) => (
          <Button
            onClick={() => setTab(route.id)}
            className={`bg-transparent p-0 shadow-none hover:shadow-none hover:text-primary text-left normal-case font-montserrat ${
              tab === route.id ? "text-primary" : "text-white"
            }`}
            key={index}
            placeholder=""
          >
            {route.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AccountSidebar;
