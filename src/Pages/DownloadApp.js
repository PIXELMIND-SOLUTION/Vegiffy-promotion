import React, { useState, useEffect } from 'react';

const DownloadApp = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  const features = [
    {
      icon: '🥗',
      title: 'Pure Vegetarian',
      description: '100% vegetarian food from verified vendors',
      color: 'bg-green-500'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick food delivery in 30 minutes',
      color: 'bg-green-600'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Great deals and discounts on food',
      color: 'bg-green-700'
    },
    {
      icon: '📱',
      title: 'Easy to Use',
      description: 'Simple and user-friendly app interface',
      color: 'bg-green-800'
    }
  ];

  const appStats = [
    { number: '4.8', label: 'App Rating', icon: '⭐' },
    { number: '10K+', label: 'Downloads', icon: '📥' },
    { number: '95%', label: 'Satisfaction', icon: '😊' },
    { number: '24/7', label: 'Support', icon: '🛡️' }
  ];

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(featureInterval);
  }, []);

  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.veggify.veegify&pli=1', '_blank');
  };

  const openAppStore = () => {
    window.open('https://apps.apple.com/in/app/vegiffy/id6757138352', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 md:px-8 md:py-4 border-2 border-green-200 shadow-2xl mb-6 md:mb-8 animate-pulse">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-bounce"></span>
            <span className="text-green-800 font-bold text-sm md:text-lg">Available on iOS & Android</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-4 md:mb-8">
            Download{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              VEGIFFYY App
            </span>
          </h2>
          
          <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            Get the best vegetarian food experience on your phone. Order food, track delivery, 
            and enjoy great deals with our easy-to-use mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-green-200 shadow-2xl transition-all duration-500 group ${
                    index === currentFeature ? 'scale-105 bg-green-50 shadow-3xl' : 'scale-100'
                  } hover:scale-105 hover:shadow-3xl`}
                >
                  <div className="flex items-center space-x-3 md:space-x-5">
                    <div className={`w-12 h-12 md:w-16 md:h-16 ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-black text-base md:text-xl mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-700 text-xs md:text-sm font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6">
              {appStats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-3 md:p-6 bg-white rounded-xl md:rounded-2xl border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                >
                  <div className="text-xl md:text-3xl mb-1 md:mb-3 transform group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-3xl font-black text-green-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 font-bold text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <button 
                  onClick={openAppStore}
                  className="flex items-center justify-center space-x-3 md:space-x-4 bg-black hover:bg-gray-800 text-white py-3 md:py-5 px-5 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 group border-2 border-gray-700 shadow-2xl hover:shadow-3xl"
                >
                  <div className="text-2xl md:text-4xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs md:text-sm text-gray-400">Download on the</div>
                    <div className="text-base md:text-xl font-black">App Store</div>
                  </div>
                </button>

                <button 
                  onClick={openPlayStore}
                  className="flex items-center justify-center space-x-3 md:space-x-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white py-3 md:py-5 px-5 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 group border-2 border-green-500 shadow-2xl hover:shadow-3xl"
                >
                  <div className="text-2xl md:text-4xl">🤖</div>
                  <div className="text-left">
                    <div className="text-xs md:text-sm text-green-200">Get it on</div>
                    <div className="text-base md:text-xl font-black">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Normal Phone with Green Background */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div 
              className={`relative mx-auto w-72 md:w-80 h-[520px] md:h-[600px] bg-green-600 rounded-[2.5rem] shadow-2xl transform transition-all duration-500 ${
                isPhoneHovered ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setIsPhoneHovered(true)}
              onMouseLeave={() => setIsPhoneHovered(false)}
            >
              {/* Simple Phone Frame (no notch, no side buttons) */}
              <div className="absolute inset-0 rounded-[2.5rem] border-[6px] border-green-700"></div>
              
              {/* Screen Area */}
              <div className="absolute top-2 left-2 right-2 bottom-2 bg-white rounded-[2rem] overflow-hidden">
                <img 
                  src="/vegiffyhome.jpg" 
                  alt="VEGIFFYY App Home Screen" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-green-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-5 h-5 md:w-6 md:h-6 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Platform Badges */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 border-2 border-green-200 shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-10">Why Choose VEGIFFYY App?</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {[
                { icon: '🥗', text: 'Pure Vegetarian' },
                { icon: '🚚', text: 'Fast Delivery' },
                { icon: '💰', text: 'Best Prices' },
                { icon: '🛡️', text: 'Secure Payment' },
                { icon: '⭐', text: 'Verified Vendors' },
                { icon: '🎁', text: 'Daily Offers' }
              ].map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 md:space-x-4 bg-gradient-to-br from-green-50 to-white rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-4 border-2 border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <span className="text-xl md:text-3xl transform group-hover:scale-110 transition-all duration-300">{badge.icon}</span>
                  <span className="text-gray-900 font-black text-sm md:text-lg">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;