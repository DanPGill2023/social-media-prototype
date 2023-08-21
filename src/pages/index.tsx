import Login from "./login";
import Home from "./home";
import { getSession } from "~/utils/auth";

const Main = () => {
  const userHasSession = getSession();
  return !userHasSession ? <Login /> : <Home />;
};

export default Main;
