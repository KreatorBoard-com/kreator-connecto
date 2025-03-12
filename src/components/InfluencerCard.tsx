
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InfluencerCardProps {
  imageSrc: string;
  name: string;
  handle: string;
  location: string;
  followers: string;
  engagement: string;
  niche: string;
  isCollegeVerified?: boolean;
  index: number;
}

const InfluencerCard = ({
  imageSrc,
  name,
  handle,
  location,
  followers,
  engagement,
  niche,
  isCollegeVerified = false,
  index,
}: InfluencerCardProps) => {
  const delay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "group",
        "rounded-xl overflow-hidden",
        "bg-white dark:bg-gray-800",
        "border border-gray-100 dark:border-gray-700",
        "transition-all duration-300",
        "hover:shadow-xl hover:scale-[1.02]",
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-tr from-kreator-50 to-kreator-100 dark:from-kreator-900 dark:to-kreator-800 opacity-50"></div>
        
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <div className="absolute inset-0 bg-kreator-100"></div>
            <div className="absolute inset-0 flex items-center justify-center text-3xl text-kreator-600">
              {name.charAt(0)}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">@{handle}</p>
          </div>
          {isCollegeVerified && (
            <span className="inline-flex items-center rounded-full bg-kreator-50 px-2.5 py-0.5 text-xs font-medium text-kreator-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
              College Verified
            </span>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400">Location</span>
            <span className="font-medium">{location}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400">Followers</span>
            <span className="font-medium">{followers}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400">Engagement</span>
            <span className="font-medium">{engagement}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400">Niche</span>
            <span className="font-medium">{niche}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="inline-flex items-center rounded-full border border-kreator-200 bg-kreator-50 px-2.5 py-0.5 text-xs font-medium text-kreator-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M3 3v18h18"/>
              <path d="m19 9-5 5-4-4-3 3"/>
            </svg>
            High ROI Potential
          </div>
          <button className="text-kreator-600 hover:text-kreator-700 text-sm font-medium transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default InfluencerCard;
