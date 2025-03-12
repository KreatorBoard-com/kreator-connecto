
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const InfluencerFeatures = () => {
  return (
    <section id="influencers" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Dashboard mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-xl glassmorphism"
              >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm font-medium">Influencer Dashboard</div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="h-8 bg-kreator-100 dark:bg-kreator-800 w-1/3 rounded-md mb-4"></div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                          <div className="h-4 bg-kreator-50 dark:bg-kreator-900 rounded mb-2 w-2/3"></div>
                          <div className="h-8 bg-kreator-100 dark:bg-kreator-800 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="h-8 bg-kreator-100 dark:bg-kreator-800 w-1/4 rounded-md mb-4"></div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                          <div className="w-10 h-10 rounded-full bg-kreator-100 dark:bg-kreator-900 flex-shrink-0"></div>
                          <div className="ml-3 flex-grow">
                            <div className="h-4 bg-kreator-50 dark:bg-kreator-900 rounded w-1/3 mb-2"></div>
                            <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-2/3"></div>
                          </div>
                          <div className="w-20 h-8 bg-kreator-100 dark:bg-kreator-800 rounded-md"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Notification element */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-5 -right-5 max-w-xs w-64 rounded-lg shadow-lg glassmorphism p-4 border border-white/40 dark:border-white/10"
              >
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-kreator-100 dark:bg-kreator-800 flex-shrink-0 flex items-center justify-center text-kreator-600 dark:text-kreator-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <path d="M15 3h6v6"/>
                      <path d="m10 14 11-11"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="h-4 bg-kreator-50 dark:bg-kreator-900 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-full mb-1"></div>
                    <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-2/3"></div>
                    <div className="mt-3 flex justify-end space-x-2">
                      <div className="h-6 w-16 bg-kreator-600 rounded-full"></div>
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
                <div className="h-4 bg-kreator-50 dark:bg-kreator-900 rounded w-1/2 mb-3"></div>
                <div className="h-8 bg-kreator-100 dark:bg-kreator-800 rounded-md mb-3"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-full mb-1"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
              </motion.div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center rounded-full border border-kreator-200 bg-white px-3 py-1 text-sm text-kreator-700 shadow-sm"
            >
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-kreator-500"></span>
              <span>For Influencers</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Manage your influence and grow your business
            </motion.h2>
            
            <div className="space-y-6">
              {influencerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-kreator-100 text-kreator-600 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const influencerFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3h14"/>
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
        <path d="M6 15h6"/>
        <path d="M6 18h6"/>
      </svg>
    ),
    title: "Comprehensive Dashboard",
    description: "Track earnings, proposals, and active collaborations all in one place with real-time updates."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Customizable Pricing",
    description: "Choose to display fixed rates or receive custom offers from brands based on your unique value."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 13V9l2 2 2-2v4"/>
      </svg>
    ),
    title: "Affiliate Link Management",
    description: "Display and track all your active brand deals and affiliate links in one organized system."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    ),
    title: "College Ambassador Badge",
    description: "Verify your college email to earn a special badge that gives you priority in search results."
  },
];

export default InfluencerFeatures;
