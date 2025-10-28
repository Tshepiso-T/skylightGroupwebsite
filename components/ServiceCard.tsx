
import React from 'react';
import type { Service } from '../types';

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-bold text-deep-blue mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
