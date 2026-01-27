
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Emerging Data Engineer with a strong foundation in machine learning, data engineering, and business analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <Card className="bg-card border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-9xl">📊</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Turning Data Into Stories
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With hands-on experience from data-driven internships and advanced academic projects, I specialize in building predictive models, optimizing data pipelines, and turning raw data into actionable insights. My technical toolkit includes Python, SQL, Scikit-learn, TensorFlow, and modern BI tools like Power BI and Tableau.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I’m passionate about solving complex problems using clean, scalable code and statistical rigor. Whether it’s predicting crime patterns, analyzing customer behavior, or enhancing campaign performance, I approach every challenge with curiosity, precision, and a focus on delivering measurable business value.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2"> </h4>
                <p className="text-muted-foreground"> </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Projects</h4>
                <p className="text-muted-foreground">3 Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Focus</h4>
                <p className="text-muted-foreground">Data Analyst</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Approach</h4>
                <p className="text-muted-foreground">Insight-Driven, Scalable Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
