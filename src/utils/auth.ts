import { type Session } from "next-auth";

const getStatus = (
  fn: Function
): "loading" | "authenticated" | "unauthenticated" => {
  const { status } = fn();

  return status;
};

const getSession = (fn: Function): Session | undefined | null => {
  const { data: session } = fn();

  return session;
};

export { getStatus, getSession };
