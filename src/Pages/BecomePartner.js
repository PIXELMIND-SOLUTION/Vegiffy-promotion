import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BecomePartner = () => {
  const [activeTab, setActiveTab] = useState('vendor');
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    partnerType: ''
  });

  // API endpoint - replace with your actual endpoint
  const API_ENDPOINT = 'https://api.vegiffyy.com/api/submit-enquiry';

  // Registration URLs
  const REGISTRATION_URLS = {
    vendor: 'https://vendor.vegiffy.in/register',
    ambassador: 'https://panel.vegiffy.in/vegiffy-ambassador'
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '9391973675';
    const message = 'Hello! I want to join VEGIFFY as a partner. Please provide more information.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:6309100101';
  };

  const handleDirectRegistration = (type) => {
    if (type === 'vendor') {
      window.open(REGISTRATION_URLS.vendor, '_blank');
    } else if (type === 'ambassador') {
      window.open(REGISTRATION_URLS.ambassador, '_blank');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showCustomError = (message) => {
    setErrorMessage(message);
    setShowErrorPopup(true);
    setTimeout(() => {
      setShowErrorPopup(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.partnerType) {
      showCustomError('Please fill all the fields!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showCustomError('Please enter a valid email address!');
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      showCustomError('Please enter a valid 10-digit Indian phone number!');
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post(API_ENDPOINT, {
        name: formData.name,
        phoneNumber: cleanPhone,
        email: formData.email,
        partnerType: formData.partnerType
      });

      if (response.data.success) {
        setShowSuccessPopup(true);
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          partnerType: ''
        });
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      let errorMsg = 'Failed to submit enquiry. Please try again.';
      if (error.response) {
        errorMsg = error.response.data.message || errorMsg;
      }
      showCustomError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const partnerTypes = [
    {
      id: 'vendor',
      title: 'Become a Vendor',
      icon: '🏪',
      description: 'Join as a restaurant partner and grow your business',
      color: 'bg-green-600',
      gradient: 'from-green-600 to-green-700',
      features: [
        'Reach 10K+ hungry customers',
        'Zero commission for first month',
        'Free marketing and promotions',
        'Real-time order management',
        '24/7 partner support',
        'Weekly payments'
      ],
      stats: [
        { number: '500+', label: 'Active Vendors' },
        { number: '₹2.5L+', label: 'Avg. Monthly Revenue' },
        { number: '4.8★', label: 'Vendor Rating' }
      ]
    },
    {
      id: 'ambassador',
      title: 'Become Ambassador',
      icon: '🌟',
      description: 'Join our ambassador program and earn while promoting',
      color: 'bg-green-700',
      gradient: 'from-green-700 to-green-800',
      features: [
        'Earn up to ₹15,000 per month',
        'Flexible working hours',
        'Free merchandise kit',
        'Performance bonuses',
        'Social media recognition',
        'Career growth opportunities'
      ],
      stats: [
        { number: '200+', label: 'Ambassadors' },
        { number: '₹50K+', label: 'Top Monthly Earnings' },
        { number: '95%', label: 'Satisfaction Rate' }
      ]
    }
  ];

  const successStories = [
    {
      name: 'Green Bites Cafe',
      role: 'Vendor Partner',
      image: '🍕',
      story: 'Joined 6 months ago, now serving 200+ orders daily with 40% revenue growth!',
      earnings: '₹8L/month'
    },
    {
      name: 'Priya Sharma',
      role: 'Campus Ambassador',
      image: '👩‍🎓',
      story: 'Earned ₹45,000 in 3 months while studying. Perfect side hustle!',
      earnings: '₹15K/month'
    },
    {
      name: 'Spice Garden',
      role: 'Premium Vendor',
      image: '🍛',
      story: 'From small kitchen to 3 branches with VEGIFFY partnership',
      earnings: '₹12L/month'
    }
  ];

  const currentPartner = partnerTypes.find(partner => partner.id === activeTab);

  return (
    <div id="join" className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12 sm:py-20 overflow-hidden relative">
      {/* Error Popup */}
      {showErrorPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-red-500 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-2xl max-w-xs sm:max-w-sm w-full animate-popUp">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">Error</p>
                <p className="text-xs sm:text-sm opacity-90">{errorMessage}</p>
              </div>
              <button onClick={() => setShowErrorPopup(false)} className="text-white hover:text-gray-200 text-lg">✕</button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-2xl max-w-xs sm:max-w-sm w-full animate-popUp">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-white bg-opacity-30 p-2 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">Success!</p>
                <p className="text-xs sm:text-sm opacity-90">Enquiry submitted successfully</p>
              </div>
              <button onClick={() => setShowSuccessPopup(false)} className="text-white hover:text-gray-200 text-lg">✕</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-green-200 shadow-lg mb-6 sm:mb-8">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-700 font-bold text-xs sm:text-sm">Limited Spots Available</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Join{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              VEGIFFY Family
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            Grow your business or start earning with India's fastest growing vegetarian food platform. 
            Be part of our success story!
          </p>
        </div>

        {/* Partner Type Tabs - Mobile Friendly Scrollable */}
        <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto px-2">
          <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-xl border border-gray-200 flex flex-nowrap min-w-max">
            {partnerTypes.map((partner) => (
              <button
                key={partner.id}
                onClick={() => setActiveTab(partner.id)}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === partner.id
                    ? `bg-gradient-to-r ${partner.gradient} text-white shadow-lg transform scale-105`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl sm:text-2xl mr-1 sm:mr-2 md:mr-3">{partner.icon}</span>
                <span className="hidden xs:inline">{partner.title}</span>
                <span className="xs:hidden">{partner.id === 'vendor' ? 'Vendor' : 'Ambassador'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Registration Buttons - Stack on Mobile */}
        <div className="flex flex-col sm:flex-row justify-center mb-8 gap-3 sm:gap-4 px-2">
          <button
            onClick={() => handleDirectRegistration('vendor')}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base md:text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <span>🏪</span>
            Join as Vendor
            <span className="text-xs bg-white text-green-600 px-1.5 sm:px-2 py-0.5 rounded-full">Instant</span>
          </button>
          
          <button
            onClick={() => handleDirectRegistration('ambassador')}
            className="bg-gradient-to-r from-green-700 to-green-800 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base md:text-lg hover:from-green-800 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <span>🌟</span>
            Join as Ambassador
            <span className="text-xs bg-white text-green-700 px-1.5 sm:px-2 py-0.5 rounded-full">Direct</span>
          </button>
        </div>

        {/* Main Grid - Single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start px-2">
          
          {/* Left Side - Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Card */}
            <div className={`bg-gradient-to-br ${currentPartner.gradient} rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105`}>
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl backdrop-blur-sm">
                  {currentPartner.icon}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2">{currentPartner.title}</h2>
                  <p className="text-white text-opacity-90 text-sm sm:text-base md:text-lg">{currentPartner.description}</p>
                </div>
              </div>

              {/* Stats - Responsive grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {currentPartner.stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-2 sm:p-4 backdrop-blur-sm">
                    <div className="text-base sm:text-xl md:text-2xl font-bold">{stat.number}</div>
                    <div className="text-white text-opacity-80 text-[10px] sm:text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  className="w-full sm:flex-1 bg-white text-gray-900 py-2.5 sm:py-4 px-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  onClick={() => handleDirectRegistration(activeTab)}
                >
                  Direct Registration
                  <span className="text-lg sm:text-xl">🚀</span>
                </button>
                
                <button 
                  className="w-full sm:flex-1 bg-white bg-opacity-20 border-2 border-white text-white py-2.5 sm:py-4 px-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, partnerType: currentPartner.title }));
                    document.getElementById('partnerForm').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get More Info
                  <span className="text-lg sm:text-xl">📋</span>
                </button>
              </div>
            </div>

            {/* Features Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              {currentPartner.features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className={`w-8 h-8 sm:w-12 sm:h-12 ${currentPartner.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white text-sm sm:text-xl group-hover:scale-110 transition-transform duration-300`}>
                      ✓
                    </div>
                    <span className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Success Stories & Form */}
          <div className="space-y-6 sm:space-y-8">
            {/* Success Stories */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Success Stories ✨
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {successStories.map((story, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-green-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-col sm:flex-row">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl text-white mb-2 sm:mb-0">
                        {story.image}
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                          <div>
                            <h4 className="font-bold text-gray-900 text-base sm:text-lg">{story.name}</h4>
                            <p className="text-green-600 text-xs sm:text-sm font-medium">{story.role}</p>
                          </div>
                          <div className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold self-start sm:self-auto">
                            {story.earnings}
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 text-xs sm:text-sm">{story.story}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Join Form */}
            <div id="partnerForm" className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Start Your Journey Today! 🎯
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
                
                <select 
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  required
                >
                  <option value="">Select Partner Type</option>
                  <option value="Restaurant Vendor">Restaurant Vendor</option>
                  <option value="Home Chef">Home Chef</option>
                  <option value="Campus Ambassador">Campus Ambassador</option>
                  <option value="City Ambassador">City Ambassador</option>
                  <option value="Rider">Rider</option>
                </select>

                <button 
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-3 sm:py-4 px-6 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:from-green-700 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="inline-block animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-t-2 border-b-2 border-white mr-2 sm:mr-3"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Apply Now - Get Instant Response! 
                      <span className="ml-2 text-lg sm:text-xl">📲</span>
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-xs sm:text-sm">
                  ⚡ Our team will contact you within 2 hours
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Responsive */}
        <div className="mt-12 sm:mt-20 text-center px-2">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-base sm:text-xl text-white text-opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join 1000+ successful partners who are growing with VEGIFFY. 
              Don't miss this opportunity to be part of India's vegetarian food revolution!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => handleDirectRegistration('vendor')}
                className="bg-white text-green-600 px-4 sm:px-6 md:px-8 py-2.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                🏪 Register as Vendor
              </button>
              <button 
                onClick={() => handleDirectRegistration('ambassador')}
                className="bg-white text-green-700 px-4 sm:px-6 md:px-8 py-2.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                🌟 Register as Ambassador
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-black text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg border border-white flex items-center justify-center gap-2"
              >
                💬 WhatsApp Us
              </button>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
              {[
                { number: '2hrs', text: 'Quick Onboarding' },
                { number: '24/7', text: 'Dedicated Support' },
                { number: '100%', text: 'Vegetarian Promise' },
                { number: '0₹', text: 'No Hidden Fees' }
              ].map((item, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-lg sm:rounded-xl p-2 sm:p-4 backdrop-blur-sm">
                  <div className="text-sm sm:text-xl md:text-2xl font-bold">{item.number}</div>
                  <div className="text-white text-opacity-80 text-[10px] sm:text-xs md:text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes popUp {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-popUp {
          animation: popUp 0.2s ease-out;
        }

        @media (max-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BecomePartner;