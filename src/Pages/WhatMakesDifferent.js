import React, { useState, useEffect } from 'react';

const WhatMakesDifferent = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🌱',
      title: '100% Pure Vegetarian Platform',
      description: 'Exclusively dedicated to vegetarian food with complete purity assurance',
      points: [
        'No meat, eggs, or animal by-products',
        'Complete segregation in kitchen spaces',
        'Regular purity audits and checks',
        'Trusted by lakhs of vegetarian families'
      ],
      color: 'from-green-500 to-green-600',
      badge: 'Pure Veg'
    },
    {
      icon: '✅',
      title: 'Verified Veg Restaurants & Food Partners',
      description: 'Every partner is thoroughly verified for vegetarian authenticity',
      points: [
        'Stringent verification process',
        'Regular kitchen inspections',
        'Documentation and license checks',
        'Customer feedback monitoring'
      ],
      color: 'from-green-600 to-green-700',
      badge: 'Verified'
    },
    {
      icon: '🚚',
      title: 'Free Delivery on orders above ₹399',
      description: 'Enjoy free and fast delivery across your city',
      points: [
        'No delivery charges above ₹399',
        'Quick 30-minute delivery promise',
        'Live order tracking',
        'Dedicated delivery partners'
      ],
      color: 'from-green-700 to-green-800',
      badge: 'Free Delivery'
    },
    {
      icon: '🥗',
      title: 'Wide Range of Food Options',
      description: 'From traditional to contemporary vegetarian delights',
      points: [
        'Complete meals and thalis',
        'Healthy snacks and starters',
        'Traditional sweets and desserts',
        'Fresh beverages and drinks'
      ],
      color: 'from-green-500 to-green-600',
      badge: '500+ Dishes'
    },
    {
      icon: '📱',
      title: 'Simple & User-Friendly App',
      description: 'Seamless ordering experience with our intuitive mobile app',
      points: [
        'Easy navigation and search',
        'Quick reordering feature',
        'Secure payment options',
        'Real-time order updates'
      ],
      color: 'from-green-600 to-green-700',
      badge: '4.8★ Rating'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="why-us" className="min-h-screen bg-gradient-to-br from-white to-green-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 border-2 border-green-200 shadow-lg mb-8 animate-pulse">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
            <span className="text-green-800 font-bold text-lg">Unique & Different</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
            What Makes{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              VEGIFFY Different?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            We're not just another food delivery app. We're India's first and only platform 
            exclusively dedicated to 100% pure vegetarian food experience.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Side - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 border-2 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  activeFeature === index 
                    ? 'border-green-500 shadow-2xl ring-4 ring-green-100' 
                    : 'border-green-200 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transform transition-all duration-500 ${
                    activeFeature === index ? 'scale-110 rotate-6' : ''
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-black text-gray-900">
                        {feature.title}
                      </h3>
                      <span className={`bg-gradient-to-r ${feature.color} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}>
                        {feature.badge}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Points List */}
                    <div className="grid grid-cols-2 gap-3">
                      {feature.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center space-x-2 group">
                          <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-700 text-sm group-hover:text-green-600 transition-colors duration-300">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeFeature === index && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-b-3xl"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Visual Showcase */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-2xl">
                
                {/* Main Feature Display */}
                <div className="text-center mb-8">
                  <div className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-br ${features[activeFeature].color} rounded-3xl flex items-center justify-center text-5xl text-white shadow-2xl transform transition-all duration-500 animate-pulse`}>
                    {features[activeFeature].icon}
                  </div>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-4">
                    {features[activeFeature].title}
                  </h3>
                  
                  <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${features[activeFeature].color} text-white px-6 py-3 rounded-full font-bold shadow-lg mb-6`}>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span>{features[activeFeature].badge}</span>
                  </div>
                </div>

                {/* Feature Details */}
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-100">
                    <h4 className="font-black text-gray-900 text-lg mb-4 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                      Why This Matters?
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {features[activeFeature].description}
                    </p>
                  </div>

                  {/* Progress Indicators */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm font-bold text-gray-700">
                      <span>Platform Trust</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-700 h-3 rounded-full transition-all duration-1000"
                        style={{ width: '100%' }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm font-bold text-gray-700">
                      <span>Customer Satisfaction</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-700 h-3 rounded-full transition-all duration-1000"
                        style={{ width: '96%' }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm font-bold text-gray-700">
                      <span>Delivery Success</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-700 h-3 rounded-full transition-all duration-1000"
                        style={{ width: '98%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { number: '10K+', label: 'Orders', color: 'bg-green-500' },
                  { number: '500+', label: 'Vendors', color: 'bg-green-600' },
                  { number: '50+', label: 'Cities', color: 'bg-green-700' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 border-2 border-green-200 shadow-lg text-center">
                    <div className={`w-4 h-4 ${stat.color} rounded-full mx-auto mb-2`}></div>
                    <div className="text-lg font-black text-gray-900">{stat.number}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                VEGIFFY Over Others?
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we stand out from regular food delivery platforms
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* VEGIFFY Advantages */}
            <div className="text-center">
              <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200 h-full">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center text-3xl text-white shadow-2xl">
                  🌱
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">VEGIFFY</h4>
                <div className="space-y-4 text-left">
                  {[
                    '100% Pure Vegetarian Only',
                    'Verified Veg Kitchens',
                    'No Cross-Contamination',
                    'Vegetarian-First Features',
                    'Community Focused',
                    'Cultural Sensitivity'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* VS Separator */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-2xl mx-auto mb-4">
                  VS
                </div>
                <div className="text-gray-500 font-bold text-lg">The Difference is Clear</div>
              </div>
            </div>

            {/* Other Platforms */}
            <div className="text-center">
              <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200 h-full">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl flex items-center justify-center text-3xl text-white shadow-2xl">
                  🍖
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">Other Platforms</h4>
                <div className="space-y-4 text-left">
                  {[
                    'Mixed Food Types',
                    'No Veg-Only Verification',
                    'Risk of Cross-Contamination',
                    'Generic Features',
                    'Profit Focused',
                    'Cultural Insensitivity'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✗</span>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 border-2 border-green-200 shadow-2xl relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 text-6xl">🌱</div>
              <div className="absolute bottom-10 right-10 text-6xl">✅</div>
              <div className="absolute top-1/2 left-1/4 text-5xl">🚚</div>
              <div className="absolute bottom-1/3 right-1/4 text-5xl">📱</div>
            </div>

            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                Experience the Difference Today!
              </h3>
              
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join India's fastest growing vegetarian community and enjoy peace of mind with every order.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {[
                  { text: '100% Vegetarian', icon: '🌱' },
                  { text: 'Verified Partners', icon: '✅' },
                  { text: 'Free Delivery', icon: '🚚' },
                  { text: 'Easy Returns', icon: '↩️' }
                ].map((badge, index) => (
                  <div key={index} className="bg-green-800 bg-opacity-50 rounded-full px-6 py-3 flex items-center space-x-2">
                    <span>{badge.icon}</span>
                    <span className="text-green-100 font-medium text-sm">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesDifferent;