import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg mb-6">
            Contact us for inquiries, bulk orders, or any e-commerce-related
            assistance. We are here to support your business needs.
          </p>
          <div className="flex items-center space-x-4">
            <div className="bg-white text-purple-800 p-3 rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m8-4H8m8 8H8m10 2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold">Email us</p>
              <a
                href="mailto:support@ecommerce.com"
                className="text-purple-300 hover:underline"
              >
                support@ecommerce.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-gray-300 p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Send us your query
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="mt-1 block w-full p-2 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="mt-1 block p-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="order-id"
                className="block text-sm font-medium text-gray-600"
              >
                Order ID
              </label>
              <input
                type="text"
                id="order-id"
                placeholder="Your order ID (if applicable)"
                className="mt-1 block p-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Your Message*
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us more about your query..."
                className="mt-1 p-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors"
            >
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;