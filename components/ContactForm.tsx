import React from 'react';

const ContactForm: React.FC = () => {
  // We've replaced the JavaScript-based form submission with a standard HTML form submission
  // that uses Formspree, a free service for handling form submissions without a backend.
  //
  // HOW TO SET THIS UP:
  // 1. Go to https://formspree.io/
  // 2. Create a new form and set the destination email to tshepiso1bookpublishe@gmail.com
  // 3. Formspree will give you a unique URL (e.g., https://formspree.io/f/xxxxxxxx).
  // 4. Replace the placeholder URL in the `action` attribute below with your unique URL.

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold text-deep-blue mb-6">Send us a message</h2>
      <form 
        action="https://formspree.io/f/YOUR_FORM_ID_HERE" // <-- IMPORTANT: REPLACE THIS URL
        method="POST"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-blue focus:border-sky-blue" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input type="email" id="email" name="_replyto" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-blue focus:border-sky-blue" />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
          <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-blue focus:border-sky-blue" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-blue focus:border-sky-blue"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-sky-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;