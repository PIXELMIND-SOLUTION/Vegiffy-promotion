import React, { useState, useEffect } from 'react';
import vegiffyLogo from '../images/veggifylogo.png'; // Adjust path if needed

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerSections = [
    {
      title: 'Order Food',
      links: [
        { name: 'Browse Restaurants', icon: '🍽️', clickable: false },
        { name: 'Weekly Specials', icon: '⭐', clickable: false },
        { name: 'Group Orders', icon: '👥', clickable: false },
        { name: 'Track Order', icon: '🚚', clickable: false }
      ]
    },
    {
      title: 'For Vendors',
      links: [
        { name: 'Join as Restaurant', href: 'https://vendor.vegiffy.in/', icon: null, clickable: true },
        { name: 'Vendor Dashboard', clickable: false },
        { name: 'Business Tools', clickable: false },
        { name: 'Partner Support', clickable: false }
      ]
    },
    {
      title: 'Join Our Team',
      links: [
        { name: 'Vegiffy Express', clickable: false },
        { name: 'Become Ambassador', href: 'https://panel.vegiffy.in/vegiffy-ambassador', clickable: true },
        { name: 'Careers', clickable: false },
        { name: 'Internships', clickable: false }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', clickable: false },
        { name: 'Contact Us', clickable: false },
        { name: 'FAQ', clickable: false },
        { name: 'Feedback', clickable: false }
      ]
    }
  ];

  const cities = [
    'Hyderabad',
  ];

  return (
    <footer className="bg-gradient-to-br from-green-500 to-green-700 relative overflow-hidden mt-2">
      {/* Curved Top with Shadow */}
      <div className="absolute -top-8 left-0 right-0 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-b-full shadow-2xl"></div>
      
      {/* Floating Food Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-2xl animate-bounce">🥗</div>
        <div className="absolute top-20 right-20 text-xl animate-bounce delay-300">🍎</div>
        <div className="absolute bottom-20 left-1/4 text-lg animate-pulse">🥑</div>
        <div className="absolute top-1/2 right-1/4 text-xl animate-bounce delay-700">🥦</div>
      </div>
      
      <div className="relative z-10 pt-20">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                {/* Circular logo container */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 overflow-hidden">
                  <img 
                    src={vegiffyLogo} 
                    alt="Vegiffy Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white drop-shadow-lg">VEGIFFY</h3>
                  <p className="text-green-100 text-lg font-medium">100% Pure Veg Food Platform</p>
                </div>
              </div>
              
              <p className="text-green-100 mb-6 leading-relaxed text-lg">
                India's largest pure vegetarian food delivery platform. Order from top restaurants, 
                join as vendor or delivery partner, and be part of our growing community.
              </p>

              {/* Cities Section */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Available in Cities:</h4>
                <div className="flex flex-wrap gap-2">
                  {cities.slice(0, 6).map(city => (
                    <span key={city} className="px-3 py-1 bg-white/20 rounded-full text-green-100 text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-white font-bold text-xl mb-4 border-l-4 border-yellow-400 pl-3">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.clickable ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-green-100 hover:text-white transition-all duration-300 group text-sm font-medium"
                        >
                          {link.icon && (
                            <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">
                              {link.icon}
                            </span>
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </a>
                      ) : (
                        <span className="flex items-center space-x-2 text-green-100 text-sm font-medium cursor-default">
                          {link.icon && (
                            <span className="text-lg">{link.icon}</span>
                          )}
                          <span>{link.name}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 bg-green-600/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              
              {/* Copyright */}
              <div className="text-white text-sm font-medium">
                © {currentYear} VEGIFFY - Pure Veg Food Platform. All rights reserved.
              </div>

              {/* Legal Links - Non-clickable */}
              <div className="flex space-x-6">
                <span className="text-green-100 text-sm cursor-default">Privacy</span>
                <span className="text-green-100 text-sm cursor-default">Terms</span>
                <span className="text-green-100 text-sm cursor-default">Cookies</span>
                <span className="text-green-100 text-sm cursor-default">Sitemap</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10 backdrop-blur-sm"></div>
    </footer>
  );
};

export default Footer;