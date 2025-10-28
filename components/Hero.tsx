import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-deep-blue text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=0')" }}
      ></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-48 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          Integrated Services for a Modern World
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
          From publishing your story to powering your business, Skylight provides diverse, expert solutions under one roof.
        </p>
        <Link 
          to="/contact#contact-form" 
          className="bg-sky-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero;