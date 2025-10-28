
import React from 'react';
import type { Division } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Publishing', path: '/publishing' },
  { name: 'IT Solutions', path: '/it-solutions' },
  { name: 'Removals', path: '/removals' },
  { name: 'Cleaning', path: '/cleaning' },
  { name: 'Contact', path: '/contact' },
];

const iconClasses = "h-12 w-12 text-sky-blue mb-4";

export const DIVISIONS: { [key: string]: Division } = {
  PUBLISHING: {
    name: "Skylight Publishing",
    tagline: "From Manuscript to Masterpiece",
    description: "We bring your stories to life with a full suite of publishing services. Our team of experts handles everything from editing and design to marketing and distribution, ensuring your book reaches its intended audience and makes a lasting impact.",
    path: "/publishing",
    image: "https://picsum.photos/1200/800?random=1",
    services: [
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.253-2.494l5.253 2.494 5.253-2.494M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>,
        title: "Book Cover Design",
        description: "Captivating covers that sell. Our designers create visually stunning and genre-appropriate covers that grab readers' attention."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
        title: "Logo & Brand Design",
        description: "Establish your author brand with a professional logo and consistent visual identity across all your platforms."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>,
        title: "Book Editing & Ghostwriting",
        description: "Our meticulous editors polish your manuscript to perfection. Need help writing? Our ghostwriters can bring your ideas to the page."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>,
        title: "Publishing & Distribution",
        description: "We manage the entire publishing process, from formatting and ISBN assignment to distribution on major platforms like Amazon and Apple Books."
      }
    ]
  },
  IT_SOLUTIONS: {
    name: "Skylight IT Solutions",
    tagline: "Technology That Powers Your Success",
    description: "In a digital-first world, reliable technology is non-negotiable. We provide comprehensive IT services, from hardware support to bespoke software development, ensuring your business operations are seamless, secure, and future-proof.",
    path: "/it-solutions",
    image: "https://picsum.photos/1200/800?random=2",
    services: [
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
        title: "Computer/Laptop Repair",
        description: "Fast, reliable repairs for all major brands. We handle hardware failures, software issues, and performance tuning to get you back to work."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 18h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>,
        title: "Web & Software Development",
        description: "Custom websites and software tailored to your business needs. We build scalable, secure, and user-friendly digital solutions."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h.01M15 10h.01M10 14a2 2 0 104 0 2 2 0 00-4 0z" /></svg>,
        title: "On-site & Remote IT Support",
        description: "Expert assistance when you need it most. Our support team is available to resolve your technical issues quickly and efficiently."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
        title: "Networking & IT Consultation",
        description: "Strategic IT guidance and robust network installations to optimize your infrastructure for performance and security."
      }
    ]
  },
  REMOVALS: {
    name: "Skylight Removals",
    tagline: "Moving Made Simple and Stress-Free",
    description: "Relocating your home or office? Our professional removal team ensures a smooth, efficient, and careful transition. We handle every aspect of your move, from packing and loading to transportation and unloading, so you can focus on settling in.",
    path: "/removals",
    image: "https://picsum.photos/1200/800?random=3",
    services: [
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16h2a1 1 0 001-1V7a1 1 0 00-1-1h-2v10z" /></svg>,
        title: "Residential Moving",
        description: "Whether you're moving to a new apartment or a large house, our team handles your belongings with the utmost care."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
        title: "Commercial & Office Relocation",
        description: "Minimize downtime with our efficient office moving services. We specialize in safely relocating equipment, files, and furniture."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18l-6-6 6-6" /></svg>,
        title: "Packing & Unpacking Services",
        description: "Save time and effort with our professional packing services. We use high-quality materials to protect your items."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5" /></svg>,
        title: "Storage Solutions",
        description: "Need to store your belongings? We offer secure, clean, and flexible short-term and long-term storage options."
      }
    ]
  },
  CLEANING: {
    name: "Skylight Pavement Cleaning",
    tagline: "Restoring Your Surfaces, Enhancing Your Curb Appeal",
    description: "First impressions matter. Our specialized pavement cleaning services remove dirt, grime, stains, and moss, revitalizing your driveways, patios, and walkways. We use professional-grade equipment to deliver a deep clean that restores your property's beauty and safety.",
    path: "/cleaning",
    image: "https://picsum.photos/1200/800?random=4",
    services: [
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-3-1m-3 1l-6 2m12 5l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6 2" /></svg>,
        title: "High-Pressure Washing",
        description: "Effectively remove stubborn dirt, algae, and grime from concrete, brick, and stone surfaces with our powerful pressure washing."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-.477-2.387z" /></svg>,
        title: "Driveway & Patio Cleaning",
        description: "Restore the look of your driveway and patio. We remove oil stains, tire marks, and organic growth to improve curb appeal."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
        title: "Sealing & Protection",
        description: "After cleaning, we can apply a professional-grade sealant to protect your pavement from future stains, weather damage, and wear."
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
        title: "Re-sanding Jointing",
        description: "We replenish the sand in the joints of block paving, which helps to prevent weed growth and enhances the stability of the surface."
      }
    ]
  }
};
