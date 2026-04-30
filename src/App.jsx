import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-[#f0f4e8]">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;