import React from "react";

const ContactUs = () => {
  // Set the background color of the whole web page to violet-900
  document.body.style.background = "linear-gradient(to bottom, #0D0C28, #5900b3)";

  return (
    <div className="overlay bg-gradient-to-b border border-black m-4 rounded-tl rounded-br rounded-tr rounded-bl" style={{ background: "linear-gradient(to bottom, #0D0C28, #5900b3)" }}>
      <div className="contact-container">
        <form className="form-container flex" action="https://getform.io/f/87fd37e4-92f4-4ac1-a188-49e55bfc8344" method="POST">
          <div className="left-column flex-1 pr-4 pl-8 py-8 text-left"> {/* Added text-left class */}
            <h2 className="text-white text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-white mb-4">
              Whether you have a question about our AI-powered technology, need assistance with our products, or want to explore potential partnerships, our team is here to provide prompt and personalized support.
            </p>
          </div>

          <div className="right-column flex-1 pr-8 pl-8 py-4 text-left"> {/* Added text-left class */}
            <label htmlFor="organization" className="block text-white mb-2">Organization name</label>
            <input type="text" id="organization" name="organization" className="w-full p-2 mb-4 border border-gray-800 rounded bg-violet-950" required />

            <label htmlFor="topic" className="block text-white mb-2">Topic</label>
            <input type="text" id="topic" name="topic" className="w-full p-2 mb-4 border border-gray-800 rounded bg-violet-950" required />

            <label htmlFor="email" className="block text-white mb-2">Email address</label>
            <input type="email" id="email" name="email" className="w-full p-2 mb-4 border border-gray-800 rounded bg-violet-950" required />

            <label htmlFor="telegram" className="block text-white mb-2">Your telegram ID</label>
            <input type="text" id="telegram" name="telegram" className="w-full p-2 mb-4 border border-gray-800 rounded bg-violet-950" required />

            <label htmlFor="request" className="block text-white mb-2">How can we help you?</label>
            <textarea id="request" name="request" rows="6" className="w-full p-2 mb-4 border border-gray-800 rounded bg-violet-950" required></textarea>

            <button type="submit" className="border-x-black bg-violet-950 text-white px-4 py-2 rounded-tl rounded-br rounded-tr rounded-bl cursor-pointer hover:bg-purple-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
