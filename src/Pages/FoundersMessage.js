import React, { useState, useEffect } from 'react';
import signatureImage from '../images/signature.png';
import founderImg from '../images/founder.jpeg';
import cofounderImg from '../images/cofounder.jpeg';
import cooImg from '../images/coo.jpeg';
// cmoImg removed as per request (4th member removed)

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

  // Leadership Team - 4th member removed as requested
  const leadershipTeam = [
    {
      id: 1,
      name: 'P Rahul Jain',
      position: 'Founder & President',
      image: founderImg,
    },
    {
      id: 2,
      name: 'Preetam Singhvi',
      position: 'Co-Founder & CEO',
      image: cofounderImg,
      isCoFounder: true,
    },
    {
      id: 3,
      name: 'Kevin Stanford',
      position: 'Director & COO',
      image: cooImg,
    },
    // Nikhil Surana (4th member) removed as per instruction
  ];

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

        {/* Main Content Grid */}
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
                <h4 className="font-black text-gray-900 text-lg mb-3 text-center">{story.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{story.description}</p>
              </div>
            ))}
          </div>

          {/* Main Message - Our Founder's Message to You */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-2xl relative overflow-hidden">
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
              <div className="mt-12 pt-8 border-t-2 border-green-100">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:pr-8">
                    <div className="text-center md:text-left">
                      <div className="text-gray-900 font-black text-2xl mb-2">With gratitude,</div>
                      <div className="text-green-600 font-bold text-xl">Team VEGIFFY</div>
                    </div>
                    <div className="text-4xl mt-4">🙏</div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img 
                      src={signatureImage}
                      alt="Founder's Signature" 
                      className="h-24 md:h-28 w-auto filter brightness-110 contrast-125 drop-shadow-lg"
                    />
                    <div className="text-gray-600 text-sm font-medium mt-2 text-center">Founder & President</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-green-300"></div>
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-green-300"></div>
          </div>
        </div>

        {/* Leadership Team - Now with 3 members (4th removed) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-2 border-2 border-green-200 shadow-md mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-700 font-semibold">Meet Our Leaders</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              The{' '}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Visionary Team
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals driving VEGIFFY's mission forward with dedication and excellence
            </p>
          </div>

          {/* Adjusted grid for 3 members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {leadershipTeam.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center group">
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-white to-yellow-300 animate-pulse opacity-70 blur-sm group-hover:opacity-100 transition duration-500"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-black/20 rounded-full blur-md group-hover:w-full group-hover:bg-black/30 transition-all"></div>
                  <div className={`relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden shadow-2xl ring-4 ring-white group-hover:ring-green-300 transition-all duration-300 ${
                    member.isCoFounder ? 'animate-soft-zoom' : 'animate-float'
                  }`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 pointer-events-none rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-black text-gray-900 mt-3">{member.name}</h4>
                <p className="text-green-600 font-bold text-sm uppercase tracking-wide mt-1">{member.position}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-green-600 text-sm font-medium inline-flex items-center space-x-2 bg-white px-6 py-2 rounded-full shadow-md border border-green-200">
              <span>🌟</span>
              <span>Driven by passion, united by purpose</span>
              <span>🌟</span>
            </p>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
              <div className="text-2xl md:text-3xl font-black text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-800 font-bold text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
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
              { icon: '🔒', title: 'Trust', description: 'Complete transparency in every partnership and transaction', color: 'from-green-500 to-green-600' },
              { icon: '💎', title: 'Purity', description: '100% vegetarian commitment with no compromises', color: 'from-green-600 to-green-700' },
              { icon: '🤝', title: 'Community', description: 'Building together with vendors, partners, and customers', color: 'from-green-700 to-green-800' },
              { icon: '⚡', title: 'Innovation', description: 'Using technology to enhance vegetarian food experience', color: 'from-green-500 to-green-600' }
            ].map((value, index) => (
              <div key={index} className="text-center group transform hover:scale-105 transition-all duration-500 bg-green-50 rounded-3xl p-6 border-2 border-green-100">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center text-2xl text-white shadow-2xl group-hover:rotate-12 transition-all duration-500`}>
                  {value.icon}
                </div>
                <h4 className="text-lg md:text-xl font-black text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-2xl relative overflow-hidden">
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

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes softZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-soft-zoom {
          animation: softZoom 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FoundersMessage;