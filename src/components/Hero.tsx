
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

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
            className="mb-5 inline-flex items-center rounded-full border border-kreator-200 bg-white px-3 py-1 text-sm text-kreator-700 shadow-sm"
          >
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-kreator-500"></span>
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
                "bg-gradient-to-r from-kreator-200 to-kreator-100"
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
              className="rounded-full px-8 bg-kreator-600 hover:bg-kreator-700 hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-kreator-300 hover:bg-kreator-50 hover:text-kreator-700 transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Influencer Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="mt-16 w-full max-w-5xl mx-auto relative"
          >
            <div className="rounded-xl overflow-hidden card-shadow glassmorphism">
              <div className="absolute inset-0 bg-gradient-to-b from-kreator-100/20 to-kreator-200/20"></div>
              
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
                      <span className="text-sm font-medium text-kreator-700 dark:text-kreator-300">Influencer Dashboard</span>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-kreator-100 dark:bg-kreator-800"></div>
                </div>
                
                {/* Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Profile Section */}
                  <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm p-5">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-kreator-400 to-kreator-600 flex items-center justify-center text-white text-4xl font-light overflow-hidden">
                          <img 
                            src="/lovable-uploads/2687cad3-8def-4fa4-b52e-845f338d0aa0.png" 
                            alt="Influencer profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-kreator-500 text-white flex items-center justify-center border-2 border-white">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="mt-4 text-xl font-bold">Alex Rodriguez</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">@alexcreator</p>
                      <div className="mt-2 px-3 py-1 bg-kreator-50 dark:bg-kreator-900/50 text-kreator-600 dark:text-kreator-300 rounded-full text-xs">
                        College Ambassador 🎓
                      </div>
                      
                      <div className="mt-4 w-full">
                        <div className="text-sm font-medium text-gray-500 mb-2">Social Media Following</div>
                        <div className="space-y-3">
                          {socialMediaAccounts.map((account, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                              <div className="flex items-center">
                                <div className="text-kreator-600 dark:text-kreator-400">
                                  {account.icon}
                                </div>
                                <span className="ml-2 text-sm font-medium">{account.name}</span>
                              </div>
                              <span className="font-semibold text-sm">{account.followers}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 w-full">
                        <div className="text-sm font-medium text-gray-500 mb-2">Engagement Rate</div>
                        <div className="h-6 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-kreator-400 to-kreator-600 rounded-full"
                            style={{ width: '58%' }}
                          >
                            <div className="h-full flex items-center justify-center text-white text-xs font-medium">
                              5.8%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Performance */}
                  <div className="md:col-span-2 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-sm p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-bold">Portfolio & Content Performance</h3>
                      <div className="flex space-x-1">
                        <div className="px-3 py-1 text-xs bg-kreator-500 text-white rounded-full">All</div>
                        <div className="px-3 py-1 text-xs bg-white dark:bg-gray-700 rounded-full">Images</div>
                        <div className="px-3 py-1 text-xs bg-white dark:bg-gray-700 rounded-full">Videos</div>
                      </div>
                    </div>
                    
                    {/* Performance Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {performanceStats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                          <div className="text-xl font-bold">{stat.value}</div>
                          <div className="text-xs flex items-center gap-1 mt-1">
                            <span className={stat.trend > 0 ? "text-green-500" : "text-red-500"}>
                              {stat.trend > 0 ? "↑" : "↓"} {Math.abs(stat.trend)}%
                            </span>
                            <span className="text-gray-400">vs last month</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Content Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {contentItems.map((item, index) => (
                        <div key={index} className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative group">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                            <div className="text-white text-xs font-medium">{item.type}</div>
                            <div className="flex items-center text-white/80 text-xs mt-1">
                              <span className="flex items-center mr-2">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                                {item.likes}
                              </span>
                              <span className="flex items-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                                {item.comments}
                              </span>
                            </div>
                          </div>
                          <div className={`h-full w-full flex items-center justify-center text-kreator-500 ${item.type === 'Video' ? 'bg-kreator-50' : ''}`}>
                            {item.type === 'Video' && (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Upcoming Partnerships */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-sm mb-2">Upcoming Partnerships</h4>
                      <div className="flex space-x-2 overflow-x-auto pb-2">
                        {partnerships.map((partner, index) => (
                          <div key={index} className="flex-shrink-0 w-16 h-16 rounded-lg bg-white dark:bg-gray-700 p-2 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-600">
                            <div className="h-6 w-6 bg-kreator-100 dark:bg-kreator-800 rounded-md mb-1"></div>
                            <div className="text-xs font-medium truncate w-full text-center">{partner}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Navigation */}
                <div className="mt-6 bg-white/60 dark:bg-gray-800/60 rounded-xl p-2 flex justify-around">
                  {navItems.map((item, index) => (
                    <div key={index} className={`flex flex-col items-center px-4 py-2 rounded-lg ${index === 0 ? 'bg-kreator-50 dark:bg-kreator-900/50 text-kreator-600 dark:text-kreator-300' : 'text-gray-500'}`}>
                      <div>{item.icon}</div>
                      <span className="text-xs mt-1">{item.label}</span>
                    </div>
                  ))}
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
                <div className="h-8 w-8 rounded-full bg-kreator-500 dark:bg-kreator-600 flex-shrink-0 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <path d="M15 3h6v6"/>
                    <path d="m10 14 11-11"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-sm">New Collaboration Request</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Fashion Brand is interested in your profile for their summer campaign.</div>
                  <div className="mt-3 flex justify-end space-x-2">
                    <div className="px-3 py-1 bg-kreator-600 text-white text-xs rounded-full">View Details</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Earnings element */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -left-5 max-w-xs w-56 rounded-lg shadow-lg glassmorphism p-4 border border-white/40 dark:border-white/10"
            >
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Total Earnings</div>
              <div className="text-2xl font-bold text-kreator-700 dark:text-kreator-300">$15,420.50</div>
              <div className="text-xs text-green-600 mt-1 flex items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>+12.5% from last month</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Social media accounts data
const socialMediaAccounts = [
  { 
    name: 'Instagram', 
    followers: '125.4K',
    icon: <Instagram size={16} />
  },
  { 
    name: 'Twitter', 
    followers: '87.2K',
    icon: <Twitter size={16} />
  },
  { 
    name: 'Facebook', 
    followers: '45.6K',
    icon: <Facebook size={16} />
  },
  { 
    name: 'YouTube', 
    followers: '220K',
    icon: <Youtube size={16} />
  },
  { 
    name: 'LinkedIn', 
    followers: '32.5K',
    icon: <Linkedin size={16} />
  }
];

// Performance stats data
const performanceStats = [
  { label: 'Average Likes', value: '15.3K', trend: 7.2 },
  { label: 'Engagement Rate', value: '5.8%', trend: 2.1 },
  { label: 'Conversion Rate', value: '3.2%', trend: -0.5 }
];

// Content items for the portfolio
const contentItems = [
  { type: 'Image', likes: '12.5K', comments: '342' },
  { type: 'Video', likes: '8.2K', comments: '156' },
  { type: 'Image', likes: '10.1K', comments: '278' },
  { type: 'Image', likes: '9.7K', comments: '201' },
  { type: 'Video', likes: '15.3K', comments: '425' },
  { type: 'Image', likes: '11.2K', comments: '315' }
];

// Upcoming partnerships
const partnerships = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour'];

// Navigation items
const navItems = [
  { 
    label: 'Dashboard', 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    )
  },
  { 
    label: 'Messages', 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  { 
    label: 'Analytics', 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 21H3" />
        <path d="M19 7v14" />
        <path d="M13 10v11" />
        <path d="M7 15v6" />
      </svg>
    )
  },
  { 
    label: 'Settings', 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
];

export default Hero;
