import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [currentContact, setCurrentContact] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const fullTitle = "Get in Touch with VEGIFFY";
  
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime for recipe suggestions or support',
      details: 'info@vegiffy.com',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our food experts during business hours',
      details: '+91-9550004150',
      gradient: 'from-orange-400 to-amber-500'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Get instant answers from our food assistant or support team',
      details: 'Available 24/7',
      gradient: 'from-lime-400 to-green-500'
    },
    {
      icon: '🏪',
      title: 'Visit Office',
      description: 'Schedule a meeting at our headquarters for partnerships',
      details: 'Hyderabad, Telangana',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get my first order delivered?',
      answer: 'Most orders are delivered within 30 minutes in metro cities!'
    },
    {
      question: 'Is VEGIFFY 100% vegetarian?',
      answer: 'Yes! We are completely pure vegetarian with verified vendors only.'
    },
    {
      question: 'Do you offer bulk orders for parties/events?',
      answer: 'Absolutely! We specialize in bulk orders with special discounts.'
    },
    {
      question: 'Can I become a vendor partner with VEGIFFY?',
      answer: 'Yes! Join our growing network of vegetarian food vendors.'
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setAnimatedTitle(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const contactInterval = setInterval(() => {
      setCurrentContact((prev) => (prev + 1) % contactMethods.length);
    }, 3000);

    return () => clearInterval(contactInterval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Our food experts will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 pt-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-orange-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-lime-200 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-6 py-3 border border-green-200 mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
            <span className="text-green-700 font-medium">We're Here to Serve You Better!</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {animatedTitle}
            </span>
            <span className="animate-pulse text-green-600">|</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our vegetarian food services? Want to partner with us?
            Our team is ready to provide the best food experience for you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-3xl p-8 border border-green-200 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">📞</span>
                Contact Methods
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl border border-green-200 transition-all duration-500 transform ${
                      index === currentContact ? 'scale-105 bg-green-50' : 'bg-white'
                    } hover:scale-105 hover:bg-green-50 group cursor-pointer`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center text-xl text-white transform group-hover:scale-110 transition-transform duration-300 ${index === currentContact ? 'animate-pulse' : ''}`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold text-lg">{method.title}</h4>
                        <p className="text-green-600 font-medium">{method.details}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      {method.description}
                    </p>
                    {index === currentContact && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 border border-green-200 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">❓</span>
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-green-50 rounded-xl p-4 border border-green-200 hover:bg-green-100 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-gray-900 font-semibold group-hover:text-green-600 transition-colors duration-300">
                        {faq.question}
                      </h4>
                      <span className="text-green-500 transform group-hover:rotate-180 transition-transform duration-300">
                        ▼
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '24/7', label: 'Food Ordering', icon: '🕒' },
                { number: '30min', label: 'Avg Delivery Time', icon: '⚡' },
                { number: '4.8★', label: 'Customer Rating', icon: '⭐' },
                { number: '50+', label: 'Cities Served', icon: '🏙️' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-white rounded-xl border border-green-200 hover:bg-green-50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form (Compact Height) */}
          <div className="bg-white rounded-3xl p-6 border border-green-200 shadow-2xl transform hover:scale-105 transition-all duration-500 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <span className="mr-3">✉️</span>
              Send us a Message
            </h3>
            <p className="text-gray-600 mb-6">We'll get back to you faster than our delivery! 🚀</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-gray-700 font-medium mb-2 group-hover:text-green-600 transition-colors duration-300 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="group">
                  <label className="block text-gray-700 font-medium mb-2 group-hover:text-green-600 transition-colors duration-300 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-gray-700 font-medium mb-2 group-hover:text-green-600 transition-colors duration-300 text-sm">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 text-sm"
                >
                  <option value="">Select a topic</option>
                  <option value="order-issue">Order Issue</option>
                  <option value="partnership">Vendor Partnership</option>
                  <option value="feedback">Food Feedback</option>
                  <option value="career">Career Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-gray-700 font-medium mb-2 group-hover:text-green-600 transition-colors duration-300 text-sm">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 resize-none text-sm"
                  placeholder="Tell us about your food experience or partnership inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 transform hover:-translate-y-1 flex items-center justify-center group text-sm"
              >
                <span className="mr-2 transform group-hover:translate-x-1 transition-transform">🚀</span>
                Send Message
              </button>

              <p className="text-gray-500 text-xs text-center">
                We respect your privacy and will never share your information with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Quick Support Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 border border-green-400 text-center shadow-2xl">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-white">Quick Food Support</h3>
            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
          </div>
          <p className="text-green-100 text-sm mb-3">
            For urgent food order issues or immediate assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <div className="text-white font-bold text-lg bg-white/20 px-4 py-2 rounded-xl border border-white/30">
              🚀 Quick Support: +91-9550004150
            </div>
            <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center text-sm">
              <span className="mr-2">📞</span>
              Call Now
            </button>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">🏪</div>
            <h4 className="font-bold text-gray-900 mb-2">Vendor Partnership</h4>
            <p className="text-gray-600 text-sm">Join 500+ restaurants growing with VEGIFFY</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">👨‍💼</div>
            <h4 className="font-bold text-gray-900 mb-2">Career Opportunities</h4>
            <p className="text-gray-600 text-sm">Join our team of food enthusiasts</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">📢</div>
            <h4 className="font-bold text-gray-900 mb-2">Feedback & Suggestions</h4>
            <p className="text-gray-600 text-sm">Help us improve your food experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;