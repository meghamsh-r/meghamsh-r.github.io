
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Digital Strategy Intern",
      company: "Excelerate",
      location: "Remote",
      duration: "Oct 2023- Feb 2024",
      type: "Intern",
      description: "Drove data-backed marketing optimization by conducting performance audits and building insight-driven reporting workflows. Contributed to strategy refinement through campaign analysis, boosting digital engagement and operational efficiency.",
      achievements: [
        "Spearheaded cross-platform SEO audits and digital performance tracking to help clients refine online visibility.",
        "Built interactive campaign dashboards using Power BI, guiding clients to increase engagement by 17% realigning content and ad strategies.",
        "Played a key role in interpreting ad performance data, translating it into targeting insights that led to measurable ROI improvements.",
        "Collaborated in a matrix-managed environment, working directly with content, marketing, and product stakeholders to align data with business outcomes.",
      ],
      technologies: ["Python", "SQL", "Tableau","Power BI", "Google Analytics", "RACE Framework", "Excel", "HTML/CSS"]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Rinex Technologies",
      location: "Remote",
      duration: "May 2021 - Jul 2021",
      type: "Intern",
      description: "Executed machine learning pipelines to solve real-world prediction problems and supported research-based insights through data modeling and classification. Strengthened analytical accuracy and team collaboration across AI initiatives.",
      achievements: [
        "Developed a classification engine using machine learning to predict crime types — built for real-world data conditions.",
        "Built a Random Forest classifier on crime data, achieving 82% prediction accuracy and revealing actionable trends.",
        "Constructed a reusable preprocessing pipeline that improved training performance and reduced error rate.",
        "Partnered with peers to test model deployment scenarios and boosted generalization on new datasets by 30%."
      ],
      technologies: ["Python", "Pandas", "Random Forest Algorithm", "Team Collaboration", "Data Cleaning", "Scikit-learn", "Numpy", "Seaborn", "Data Preprocessing"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in data analysis, from junior analyst to leading data-driven initiatives.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">
                      {experience.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <h4 className="font-semibold text-primary">
                        {experience.company}
                      </h4>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {experience.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {experience.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="border-primary/20 text-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
