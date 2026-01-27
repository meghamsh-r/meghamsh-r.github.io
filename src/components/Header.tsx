import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sectionIds = [
    'home',
    'about',
    'skills',
    'experience',
    'projects',
    'educations',
    'certifications',
    'contact',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver to track sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Section in view:', entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navButtonStyle = (id: string) =>
    `relative pb-1 transition-all duration-300 ease-in-out 
    ${
      activeSection === id
        ? 'text-primary font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-all after:duration-300'
        : 'text-muted-foreground hover:text-primary'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-foreground">Portfolio</div>

          <div className="hidden md:flex items-center space-x-8">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={navButtonStyle(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Hire Me
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
