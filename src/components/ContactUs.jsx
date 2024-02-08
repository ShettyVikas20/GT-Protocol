import React from "react";

const ContactUs = () => {
  return (
    <div className="overlay bg-gradient-to-br from-purple-800 to-purple-600 h-screen flex items-center justify-center">
      <div className="contact-container">
        <form className="form-container flex" action="https://getform.io/f/87fd37e4-92f4-4ac1-a188-49e55bfc8344" method="POST">
          <div className="left-column flex-1 pr-8">
            <h2 className="text-white text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-white">
              Whether you have a question about our AI-powered technology, need assistance with our products, or want to explore potential partnerships, our team is here to provide prompt and personalized support.
            </p>
          </div>

          <div className="right-column flex-2">
            <label htmlFor="organization" className="block text-gray-800 mb-2">Organization name</label>
            <input type="text" id="organization" name="organization" className="w-full p-2 mb-4 border border-gray-300 rounded" required />

            <label htmlFor="topic" className="block text-gray-800 mb-2">Topic</label>
            <input type="text" id="topic" name="topic" className="w-full p-2 mb-4 border border-gray-300 rounded" required />

            <label htmlFor="email" className="block text-gray-800 mb-2">Email address</label>
            <input type="email" id="email" name="email" className="w-full p-2 mb-4 border border-gray-300 rounded" required />

            <label htmlFor="telegram" className="block text-gray-800 mb-2">Your telegram ID</label>
            <input type="text" id="telegram" name="telegram" className="w-full p-2 mb-4 border border-gray-300 rounded" required />

            <label htmlFor="request" className="block text-gray-800 mb-2">How can we help you?</label>
            <textarea id="request" name="request" rows="6" className="w-full p-2 mb-4 border border-gray-300 rounded" required></textarea>

            <button type="submit" className="bg-purple-800 text-white px-4 py-2 rounded-tl rounded-br rounded-tr rounded-bl cursor-pointer hover:bg-purple-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
