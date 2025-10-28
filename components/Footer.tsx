
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-3 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-2">Skylight</h2>
            <p className="text-gray-400">Your Vision, Our Expertise.</p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase mb-4">Services</h3>
            <ul>
              <li><Link to="/publishing" className="hover:text-sky-blue transition-colors">Publishing</Link></li>
              <li className="mt-2"><Link to="/it-solutions" className="hover:text-sky-blue transition-colors">IT Solutions</Link></li>
              <li className="mt-2"><Link to="/removals" className="hover:text-sky-blue transition-colors">Removals</Link></li>
              <li className="mt-2"><Link to="/cleaning" className="hover:text-sky-blue transition-colors">Cleaning</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase mb-4">Company</h3>
             <ul>
              {NAV_LINKS.map(link => (
                  <li key={link.name} className="mt-2">
                    <Link to={link.path} className="hover:text-sky-blue transition-colors">{link.name}</Link>
                  </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* Add social media links here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skylight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
