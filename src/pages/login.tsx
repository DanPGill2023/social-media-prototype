import SignInForm from "~/features/authentication/components/SignInForm";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e1065] to-[#4c0519]">
      <SignInForm />
    </div>
  );
};

export default Login;
