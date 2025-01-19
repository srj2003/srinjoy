import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
    email: '',
    message: ''
    });
    // Show success message
    setIsSubmitted(true);

    // Hide success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Get in Touch
        </h2>
        {/* Success Pop-Up */}
        {isSubmitted && (
          <div className="fixed top-10 right-10 bg-green-500 text-white p-4 rounded shadow-lg z-50">
            Message recieved. Thank you for sending 😁.
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="w-6 h-6 text-emerald-400" />
              <span>srinjoysaha4004@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="w-6 h-6 text-emerald-400" />
              <span>+91 8777421377</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="w-6 h-6 text-emerald-400" />
              <span>Kolkata, West bengal</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white 
                  border border-gray-700 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400
                  placeholder-gray-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white 
                  border border-gray-700 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400
                  placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white 
                  border border-gray-700 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-emerald-400
                  placeholder-gray-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald-700 text-white rounded-lg 
                hover:bg-emerald-800 transition-colors
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}