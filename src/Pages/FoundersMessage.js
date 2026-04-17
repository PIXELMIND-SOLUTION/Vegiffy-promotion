import React, { useState, useEffect } from 'react';
import signatureImage from '../images/signature.png'; // Import the signature image

const FoundersMessage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const founderStories = [
    {
      icon: '🌱',
      title: 'Our Beginning',
      description: 'The journey started with a simple belief - pure vegetarian food deserves its own trusted platform.',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: '💚',
      title: 'Our Mission',
      description: 'To support vegetarian restaurants and food entrepreneurs while giving customers complete confidence.',
      color: 'bg-gradient-to-br from-green-600 to-green-700'
    },
    {
      icon: '🛡️',
      title: 'Our Promise',
      description: 'Partnering only with verified vegetarian vendors to ensure quality, transparency, and reliability.',
      color: 'bg-gradient-to-br from-green-700 to-green-800'
    },
    {
      icon: '🚀',
      title: 'Our Vision',
      description: 'Building a future where pure vegetarian food is easily accessible, respected, and celebrated.',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % founderStories.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div id="founders-message" className="min-h-screen bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 border-2 border-green-200 shadow-lg mb-8 animate-pulse">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
            <span className="text-green-800 font-bold text-lg">From the Team</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
            Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Built with passion, driven by purpose - creating India's most trusted vegetarian food platform
          </p>
        </div>

        {/* Main Content Grid - Single Column Now */}
        <div className="max-w-4xl mx-auto mb-20">
          
          {/* Story Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {founderStories.map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg transform transition-all duration-500 hover:scale-105 cursor-pointer ${
                  currentSlide === index ? 'ring-4 ring-green-300' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className={`w-16 h-16 ${story.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg mx-auto`}>
                  {story.icon}
                </div>
                <h4 className="font-black text-gray-900 text-lg mb-3 text-center">
                  {story.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {story.description}
                </p>
              </div>
            ))}
          </div>

          {/* Main Message */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-2xl relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center">Our Founder's Message to You</h3>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl font-medium text-center">
                  <span className="text-4xl text-green-600 font-bold float-left mr-3 mt-2">"</span>
                  At VEGIFFY, our journey began with a simple belief — pure vegetarian food deserves its own trusted platform.
                </p>

                <p className="text-lg">
                  As vegetarians, we understand that food is more than just taste. It is about belief, health, culture, and values. In today's fast-paced life, finding genuine pure vegetarian food can be challenging. That challenge inspired us to create VEGIFFY — a platform built exclusively for 100% pure vegetarian meals.
                </p>

                <p className="text-lg">
                  Our vision is to support vegetarian restaurants and food entrepreneurs while giving customers complete confidence and peace of mind with every order they place. We partner only with verified vegetarian vendors and work tirelessly to ensure quality, transparency, and reliability in everything we do.
                </p>

                <p className="text-lg font-medium text-green-700 text-center">
                  VEGIFFY is not just a food delivery app — it is a commitment to purity, trust, and the vegetarian community.
                </p>

                <p className="text-lg">
                  Each order placed on VEGIFFY strengthens a growing ecosystem that respects traditional values while embracing modern technology. We sincerely thank our customers, vendors, employees, and partners for believing in our vision. Your trust motivates us to grow responsibly and serve with integrity.
                </p>

                <p className="text-lg text-center font-medium">
                  Together, let us build a future where pure vegetarian food is easily accessible, respected, and celebrated.
                </p>
              </div>

              {/* Signature - Updated with imported signature image on right side */}
              <div className="mt-12 pt-8 border-t-2 border-green-100">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  {/* Team VEGIFFY - Left side */}
                  <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:pr-8">
                    <div className="text-center md:text-left">
                      <div className="text-gray-900 font-black text-2xl mb-2">With gratitude,</div>
                      <div className="text-green-600 font-bold text-xl">Team VEGIFFY</div>
                    </div>
                    <div className="text-4xl mt-4">🙏</div>
                  </div>
                  
                  {/* Signature Image - Right side */}
                  <div className="flex flex-col items-center justify-center">
                    <img 
                      src={signatureImage} // Using the imported image
                      alt="Founder's Signature" 
                      className="h-24 md:h-28 w-auto filter brightness-110 contrast-125 drop-shadow-lg"
                    />
                    <div className="text-gray-600 text-sm font-medium mt-2 text-center">
                      Founder & President
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-green-300"></div>
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-green-300"></div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Core Values
              </span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make at VEGIFFY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '🔒',
                title: 'Trust',
                description: 'Complete transparency in every partnership and transaction',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: '💎',
                title: 'Purity',
                description: '100% vegetarian commitment with no compromises',
                color: 'from-green-600 to-green-700'
              },
              {
                icon: '🤝',
                title: 'Community',
                description: 'Building together with vendors, partners, and customers',
                color: 'from-green-700 to-green-800'
              },
              {
                icon: '⚡',
                title: 'Innovation',
                description: 'Using technology to enhance vegetarian food experience',
                color: 'from-green-500 to-green-600'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center group transform hover:scale-105 transition-all duration-500 bg-green-50 rounded-3xl p-6 border-2 border-green-100"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center text-2xl text-white shadow-2xl group-hover:rotate-12 transition-all duration-500`}>
                  {value.icon}
                </div>
                <h4 className="text-lg md:text-xl font-black text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: '10K+', label: 'Happy Customers', icon: '😊', color: 'bg-gradient-to-br from-green-500 to-green-600' },
            { number: '500+', label: 'Food Vendors', icon: '🏪', color: 'bg-gradient-to-br from-green-600 to-green-700' },
            { number: '1K+', label: 'Delivery Partners', icon: '🚴', color: 'bg-gradient-to-br from-green-700 to-green-800' },
            { number: '50+', label: 'Team Members', icon: '👥', color: 'bg-gradient-to-br from-green-500 to-green-600' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-3xl border-2 border-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} rounded-3xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-800 font-bold text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-2xl relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-6 left-6 text-4xl md:text-6xl">🌱</div>
              <div className="absolute bottom-6 right-6 text-4xl md:text-6xl">💚</div>
              <div className="absolute top-1/2 left-1/4 text-3xl md:text-5xl">🥗</div>
              <div className="absolute bottom-1/3 right-1/4 text-3xl md:text-5xl">🚴</div>
            </div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                Join Our Vegetarian Revolution
              </h3>
              
              <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Be part of India's fastest growing vegetarian food community. Together, let's build a future where pure vegetarian food is celebrated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersMessage;