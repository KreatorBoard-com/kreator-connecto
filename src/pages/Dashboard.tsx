
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-lavender-800 mb-6">
            Welcome to your KreatorBoard Dashboard, {user.firstName}!
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm border border-lavender-200 p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-lavender-700 mb-3">
                Account Overview
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-lavender-50 p-4 rounded-md">
                  <p className="text-sm text-lavender-600 font-medium">Email</p>
                  <p className="text-lavender-900">{user.primaryEmailAddress?.emailAddress}</p>
                </div>
                <div className="bg-lavender-50 p-4 rounded-md">
                  <p className="text-sm text-lavender-600 font-medium">User ID</p>
                  <p className="text-lavender-900">{user.id}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-lavender-700 mb-3">
                Your KreatorBoard Stats
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-lavender-50 p-4 rounded-md text-center">
                  <p className="text-sm text-lavender-600 font-medium">Campaigns</p>
                  <p className="text-2xl font-bold text-lavender-900">0</p>
                </div>
                <div className="bg-lavender-50 p-4 rounded-md text-center">
                  <p className="text-sm text-lavender-600 font-medium">Connections</p>
                  <p className="text-2xl font-bold text-lavender-900">0</p>
                </div>
                <div className="bg-lavender-50 p-4 rounded-md text-center">
                  <p className="text-sm text-lavender-600 font-medium">Messages</p>
                  <p className="text-2xl font-bold text-lavender-900">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
