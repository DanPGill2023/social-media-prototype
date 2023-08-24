import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import rightCaret from "~/icons/caret-right-solid.svg";
import leftCaret from "~/icons/caret-left-solid.svg";

import type User from "./user/types/user.type";
import Tooltip from "~/components/common/Tooltip";

const SideBar = ({ user }: User) => {
  const router = useRouter();
  const [sideBarCollapsed, setSideBarCollapsed] = useState(true);
  const isLoginPage = router.asPath === "/login";
  const containerClassNames = [
    "sticky",
    "left-0",
    "top-0",
    "z-40",
    "h-screen",
    "-translate-x-full",
    "transition-[width]",
    "sm:translate-x-0",
    "bg-gray-50",
    "px-3",
    "py-4",
    "dark:bg-[#2e1065]",
    sideBarCollapsed ? "w-16" : "w-64",
  ].join(" ");
  const buttonClassNames = [
    ...(!sideBarCollapsed ? ["ml-auto mr-[4px]"] : []),
  ].join(" ");

  const handleToggleSideBar = () => {
    setSideBarCollapsed((prevSideBarStatus) => !prevSideBarStatus);
  };

  if (!isLoginPage) {
    return (
      <div className={containerClassNames}>
        <div className="flex h-full items-start justify-center overflow-y-auto">
          <div className={buttonClassNames}>
            <Tooltip
              position="left"
              content={sideBarCollapsed ? "Expand" : "Collapse"}
            >
              <button role="button" onClick={handleToggleSideBar}>
                <Image
                  width={16}
                  height={32}
                  src={
                    sideBarCollapsed
                      ? (rightCaret as string)
                      : (leftCaret as string)
                  }
                  alt={sideBarCollapsed ? "Open Sidebar" : "Close Sidebar"}
                />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
};

export default SideBar;
