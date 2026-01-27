import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      description:
        "Credential focused on OCI Generative AI, large language models, retrieval-augmented generation, and enterprise AI solution design.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      type: "Certification",
      link: "https://drive.google.com/file/d/1DD_UJc0MtnAxrw2p46ITSybp9ftaXvpI/view?usp=sharing",
      skillGroups: [
        {
          title: "Large Language Models (LLMs)",
          items: [
            "Understanding of LLM fundamentals and transformer-based architectures",
            "Knowledge of tokenization, embeddings, attention mechanisms, and context handling",
            "Prompt engineering using zero-shot and few-shot techniques",
            "Designing prompts for reasoning, summarization, and information extraction",
            "Understanding of LLM fine-tuning concepts and adaptation strategies",
            "Fundamentals of code models, multimodal models, and language agents",
          ],
        },
        {
          title: "OCI Generative AI Platform",
          items: [
            "Using OCI Generative AI Service for chat and embedding models",
            "Selecting and working with pretrained foundation models",
            "Creating dedicated AI clusters for inference and fine-tuning",
            "Deploying and managing model endpoints",
            "Performing model inference via APIs",
            "Understanding OCI Generative AI security architecture, IAM, and data isolation",
            "Deploying AI workloads following enterprise cloud best practices",
          ],
        },
        {
          title: "Retrieval-Augmented Generation (RAG)",
          items: [
            "Designing and implementing end-to-end RAG pipelines",
            "Integrating OCI Generative AI with LangChain",
            "Loading, splitting, and chunking enterprise documents",
            "Generating vector embeddings for document chunks",
            "Reducing LLM hallucinations using grounded retrieval",
          ],
        },
        {
          title: "Vector Search & AI Data Engineering",
          items: [
            "Storing and indexing embeddings in Oracle Database 23ai",
            "Performing vector similarity search",
            "Designing semantic search systems",
            "Managing structured and unstructured data for AI applications",
          ],
        },
        {
          title: "AI Agents & Knowledge Systems",
          items: [
            "Understanding AI agent architecture",
            "Creating knowledge bases for enterprise AI agents",
            "Building and deploying RAG-based agents",
            "Enabling conversational AI using enterprise data sources",
            "Invoking deployed RAG agents as chatbots",
          ],
        },
        {
          title: "Enterprise AI Solution Design",
          items: [
            "Choosing between prompting, fine-tuning, and RAG for different use cases",
            "Designing scalable and secure AI architectures on OCI",
            "Integrating AI with databases, APIs, and applications",
            "Building production-ready AI chatbots from that",
          ],
        },
      ],
    },
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional credentials that validate applied skills in cloud-based AI, LLMs, and enterprise solution design.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {certifications.map((certification, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {certification.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {certification.title}
                  </h3>
                  <Button
                    asChild
                    size="sm"
                    className="w-fit h-7 px-3 text-xs rounded-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {certification.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {certification.skillGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        {group.title}
                      </h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {group.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
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

export default Certifications;
