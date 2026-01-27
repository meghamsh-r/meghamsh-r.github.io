import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Simulate form submission
    emailjs.send(
    'service_6jamaxa',     // Replace with your actual Service ID
    'template_nbmp8g4',    // Replace with your actual Template ID
    {
      name: formData.name,
      email: formData.email,
      title: formData.subject,   // "title" matches the template's {{title}}
      message: formData.message
    },
    'gd0FLjtySufjVJU_Y'      // Replace with your actual Public Key
  ).then(() => {
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  }).catch((error) => {
  toast({
    title: "Failed to send message",
    description: "Something went wrong. Please try again later.",
  });
  console.error("EmailJS error:", error);
  });
};

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30 scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master's in Information Systems graduate with proven expertise in <span className="text-primary font-semibold">data analytics</span>, <span className="text-primary font-semibold">machine learning</span>, and <span className="text-primary font-semibold">frontend development</span>. I've delivered <span className="text-primary font-semibold">20% performance improvements</span> through data-driven insights and built predictive models with <span className="text-primary font-semibold">82% accuracy</span>. Ready to transform your data challenges into strategic advantages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Get In Touch
            </h3>
            
            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Email
              </h4>
              <p className="text-muted-foreground">
                <a 
                  href="mailto:mrouthumeghamsh@gmail.com" 
                  className="text-muted-foreground hover:text-red-600 hover:bg-red-50 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg inline-block"
                >
                  mrouthumeghamsh@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-primary" />
                LinkedIn
              </h4>
              <p className="text-muted-foreground">
                <a 
                  href="https://www.linkedin.com/in/meghamshr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-600 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg inline-block"
                >
                  linkedin.com/in/meghamshr
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Mobile
              </h4>
              <p className="text-muted-foreground">
                <a 
                href="tel:+13142242774"
                className="text-muted-foreground hover:text-green-600 hover:bg-green-50 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg inline-block"
                >
                  +1 (314) 224-2774
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-2">Location</h4>
              <p className="text-muted-foreground">Saint Louis, MO</p>
            </div>

          </div>

          <Card className="bg-card border-border shadow-sm animate-fade-in">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="border-border"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="border-border resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;