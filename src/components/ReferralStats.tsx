
import React from "react";
import { UserPlus, Users, Gift, Award, TrendingUp, TrendingDown } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ReferralStatsProps {
  totalReferrals: number;
  pendingReferrals: number;
  confirmedReferrals: number;
  rewardsEarned: number;
  weeklyChange: number;
  rank: number;
  className?: string;
}

const ReferralStats: React.FC<ReferralStatsProps> = ({
  totalReferrals,
  pendingReferrals,
  confirmedReferrals,
  rewardsEarned,
  weeklyChange,
  rank,
  className
}) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Referral Progress</CardTitle>
        <CardDescription>Real-time statistics about your referrals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-lavender-50 p-4 rounded-lg text-center">
            <UserPlus className="mx-auto h-6 w-6 text-lavender-600 mb-2" />
            <p className="text-sm text-lavender-600 font-medium">Total Referrals</p>
            <p className="text-2xl font-bold text-lavender-900">{totalReferrals}</p>
          </div>
          
          <div className="bg-lavender-50 p-4 rounded-lg text-center">
            <Users className="mx-auto h-6 w-6 text-lavender-600 mb-2" />
            <p className="text-sm text-lavender-600 font-medium">Confirmed</p>
            <div className="flex items-center justify-center">
              <p className="text-2xl font-bold text-lavender-900">{confirmedReferrals}</p>
              <span className="text-xs ml-1 text-gray-500">/{totalReferrals}</span>
            </div>
          </div>
          
          <div className="bg-lavender-50 p-4 rounded-lg text-center">
            <Gift className="mx-auto h-6 w-6 text-lavender-600 mb-2" />
            <p className="text-sm text-lavender-600 font-medium">Rewards Earned</p>
            <p className="text-2xl font-bold text-lavender-900">{rewardsEarned}</p>
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between p-3 border border-lavender-100 rounded-lg bg-white">
            <div className="flex items-center">
              <Award className="h-5 w-5 text-lavender-700 mr-3" />
              <span className="font-medium text-sm">Your Current Rank</span>
            </div>
            <span className="font-bold text-lavender-900">#{rank}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-lavender-100 rounded-lg bg-white">
            <div className="flex items-center">
              <span className="font-medium text-sm">Weekly Trend</span>
            </div>
            <div className="flex items-center">
              {weeklyChange > 0 ? (
                <>
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-green-600">+{weeklyChange} referrals</span>
                </>
              ) : weeklyChange < 0 ? (
                <>
                  <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                  <span className="text-red-600">{weeklyChange} referrals</span>
                </>
              ) : (
                <span className="text-gray-500">No change</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-lavender-100 rounded-lg bg-white">
            <div className="flex items-center">
              <span className="font-medium text-sm">Pending Referrals</span>
            </div>
            <span className="font-medium text-lavender-900">{pendingReferrals}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralStats;
