import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import PrivateRoute from "~/features/authentication/components/PrivateRoute";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <PrivateRoute>
        <Component {...pageProps} />
      </PrivateRoute>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
