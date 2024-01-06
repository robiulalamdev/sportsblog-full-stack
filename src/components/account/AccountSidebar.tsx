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
    <div className="bg-[#F5F7F9] max-w-[330px] w-full min-h-screen flex justify-center items-start">
      <div className="grid grid-cols-1 gap-y-[28px] max-w-[228px] mt-[65px]">
        {routes.map((route: any, index: number) => (
          <Button
            onClick={() => setTab(route.id)}
            className={`bg-transparent p-0 shadow-none hover:shadow-none hover:text-primary text-left ${
              tab === route.id ? "text-primary" : "text-[#141A28]"
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
