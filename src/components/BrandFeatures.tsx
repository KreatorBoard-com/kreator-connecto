
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import InfluencerCard from './InfluencerCard';

const BrandFeatures = () => {
  return (
    <section id="brands" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center rounded-full border border-kreator-200 bg-white px-3 py-1 text-sm text-kreator-700 shadow-sm"
            >
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-kreator-500"></span>
              <span>For Companies & Brands</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Find the perfect influencers for your brand
            </motion.h2>
            
            <div className="space-y-6">
              {brandFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
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
          
          <div className="grid grid-cols-2 gap-6">
            {influencers.map((influencer, index) => (
              <InfluencerCard key={index} {...influencer} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const brandFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    ),
    title: "AI-Powered Search",
    description: "Find influencers by niche, engagement rate, location, or college with our sophisticated search tools."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 9.4 7.5 4.21"/>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <path d="M3.29 7 12 12l8.71-5"/>
        <path d="M12 22V12"/>
      </svg>
    ),
    title: "Authenticity Verification",
    description: "Our AI analyzes profiles to detect fake followers and ensure you're partnering with authentic influencers."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    title: "ROI Prediction",
    description: "Get easy-to-understand conversion estimates before you collaborate – no complex analytics needed."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 7v6h-6"/>
        <path d="m21 13-5-5 5-5"/>
        <path d="M3 17v-6h6"/>
        <path d="m3 11 5 5-5 5"/>
      </svg>
    ),
    title: "Seamless Collaboration",
    description: "Send proposals, negotiate terms, and process payments all within our secure platform."
  },
];

const influencers = [
  {
    imageSrc: "/placeholder.svg",
    name: "Alex Johnson",
    handle: "alexjfoodie",
    location: "New York University",
    followers: "45.2K",
    engagement: "4.8%",
    niche: "Food & Lifestyle",
    isCollegeVerified: true,
    index: 0
  },
  {
    imageSrc: "/placeholder.svg",
    name: "Sophia Chen",
    handle: "sophiafit",
    location: "Los Angeles",
    followers: "87.5K",
    engagement: "3.2%",
    niche: "Fitness",
    index: 1
  },
  {
    imageSrc: "/placeholder.svg",
    name: "Marcus Williams",
    handle: "marcustech",
    location: "MIT",
    followers: "32.1K",
    engagement: "5.7%",
    niche: "Technology",
    isCollegeVerified: true,
    index: 2
  },
  {
    imageSrc: "/placeholder.svg",
    name: "Priya Sharma",
    handle: "priyabeauty",
    location: "Chicago",
    followers: "126K",
    engagement: "4.1%",
    niche: "Beauty",
    index: 3
  },
];

export default BrandFeatures;
