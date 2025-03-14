
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const projects = [
    {
      title: "Optimizing Downstream NLP Tasks through Data Augmentation with LLMs",
      description: "Master's Thesis focused on designing advanced data augmentation techniques to enhance model performance in downstream NLP tasks by fine-tuning language models on datasets like SST-2 and EMOTION.",
      achievements: "Achieved a 5% improvement in overall accuracy on the SST dataset by implementing Conditional Augmentation using RoBERTa and Llama-3.3-70B.",
      period: "June'24 - Present",
      tags: ["NLP", "LLMs", "Data Augmentation", "Fine-tuning"],
      links: {
        github: "",
        live: ""
      }
    },
    {
      title: "Care Vision AI: Disease Detection on Medical Imaging Datasets",
      description: "Built AI models for detecting medical conditions like skin cancer, brain tumors, lung cancer, and pneumonia using CNN, SVM, Random Forest, and morphological operations.",
      achievements: "Enhanced Recall by 4% using Transfer Learning with the ResNet50 architecture and designed a user-friendly web application for efficient real-time detection and diagnosis.",
      period: "Jan'24 - May'24",
      tags: ["Computer Vision", "Medical Imaging", "CNN", "Transfer Learning"],
      links: {
        github: "https://github.com",
        live: ""
      }
    },
    {
      title: "Large Language Model Based Healthcare Assistant",
      description: "Fine-tuned Llama2-7b model on a custom dataset from the Medical Encyclopedia to develop a healthcare chatbot.",
      achievements: "Employed QLoRA, 4-bit quantization, and Hugging Face libraries for parameter-efficient fine-tuning, resulting in 50% lower RAM usage and 400% faster training times.",
      period: "Jan'24 - Apr'24",
      tags: ["LLMs", "QLoRA", "Healthcare", "Chatbot"],
      links: {
        github: "https://github.com",
        live: ""
      }
    },
    {
      title: "Steel Industry Energy Consumption Classification",
      description: "Performed Exploratory Data Analysis on electricity consumption data from a steel plant with 35,000+ entries, and built machine learning models using various algorithms.",
      achievements: "Optimized the Random Forest model's performance through hyperparameter tuning, achieving an F1 score of 0.98.",
      period: "Aug'23 - Nov'23",
      tags: ["Machine Learning", "EDA", "Random Forest", "Classification"],
      links: {
        github: "https://github.com",
        live: ""
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my most significant projects and research work"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] fade-in-section"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="text-sm bg-primary/10 text-primary font-medium px-3 py-1 rounded-full inline-block mb-3">
                  {project.period}
                </div>
                
                <p className="text-muted-foreground mb-3 text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="font-medium text-sm mb-1">Key Achievement:</div>
                  <p className="text-sm text-muted-foreground">
                    {project.achievements}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            These projects represent a subset of my work. For a complete overview of my projects and contributions, please visit my GitHub.
          </p>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
