
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PublishingPage from './pages/PublishingPage';
import ITSolutionsPage from './pages/ITSolutionsPage';
import RemovalsPage from './pages/RemovalsPage';
import CleaningPage from './pages/CleaningPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publishing" element={<PublishingPage />} />
          <Route path="/it-solutions" element={<ITSolutionsPage />} />
          <Route path="/removals" element={<RemovalsPage />} />
          <Route path="/cleaning" element={<CleaningPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
