
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profilePhoto from './profile_photo.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20">
            <AvatarImage 
              src={profilePhoto} 
              alt="Profile"
              className="object-cover"
            />
            <AvatarFallback className="text-2xl md:text-3xl bg-primary/10 text-primary">
              RM
            </AvatarFallback>
          </Avatar>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Meghamsh <span className="text-primary">Routhu</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
          Data Scientist
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Recent graduate with a Master’s in Information Systems and one year of experience as a Digital Strategy Intern at Excelerate. Strong foundation in data analytics, data engineering, and frontend development. Proficient in Python, SQL, Power BI, and web technologies including HTML, CSS, and JavaScript. Demonstrated ability to deliver insights through data visualization and to build user-focused interfaces. Actively seeking roles in data analysis, data engineering, or frontend development to contribute technical skills and business insight in a collaborative environment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            Get In Touch
          </Button>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
