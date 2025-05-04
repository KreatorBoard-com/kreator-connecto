import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { 
  Award, 
  Share, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Users,
  BarChart,
  Megaphone,
  Star,
  Trophy,
  Badge,
  Rocket,
  Gift,
  Diamond,
  Crown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsItem, TabsTrigger, TabsBadge } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { ChartContainer } from "@/components/ui/chart";
import ReferralLeaderboard from "@/components/ReferralLeaderboard";
import ReferralRewards from "@/components/ReferralRewards";
import ReferralStats from "@/components/ReferralStats";
import {
  BarChart as RechartBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Mock data for the referral history - in a real app, this would come from your backend
const mockReferralData = [
  { month: 'Jan', referrals: 4 },
  { month: 'Feb', referrals: 3 },
  { month: 'Mar', referrals: 5 },
  { month: 'Apr', referrals: 7 },
  { month: 'May', referrals: 2 },
];

// Mock data for the influencer's audience demographics
const mockAudienceData = [
  { age: '18-24', percent: 35 },
  { age: '25-34', percent: 45 },
  { age: '35-44', percent: 15 },
  { age: '45+', percent: 5 },
];

// Mock data for the leaderboard
const mockLeaderboardEntries = [
  { userId: "user1", name: "Alex Thompson", referrals: 24, position: 1 },
  { userId: "user2", name: "Jamie Rodriguez", referrals: 18, position: 2 },
  { userId: "user3", name: "Taylor Kim", referrals: 16, position: 3 },
  { userId: "user4", name: "Jessie Morgan", referrals: 14, position: 4 },
  { userId: "user5", name: "Jordan Lee", referrals: 13, position: 5 },
  { userId: "user6", name: "Casey Smith", referrals: 11, position: 6 },
  { userId: "user7", name: "Riley Johnson", referrals: 10, position: 7 },
  { userId: "user8", name: "Quinn Brown", referrals: 8, position: 8 },
  { userId: "user9", name: "Avery Davis", referrals: 7, position: 9 },
  { userId: "user10", name: "Bailey Wilson", referrals: 6, position: 10 },
];

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [referralLink, setReferralLink] = useState("");
  const [userType, setUserType] = useState("influencer"); // Can be "influencer" or "brand"
  const [totalReferrals, setTotalReferrals] = useState(21);
  const [pendingReferrals, setPendingReferrals] = useState(3);
  const [confirmedReferrals, setConfirmedReferrals] = useState(18);
  const [rewardsEarned, setRewardsEarned] = useState(2);
  const [weeklyChange, setWeeklyChange] = useState(3);
  const [userRank, setUserRank] = useState(15);
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [leaderboardPeriod, setLeaderboardPeriod] = useState<"weekly" | "monthly" | "all-time">("weekly");
  const [vipWaitlistJoined, setVipWaitlistJoined] = useState(false);
  const [vipLevel, setVipLevel] = useState(0);
  const [vipPoints, setVipPoints] = useState(0);
  const [showVipBadge, setShowVipBadge] = useState(true);
  const [invitesSent, setInvitesSent] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  
  useEffect(() => {
    if (isSignedIn && user) {
      // In a real application, you would fetch this from your database
      // For now, we'll create a mock referral link based on the user's ID
      setReferralLink(`https://kreatorboard.com/join?ref=${user.id}`);
      
      // Simulate determining user type (this would come from your database)
      // For this demo, we'll use a random selection
      setUserType(Math.random() > 0.5 ? "influencer" : "brand");
    }
  }, [isSignedIn, user]);

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard!");
  };

  const joinVIPWaitlist = () => {
    setVipWaitlistJoined(true);
    setVipPoints(50);
    toast({
      title: "Welcome to the VIP Waitlist!",
      description: "You've earned 50 points for joining. Complete tasks to climb the ranks!",
      variant: "achievement",
    });
  };

  const completeVIPTask = (taskPoints: number, taskName: string) => {
    setVipPoints(prev => prev + taskPoints);
    setTasksCompleted(prev => prev + 1);
    
    const newPoints = vipPoints + taskPoints;
    // Check if we should level up
    if (newPoints >= 200 && vipLevel < 1) {
      setVipLevel(1);
      toast({
        title: "Level Up! 🎉",
        description: "You're now VIP Bronze tier with early access to new features!",
        variant: "achievement",
      });
    } else if (newPoints >= 500 && vipLevel < 2) {
      setVipLevel(2);
      toast({
        title: "Level Up! 🎉",
        description: "You're now VIP Silver tier with special perks and priority support!",
        variant: "achievement",
      });
    } else if (newPoints >= 1000 && vipLevel < 3) {
      setVipLevel(3);
      toast({
        title: "Level Up! 🎉",
        description: "You're now VIP Gold tier with exclusive features and premium benefits!",
        variant: "achievement",
      });
    }
    
    toast.success(`Task completed! +${taskPoints} points for ${taskName}`);
  };

  const shareOnSocial = (platform) => {
    // In a real app, this would use the Web Share API or platform-specific sharing
    const shareText = `Join me on KreatorBoard, the ultimate platform for creators and brands! ${referralLink}`;
    let shareUrl = '';
    
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}&title=${encodeURIComponent('Join me on KreatorBoard!')}`;
        break;
      case 'instagram':
        // Instagram doesn't have a web share API, so we'll just copy the text
        navigator.clipboard.writeText(shareText);
        toast.success("Caption copied! Open Instagram to share.");
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  // Prepare leaderboard data with current user
  const prepareLeaderboardData = () => {
    if (!isSignedIn || !user) return mockLeaderboardEntries;

    // Check if current user is in the top 10
    const isUserInTop10 = mockLeaderboardEntries.some(entry => entry.userId === user.id);
    
    if (isUserInTop10) {
      // Mark the user in the leaderboard
      return mockLeaderboardEntries.map(entry => ({
        ...entry,
        isCurrentUser: entry.userId === user.id
      }));
    } else {
      // Return the top 10 as is
      return mockLeaderboardEntries;
    }
  };

  // Get VIP tier badge and color based on level
  const getVipTierInfo = () => {
    switch(vipLevel) {
      case 1:
        return { name: "Bronze", color: "#CD7F32", icon: <Trophy className="h-5 w-5" /> };
      case 2:
        return { name: "Silver", color: "#C0C0C0", icon: <Badge className="h-5 w-5" /> };
      case 3:
        return { name: "Gold", color: "#FFD700", icon: <Diamond className="h-5 w-5" /> };
      default:
        return { name: "New Member", color: "#9b87f5", icon: <Star className="h-5 w-5" /> };
    }
  };

  // Calculate the progress percentage to the next level
  const getProgressToNextLevel = () => {
    if (vipLevel === 0) {
      return (vipPoints / 200) * 100;
    } else if (vipLevel === 1) {
      return ((vipPoints - 200) / 300) * 100;
    } else if (vipLevel === 2) {
      return ((vipPoints - 500) / 500) * 100;
    } else {
      return 100;
    }
  };

  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  const vipTier = getVipTierInfo();
  const nextLevelProgress = getProgressToNextLevel();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-lavender-800 mb-6">
            Welcome to your KreatorBoard Dashboard, {user.firstName}!
          </h1>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="referrals">Referrals</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsItem>
                <TabsTrigger value="vip" className="relative">
                  VIP Program
                  {showVipBadge && <TabsBadge count={1} pulse={true} />}
                </TabsTrigger>
              </TabsItem>
              <TabsTrigger value={userType}>{userType === "influencer" ? "Creator Profile" : "Brand Analytics"}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Overview</CardTitle>
                    <CardDescription>Your KreatorBoard account information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label>Name</Label>
                        <div className="text-lg font-medium">{user.firstName} {user.lastName}</div>
                      </div>
                      <div>
                        <Label>Email</Label>
                        <div className="text-lg">{user.primaryEmailAddress?.emailAddress}</div>
                      </div>
                      <div>
                        <Label>Account Type</Label>
                        <div className="text-lg capitalize">{userType}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Your KreatorBoard Stats</CardTitle>
                    <CardDescription>Summary of your activity</CardDescription>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Connect Your Accounts</CardTitle>
                  <CardDescription>Link your social media and other platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <Instagram className="h-6 w-6" />
                      <span>Instagram</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <Twitter className="h-6 w-6" />
                      <span>Twitter</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <Linkedin className="h-6 w-6" />
                      <span>LinkedIn</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col gap-2">
                      <Share className="h-6 w-6" />
                      <span>TikTok</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="referrals" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Referral Link</CardTitle>
                    <CardDescription>Share this link to invite others to KreatorBoard</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input 
                        value={referralLink} 
                        readOnly 
                        className="flex-1"
                      />
                      <Button onClick={copyReferralLink}>Copy</Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2"
                        onClick={() => shareOnSocial('twitter')}
                      >
                        <Twitter size={16} />
                        <span>Twitter</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2"
                        onClick={() => shareOnSocial('instagram')}
                      >
                        <Instagram size={16} />
                        <span>Instagram</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2"
                        onClick={() => shareOnSocial('linkedin')}
                      >
                        <Linkedin size={16} />
                        <span>LinkedIn</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <ReferralStats
                  totalReferrals={totalReferrals}
                  pendingReferrals={pendingReferrals}
                  confirmedReferrals={confirmedReferrals}
                  rewardsEarned={rewardsEarned}
                  weeklyChange={weeklyChange}
                  rank={userRank}
                />
              </div>
              
              <ReferralRewards userReferrals={totalReferrals} />
              
              <Card>
                <CardHeader>
                  <CardTitle>Referral History</CardTitle>
                  <CardDescription>Your referral performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ChartContainer 
                      config={{
                        referrals: { color: "#9b87f5" }
                      }}
                    >
                      <RechartBarChart data={mockReferralData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="referrals" name="Referrals" fill="var(--color-referrals)" />
                      </RechartBarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="leaderboard" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-lavender-800">Referral Leaderboard</h2>
                  <p className="text-gray-600">Compete with other users and earn exclusive rewards!</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="anonymous-toggle" className="text-sm">Anonymous Mode</Label>
                    <Button 
                      variant={anonymousMode ? "default" : "outline"}
                      className="h-8 px-3"
                      onClick={() => setAnonymousMode(!anonymousMode)}
                    >
                      {anonymousMode ? "On" : "Off"}
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="period-toggle" className="text-sm">Period</Label>
                    <select 
                      id="period-toggle"
                      value={leaderboardPeriod}
                      onChange={(e) => setLeaderboardPeriod(e.target.value as "weekly" | "monthly" | "all-time")}
                      className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
                    >
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="all-time">All-Time</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                <ReferralLeaderboard 
                  entries={prepareLeaderboardData()}
                  period={leaderboardPeriod}
                  userRank={userRank}
                  totalReferrals={totalReferrals}
                  anonymousMode={anonymousMode}
                />
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Leaderboard Rules</CardTitle>
                      <CardDescription>How the competition works</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">How to Earn Points</h4>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          <li>Each successful referral = 1 point</li>
                          <li>Bonus points for premium user referrals</li>
                          <li>Points reset for weekly/monthly contests</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Rewards</h4>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          <li>Top 3 weekly winners get extra months free</li>
                          <li>Monthly winners get premium features</li>
                          <li>Top referrers get special badges</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Campaign</CardTitle>
                      <CardDescription>Spring Invite Sprint</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center p-6">
                      <div className="bg-gradient-to-tr from-lavender-100 to-lavender-50 p-4 rounded-lg mb-4">
                        <Award className="h-12 w-12 text-lavender-600 mx-auto mb-2" />
                        <h3 className="text-lg font-bold text-lavender-900">Special Prize!</h3>
                        <p className="text-sm text-lavender-700">This month's top referrer gets an exclusive 1-year subscription</p>
                      </div>
                      <p className="text-sm">Campaign ends in:</p>
                      <p className="text-xl font-bold text-lavender-800 mt-1">14 days : 07 hours</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={copyReferralLink}>Share Your Link Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle>Referral Tips & Strategies</CardTitle>
                    <CardDescription>Maximize your referral success</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="border border-lavender-100 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Share on Social Media</h4>
                      <p className="text-sm text-gray-600">Post about your positive experience with KreatorBoard and include your referral link.</p>
                    </div>
                    <div className="border border-lavender-100 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Email Your Network</h4>
                      <p className="text-sm text-gray-600">Send personalized emails to colleagues who might benefit from our platform.</p>
                    </div>
                    <div className="border border-lavender-100 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Create Content</h4>
                      <p className="text-sm text-gray-600">Make a tutorial video or blog post showing how KreatorBoard helps you.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="vip" className="space-y-6">
              {!vipWaitlistJoined ? (
                <Card className="overflow-hidden border-none shadow-md">
                  <div className="bg-gradient-to-r from-lavender-600 to-lavender-800 p-10 text-white text-center relative">
                    <div className="absolute top-5 left-5 bg-yellow-400 text-lavender-900 rounded-full px-4 py-1 text-xs font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1" /> EARLY ACCESS
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Join the KreatorBoard VIP Program</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Get exclusive rewards, early access to new features, and special perks for our most valued users.</p>
                    <Button 
                      onClick={joinVIPWaitlist} 
                      className="bg-white text-lavender-900 hover:bg-lavender-100 font-bold text-lg px-8 py-6"
                      size="lg"
                    >
                      <Rocket className="mr-2 h-5 w-5" /> Join the VIP Waitlist
                    </Button>
                  </div>
                  <CardContent className="bg-white p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-lavender-50 p-6 rounded-lg text-center">
                        <div className="mx-auto h-12 w-12 flex items-center justify-center bg-lavender-100 text-lavender-700 rounded-full mb-4">
                          <Rocket className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold mb-2">Early Access</h3>
                        <p className="text-gray-600">Be the first to try new features and provide feedback.</p>
                      </div>
                      <div className="bg-lavender-50 p-6 rounded-lg text-center">
                        <div className="mx-auto h-12 w-12 flex items-center justify-center bg-lavender-100 text-lavender-700 rounded-full mb-4">
                          <Trophy className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold mb-2">Exclusive Rewards</h3>
                        <p className="text-gray-600">Earn points, badges, and real rewards for your engagement.</p>
                      </div>
                      <div className="bg-lavender-50 p-6 rounded-lg text-center">
                        <div className="mx-auto h-12 w-12 flex items-center justify-center bg-lavender-100 text-lavender-700 rounded-full mb-4">
                          <Diamond className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold mb-2">Elite Status</h3>
                        <p className="text-gray-600">Show off your prestigious status with custom badges and perks.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                    <Card>
                      <CardHeader className="bg-gradient-to-r from-lavender-600 to-lavender-800 text-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle className="flex items-center text-2xl">
                              Your VIP Status
                              <span className="ml-2 flex items-center justify-center px-2 py-1 rounded-full bg-white text-lavender-800 text-sm">
                                {vipTier.icon} {vipTier.name}
                              </span>
                            </CardTitle>
                            <CardDescription className="text-lavender-100 mt-1">Complete tasks to earn points and climb the ranks</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold">{vipPoints}</div>
                            <div className="text-sm text-lavender-100">Total VIP Points</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        {vipLevel < 3 && (
                          <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                              <div className="text-sm font-medium">Next level: {vipLevel === 0 ? "Bronze" : vipLevel === 1 ? "Silver" : "Gold"}</div>
                              <div className="text-sm text-gray-500">
                                {vipPoints}/
                                {vipLevel === 0 ? "200" : vipLevel === 1 ? "500" : "1000"} points
                              </div>
                            </div>
                            <Progress value={nextLevelProgress} className="h-2" />
                          </div>
                        )}

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium mb-3">VIP Tasks</h3>
                          
                          {/* Task cards */}
                          <div className="grid gap-4">
                            <div className="border border-lavender-200 p-4 rounded-lg flex justify-between items-center">
                              <div className="flex gap-4 items-center">
                                <div className="bg-lavender-100 p-2 rounded-full text-lavender-700">
                                  <Share className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-medium">Share on social media</p>
                                  <p className="text-sm text-gray-500">Share KreatorBoard on your social networks</p>
                                </div>
                              </div>
                              <Button 
                                variant="outline" 
                                className="whitespace-nowrap"
                                onClick={() => completeVIPTask(100, "Social Media Share")}
                              >
                                +100 pts
                              </Button>
                            </div>

                            <div className="border border-lavender-200 p-4 rounded-lg flex justify-between items-center">
                              <div className="flex gap-4 items-center">
                                <div className="bg-lavender-100 p-2 rounded-full text-lavender-700">
                                  <Users className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-medium">Invite 5 friends</p>
                                  <p className="text-sm text-gray-500">Refer 5 friends to join KreatorBoard</p>
                                </div>
                              </div>
                              <Button 
                                variant="outline" 
                                className="whitespace-nowrap"
                                onClick={() => {
                                  setInvitesSent(invitesSent + 5);
                                  completeVIPTask(150, "Friend Invitations");
                                }}
                              >
                                +150 pts
                              </Button>
                            </div>

                            <div className="border border-lavender-200 p-4 rounded-lg flex justify-between items-center">
                              <div className="flex gap-4 items-center">
                                <div className="bg-lavender-100 p-2 rounded-full text-lavender-700">
                                  <Gift className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-medium">Complete your profile</p>
                                  <p className="text-sm text-gray-500">Finish setting up your KreatorBoard profile</p>
                                </div>
                              </div>
                              <Button 
                                variant="outline" 
                                className="whitespace-nowrap"
                                onClick={() => completeVIPTask(75, "Profile Completion")}
                              >
                                +75 pts
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>VIP Perks</CardTitle>
                          <CardDescription>Benefits you've unlocked</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-4">
                            <div className={`flex gap-3 items-center p-3 rounded-lg ${vipLevel >= 0 ? "opacity-100" : "opacity-50"}`}>
                              <Rocket className={`h-5 w-5 ${vipLevel >= 0 ? "text-lavender-600" : "text-gray-400"}`} />
                              <div className="text-sm">Early access to new features</div>
                            </div>
                            
                            <div className={`flex gap-3 items-center p-3 rounded-lg ${vipLevel >= 1 ? "opacity-100" : "opacity-50"}`}>
                              <Badge className={`h-5 w-5 ${vipLevel >= 1 ? "text-lavender-600" : "text-gray-400"}`} />
                              <div className="text-sm">Custom profile badge</div>
                            </div>
                            
                            <div className={`flex gap-3 items-center p-3 rounded-lg ${vipLevel >= 2 ? "opacity-100" : "opacity-50"}`}>
                              <Megaphone className={`h-5 w-5 ${vipLevel >= 2 ? "text-lavender-600" : "text-gray-400"}`} />
                              <div className="text-sm">Featured in our newsletter</div>
                            </div>
                            
                            <div className={`flex gap-3 items-center p-3 rounded-lg ${vipLevel >= 3 ? "opacity-100" : "opacity-50"}`}>
                              <Diamond className={`h-5 w-5 ${vipLevel >= 3 ? "text-lavender-600" : "text-gray-400"}`} />
                              <div className="text-sm">Priority support & free membership</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>VIP Settings</CardTitle>
                          <CardDescription>Customize your VIP experience</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="show-badge">Show VIP notification badge</Label>
                            <Switch
                              id="show-badge"
                              checked={showVipBadge}
                              onCheckedChange={setShowVipBadge}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="email-updates">Email VIP updates</Label>
                            <Switch
                              id="email-updates"
                              defaultChecked={true}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>VIP Activity & Engagement</CardTitle>
                      <CardDescription>Track your progress and interactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Your VIP Stats</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <div className="text-sm">Tasks Completed</div>
                              <div className="font-medium">{tasksCompleted}</div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm">Friends Invited</div>
                              <div className="font-medium">{invitesSent}</div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm">Current Tier</div>
                              <div className="font-medium flex items-center">
                                <span style={{ color: vipTier.color }} className="mr-1">{vipTier.name}</span> 
                                {vipTier.icon}
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm">Days in Program</div>
                              <div className="font-medium">1</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Upcoming VIP Events</h3>
                          <div className="space-y-3">
                            <div className="bg-lavender-50 p-3 rounded-lg">
                              <div className="font-medium">Creator Showcase</div>
                              <div className="text-sm text-gray-600">Exclusive event on May 15</div>
                            </div>
                            <div className="bg-lavender-50 p-3 rounded-lg">
                              <div className="font-medium">VIP Webinar</div>
                              <div className="text-sm text-gray-600">Learn marketing tips on May 28</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </TabsContent>
            
            <TabsContent value="influencer" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Creator Profile</CardTitle>
                  <CardDescription>Your influence statistics and audience insights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-lavender-50 p-4 rounded-md text-center">
                      <p className="text-sm text-lavender-600 font-medium">Total Reach</p>
                      <p className="text-2xl font-bold text-lavender-900">12.5K</p>
                    </div>
                    <div className="bg-lavender-50 p-4 rounded-md text-center">
                      <p className="text-sm text-lavender-600 font-medium">Engagement Rate</p>
                      <p className="text-2xl font-bold text-lavender-900">4.7%</p>
                    </div>
                    <div className="bg-lavender-50 p-4 rounded-md text-center">
                      <p className="text-sm text-lavender-600 font-medium">Avg. Campaign Value</p>
                      <p className="text-2xl font-bold text-lavender-900">$750</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Audience Demographics</h3>
                    <div className="h-64">
                      <ChartContainer 
                        config={{
                          audience: { color: "#9b87f5" }
                        }}
                      >
                        <RechartBarChart data={mockAudienceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="age" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="percent" name="Audience %" fill="var(--color-audience)" />
                        </RechartBarChart>
                      </ChartContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Content Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Beauty", "Lifestyle", "Fitness", "Tech", "Travel"].map(category => (
                        <div key={category} className="px-4 py-2 bg-lavender-100 text-lavender-800 rounded-full text-sm">
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Opportunities</CardTitle>
                  <CardDescription>Brands looking for creators like you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="p-4 border border-lavender-200 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Summer Collection Showcase</h4>
                            <p className="text-sm text-gray-600">Fashion Brand #{i}</p>
                          </div>
                          <div className="bg-lavender-100 text-lavender-800 px-2 py-1 rounded text-xs">
                            $500 - $1,500
                          </div>
                        </div>
                        <p className="mt-2 text-sm">Looking for fashion creators to showcase our summer collection in creative ways.</p>
                        <div className="mt-3 flex justify-end">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="brand" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>Overview of your marketing campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Total Impressions</p>
                        <p className="text-2xl font-bold">245.8K</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Conversion Rate</p>
                        <p className="text-2xl font-bold">3.2%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">ROI</p>
                        <p className="text-2xl font-bold">178%</p>
                      </div>
                    </div>
                    <div className="h-60">
                      <ChartContainer 
                        config={{
                          impressions: { color: "#9b87f5" },
                          conversions: { color: "#7E69AB" }
                        }}
                      >
                        <RechartBarChart data={[
                          { name: 'Campaign 1', impressions: 95000, conversions: 2850 },
                          { name: 'Campaign 2', impressions: 75000, conversions: 2250 },
                          { name: 'Campaign 3', impressions: 45000, conversions: 1575 },
                          { name: 'Campaign 4', impressions: 30800, conversions: 1078 },
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="impressions" fill="var(--color-impressions)" />
                          <Bar dataKey="conversions" fill="var(--color-conversions)" />
                        </RechartBarChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="space-y-1">
                      <CardTitle>Analytics</CardTitle>
                      <CardDescription>Key performance metrics</CardDescription>
                    </div>
                    <BarChart className="h-4 w-4 text-lavender-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: "Total Reach", value: "452.8K", change: "+12.3%" },
                        { label: "Engagement", value: "27.5K", change: "+8.1%" },
                        { label: "Click Through", value: "6.8%", change: "+2.4%" },
                        { label: "Conversion", value: "3.2%", change: "+0.8%" }
                      ].map((stat, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-1/3 text-sm font-medium">{stat.label}</div>
                          <div className="w-1/3 text-right">{stat.value}</div>
                          <div className={`w-1/3 text-right text-sm ${
                            stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle>Promotion Management</CardTitle>
                    <CardDescription>Current and upcoming promotions</CardDescription>
                  </div>
                  <Megaphone className="h-4 w-4 text-lavender-600" />
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-5">
                    {[
                      {
                        title: "Summer Collection Launch",
                        status: "Active",
                        creators: 12,
                        budget: "$15,000",
                        progress: 65
                      },
                      {
                        title: "Back to School",
                        status: "Scheduled",
                        creators: 8,
                        budget: "$8,500",
                        progress: 0
                      },
                      {
                        title: "Holiday Special",
                        status: "Draft",
                        creators: 0,
                        budget: "$22,000",
                        progress: 0
                      }
                    ].map((campaign, idx) => (
                      <div key={idx} className="border border-lavender-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-medium">{campaign.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded ${
                            campaign.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : campaign.status === 'Scheduled'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {campaign.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-sm mb-3">
                          <div>
                            <p className="text-gray-500">Creators</p>
                            <p className="font-medium">{campaign.creators}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Budget</p>
                            <p className="font-medium">{campaign.budget}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Progress</p>
                            <p className="font-medium">{campaign.progress}%</p>
                          </div>
                        </div>
                        {campaign.status === 'Active' && (
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                            <div 
                              className="bg-lavender-600 h-1.5 rounded-full" 
                              style={{ width: `${campaign.progress}%` }} 
                            />
                          </div>
                        )}
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Create New Promotion</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
