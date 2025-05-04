
import React from "react";
import { Award, Gift, Star } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Define milestone rewards
const MILESTONES = [
  { count: 5, reward: "Bronze Badge & 1 Month Free" },
  { count: 10, reward: "Silver Badge & 3 Months Free" },
  { count: 20, reward: "Gold Badge & 6 Months Free" },
  { count: 30, reward: "Platinum Badge & Annual Subscription" },
  { count: 50, reward: "Diamond Badge & Partner Status" },
];

// Define profile badges
const PROFILE_BADGES = [
  { 
    name: "Referral Starter", 
    icon: <Star className="h-3 w-3" />, 
    requirement: 1,
    color: "bg-lavender-100 text-lavender-800 border-lavender-200" 
  },
  { 
    name: "Referral Pro", 
    icon: <Star className="h-3 w-3" />, 
    requirement: 5,
    color: "bg-amber-100 text-amber-800 border-amber-200" 
  },
  { 
    name: "Referral Master", 
    icon: <Award className="h-3 w-3" />, 
    requirement: 10,
    color: "bg-gray-200 text-gray-800 border-gray-300" 
  },
  { 
    name: "Referral Champion", 
    icon: <Award className="h-3 w-3" />, 
    requirement: 20,
    color: "bg-yellow-100 text-yellow-800 border-yellow-200" 
  },
  { 
    name: "Referral Legend", 
    icon: <Gift className="h-3 w-3" />, 
    requirement: 50,
    color: "bg-blue-100 text-blue-800 border-blue-200" 
  },
];

interface ReferralRewardsProps {
  userReferrals: number;
  className?: string;
}

const ReferralRewards: React.FC<ReferralRewardsProps> = ({ 
  userReferrals,
  className 
}) => {
  // Find the next milestone to achieve
  const nextMilestone = MILESTONES.find(milestone => milestone.count > userReferrals);
  
  // Find the currently earned badge
  const currentBadge = [...PROFILE_BADGES]
    .reverse()
    .find(badge => userReferrals >= badge.requirement);
  
  // Calculate progress percentage to next milestone
  const progressPercentage = nextMilestone 
    ? Math.min(100, (userReferrals / nextMilestone.count) * 100)
    : 100;
  
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Referral Rewards Program</CardTitle>
        <CardDescription>Earn rewards for successful referrals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Badge */}
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-sm text-gray-700">Your Current Badge</h3>
            
            {currentBadge ? (
              <Badge className={cn("px-3", currentBadge.color)}>
                <span className="flex items-center">
                  {currentBadge.icon}
                  <span className="ml-1">{currentBadge.name}</span>
                </span>
              </Badge>
            ) : (
              <Badge variant="outline" className="text-gray-500">
                No Badge Yet
              </Badge>
            )}
          </div>
          <p className="text-xs text-gray-600">
            Keep referring to earn more prestigious badges!
          </p>
        </div>
        
        {/* Progress to Next Reward */}
        {nextMilestone && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Next Reward</span>
              <span className="text-xs text-lavender-700 bg-lavender-50 px-2 py-1 rounded-full">
                {userReferrals}/{nextMilestone.count} Referrals
              </span>
            </div>
            
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-lavender-600 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            <p className="text-xs text-gray-600">
              Refer {nextMilestone.count - userReferrals} more friend{nextMilestone.count - userReferrals !== 1 ? 's' : ''} to unlock: <span className="font-medium">{nextMilestone.reward}</span>
            </p>
          </div>
        )}
        
        {/* All Rewards */}
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-3">All Reward Tiers</h3>
          <div className="relative">
            <div className="absolute left-0 top-1/2 right-0 h-0.5 bg-lavender-200" />
            <div className="relative flex justify-between">
              {MILESTONES.map((milestone, index) => {
                const isAchieved = userReferrals >= milestone.count;
                
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center"
                    title={milestone.reward}
                  >
                    <div className={cn(
                      "rounded-full p-1 mb-2",
                      isAchieved ? "bg-lavender-600" : "bg-lavender-200"
                    )}>
                      <div className={cn(
                        "rounded-full w-6 h-6 flex items-center justify-center text-xs",
                        isAchieved ? "bg-lavender-600 text-white" : "bg-lavender-100 text-lavender-800"
                      )}>
                        {milestone.count}
                      </div>
                    </div>
                    <p className="text-xs text-center max-w-[60px] overflow-hidden text-ellipsis whitespace-nowrap" 
                       title={milestone.reward}>
                      {milestone.reward.split(' & ')[0]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Available Badges Gallery */}
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3">Available Profile Badges</h3>
          <div className="flex flex-wrap gap-2">
            {PROFILE_BADGES.map((badge, index) => {
              const isUnlocked = userReferrals >= badge.requirement;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "px-3 py-2 rounded-full border text-xs flex items-center transition-all",
                    isUnlocked 
                      ? badge.color
                      : "bg-gray-100 text-gray-400 border-gray-200 opacity-60"
                  )}
                >
                  {badge.icon}
                  <span className="ml-1">{badge.name}</span>
                  {!isUnlocked && (
                    <span className="ml-1 text-xs">
                      ({badge.requirement})
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralRewards;
