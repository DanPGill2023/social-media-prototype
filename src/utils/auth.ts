import { type Session } from "next-auth";

type SessionCallback = () => {
  data: Session | undefined | null;
  status: "loading" | "authenticated" | "unauthenticated";
};

const getStatus = (
  fn: SessionCallback
): "loading" | "authenticated" | "unauthenticated" => {
  const { status } = fn();

  return status;
};

const getSession = (fn: SessionCallback): Session | undefined | null => {
  const { data: session } = fn();

  return session;
};

export { getStatus, getSession };
