import React, { useState } from 'react';
import vegiffyLogo from '../images/veggifylogo.jpeg'; // Adjust path if needed
import jeipexLogo from '../images/JEIPLX.png'; // Import JEIPEX logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Google Play Store link
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.veggify.veegify';

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Function to open Play Store link
  const handleInstallClick = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  return (
    <nav className="bg-green-600 fixed w-full z-50 h-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src={vegiffyLogo} 
                  alt="Vegiffy Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                VEGIFFY
              </span>
            </div>
          </div>

          {/* Center - Navigation Items */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-yellow-200 font-semibold transition-colors duration-200 text-lg"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side - Button and JEIPEX Logo */}
          <div className="flex items-center space-x-4">
            {/* JEIPEX Logo and Text - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <div className="text-white text-xs text-center">
                <div>Powered by</div>
                <div>Nemishhrree</div>
              </div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                <img 
                  src={jeipexLogo} 
                  alt="JEIPEX Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-xs font-bold">
                JEIPLX
              </div>
            </div>

            <button 
              onClick={handleInstallClick}
              className="hidden sm:flex items-center bg-white text-green-600 hover:bg-yellow-50 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Install Now
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 rounded-xl text-white hover:bg-green-700 focus:outline-none transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-500 mt-2">
            <div className="px-2 pt-4 pb-4 space-y-3 bg-green-700 rounded-xl mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:bg-green-600 block px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              
              {/* JEIPEX Section in Mobile Menu */}
              <div className="flex items-center justify-center space-x-3 pt-3 border-t border-green-500 mt-3">
                <div className="text-white text-xs text-center">
                  <div>Powered by Nemishhrree</div>
                  <div>Operated by</div>
                </div>
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                  <img 
                    src={jeipexLogo} 
                    alt="JEIPEX Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white text-xs font-bold">
                  JEIPLX
                </div>
              </div>

              <div className="pt-3">
                <button 
                  onClick={handleInstallClick}
                  className="w-full flex justify-center items-center bg-white text-green-600 hover:bg-yellow-50 font-bold py-3 px-4 rounded-full transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Install Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;