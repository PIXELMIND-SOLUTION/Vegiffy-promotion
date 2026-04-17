import React, { useState, useEffect } from 'react';

const KeyFeatures = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: '🥗',
      title: 'Pure Vegetarian Food',
      description: '100% vegetarian food with quality assurance and hygiene standards',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      stats: '100% Veg',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      icon: '🏪',
      title: 'Vendor Network',
      description: 'Connect with verified vegetarian food vendors and restaurants',
      color: 'bg-gradient-to-br from-green-600 to-green-700',
      stats: '500+ Vendors',
      badgeColor: 'bg-green-200 text-green-800'
    },
    {
      icon: '🚴',
      title: 'VEGIFFY Express',
      description: 'Quick and reliable food delivery by our dedicated partners',
      color: 'bg-gradient-to-br from-green-700 to-green-800',
      stats: '30 Min Delivery',
      badgeColor: 'bg-green-300 text-green-800'
    },
    {
      icon: '🌟',
      title: 'Ambassador Program',
      description: 'Earn by promoting healthy vegetarian lifestyle',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      stats: 'Earn Money',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      icon: '📱',
      title: 'Easy to Use',
      description: 'User-friendly app for seamless food ordering experience',
      color: 'bg-gradient-to-br from-green-600 to-green-700',
      stats: 'Easy App',
      badgeColor: 'bg-green-200 text-green-800'
    }
  ];

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(featureInterval);
  }, []);

  return (
    <div id="why-us" className="min-h-screen bg-gradient-to-br from-white to-green-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 border-2 border-green-200 shadow-lg mb-8 animate-pulse">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
            <span className="text-green-800 font-bold text-lg">India's Leading Vegetarian Food Platform</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              VEGIFFY?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Experience the complete vegetarian food ecosystem with verified vendors, 
            fast delivery, and the best prices for pure vegetarian food.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`w-24 h-24 ${feature.color} rounded-3xl flex items-center justify-center text-4xl text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <h3 className="text-2xl font-black text-gray-900 mb-6 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center space-x-3 rounded-full px-6 py-3 ${feature.badgeColor} font-bold shadow-lg transform group-hover:scale-105 transition-all duration-300`}>
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm">{feature.stats}</span>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-green-700 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Benefits Section */}
        <div className="bg-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits Content */}
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-gray-900">
                Complete{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Food Ecosystem
                </span>
              </h3>
              
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                VEGIFFY brings together customers, vendors, delivery partners, and ambassadors 
                to create India's most trusted vegetarian food platform.
              </p>

              {/* Benefits List */}
              <div className="space-y-6">
                {[
                  'Verified vegetarian food vendors',
                  'Quick and reliable delivery',
                  'Safe and hygienic food',
                  'Best prices and deals',
                  'Earn as delivery partner',
                  'Promote as ambassador'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <span className="text-white font-bold text-lg">✓</span>
                    </div>
                    <span className="text-gray-800 text-lg font-medium group-hover:text-green-600 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:scale-105 w-fit">
                <span className="mr-3 text-xl">🚀</span>
                Join VEGIFFY Now
                <span className="ml-3 text-xl animate-pulse">→</span>
              </button>
            </div>

            {/* Right Side - Platform Stats */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border-2 border-green-200 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-gray-900 font-black text-2xl">Platform Growth</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-6">
                  {[
                    { label: 'Customer Satisfaction', value: '95%', width: '95%' },
                    { label: 'Vendor Network', value: '90%', width: '90%' },
                    { label: 'Delivery Speed', value: '88%', width: '88%' },
                    { label: 'Food Quality', value: '96%', width: '96%' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-3 group">
                      <div className="flex justify-between text-lg font-semibold text-gray-700">
                        <span>{item.label}</span>
                        <span className="text-green-600 font-black">
                          {item.value}
                        </span>
                      </div>
                      <div className="w-full bg-green-100 rounded-full h-3 shadow-inner">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-700 h-3 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-y-125"
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '10K+', label: 'Happy Customers', icon: '😊', color: 'bg-gradient-to-br from-green-500 to-green-600' },
            { number: '500+', label: 'Food Vendors', icon: '🏪', color: 'bg-gradient-to-br from-green-600 to-green-700' },
            { number: '1K+', label: 'Delivery Partners', icon: '🚴', color: 'bg-gradient-to-br from-green-700 to-green-800' },
            { number: '100+', label: 'Ambassadors', icon: '🌟', color: 'bg-gradient-to-br from-green-500 to-green-600' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-3xl border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
            >
              <div className={`w-20 h-20 mx-auto mb-6 ${stat.color} rounded-3xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-green-600 mb-3">
                {stat.number}
              </div>
              <div className="text-gray-800 font-bold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;