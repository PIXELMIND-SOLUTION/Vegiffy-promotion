import React, { useState, useEffect } from 'react';
import vegiffyLogo from '../images/veggifylogo.jpeg'; // Adjust path if needed
import jeipexLogo from '../images/JEIPLX.png'; // Import JEIPEX logo

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerSections = [
    {
      title: 'Order Food',
      links: [
        { name: 'Browse Restaurants', href: '#', icon: '🍽️' },
        { name: 'Weekly Specials', href: '#', icon: '⭐' },
        { name: 'Group Orders', href: '#', icon: '👥' },
        { name: 'Track Order', href: '#', icon: '🚚' }
      ]
    },
    {
      title: 'For Vendors',
      links: [
        { name: 'Join as Restaurant', href: '#' },
        { name: 'Vendor Dashboard', href: '#' },
        { name: 'Business Tools', href: '#' },
        { name: 'Partner Support', href: '#' }
      ]
    },
    {
      title: 'Join Our Team',
      links: [
        { name: 'VEGIFFY Express', href: '#' },
        { name: 'Become Ambassador', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Internships', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Feedback', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Facebook', href: '#', icon: '👥' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
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
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 overflow-hidden">
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

            
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transform transition-all duration-300 shadow-lg"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
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
                      <a
                        href={link.href}
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

              {/* Powered By Section with JEIPEX Logo */}
              <div className="flex items-center space-x-3">
                <div className="text-green-100 text-sm font-medium text-center">
                  <div>Powered by Nemishhrree</div>
                  <div>Operated by</div>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src={jeipexLogo} 
                    alt="JEIPEX Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-green-100 text-sm font-bold">
                  JEIPLX
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-green-100 hover:text-white text-sm transition-all duration-300">
                  Privacy
                </a>
                <a href="#" className="text-green-100 hover:text-white text-sm transition-all duration-300">
                  Terms
                </a>
                <a href="#" className="text-green-100 hover:text-white text-sm transition-all duration-300">
                  Cookies
                </a>
                <a href="#" className="text-green-100 hover:text-white text-sm transition-all duration-300">
                  Sitemap
                </a>
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