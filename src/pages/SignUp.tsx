
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-lavender-50 p-4">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-lavender-800">
            Join KreatorBoard
          </h1>
          <p className="mt-2 text-lavender-600">
            Create your account to get started
          </p>
        </div>
        
        <div className="rounded-lg border border-lavender-200 bg-white p-8 shadow-sm">
          <SignUp 
            routing="path" 
            path="/sign-up" 
            signInUrl="/sign-in"
            redirectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
