
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer id="future" className="bg-gray-50 dark:bg-gray-900 pt-16 pb-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-semibold text-kreator-700">
                Kreator<span className="font-light">Board</span>
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xs">
              The ultimate platform for influencer marketing, connecting brands and creators with AI-powered matching and transparent collaborations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-kreator-600 hover:bg-white transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-kreator-600 dark:hover:text-kreator-400 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Future Web3 Integration</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              We're building toward a decentralized future with blockchain technology that will revolutionize influencer marketing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {web3Features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-kreator-100 text-kreator-600 dark:bg-kreator-900 dark:text-kreator-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KreatorBoard. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="mailto:info@kreatordash.com" className="text-gray-600 dark:text-gray-400 hover:text-kreator-600 dark:hover:text-kreator-400 text-sm">
              Contact Us
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-kreator-600 dark:hover:text-kreator-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-kreator-600 dark:hover:text-kreator-400 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    href: "https://twitter.com/kreatorboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    )
  },
  {
    href: "https://www.instagram.com/kreatorboard/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    href: "mailto:info@kreatordash.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    href: "https://www.linkedin.com/company/kreatorboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  }
];

const footerLinks = [
  {
    title: "For Influencers",
    links: [
      { text: "Dashboard Features", href: "#" },
      { text: "Pricing Options", href: "#" },
      { text: "College Verification", href: "#" },
      { text: "Affiliate Program", href: "#" },
      { text: "Success Stories", href: "#" }
    ]
  },
  {
    title: "For Brands",
    links: [
      { text: "Find Influencers", href: "#" },
      { text: "Authenticity Tools", href: "#" },
      { text: "ROI Tracking", href: "#" },
      { text: "Local Targeting", href: "#" },
      { text: "Case Studies", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Contact", href: "#" },
      { text: "Support", href: "#" }
    ]
  }
];

const web3Features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
    title: "Secure Payments",
    description: "Smart contract-based secure payments for influencer campaigns."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      </svg>
    ),
    title: "Verified Authenticity",
    description: "Decentralized verification of influencer authenticity."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
    ),
    title: "NFT Proof",
    description: "NFT-based proof of completed collaborations for transparency."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4"/>
        <path d="M5 5.3 7.1 7"/>
        <path d="M2 12h4"/>
        <path d="M5 18.7 7.1 17"/>
        <path d="M12 22v-4"/>
        <path d="M17 20.9 19 19"/>
        <path d="M22 12h-4"/>
        <path d="M17 3.1 19 5"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Royalty Payments",
    description: "Web3-powered royalty payments for recurring partnerships."
  }
];

export default Footer;
