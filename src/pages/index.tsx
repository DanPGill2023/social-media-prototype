import { useSession } from "next-auth/react";
import { getSession } from "~/utils/auth";

import Login from "./login";
import Home from "./home";

const Main = () => {
  const userHasSession = getSession(useSession);
  return !userHasSession ? <Login /> : <Home />;
};

export default Main;
