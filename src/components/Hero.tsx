import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';
import profilePhoto from './Profile_.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-white scroll-mt-28">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 py-16">
        
        {/* Left: Text Section */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Meghamsh <span className="text-primary">Routhu</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
            Data Engineer specialized in Analytics, Pipelines, and Insight Delivery
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-xl">
            Experienced in building scalable data architectures, optimizing ETL pipelines, and driving strategic insights through machine learning and data visualization.
          </p>

          {/* Contact Icons */}
          <div className="flex gap-6 mt-4">
            <a href="mailto:mrouthumeghamsh@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 text-gray-700 hover:text-primary" />
            </a>
            <a href="tel:+13142242774" aria-label="Phone">
              <Phone className="w-6 h-6 text-gray-700 hover:text-primary" />
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 text-gray-700 hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePhoto}
            alt="Meghamsh Routhu"
            className="rounded-3xl w-full max-w-md object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
