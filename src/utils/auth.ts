import { useSession } from "next-auth/react";
import { type Session } from "next-auth";

const getStatus = (): "loading" | "authenticated" | "unauthenticated" => {
  const { status } = useSession();

  return status;
};

const getSession = (): Session | undefined | null => {
  const { data: session } = useSession();

  return session;
};

export { getStatus, getSession };
