
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
  { name: "Python", icon: Code, color: "#3776AB" },           
  { name: "R", icon: BarChart3, color: "#1D5DA0" },           
  { name: "SQL", icon: Database, color: "#F29111" },          
  { name: "JavaScript", icon: Code, color: "#F7DF1E" },       
  { name: "Pandas", icon: Layers, color: "#150458" },         
  { name: "NumPy", icon: Calculator, color: "#013243" },      
  { name: "Scikit-learn", icon: Brain, color: "#F7931E" },    
  { name: "TensorFlow", icon: Zap, color: "#FF6F00" },        
  { name: "Tableau", icon: PieChart, color: "#E97627" },      
  { name: "Power BI", icon: BarChart3, color: "#F2C811" },    
  { name: "Matplotlib", icon: TrendingUp, color: "#11557C" }, 
  { name: "HTML", icon: GitBranch, color: "#E34F26" },
  { name: "Regression Analysis", icon: TrendingUp, color: "#6B7280" },
  { name: "Hypothesis Testing", icon: Target, color: "#6366F1" },
  { name: "Seaborn", icon: AreaChart, color: "#607D8B" },
  { name: "GitHub", icon: FileText, color: "#181717" },
  { name: "XGBoost", icon: Zap, color: "#EA5C10" },
  { name: "PyTorch", icon: Brain, color: "#EE4C2C" },
  { name: "Apache Spark", icon: Zap, color: "#E25A1C" },
  { name: "MLlib", icon: Zap, color: "#E25A1C" },
  { name: "Jupyter Notebook", icon: Terminal, color: "#F37626" },
  { name: "PyCharm", icon: Terminal, color: "#21D789" },
  { name: "GitHub Actions", icon: FileText, color: "#2088FF" },
  { name: "Feature Engineering", icon: Layers, color: "#16A34A" },
  { name: "Clustering (K-Means)", icon: Split, color: "#DB2777" },
  { name: "Data Cleaning", icon: LucideLayers2, color: "#64748B" },
  { name: "Model Evaluation (RMSE)", icon: Target, color: "#2563EB" },
  { name: "Campaign Optimization", icon: TrendingUp, color: "#0EA5E9" },
  { name: "VS Code", icon: Terminal, color: "#007ACC" },
  { name: "Data Wrangling", icon: Layers, color: "#334155" },
  { name: "Data Modeling", icon: BarChart3, color: "#9333EA" },
  { name: "Data Warehousing", icon: Database, color: "#4B5563" },
  { name: "EDA (Erploratory Data Analysis)", icon: PieChart, color: "#7C3AED" },
  { name: "Data Normalization", icon: BarChart3, color: "#14B8A6" },
  { name: "A/B Testing", icon: Split, color: "#0F766E" }
];


  return (
    <section id="skills" className="min-h-screen scroll-mt-28 ">
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
                className="bg-card border-border shadow-sm transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  backgroundColor: 'White',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = `${skill.color}30`;  // hover bg
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'white';  // reset
                }}
              >

                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div 
                      className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${skill.color}20`,
                      }}
                    >
                      <IconComponent 
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: skill.color }}
                      />
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
