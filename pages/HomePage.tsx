
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { DIVISIONS } from '../constants';

const DivisionCard: React.FC<{ division: typeof DIVISIONS[string] }> = ({ division }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <img src={division.image} alt={division.name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{division.name}</h3>
        <p className="text-gray-200 mb-4">{division.tagline}</p>
        <Link to={division.path} className="text-sky-blue font-semibold self-start hover:underline">
          Learn More &rarr;
        </Link>
      </div>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-blue mb-4">Our Divisions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've structured our expertise into four distinct divisions to provide focused, high-quality services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(DIVISIONS).map(division => (
              <DivisionCard key={division.name} division={division} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
