import { signIn } from "next-auth/react";

const LoginForm = () => {
  return (
    <>
      <div>
        <p className="animate-[jump-in_1s_both] p-10 text-2xl text-white">
          Welcome to Dan's Social Media App! Sign in below
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
