
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  PieChart, 
  TrendingUp,
  AreaChart, 
  FileText, 
  Terminal,
  Split,
  Calculator,
  Target,
  GitBranch,
  Layers,
  Zap,
  LucideLayers2
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "Python", icon: Code },
    { name: "R", icon: BarChart3 },
    { name: "SQL", icon: Database },
    { name: "JavaScript", icon: Code },
    { name: "Pandas", icon: Layers },
    { name: "NumPy", icon: Calculator },
    { name: "Scikit-learn", icon: Brain },
    { name: "TensorFlow", icon: Zap },
    { name: "Tableau", icon: PieChart },
    { name: "Power BI", icon: BarChart3 },
    { name: "Matplotlib", icon: TrendingUp },
    { name: "HTML", icon: GitBranch },
    { name: "Regression Analysis", icon: TrendingUp },
    { name: "Hypothesis Testing", icon: Target },
    { name: "Seaborn", icon: AreaChart },
    { name: "GitHub", icon: FileText },
    { name: "XGBoost", icon: Zap },
    { name: "PyTorch", icon: Brain },
    { name: "Apache Spark", icon: Zap },
    { name: "MLlib", icon: Zap },
    { name: "Jupyter Notebook", icon: Terminal },
    { name: "PyCharm", icon: Terminal },
    { name: "GitHub Actions", icon: FileText },
    { name: "Feature Engineering", icon: Layers },
    { name: "Clustering (K-Means)", icon: Split },
    { name: "Data Cleaning", icon: LucideLayers2 },
    { name: "Model Evaluation (RMSE)", icon: Target },
    { name: "Campaign Optimization", icon: TrendingUp },
    { name: "VS Code", icon: Terminal },
    { name: "Data Wrangling", icon: Layers },
    { name: "Data Modeling", icon: BarChart3 },
    { name: "Data Warehousing", icon: Database },
    { name: "EDA (Erploratory Data Analysis)", icon: PieChart },
    { name: "Data Normalization", icon: BarChart3 },
    { name: "A/B Testing", icon: Split }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills and tools I use to transform data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Always Learning
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The field of data analysis is constantly evolving. I stay current with the latest tools, 
                techniques, and best practices through continuous learning and hands-on projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
