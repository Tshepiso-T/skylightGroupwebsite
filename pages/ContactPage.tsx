import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-light-gray">
        <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-deep-blue">Contact Us</h1>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">We'd love to hear from you. Whether you have a question about our services or need a quote, we're ready to help.</p>
            </div>
            <div id="contact-form" className="flex flex-wrap md:flex-nowrap gap-12 justify-center items-start">
                <div className="w-full md:w-auto text-dark-charcoal p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-deep-blue mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg className="w-6 h-6 mr-3 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            22 Lerubise st ,Tembisa, 1632
                        </p>
                        <p className="flex items-center">
                            <svg className="w-6 h-6 mr-3 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            (078) 079-8279
                        </p>
                        <p className="flex items-center">
                             <svg className="w-6 h-6 mr-3 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            contact@skylight.com
                          t.tshangwane1@gmail.com(for instant Replies)
                        </p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
