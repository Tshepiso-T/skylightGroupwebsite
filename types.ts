
import React from 'react';

export interface Service {
  // Fix: Use `React.ReactElement` to avoid issues with the JSX namespace in `.ts` files.
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface Division {
    name: string;
    tagline: string;
    description: string;
    path: string;
    image: string;
    services: Service[];
}