
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";
import { Trophy, Gift, Star, Sparkles, Rocket, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GamifiedLogin = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showBenefits, setShowBenefits] = useState(false);
  
  const benefits = [
    {
      icon: <Trophy className="h-8 w-8 text-orange-500" />,
      title: "Leaderboard Rankings",
      description: "Compete with others and climb the referral leaderboard"
    },
    {
      icon: <Gift className="h-8 w-8 text-orange-500" />,
      title: "Earn Rewards",
      description: "Get exclusive perks and rewards for your referrals"
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: "VIP Status",
      description: "Unlock special features and early access as you level up"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Achievement Badges",
      description: "Collect badges and showcase your accomplishments"
    }
  ];

  const handleSkip = () => {
    setStep(2);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-beige-300 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {step === 0 && (
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Rocket className="h-12 w-12 text-white" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-orange-900 mb-2"
            >
              Welcome to KreatorBoard
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-orange-700 mb-8"
            >
              Join our community and start earning rewards today!
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <Button 
                onClick={() => setStep(1)} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Sparkles className="h-4 w-4 mr-2" /> Start Your Journey
              </Button>
              <Button 
                onClick={() => setStep(2)} 
                variant="outline"
                className="w-full border-orange-500 text-orange-700 hover:bg-orange-100"
              >
                Already a Member? Sign In
              </Button>
            </motion.div>
          </div>
        )}
        
        {step === 1 && (
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h1 className="text-2xl font-bold text-orange-900 mb-2">Unlock Amazing Benefits</h1>
              <p className="text-orange-700 mb-4">See what awaits when you join our platform</p>
            </motion.div>
            
            <div className="bg-beige-100 rounded-lg border border-beige-200 p-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm"
                  >
                    {benefit.icon}
                    <h3 className="font-medium text-orange-800 mt-2 mb-1">{benefit.title}</h3>
                    <p className="text-xs text-orange-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={() => setStep(2)} 
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
              >
                Continue to Sign In
              </Button>
              <Button 
                onClick={() => setStep(0)} 
                variant="outline"
                className="border-orange-500 text-orange-700 hover:bg-orange-100"
              >
                Back
              </Button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-center"
            >
              <h1 className="text-3xl font-bold text-orange-800">
                Welcome back to KreatorBoard
              </h1>
              <p className="mt-2 text-orange-600">
                Sign in to continue your journey
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-lg border border-beige-200 bg-beige-100 p-8 shadow-sm"
            >
              <SignIn 
                routing="path" 
                path="/sign-in" 
                signUpUrl="/sign-up"
                redirectUrl="/dashboard"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex justify-center"
            >
              <Button 
                variant="ghost" 
                onClick={() => setStep(0)}
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-100"
              >
                Back to Welcome
              </Button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default GamifiedLogin;
