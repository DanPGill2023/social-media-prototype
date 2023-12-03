import { useSession } from "next-auth/react";
import { getSession } from "~/utils/auth";
import Image from "next/image";

const Profile = () => {
  const session = getSession(useSession);
  const user = session?.user;

  const fontClass = "font-bold text-violet-beauregarde";

  return (
    <div className="flex flex-1 flex-col items-center">
      <Image
        width="128"
        height="128"
        alt={"No image Found"}
        src={user?.image ?? ""}
      />
      <p className={fontClass}>{`${user?.name}`}</p>
      <p className={fontClass}>See your latest post here</p>
      <p className={fontClass}>You have made 0 posts in the last 30 days</p>
    </div>
  );
};

export default Profile;
