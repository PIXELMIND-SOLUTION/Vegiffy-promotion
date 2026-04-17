import React, { useState } from 'react';

const VEGIFFYFAQs = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Google Play Store link
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.veggify.veegify';
  // Vendor Registration link
  const VENDOR_REGISTRATION_URL = 'https://vendor.vegiffy.in/register';

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to handle Download App click
  const handleDownloadAppClick = () => {
    window.open(PLAY_STORE_URL, '_blank');
  };

  // Function to handle Vendor Registration click
  const handleVendorRegistrationClick = () => {
    window.open(VENDOR_REGISTRATION_URL, '_blank');
  };

  const faqData = {
    general: {
      title: '🌱 General Information',
      icon: '🌱',
      color: 'from-green-500 to-green-600',
      items: [
        {
          id: 'what-is-vegiffyy',
          question: 'What is VEGIFFY?',
          answer: 'VEGIFFY is a 100% Pure Vegetarian food delivery app that connects customers with verified veg restaurants, hotels, sweet shops, juice parlours, and cloud kitchens near them.'
        },
        {
          id: 'pure-vegetarian',
          question: 'Is VEGIFFY 100% Pure Vegetarian?',
          answer: 'Yes. VEGIFFY is a strictly pure vegetarian platform. We do not allow non-vegetarian food, including egg, meat, fish, or seafood, on our platform.'
        },
        {
          id: 'vegetarian-purity',
          question: 'How does VEGIFFY ensure vegetarian purity?',
          answer: 'We follow a strict verification process:',
          points: [
            'Vendors must be pure veg establishments',
            'Mandatory Veg Declaration Letter',
            'Regular compliance checks',
            'Any violation leads to immediate delisting'
          ]
        },
        {
          id: 'free-delivery',
          question: 'Do you offer free delivery?',
          answer: 'Yes ✅ VEGIFFY provides free delivery on orders above ₹399, subject to location and availability.'
        },
        {
          id: 'operating-locations',
          question: 'Which locations does VEGIFFY operate in?',
          answer: 'VEGIFFY currently operates in selected cities and areas and is expanding rapidly. Available vendors will be shown based on your delivery location.'
        }
      ]
    },
    ordering: {
      title: '📱 Ordering & Payments',
      icon: '📱',
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          id: 'place-order',
          question: 'How can I place an order?',
          answer: 'Simple steps to place your order:',
          points: [
            'Download the VEGIFFY App',
            'Select your delivery location',
            'Choose a verified pure veg restaurant',
            'Add items to cart & place your order'
          ]
        },
        {
          id: 'payment-methods',
          question: 'What payment methods are accepted?',
          answer: 'VEGIFFY supports multiple payment options:',
          points: [
            'UPI',
            'Debit / Credit Cards',
            'Net Banking',
            'Wallets (where available)',
            'Cash on Delivery (in selected areas)'
          ]
        },
        {
          id: 'cancel-order',
          question: 'Can I cancel my order?',
          answer: 'Orders can be cancelled before preparation starts. Refunds (if applicable) will be processed as per our Refund & Cancellation Policy.'
        },
        {
          id: 'refunds',
          question: 'How do refunds work?',
          answer: 'Refunds are initiated in case of:',
          points: [
            'Order cancellation (eligible cases)',
            'Failed delivery',
            'Quality or order issues'
          ],
          note: 'Refunds are processed within 5–7 working days to the original payment method.'
        }
      ]
    },
    support: {
      title: '📞 Support & Contact',
      icon: '📞',
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          id: 'contact-support',
          question: 'How do I contact VEGIFFY support?',
          answer: 'You can reach us through multiple channels:',
          points: [
            'In-app support',
            'Email: info@vegiffy.in',
            'Phone: 9391973675'
          ]
        },
        {
          id: 'stay-updated',
          question: 'How can I stay updated on new offers and features?',
          answer: 'Never miss an update:',
          points: [
            'Enable app notifications',
            'Follow us on social media',
            'Regularly check the Offers section in the app'
          ]
        }
      ]
    },
    vendors: {
      title: '🏪 For Vendors',
      icon: '🏪',
      color: 'from-orange-500 to-orange-600',
      items: [
        {
          id: 'join-vendor',
          question: 'How can restaurants join VEGIFFY as vendors?',
          answer: 'Pure vegetarian restaurants can register through our Vendor Registration page. Click below to register now!',
          points: [
            'FSSAI License',
            'GST (if applicable)',
            'Pure Veg Declaration Letter'
          ],
          button: {
            text: 'Register as Vendor',
            action: handleVendorRegistrationClick
          }
        },
        {
          id: 'vendor-commission',
          question: 'Does VEGIFFY charge restaurants commission?',
          answer: 'Commission structure and plans are shared directly with vendors during onboarding.'
        },
        {
          id: 'vendor-types',
          question: 'Do you support only restaurants?',
          answer: 'No. VEGIFFY also supports various pure vegetarian establishments:',
          points: [
            'Sweet shops',
            'Juice parlours',
            'Bakeries',
            'Cloud kitchens',
            '(Only pure vegetarian)'
          ]
        }
      ]
    },
    safety: {
      title: '🔒 Safety & Reliability',
      icon: '🔒',
      color: 'from-red-500 to-red-600',
      items: [
        {
          id: 'safety-reliability',
          question: 'Is VEGIFFY safe and reliable?',
          answer: 'Yes. VEGIFFY is operated by Jainity Eats India Private Limited, following secure payment practices and transparent policies.'
        }
      ]
    }
  };

  const categories = [
    { id: 'general', name: 'General', icon: '🌱', count: faqData.general.items.length },
    { id: 'ordering', name: 'Ordering', icon: '📱', count: faqData.ordering.items.length },
    { id: 'support', name: 'Support', icon: '📞', count: faqData.support.items.length },
    { id: 'vendors', name: 'Vendors', icon: '🏪', count: faqData.vendors.items.length },
    { id: 'safety', name: 'Safety', icon: '🔒', count: faqData.safety.items.length }
  ];

  // Filter items based on search term
  const filteredItems = searchTerm 
    ? Object.values(faqData).flatMap(category => 
        category.items.filter(item => 
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.points && item.points.some(point => 
            point.toLowerCase().includes(searchTerm.toLowerCase())
          ))
        )
      )
    : faqData[activeCategory].items;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 border-2 border-green-200 shadow-lg mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-800 font-bold text-lg">Frequently Asked Questions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            VEGIFFY{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              FAQs
            </span>
          </h1>
          
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Everything you need to know about our 100% Pure Vegetarian food delivery platform
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-white border-2 border-green-200 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 text-lg font-medium"
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border-2 border-green-200 shadow-lg sticky top-8">
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Categories
              </h3>
              
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearchTerm('');
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                      activeCategory === category.id && !searchTerm
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-green-50 text-gray-700 hover:bg-green-100 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-semibold">{category.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-sm font-bold ${
                      activeCategory === category.id && !searchTerm
                        ? 'bg-white text-green-600'
                        : 'bg-green-200 text-green-700'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 p-4 bg-green-50 rounded-2xl border-2 border-green-200">
                <h4 className="font-black text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Platform Stats
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total FAQs</span>
                    <span className="font-bold text-green-600">15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Download App</span>
                    <button 
                      onClick={handleDownloadAppClick}
                      className="font-bold text-green-600 hover:text-green-700"
                    >
                      Click Here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 border-2 border-green-200 shadow-lg">
              
              {/* Category Header */}
              {!searchTerm && (
                <div className={`bg-gradient-to-r ${faqData[activeCategory].color} rounded-2xl p-6 text-white mb-8`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center text-2xl">
                      {faqData[activeCategory].icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black">{faqData[activeCategory].title}</h2>
                      <p className="text-green-100 opacity-90">
                        {faqData[activeCategory].items.length} questions answered
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Search Results Header */}
              {searchTerm && (
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-black">Search Results</h2>
                      <p className="text-green-100 opacity-90">
                        Found {filteredItems.length} matches for "{searchTerm}"
                      </p>
                    </div>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="bg-white text-green-600 px-4 py-2 rounded-full font-bold hover:bg-green-50 transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>
                </div>
              )}

              {/* FAQ Items */}
              <div className="space-y-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="border-2 border-green-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left bg-white hover:bg-green-50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                            {index + 1}
                          </div>
                          <div className="text-left">
                            <h3 className="text-xl font-black text-gray-900">{item.question}</h3>
                          </div>
                        </div>
                        <div className={`transform transition-transform duration-300 ${
                          openItems[item.id] ? 'rotate-180' : ''
                        }`}>
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {openItems[item.id] && (
                      <div className="p-6 bg-green-50 border-t-2 border-green-200 animate-slideDown">
                        <p className="text-gray-700 mb-4 text-lg leading-relaxed">{item.answer}</p>
                        
                        {item.points && (
                          <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mb-6">
                            {item.points.map((point, pointIndex) => (
                              <div key={pointIndex} className="flex items-center space-x-3 bg-white rounded-xl p-4 border-2 border-green-200">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-white font-bold">✓</span>
                                </div>
                                <span className="text-gray-700 font-medium">{point}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.note && (
                          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                            <p className="text-yellow-800 font-medium text-sm">{item.note}</p>
                          </div>
                        )}

                        {/* Action Button for Vendor Registration */}
                        {item.button && (
                          <button
                            onClick={item.button.action}
                            className="mt-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                          >
                            <span>🚀</span>
                            <span>{item.button.text}</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* No Results */}
                {searchTerm && filteredItems.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">No results found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any FAQs matching "{searchTerm}". Try searching with different keywords.
                    </p>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View All FAQs
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Support Card */}
            <div className="mt-8 bg-white rounded-3xl p-8 border-2 border-green-200 shadow-lg">
              <div className="text-center">
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Still Need Help?
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Our support team is here to help you with any questions
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                    <div className="text-3xl mb-4">📧</div>
                    <div className="font-bold text-gray-900 mb-2">Email Support</div>
                    <div className="text-green-600 font-medium">info@vegiffy.in</div>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                    <div className="text-3xl mb-4">📞</div>
                    <div className="font-bold text-gray-900 mb-2">Phone Support</div>
                    <div className="text-green-600 font-medium">6309100101</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-6 text-white">
                  <h4 className="text-xl font-black mb-3">🌱 Why Choose VEGIFFY?</h4>
                  <p className="text-green-100 mb-4">
                    100% Pure Vegetarian • Verified Vendors • Free Delivery • Secure Payments
                  </p>
                  <button 
                    onClick={handleDownloadAppClick}
                    className="bg-white text-green-600 px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Download App Now
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button 
                onClick={handleDownloadAppClick}
                className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>📱</span>
                <span>Download App</span>
              </button>
              <button 
                onClick={handleVendorRegistrationClick}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>🏪</span>
                <span>Become a Vendor</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default VEGIFFYFAQs;