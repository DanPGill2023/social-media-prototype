// import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { getSession } from "~/utils/auth";

import rightCaretIcon from "~/icons/caret-right-icon.svg";
import leftCaretIcon from "~/icons/caret-left-icon.svg";
import userIcon from "~/icons/user-profile-icon.svg";
import settingsIcon from "~/icons/settings-icon.svg";
import signOutIcon from "~/icons/sign-out-icon.svg";

import SideBarButton from "./SideBarButton";

const SideBar = () => {
  const router = useRouter();
  const session = getSession(useSession);
  const user = session?.user;
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
    "px-3",
    "py-4",
    "dark:bg-violet-beauregarde",
    sideBarCollapsed ? "w-16" : "w-64",
  ].join(" ");
  const collapseButtonContainerClassNames = [
    ...(!sideBarCollapsed ? ["ml-auto mr-[4px]"] : []),
  ].join(" ");
  const buttonContainerClassNames = [
    "flex",
    "h-full",
    "flex-col",
    "overflow-y-auto",
    ...(sideBarCollapsed ? ["items-center"] : []),
  ].join(" ");

  const handleToggleSideBar = () => {
    setSideBarCollapsed((prevSideBarStatus) => !prevSideBarStatus);
  };

  const handleProfile = () => {
    const id = user?.id;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(`profile/?id=${id}`);
  };

  const handleSettings = () => {
    console.log("Settings");
  };

  const handleSignOut = () => {
    return signOut();
  };

  if (!isLoginPage) {
    return (
      <div className={containerClassNames}>
        <div className={buttonContainerClassNames}>
          <div className={collapseButtonContainerClassNames}>
            <SideBarButton
              tooltipContent={sideBarCollapsed ? "Expand" : "Collapse"}
              onClick={handleToggleSideBar}
              src={
                sideBarCollapsed
                  ? (rightCaretIcon as string)
                  : (leftCaretIcon as string)
              }
              alt={sideBarCollapsed ? "Open Sidebar" : "Close Sidebar"}
            />
          </div>
          <SideBarButton
            disableToolTip={!sideBarCollapsed}
            onClick={handleProfile}
            tooltipContent="Profile"
            tooltipContainerClasses={["mt-4"]}
            src={userIcon as string}
            alt={"User Profile"}
          />
          <SideBarButton
            disableToolTip={!sideBarCollapsed}
            onClick={handleSettings}
            tooltipContent="Settings"
            tooltipContainerClasses={["mt-4"]}
            src={settingsIcon as string}
            alt={"Settings"}
          />
          <SideBarButton
            disableToolTip={!sideBarCollapsed}
            onClick={() => void handleSignOut()}
            tooltipContent="Sign Out"
            tooltipContainerClasses={["mt-4"]}
            src={signOutIcon as string}
            alt={"Sign Out"}
          />
        </div>
      </div>
    );
  }
  return <></>;
};

export default SideBar;
