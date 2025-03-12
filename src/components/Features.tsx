
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center rounded-full border border-kreator-200 bg-white px-3 py-1 text-sm text-kreator-700 shadow-sm"
          >
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-kreator-500"></span>
            <span>Key Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features That Make a Difference
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Kreator Dashboard combines sophisticated AI with intuitive design to create a seamless experience for both influencers and brands.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "group p-6 rounded-xl",
        "bg-white dark:bg-gray-800",
        "hover:shadow-lg transition-all duration-300",
        "border border-gray-100 dark:border-gray-700",
        "hover:border-kreator-200 dark:hover:border-kreator-700"
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-kreator-100 text-kreator-600 dark:bg-kreator-900 dark:text-kreator-300 transition-colors group-hover:bg-kreator-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-kreator-600 dark:group-hover:text-kreator-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: "Hyper-Local Targeting",
    description: "Find influencers by college, city, or neighborhood for highly targeted campaigns that reach your exact audience."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit">
        <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/>
        <path d="M16 8V5c0-1.1.9-2 2-2"/>
        <path d="M12 13h4"/>
        <path d="M12 18h6a2 2 0 0 1 0 4"/>
        <path d="M12 8h8"/>
        <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
        <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
        <path d="M20.5 20a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
        <path d="M18.5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
      </svg>
    ),
    title: "AI-Powered Matching",
    description: "Our advanced algorithms suggest the best influencers for your product based on past performance and authentic engagement."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-check">
        <path d="M18 6 7 17l-5-5"/>
        <path d="m22 10-7.5 7.5L13 16"/>
      </svg>
    ),
    title: "Authenticity Verification",
    description: "AI-powered tools detect fake followers and provide authentic engagement metrics, ensuring genuine collaborations."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    ),
    title: "College Ambassador Program",
    description: "Verify your college email to earn a special badge and gain priority in search results for campus collaboration opportunities."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-line-chart">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    title: "ROI Prediction",
    description: "Receive accurate engagement and conversion estimates before finalizing partnerships, helping brands make data-driven decisions."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
        <rect width="20" height="14" x="2" y="6" rx="2"/>
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <path d="M22 10H2"/>
        <path d="M7 10v4"/>
        <path d="M17 10v4"/>
      </svg>
    ),
    title: "Local Business Hub",
    description: "Small businesses can post partnership requests specific to their location, connecting with relevant local influencers."
  },
];

export default Features;
