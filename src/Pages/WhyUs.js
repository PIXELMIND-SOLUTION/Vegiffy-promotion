import React, { useState, useEffect } from 'react';

const WhyChooseVegiffy = () => {
  const [activeReason, setActiveReason] = useState(0);
  
  const reasons = [
    {
      icon: '🥗',
      title: '100% Vegetarian',
      description: 'Complete vegetarian food platform with verified vendors and quality assurance.',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      features: ['Pure Veg Food Only', 'Quality Verified', 'Hygiene Standards'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Affordable pricing with great deals and discounts for everyone.',
      color: 'bg-gradient-to-br from-green-600 to-green-700',
      features: ['Lowest Prices', 'Daily Deals', 'Save 40%'],
      gradient: 'from-green-600 to-green-700'
    },
    {
      icon: '🚚',
      title: 'VEGIFFY Express',
      description: 'Quick and reliable food delivery by our dedicated partners.',
      color: 'bg-gradient-to-br from-green-700 to-green-800',
      features: ['30 Min Delivery', 'Live Tracking', 'Reliable Service'],
      gradient: 'from-green-700 to-green-800'
    },
    {
      icon: '🌟',
      title: 'Earn Opportunities',
      description: 'Multiple ways to earn - as delivery partner or brand ambassador.',
      color: 'bg-gradient-to-br from-green-800 to-green-900',
      features: ['Delivery Partner', 'Brand Ambassador', 'Refer & Earn'],
      gradient: 'from-green-800 to-green-900'
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Regular Customer",
      text: "VEGIFFY has amazing food quality and fast delivery. Love the pure vegetarian assurance!",
      avatar: "😊",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Food Vendor",
      text: "Great platform for vegetarian food businesses. Helped me reach more customers easily.",
      avatar: "👩‍🍳",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Delivery Partner",
      text: "Good earning opportunities with flexible timing. Perfect part-time job for students.",
      avatar: "🚴",
      rating: 5
    }
  ];

  useEffect(() => {
    const reasonInterval = setInterval(() => {
      setActiveReason((prev) => (prev + 1) % reasons.length);
    }, 4000);

    return () => clearInterval(reasonInterval);
  }, []);

  return (
    <div id="why-us" className="min-h-screen bg-gradient-to-br from-white to-green-50 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 border-2 border-green-200 shadow-2xl mb-8 animate-pulse">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
            <span className="text-green-800 font-bold text-lg">India's Favorite Vegetarian Food Platform</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              VEGIFFY?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Join thousands of happy customers, vendors, and delivery partners who trust VEGIFFY 
            for the best vegetarian food experience.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                index === activeReason ? 'scale-105' : 'scale-100'
              }`}
            >
              <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-105 h-full relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                {/* Icon and Header */}
                <div className="flex items-center space-x-6 mb-8 relative z-10">
                  <div className={`w-20 h-20 ${reason.color} rounded-3xl flex items-center justify-center text-3xl text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">
                      {reason.title}
                    </h3>
                    <div className="flex space-x-2 mt-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-lg font-medium relative z-10">
                  {reason.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 relative z-10">
                  {reason.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-800 text-lg font-semibold group-hover:text-green-600 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-green-700 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Benefits Section */}
        <div className="bg-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                VEGIFFY Advantage
              </span>
            </h3>
            <p className="text-xl text-gray-700 font-medium">
              See how VEGIFFY benefits everyone in the food ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: 'Delivery Time',
                vegiffy: '30 minutes',
                others: '45+ minutes',
                improvement: '33% faster',
                color: 'text-green-600',
                icon: '⚡'
              },
              {
                metric: 'Food Quality',
                vegiffy: '4.9/5 rating',
                others: '4.2/5 rating',
                improvement: 'Better quality',
                color: 'text-green-600',
                icon: '🥗'
              },
              {
                metric: 'Price Saving',
                vegiffy: 'Save 40%',
                others: 'Save 20%',
                improvement: 'Double savings',
                color: 'text-green-600',
                icon: '💰'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-2xl font-black text-gray-900 mb-6">{item.metric}</div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-600 to-green-800 p-5 rounded-2xl transform group-hover:scale-105 transition-all duration-300">
                    <div className="text-white font-bold text-lg">VEGIFFY</div>
                    <div className="text-white text-2xl font-black">{item.vegiffy}</div>
                  </div>
                  <div className="bg-gray-100 p-5 rounded-2xl transform group-hover:scale-105 transition-all duration-300">
                    <div className="text-gray-600 font-semibold">Others</div>
                    <div className="text-gray-700 text-xl font-bold">{item.others}</div>
                  </div>
                  <div className={`text-lg font-black ${item.color} transform group-hover:scale-110 transition-all duration-300`}>
                    {item.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
              
              <div className="flex items-center space-x-6 mb-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center text-3xl text-white transform group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-gray-900 font-black text-xl">{testimonial.name}</div>
                  <div className="text-green-600 font-bold text-lg">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed font-medium mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>
              <div className="flex space-x-1 relative z-10">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <span key={starIndex} className="text-yellow-400 text-xl animate-pulse">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-12 border-2 border-green-200 shadow-2xl mb-4">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              Ready to Join VEGIFFY?
            </h3>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
              Whether you're a customer, vendor, or delivery partner - VEGIFFY has something for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-black py-5 px-12 rounded-2xl transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <span className="mr-3 text-xl">📱</span>
                Download App
                <span className="ml-3 text-xl animate-pulse">→</span>
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-5 px-12 rounded-2xl transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <span className="mr-3 text-xl">👥</span>
                Become Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVegiffy;