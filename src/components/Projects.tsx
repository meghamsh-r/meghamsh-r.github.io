import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Crime Pattern Detection & Classification",
      description: "Designed a machine learning system that classifies crime types based on spatial and temporal variables. Leveraged decision tree ensembles and advanced preprocessing techniques to uncover actionable crime trends.",
      image: "https://images.unsplash.com/photo-1532077795300-c4b487f601f6?w=600&h=400&fit=crop",
      tags: ["Python", "Pandas", "Scikit-learn", "Feature Engineering", "Data Visualization"],
      type: "Machine Learning"
    },
    {
      title: "Air Quality Prediction",
      description: "Built a regression model to forecast AQI using historical pollutant data. Emphasized robust preprocessing, normalization, and performance evaluation to derive health-relevant environmental predictions.",
      image: "https://images.unsplash.com/photo-1569142916960-885f868d6123?w=600&h=400&fit=crop",
      tags: ["Python", "Linear Regression", "Pandas", "NumPy", "RMSE Evaluation"],
      type: "Predictive Modeling"
    },
    {
      title: "Customer Sales Analysis",
      description: "I analyzed over 100,000 retail transactions to identify customer behavior patterns. Using Python for data processing and RFM analysis, I discovered 6 customer segments and found that our top 20% of customers drive 67% of revenue. I created an interactive Power BI dashboard that helps stakeholders track key metrics and implemented recommendations that could improve customer retention by 25%",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VzdG9lbWVyJTIwYW5hbHl0aWNzfGVufDB8fDB8fHww",
      tags: ["Python", "Power BI", "Pandas", "Data Cleaning", "Statistical Analysis", "Dashboard Development", "Customer Segmentation", "Data Analytics", "Business Intelligence", "Revenue Analysis"],
      type: "Business Analytics"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data analysis and machine learning projects, highlighting technical skills, business impact, and end-to-end execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {project.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="border-primary/20 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



//
