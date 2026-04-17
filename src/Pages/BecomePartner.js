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
    ambassador: 'https://vegiffypanel.vegiffy.in/vegiffy-ambassador'
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

  // New function for direct registration
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
    
    // Validate form
    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.partnerType) {
      showCustomError('Please fill all the fields!');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showCustomError('Please enter a valid email address!');
      return;
    }

    // Validate phone number (Indian format)
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
        // Show success popup
        setShowSuccessPopup(true);
        
        // Reset form
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          partnerType: ''
        });

        // Auto hide after 3 seconds
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
    <div id="join" className="min-h-screen bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden relative">
      {/* Error Popup - Center Me */}
      {showErrorPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl max-w-sm w-full animate-popUp">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold">Error</p>
                <p className="text-sm opacity-90">{errorMessage}</p>
              </div>
              <button 
                onClick={() => setShowErrorPopup(false)}
                className="text-white hover:text-gray-200 text-lg"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup - Center Me */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl shadow-2xl max-w-sm w-full animate-popUp">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-30 p-2 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold">Success!</p>
                <p className="text-sm opacity-90">Enquiry submitted successfully</p>
              </div>
              <button 
                onClick={() => setShowSuccessPopup(false)}
                className="text-white hover:text-gray-200 text-lg"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-green-200 shadow-lg mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-700 font-bold">Limited Spots Available</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Join{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              VEGIFFY Family
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Grow your business or start earning with India's fastest growing vegetarian food platform. 
            Be part of our success story!
          </p>
        </div>

        {/* Partner Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
            {partnerTypes.map((partner) => (
              <button
                key={partner.id}
                onClick={() => setActiveTab(partner.id)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === partner.id
                    ? `bg-gradient-to-r ${partner.gradient} text-white shadow-lg transform scale-105`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl mr-3">{partner.icon}</span>
                {partner.title}
              </button>
            ))}
          </div>
        </div>

        {/* New Quick Registration Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => handleDirectRegistration('vendor')}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <span>🏪</span>
            Join Us as a Vendor
            <span className="text-sm bg-white text-green-600 px-2 py-1 rounded-full">Instant Registration</span>
          </button>
          
          <button
            onClick={() => handleDirectRegistration('ambassador')}
            className="bg-gradient-to-r from-green-700 to-green-800 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-green-800 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <span>🌟</span>
            Join Us as Ambassador
            <span className="text-sm bg-white text-green-700 px-2 py-1 rounded-full">Direct Apply</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Card */}
            <div className={`bg-gradient-to-br ${currentPartner.gradient} rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm">
                  {currentPartner.icon}
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">{currentPartner.title}</h2>
                  <p className="text-white text-opacity-90 text-lg">{currentPartner.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {currentPartner.stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-white text-opacity-80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button 
                  className="flex-1 bg-white text-gray-900 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  onClick={() => handleDirectRegistration(activeTab)}
                >
                  Direct Registration
                  <span className="text-xl">🚀</span>
                </button>
                
                <button 
                  className="flex-1 bg-white bg-opacity-20 border-2 border-white text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-white hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, partnerType: currentPartner.title }));
                    document.getElementById('partnerForm').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get More Info
                  <span className="text-xl">📋</span>
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPartner.features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${currentPartner.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                      ✓
                    </div>
                    <span className="text-gray-900 font-semibold text-lg">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Success Stories & Form */}
          <div className="space-y-8">
            {/* Success Stories */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Success Stories ✨
              </h3>
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-2xl text-white">
                        {story.image}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{story.name}</h4>
                            <p className="text-green-600 text-sm font-medium">{story.role}</p>
                          </div>
                          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                            {story.earnings}
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">{story.story}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Join Form */}
            <div id="partnerForm" className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Start Your Journey Today! 🎯
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="col-span-2 md:col-span-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="col-span-2 md:col-span-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                
                <select 
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className={`w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-900 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white mr-3"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Apply Now - Get Instant Response! 
                      <span className="ml-2">📲</span>
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  ⚡ Our team will contact you within 2 hours
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Join 1000+ successful partners who are growing with VEGIFFY. 
              Don't miss this opportunity to be part of India's vegetarian food revolution!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleDirectRegistration('vendor')}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                🏪 Register as Vendor
              </button>
              <button 
                onClick={() => handleDirectRegistration('ambassador')}
                className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                🌟 Register as Ambassador
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg border border-white flex items-center justify-center gap-2"
              >
                💬 WhatsApp Us
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: '2hrs', text: 'Quick Onboarding' },
                { number: '24/7', text: 'Dedicated Support' },
                { number: '100%', text: 'Vegetarian Promise' },
                { number: '0₹', text: 'No Hidden Fees' }
              ].map((item, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{item.number}</div>
                  <div className="text-white text-opacity-80 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
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
      `}</style>
    </div>
  );
};

export default BecomePartner;