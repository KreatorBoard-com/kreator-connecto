
import React, { useState } from 'react';
import { User } from "@clerk/clerk-react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Award, Trophy, Star, UserRound, Gift, Activity, Calendar, Sparkles, CheckCircle } from 'lucide-react';

interface UserProfileProps {
  user: User | null;
  totalReferrals: number;
  confirmedReferrals: number;
  pendingReferrals: number;
  rewardsEarned: number;
  vipLevel: number;
  vipPoints: number;
  joinedDate?: Date;
}

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  totalReferrals,
  confirmedReferrals,
  pendingReferrals,
  rewardsEarned,
  vipLevel,
  vipPoints,
  joinedDate = new Date('2023-01-15')
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const achievementsList = [
    { title: "First Referral", completed: totalReferrals > 0, icon: <CheckCircle className="h-4 w-4 text-orange-500" /> },
    { title: "5 Referrals Club", completed: totalReferrals >= 5, icon: <CheckCircle className="h-4 w-4 text-orange-500" /> },
    { title: "10 Referrals Master", completed: totalReferrals >= 10, icon: <CheckCircle className="h-4 w-4 text-orange-500" /> },
    { title: "VIP Member", completed: vipLevel > 0, icon: <CheckCircle className="h-4 w-4 text-orange-500" /> },
    { title: "Leaderboard Top 10", completed: true, icon: <CheckCircle className="h-4 w-4 text-orange-500" /> },
  ];

  const daysActive = Math.floor((new Date().getTime() - joinedDate.getTime()) / (1000 * 3600 * 24));
  
  const getVipLevelTitle = () => {
    switch(vipLevel) {
      case 0: return "VIP Waitlist";
      case 1: return "Bronze VIP";
      case 2: return "Silver VIP";
      case 3: return "Gold VIP";
      default: return "Member";
    }
  };
  
  const getNextVipLevel = () => {
    switch(vipLevel) {
      case 0: return { points: 200, title: "Bronze VIP" };
      case 1: return { points: 500, title: "Silver VIP" };
      case 2: return { points: 1000, title: "Gold VIP" };
      case 3: return { points: vipPoints, title: "Maximum Level" };
      default: return { points: 200, title: "Bronze VIP" };
    }
  };
  
  const nextLevel = getNextVipLevel();
  const progressToNextLevel = vipLevel === 3 ? 100 : Math.min(100, (vipPoints / nextLevel.points) * 100);

  return (
    <div className="space-y-6">
      <Card className="bg-beige-300 border-orange-300 shadow-md">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden border-2 border-orange-400">
                  {user?.profileImageUrl ? (
                    <img src={user.profileImageUrl} alt={user.fullName || "User"} className="w-full h-full object-cover" />
                  ) : (
                    <UserRound className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border border-beige-300">
                  {vipLevel}
                </div>
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl text-orange-900">{user?.fullName || "User Name"}</CardTitle>
                <CardDescription className="text-orange-700">{user?.emailAddresses[0].emailAddress || "user@example.com"}</CardDescription>
                <div className="flex gap-2 mt-1">
                  <Badge className="bg-orange-500">{getVipLevelTitle()}</Badge>
                  <Badge variant="outline" className="border-orange-500 text-orange-800">Active {daysActive} days</Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end md:self-center">
              <Trophy className="text-orange-500 h-5 w-5" />
              <span className="text-sm font-medium text-orange-800">Rank #7 on Leaderboard</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="bg-beige-200 grid grid-cols-3 mb-4">
              <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Achievements
              </TabsTrigger>
              <TabsTrigger value="statistics" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Statistics
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-beige-100 p-4 rounded-lg border border-beige-200 flex flex-col items-center">
                  <Award className="h-8 w-8 text-orange-500 mb-2" />
                  <span className="text-sm text-orange-700">Total Referrals</span>
                  <span className="text-2xl font-bold text-orange-900">{totalReferrals}</span>
                </div>
                <div className="bg-beige-100 p-4 rounded-lg border border-beige-200 flex flex-col items-center">
                  <Gift className="h-8 w-8 text-orange-500 mb-2" />
                  <span className="text-sm text-orange-700">Rewards Earned</span>
                  <span className="text-2xl font-bold text-orange-900">{rewardsEarned}</span>
                </div>
                <div className="bg-beige-100 p-4 rounded-lg border border-beige-200 flex flex-col items-center">
                  <Star className="h-8 w-8 text-orange-500 mb-2" />
                  <span className="text-sm text-orange-700">VIP Points</span>
                  <span className="text-2xl font-bold text-orange-900">{vipPoints}</span>
                </div>
              </div>
              
              <div className="bg-beige-100 p-4 rounded-lg border border-beige-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-orange-800">Progress to {nextLevel.title}</span>
                  <span className="text-xs text-orange-600">{vipPoints} / {nextLevel.points} points</span>
                </div>
                <Progress value={progressToNextLevel} className="h-2 bg-beige-200" indicatorClassName="bg-orange-500" />
              </div>
            </TabsContent>
            
            <TabsContent value="achievements" className="space-y-4">
              <div className="bg-beige-100 p-4 rounded-lg border border-beige-200">
                <h3 className="font-medium text-orange-900 mb-3 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-orange-500" /> Achievements
                </h3>
                <div className="space-y-3">
                  {achievementsList.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {achievement.icon}
                        <span className={`text-sm ${achievement.completed ? 'text-orange-900' : 'text-orange-500/50'}`}>
                          {achievement.title}
                        </span>
                      </div>
                      {achievement.completed && (
                        <Badge className="bg-orange-500">Unlocked</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-beige-100 p-4 rounded-lg border border-beige-200">
                <h3 className="font-medium text-orange-900 mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-orange-500" /> Next Goals
                </h3>
                <div className="space-y-3">
                  {vipLevel < 3 && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-orange-400" />
                        <span className="text-sm text-orange-700">
                          Reach {getNextVipLevel().title} Status
                        </span>
                      </div>
                      <span className="text-xs font-medium text-orange-600">
                        {nextLevel.points - vipPoints} points needed
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-orange-400" />
                      <span className="text-sm text-orange-700">
                        Reach 25 Total Referrals
                      </span>
                    </div>
                    <span className="text-xs font-medium text-orange-600">
                      {Math.max(0, 25 - totalReferrals)} more needed
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="statistics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-beige-100 p-4 rounded-lg border border-beige-200">
                  <h3 className="font-medium text-orange-900 mb-2 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-orange-500" /> Referral Breakdown
                  </h3>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-700">Confirmed Referrals</span>
                      <span className="font-medium text-orange-900">{confirmedReferrals}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-700">Pending Referrals</span>
                      <span className="font-medium text-orange-900">{pendingReferrals}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-700">Conversion Rate</span>
                      <span className="font-medium text-orange-900">
                        {totalReferrals > 0 
                          ? `${Math.round((confirmedReferrals / totalReferrals) * 100)}%` 
                          : '0%'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-beige-100 p-4 rounded-lg border border-beige-200">
                  <h3 className="font-medium text-orange-900 mb-2 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-orange-500" /> Account Details
                  </h3>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-700">Member Since</span>
                      <span className="font-medium text-orange-900">
                        {joinedDate.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-700">Days Active</span>
                      <span className="font-medium text-orange-900">{daysActive}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-orange-700">Account Type</span>
                      <Badge className="bg-orange-500">Influencer</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t border-beige-200 pt-4">
          <div className="text-sm text-orange-700">
            Last login: {new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-orange-700">Level:</span>
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < vipLevel ? 'text-orange-500 fill-orange-500' : 'text-orange-300'}`} 
                />
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserProfile;
