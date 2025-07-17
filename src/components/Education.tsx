
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Education = () => {
  const educations = [
    {
      title: "Saint Louis University",
      description: "Interactive dashboard analyzing sales trends, customer segmentation, and revenue forecasting using advanced statistical models.",
      image: "https://npr.brightspotcdn.com/c1/30/d90f2afc4c0d8631c9e62f4008bd/10132021-bm-slu-file-03.JPG?w=600&h=400&fit=crop",
      coursework: "Dashboard",
      grade: "3.87/4.0"
    },
    {
      title: "GuruNanak Institutionns Technical Campus",
      description: "Machine learning model to predict customer churn with 89% accuracy, helping reduce customer attrition by 23%.",
      image: "https://www.gniindia.org/assets/images/campus-2.webp?w=600&h=400&fit=crop",
      coursework: "Predictive Analytics",
      grade: "7.7/10.0"
    }
  ];

  return (
    <section id="educations" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation in Information Systems and Computer Science, supported by hands-on projects and internships, demonstrating practical problem-solving and technical proficiency in data analysis, machine learning, and data-driven decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((education, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={education.image} 
                    alt={education.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {education.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {education.description}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {education.coursework}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {education.grade}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
