import React from 'react';
import { Hero } from '../components/Hero';
import { WaveBanner } from '../components/WaveBanner';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <main className="flex-grow">
      {/* 1. Hero with Staggered Word Blur-Up & Role Rotator */}
      <Hero />

      {/* 2. Interactive Harmonic Wave Banner */}
      <WaveBanner />

      {/* 3. About Section with Floating Polaroid Stack */}
      <About />

      {/* 4. Projects Showcase (Animated Marquee + Slideshow + Stacked Grid) */}
      <Projects />

      {/* 5. Work Experience Timeline (Holdr In Progress, New State, MOB Eki) */}
      <Experience />

      {/* 6. Capabilities Black Card */}
      <Services />

      {/* 7. Get in Touch Contact Form */}
      <Contact />
    </main>
  );
};