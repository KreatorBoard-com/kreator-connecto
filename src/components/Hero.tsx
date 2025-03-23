
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, Users, Activity, Calendar, Settings, Home, MessageSquare, TrendingUp, LayoutDashboard } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-28 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Small chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center rounded-full border border-lavender-200 bg-white px-3 py-1 text-sm text-lavender-700 shadow-sm"
          >
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-lavender-500"></span>
            <span>Revolutionizing Influencer Marketing</span>
          </motion.div>
          
          {/* Title with animated highlight */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            The Ultimate
            <span className="relative mx-2">
              <span className="relative z-10">Influencer & Brand</span>
              <span className={cn(
                "absolute bottom-2 left-0 z-0 h-3 w-full",
                "bg-gradient-to-r from-lavender-200 to-lavender-100"
              )}></span>
            </span>
            Collaboration Platform
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Simplifying influencer marketing with AI-powered matching and hyper-local targeting. 
            Connect brands and creators for authentic collaborations that drive real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-lavender-600 hover:bg-lavender-700 hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-lavender-300 hover:bg-lavender-50 hover:text-lavender-700 transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* KreatorBoard Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="mt-16 w-full max-w-5xl mx-auto relative"
          >
            <div className="rounded-xl overflow-hidden card-shadow glassmorphism">
              <div className="absolute inset-0 bg-gradient-to-b from-lavender-100/20 to-lavender-200/20"></div>
              
              {/* Dashboard Interface */}
              <div className="relative p-6">
                {/* Top Navigation Bar */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-8 bg-white/80 dark:bg-gray-800/80 rounded-full w-1/3 mx-auto flex items-center justify-center px-4">
                      <span className="text-sm font-medium text-lavender-700 dark:text-lavender-300">KreatorBoard Dashboard</span>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-lavender-100 dark:bg-lavender-800"></div>
                </div>
                
                {/* Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Sidebar */}
                  <div className="md:col-span-3 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm p-5">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center mb-6">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-lavender-400 to-lavender-600 flex items-center justify-center text-white">
                          <LayoutDashboard size={20} />
                        </div>
                        <div className="ml-3">
                          <div className="font-bold text-lg">KreatorBoard</div>
                          <div className="text-xs text-gray-500">Management Suite</div>
                        </div>
                      </div>
                      
                      {sidebarItems.map((item, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center p-2 rounded-lg ${index === 0 ? 'bg-lavender-50 text-lavender-700 dark:bg-lavender-900/30 dark:text-lavender-400' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700/30'}`}
                        >
                          <div className="h-5 w-5">{item.icon}</div>
                          <span className="ml-3 text-sm font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Dashboard */}
                  <div className="md:col-span-9">
                    <div className="grid grid-cols-1 gap-6">
                      {/* Overview Section */}
                      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold">Platform Overview</h3>
                          <div className="flex space-x-1">
                            <div className="px-3 py-1 text-xs bg-lavender-500 text-white rounded-full">Today</div>
                            <div className="px-3 py-1 text-xs bg-white dark:bg-gray-700 rounded-full">Week</div>
                            <div className="px-3 py-1 text-xs bg-white dark:bg-gray-700 rounded-full">Month</div>
                          </div>
                        </div>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {dashboardStats.map((stat, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${stat.iconBg}`}>
                                  {stat.icon}
                                </div>
                              </div>
                              <div className="text-2xl font-bold mt-2">{stat.value}</div>
                              <div className="text-xs flex items-center gap-1 mt-1">
                                <span className={stat.trend > 0 ? "text-green-500" : "text-red-500"}>
                                  {stat.trend > 0 ? "↑" : "↓"} {Math.abs(stat.trend)}%
                                </span>
                                <span className="text-gray-400">vs last week</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Charts & Activity */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Campaign Success Chart */}
                        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm p-5">
                          <h4 className="font-semibold text-sm mb-4">Campaign Success Rate</h4>
                          <div className="h-40 w-full bg-gray-50 dark:bg-gray-700/30 rounded-lg flex items-end justify-between p-3">
                            {chartBars.map((bar, index) => (
                              <div key={index} className="flex flex-col items-center">
                                <div 
                                  className="w-6 bg-gradient-to-t from-lavender-600 to-lavender-400 rounded-t-sm"
                                  style={{ height: `${bar.height}%` }}
                                ></div>
                                <div className="text-xs mt-2">{bar.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Recent Activity */}
                        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm p-5">
                          <h4 className="font-semibold text-sm mb-4">Recent Activity</h4>
                          <div className="space-y-3">
                            {recentActivities.map((activity, index) => (
                              <div key={index} className="flex items-start p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                <div className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${activity.iconBg}`}>
                                  {activity.icon}
                                </div>
                                <div className="ml-3">
                                  <div className="text-sm font-medium">{activity.title}</div>
                                  <div className="text-xs text-gray-500">{activity.time}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Upcoming Campaigns */}
                      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm p-5">
                        <h4 className="font-semibold mb-4">Upcoming Campaigns</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                              <tr>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Influencers</th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                              {upcomingCampaigns.map((campaign, index) => (
                                <tr key={index}>
                                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">{campaign.name}</td>
                                  <td className="px-3 py-2 whitespace-nowrap text-sm">{campaign.brand}</td>
                                  <td className="px-3 py-2 whitespace-nowrap text-sm">{campaign.influencers}</td>
                                  <td className="px-3 py-2 whitespace-nowrap text-sm">{campaign.startDate}</td>
                                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                                    <span className={`px-2 py-1 text-xs rounded-full ${campaign.statusClass}`}>
                                      {campaign.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Notification element */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -top-5 -right-5 max-w-xs w-64 rounded-lg shadow-lg glassmorphism p-4 border border-white/40 dark:border-white/10"
            >
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-lavender-500 dark:bg-lavender-600 flex-shrink-0 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <path d="M15 3h6v6"/>
                    <path d="m10 14 11-11"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-sm">New Partnership Formed</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Brand X has successfully partnered with 5 new influencers this week.</div>
                  <div className="mt-3 flex justify-end space-x-2">
                    <div className="px-3 py-1 bg-lavender-600 text-white text-xs rounded-full">View Details</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Analytics element */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -left-5 max-w-xs w-56 rounded-lg shadow-lg glassmorphism p-4 border border-white/40 dark:border-white/10"
            >
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Platform Growth</div>
              <div className="text-2xl font-bold text-lavender-700 dark:text-lavender-300">+38.2%</div>
              <div className="text-xs text-green-600 mt-1 flex items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>Quarter-over-quarter growth</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Sidebar items data
const sidebarItems = [
  { label: 'Dashboard', icon: <Home size={18} /> },
  { label: 'Analytics', icon: <BarChart3 size={18} /> },
  { label: 'Campaigns', icon: <Activity size={18} /> },
  { label: 'Influencer Network', icon: <Users size={18} /> },
  { label: 'Messages', icon: <MessageSquare size={18} /> },
  { label: 'Calendar', icon: <Calendar size={18} /> },
  { label: 'Settings', icon: <Settings size={18} /> }
];

// Dashboard stats data
const dashboardStats = [
  { 
    label: 'Active Brands', 
    value: '342', 
    trend: 12.5,
    icon: <Users size={16} className="text-white" />,
    iconBg: 'bg-lavender-500 text-white'
  },
  { 
    label: 'Active Influencers', 
    value: '1,205', 
    trend: 8.3,
    icon: <Users size={16} className="text-white" />,
    iconBg: 'bg-indigo-500 text-white'
  },
  { 
    label: 'Revenue', 
    value: '$128K', 
    trend: 23.8,
    icon: <TrendingUp size={16} className="text-white" />,
    iconBg: 'bg-green-500 text-white'
  },
  { 
    label: 'Campaigns', 
    value: '85', 
    trend: -3.2,
    icon: <Activity size={16} className="text-white" />,
    iconBg: 'bg-amber-500 text-white'
  }
];

// Chart bars data
const chartBars = [
  { height: 65, label: 'Jan' },
  { height: 40, label: 'Feb' },
  { height: 55, label: 'Mar' },
  { height: 75, label: 'Apr' },
  { height: 85, label: 'May' },
  { height: 90, label: 'Jun' }
];

// Recent activities data
const recentActivities = [
  { 
    title: 'New influencer campaign launched', 
    time: '10 minutes ago',
    icon: <Activity size={16} className="text-white" />,
    iconBg: 'bg-green-500 text-white'
  },
  { 
    title: 'Brand onboarding completed', 
    time: '1 hour ago',
    icon: <Users size={16} className="text-white" />,
    iconBg: 'bg-lavender-500 text-white'
  },
  { 
    title: 'Analytics reports generated', 
    time: '3 hours ago',
    icon: <BarChart3 size={16} className="text-white" />,
    iconBg: 'bg-amber-500 text-white'
  }
];

// Upcoming campaigns data
const upcomingCampaigns = [
  { 
    name: 'Summer Collection', 
    brand: 'Fashion Brand A', 
    influencers: '15', 
    startDate: 'June 15, 2023',
    status: 'Preparing',
    statusClass: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500'
  },
  { 
    name: 'Product Launch', 
    brand: 'Tech Company B', 
    influencers: '25', 
    startDate: 'June 20, 2023',
    status: 'Confirmed',
    statusClass: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500'
  },
  { 
    name: 'Holiday Special', 
    brand: 'Retail Store C', 
    influencers: '8', 
    startDate: 'July 1, 2023',
    status: 'Draft',
    statusClass: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  }
];

export default Hero;
