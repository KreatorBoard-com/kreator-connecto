
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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

          {/* Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="mt-16 w-full max-w-5xl mx-auto relative"
          >
            <div className="aspect-[16/9] rounded-lg overflow-hidden card-shadow glassmorphism">
              <div className="absolute inset-0 bg-gradient-to-b from-kreator-100/20 to-kreator-200/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-6 flex flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="w-1/3 h-6 bg-kreator-100 rounded-full"></div>
                  </div>
                  <div className="flex flex-1 gap-4">
                    <div className="w-1/4 bg-white/60 rounded-lg shadow-sm p-4">
                      <div className="h-8 w-1/2 bg-kreator-100 rounded-md mb-4"></div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="h-6 bg-kreator-50 rounded-md"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 bg-white/60 rounded-lg shadow-sm p-4">
                      <div className="h-8 bg-kreator-100 rounded-md w-1/3 mb-4"></div>
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="aspect-video bg-kreator-50 rounded-md"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reflection */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-5/6">
              <div className="h-12 bg-gradient-to-b from-kreator-200/20 to-transparent blur-md rounded-full scale-y-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
