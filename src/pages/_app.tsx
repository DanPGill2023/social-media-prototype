import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import "~/styles/globals.css";
import { api } from "~/utils/api";

import PrivateRoute from "~/features/authentication/components/PrivateRoute";
import SideBar from "~/features/sidebar/components/SideBar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <PrivateRoute>
        <div className="flex dark:bg-pink-rabbits">
          <SideBar />
          <div className="min-h-screen flex-grow">
            <Component {...pageProps} />
          </div>
        </div>
      </PrivateRoute>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
