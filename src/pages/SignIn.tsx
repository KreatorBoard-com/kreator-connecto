
import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-lavender-50 p-4">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-lavender-800">
            Welcome back to KreatorBoard
          </h1>
          <p className="mt-2 text-lavender-600">
            Sign in to your account to continue
          </p>
        </div>
        
        <div className="rounded-lg border border-lavender-200 bg-white p-8 shadow-sm">
          <SignIn 
            routing="path" 
            path="/sign-in" 
            signUpUrl="/sign-up"
            redirectUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
