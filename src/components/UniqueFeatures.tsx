
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const UniqueFeatures = () => {
  return (
    <section id="features" className="py-20">
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
            <span>Unique Advantages</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Features That Make Us Different
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Kreator Dashboard introduces revolutionary features that transform how brands and influencers collaborate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {uniqueFeatures.slice(0, 2).map((feature, index) => (
              <FeatureBlock 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                examples={feature.examples}
                delay={index * 0.2}
              />
            ))}
          </div>
          <div>
            {uniqueFeatures.slice(2, 4).map((feature, index) => (
              <FeatureBlock 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                examples={feature.examples}
                delay={(index + 2) * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
  delay: number;
}

const FeatureBlock = ({ icon, title, description, examples, delay }: FeatureBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-kreator-100 dark:bg-kreator-800 text-kreator-600 dark:text-kreator-400 rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4 pl-16">{description}</p>
      <div className="pl-16 space-y-2">
        {examples.map((example, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + (i * 0.1) }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="flex-shrink-0 w-5 h-5 text-kreator-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7"></path>
              </svg>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{example}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const uniqueFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Hyper-Local Influencer Search",
    description: "Find influencers based on specific locations, colleges, or neighborhoods for highly targeted campaigns.",
    examples: [
      "Search for influencers at specific universities or colleges",
      "Find micro-influencers in your exact neighborhood or city",
      "No more manual Instagram searching for local talent"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/>
        <path d="M16 8V5c0-1.1.9-2 2-2"/>
        <path d="M12 13h4"/>
        <path d="M12 18h6a2 2 0 0 1 0 4"/>
        <path d="M12 8h8"/>
      </svg>
    ),
    title: "AI-Based Influencer-Brand Matching",
    description: "Our AI analyzes past performance to match brands with the most effective influencers for their products.",
    examples: [
      "Upload a product description for instant influencer matches",
      "Get ROI predictions before booking any collaboration",
      "View conversion estimates based on real performance data"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    ),
    title: "Verified College Ambassador Program",
    description: "A special program for student influencers that gives them priority in search results for campus marketing.",
    examples: [
      "Verify your college email to earn a special badge",
      "Get priority ranking in search results for brands",
      "Access exclusive campus ambassador opportunities"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
        <path d="M8 7h6"/>
        <path d="M8 11h8"/>
        <path d="M8 15h6"/>
      </svg>
    ),
    title: "Local Business Partnership Hub",
    description: "A dedicated space for small businesses to connect with local influencers for targeted marketing campaigns.",
    examples: [
      "Post partnership requests specific to your location",
      "Influencers can apply directly to your campaigns",
      "AI tracks engagement and campaign success automatically"
    ]
  },
];

export default UniqueFeatures;
