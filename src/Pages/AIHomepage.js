import React, { useState, useEffect } from 'react';

const VegiffyHomepage = () => {
  const [currentUser, setCurrentUser] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDeliveryBadge, setShowDeliveryBadge] = useState(true);
  const fullText = "Pure Vegetarian Food";

  // Google Play Store link
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.veggify.veegify';
  // Join Us section link
  const JOIN_US_SECTION_ID = '#join';

  useEffect(() => {
    const userInterval = setInterval(() => {
      setCurrentUser((prev) => (prev + 1) % userTypes.length);
    }, 3000);

    return () => clearInterval(userInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    const badgeInterval = setInterval(() => {
      setShowDeliveryBadge(prev => !prev);
    }, 2000);

    return () => clearInterval(badgeInterval);
  }, []);

  // Function to handle Get Started button click
  const handleGetStartedClick = () => {
    const element = document.querySelector(JOIN_US_SECTION_ID);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle Download App button click
  const handleDownloadAppClick = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  const userTypes = [
    { 
      type: "Customers", 
      description: "Order fresh, healthy vegetarian food",
      icon: "👨‍🍳",
      color: "bg-green-500"
    },
    { 
      type: "Vendors", 
      description: "Sell your delicious vegetarian dishes",
      icon: "🏪",
      color: "bg-green-600"
    },
    { 
      type: "Delivery Partners", 
      description: "Earn by delivering food to customers",
      icon: "🚴",
      color: "bg-green-700"
    },
    { 
      type: "Ambassadors", 
      description: "Promote healthy vegetarian lifestyle",
      icon: "🌟",
      color: "bg-green-800"
    }
  ];

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-white to-green-50 pt-20 overflow-hidden">
      {/* Free Delivery Banner */}
      <div className={`fixed top-20 left-0 right-0 z-50 transition-all duration-500 transform ${
        showDeliveryBadge ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-90'
      }`}>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-10">
            {/* Main Heading */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-green-100 rounded-full px-6 py-3 border border-green-200 shadow-sm animate-pulse">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
                <span className="text-green-800 font-bold text-sm">Trusted by 10,000+ Vegetarian Food Lovers</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Your Platform for 
                  <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mt-2">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                  VEGIFFY connects customers with the best vegetarian food vendors, 
                  delivery partners, and ambassadors for a complete vegetarian food experience.
                </p>
              </div>

              {/* Free Delivery Highlight */}
              <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-6 border-2 border-green-300 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl animate-bounce">
                      🚚
                    </div>
                    <div>
                      <div className="text-white font-black text-2xl mb-1">
                        FREE Delivery
                      </div>
                      <div className="text-green-100 font-bold text-lg">
                        On orders above <span className="text-yellow-300 text-xl">₹399</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-4xl text-white animate-pulse">
                    🎁
                  </div>
                </div>
              </div>

              {/* User Type */}
              <div className="flex items-center space-x-6 p-8 bg-white rounded-3xl border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`text-5xl ${userTypes[currentUser].color} text-white p-4 rounded-2xl shadow-lg animate-bounce`}>
                  {userTypes[currentUser].icon}
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Perfect for <span className="text-green-600">{userTypes[currentUser].type}</span>
                  </div>
                  <div className="text-gray-600 text-lg">
                    {userTypes[currentUser].description}
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: '🥗', text: 'Pure Vegetarian', sub: '100% veg food guaranteed', color: 'bg-green-500' },
                { icon: '⚡', text: 'Fast Delivery', sub: 'Quick service within 30 mins', color: 'bg-green-600' },
                { icon: '🔒', text: 'Safe & Hygienic', sub: 'Quality assured packaging', color: 'bg-green-700' },
                { icon: '💰', text: 'Best Prices', sub: 'Affordable rates always', color: 'bg-green-800' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-5 p-6 bg-white rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold text-lg">{feature.text}</div>
                    <div className="text-gray-600 text-sm font-medium">{feature.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button 
                onClick={handleGetStartedClick}
                className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                <span className="mr-3 text-xl">🚀</span>
                Get Started Now
                <span className="ml-3 text-xl animate-pulse">→</span>
              </button>
              <button 
                onClick={handleDownloadAppClick}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="mr-3 text-xl">📱</span>
                Download App
              </button>
            </div>
          </div>

          {/* Right Side - Platform Cards */}
          <div className="relative">
            {/* Free Delivery Badge on Platform Card */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-green-400 to-green-600 text-white font-black py-3 px-6 rounded-full shadow-2xl border-2 border-yellow-300 animate-pulse flex items-center space-x-2">
                <span className="text-xl">🚚</span>
                <span>Free Delivery on ₹399+</span>
                <span className="text-xl">🎁</span>
              </div>
            </div>

            {/* Floating Animation Container */}
            <div className="relative animate-float">
              {/* Main Platform Card */}
              <div className="bg-white rounded-3xl p-10 border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: '🏪', title: 'Vendors', desc: 'Grow Business', color: 'bg-green-600', delay: '0s' },
                    { icon: '🚴', title: 'VEGIFFY Express', desc: 'Earn Money', color: 'bg-green-700', delay: '0.2s' },
                    { icon: '🌟', title: 'Ambassadors', desc: 'Promote Platform', color: 'bg-green-800', delay: '0.4s' },
                    { icon: '📱', title: 'Easy App', desc: 'User Friendly', color: 'bg-green-500', delay: '0.6s' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110"
                      style={{ animationDelay: item.delay }}
                    >
                      <div className={`relative w-24 h-24 mx-auto ${item.color} rounded-3xl flex items-center justify-center text-4xl text-white shadow-2xl mb-4 group-hover:animate-bounce transition-all duration-300`}>
                        {item.icon}
                      </div>
                      <p className="text-gray-900 font-bold text-lg mb-2">
                        {item.title}
                      </p>
                      <p className="text-gray-600 text-sm font-medium">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Center Decoration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {[
            { number: '10K+', label: 'Happy Customers', icon: '😊', color: 'bg-green-500' },
            { number: '500+', label: 'Food Vendors', icon: '🏪', color: 'bg-green-600' },
            { number: '1K+', label: 'Delivery Partners', icon: '🚴', color: 'bg-green-700' },
            { number: '100+', label: 'Ambassadors', icon: '🌟', color: 'bg-green-800' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-3xl border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              <div className={`w-20 h-20 mx-auto mb-6 ${stat.color} rounded-3xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-800 font-bold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Free Delivery Banner at Bottom */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl p-8 border-2 border-green-300 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl animate-bounce">
                🚚
              </div>
              <div>
                <div className="text-white font-black text-3xl mb-2">
                  Enjoy FREE Delivery
                </div>
                <div className="text-green-100 text-xl font-bold">
                  On all orders above <span className="text-yellow-300 text-2xl">₹399</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={handleGetStartedClick}
                className="bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Join Now
              </button>
              <button 
                onClick={handleDownloadAppClick}
                className="bg-black text-white hover:bg-gray-800 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default VegiffyHomepage;