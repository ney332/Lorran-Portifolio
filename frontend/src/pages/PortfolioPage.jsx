import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import CoursesSection from '../components/CoursesSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <HeroSection />
        <div ref={addToRefs} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <AboutSection />
        </div>
        <div ref={addToRefs} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <ProjectsSection />
        </div>
        <div ref={addToRefs} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <ExperienceSection />
        </div>
        <div ref={addToRefs} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <CoursesSection />
        </div>
        <div ref={addToRefs} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <SkillsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;