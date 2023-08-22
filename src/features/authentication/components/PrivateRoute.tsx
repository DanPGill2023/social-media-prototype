import { type PropsWithChildren, useEffect } from "react";
import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";

import { getStatus } from "~/utils/auth";

import { LoadingSpinnerWrapper } from "~/components/common/LoadingSpinnerWrapper";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const status = getStatus(useSession);
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const isLoginPage = router.asPath === "/login";

  useEffect(() => {
    const redirect = async () => {
      await Router.push("/login");
    };
    if (status === "unauthenticated") {
      void redirect();
    }
  }, [status]);

  if ((!isAuthenticated || isLoading) && !isLoginPage) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e1065] to-[#4c0519]">
        <LoadingSpinnerWrapper isLoading={isLoading} />
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
