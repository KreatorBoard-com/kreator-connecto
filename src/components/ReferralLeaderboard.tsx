
import React from "react";
import { Trophy, Users, Star, Award, Medal, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Types for our leaderboard entries
type LeaderboardEntry = {
  userId: string;
  name: string;
  avatarUrl?: string;
  referrals: number;
  position: number;
  isCurrentUser?: boolean;
};

// Props for our component
interface ReferralLeaderboardProps {
  entries: LeaderboardEntry[];
  period: "weekly" | "monthly" | "all-time";
  userRank?: number;
  totalReferrals?: number;
  className?: string;
  anonymousMode?: boolean;
}

// Helper function to determine user tier based on referral count
const getUserTier = (referrals: number): { tier: string; icon: React.ReactNode; color: string } => {
  if (referrals >= 20) {
    return { 
      tier: "Gold", 
      icon: <Trophy className="h-4 w-4 text-yellow-500" />, 
      color: "text-yellow-500 border-yellow-500 bg-yellow-50" 
    };
  } else if (referrals >= 10) {
    return { 
      tier: "Silver", 
      icon: <Medal className="h-4 w-4 text-gray-400" />, 
      color: "text-gray-400 border-gray-400 bg-gray-50" 
    };
  } else if (referrals >= 5) {
    return { 
      tier: "Bronze", 
      icon: <Award className="h-4 w-4 text-amber-700" />, 
      color: "text-amber-700 border-amber-700 bg-amber-50" 
    };
  } else {
    return { 
      tier: "New Referrer", 
      icon: <Star className="h-4 w-4 text-lavender-500" />, 
      color: "text-lavender-500 border-lavender-500 bg-lavender-50" 
    };
  }
};

const ReferralLeaderboard: React.FC<ReferralLeaderboardProps> = ({
  entries,
  period,
  userRank,
  totalReferrals = 0,
  className,
  anonymousMode = false
}) => {
  // Format the period for display
  const formattedPeriod = period === "all-time" 
    ? "All-Time" 
    : period.charAt(0).toUpperCase() + period.slice(1);
  
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold">Referral Leaderboard</CardTitle>
          <CardDescription className="flex items-center">
            {formattedPeriod} Rankings
            <TrendingUp className="ml-2 h-4 w-4 text-lavender-600" />
          </CardDescription>
        </div>
        <Badge variant="outline" className="bg-lavender-50 text-lavender-700">
          <Users className="mr-1 h-4 w-4" />
          {entries.length} Participants
        </Badge>
      </CardHeader>
      <CardContent>
        {entries.length > 0 ? (
          <div>
            {/* Top 3 Spotlighted */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 mt-2">
              {entries.slice(0, 3).map((entry, index) => {
                const position = index + 1;
                const { tier, icon, color } = getUserTier(entry.referrals);
                
                return (
                  <div 
                    key={entry.userId} 
                    className={cn(
                      "flex flex-col items-center p-4 rounded-lg transition-all", 
                      position === 1 ? "order-2 transform scale-110 bg-gradient-to-b from-yellow-50 to-yellow-100 shadow-md border border-yellow-200" :
                      position === 2 ? "order-1 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200" : 
                      "order-3 bg-gradient-to-b from-amber-50 to-amber-100 border border-amber-200"
                    )}
                  >
                    <div className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full mb-2 text-white font-bold text-sm",
                      position === 1 ? "bg-yellow-500" :
                      position === 2 ? "bg-gray-400" :
                      "bg-amber-700"
                    )}>
                      {position}
                    </div>
                    
                    <div className="w-12 h-12 rounded-full bg-lavender-100 border-2 border-lavender-300 flex items-center justify-center mb-2">
                      {entry.avatarUrl ? (
                        <img 
                          src={entry.avatarUrl} 
                          alt={anonymousMode ? `User ${position}` : entry.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <Users className="w-6 h-6 text-lavender-500" />
                      )}
                    </div>
                    
                    <p className="font-medium text-center">
                      {anonymousMode ? `User ${entry.userId.substring(0, 4)}` : entry.name}
                      {entry.isCurrentUser && <span className="ml-1 text-xs text-lavender-600">(You)</span>}
                    </p>
                    
                    <div className={cn("flex items-center mt-1 px-2 py-1 rounded text-xs", color)}>
                      {icon}
                      <span className="ml-1">{tier}</span>
                    </div>
                    
                    <p className="mt-2 font-bold">{entry.referrals} referrals</p>
                  </div>
                );
              })}
            </div>
            
            {/* The Rest of the Leaderboard */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Referrals</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.slice(3).map((entry, idx) => {
                  const { tier, icon, color } = getUserTier(entry.referrals);
                  const actualPosition = idx + 4; // Starting from position 4
                  
                  return (
                    <TableRow 
                      key={entry.userId}
                      className={cn(entry.isCurrentUser && "bg-lavender-50")}
                    >
                      <TableCell className="font-medium">{actualPosition}</TableCell>
                      <TableCell>
                        {anonymousMode 
                          ? `User ${entry.userId.substring(0, 4)}` 
                          : entry.name}
                        {entry.isCurrentUser && <span className="ml-1 text-xs text-lavender-600">(You)</span>}
                      </TableCell>
                      <TableCell>
                        <div className={cn("inline-flex items-center px-2 py-1 rounded text-xs", color)}>
                          {icon}
                          <span className="ml-1">{tier}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{entry.referrals}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            
            {/* User's rank if not in top 10 */}
            {userRank && userRank > entries.length && (
              <div className="mt-4 p-3 border border-lavender-200 rounded-lg bg-lavender-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-lavender-200 flex items-center justify-center mr-3">
                      <span className="font-semibold text-sm">{userRank}</span>
                    </div>
                    <span className="font-medium">Your Ranking</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">{totalReferrals} referrals</span>
                    <div className={cn(
                      "inline-flex items-center px-2 py-1 rounded text-xs",
                      getUserTier(totalReferrals).color
                    )}>
                      {getUserTier(totalReferrals).icon}
                      <span className="ml-1">{getUserTier(totalReferrals).tier}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <Users className="mx-auto h-12 w-12 text-lavender-300 mb-3" />
            <h3 className="text-lg font-medium text-gray-900">No referrals yet</h3>
            <p className="text-gray-500 mt-1">Be the first to refer friends and earn rewards!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReferralLeaderboard;
