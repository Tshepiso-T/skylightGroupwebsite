
import React from 'react';
import { DIVISIONS } from '../constants';
import ServiceCard from '../components/ServiceCard';

const RemovalsPage: React.FC = () => {
  const division = DIVISIONS.REMOVALS;

  return (
    <div>
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${division.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold">{division.name}</h1>
            <p className="text-xl mt-2">{division.tagline}</p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">{division.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {division.services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemovalsPage;
