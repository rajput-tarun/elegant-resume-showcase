
import { Award, Calendar, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Blog() {
  const achievements = [
    {
      title: "Currently Ranked 1, M.Tech Data Science",
      institution: "IIT Guwahati",
      period: "July'23 - Present",
      description: "Top academic performance in the M.Tech Data Science program."
    },
    {
      title: "Department Rank 2, Department of MEMS",
      institution: "IIT Bombay",
      period: "July'22 - July'23",
      description: "Achieved second rank in the Post Graduate Diploma program."
    },
    {
      title: "AIR 255, Graduate Aptitude Test in Engineering (GATE)",
      institution: "National Level Examination",
      period: "April'22",
      description: "Secured All India Rank 255 in the prestigious GATE examination."
    }
  ];

  const blogPosts = [
    {
      title: "Enhancing Model Performance with LLM-based Data Augmentation",
      date: "Coming Soon",
      description: "Techniques for improving NLP model accuracy through advanced data augmentation.",
      link: "#"
    },
    {
      title: "The Future of Healthcare AI: Medical Imaging Analysis",
      date: "Coming Soon",
      description: "Exploring how AI is transforming medical diagnostics through image analysis.",
      link: "#"
    },
    {
      title: "Parameter-Efficient Fine-Tuning for Large Language Models",
      date: "Coming Soon",
      description: "Best practices for optimizing LLM fine-tuning with limited computational resources.",
      link: "#"
    }
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading 
              title="Achievements" 
              subtitle="Recognition and academic accomplishments"
            />
            
            <div className="space-y-6 mt-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 border border-border shadow-sm hover-card-effect fade-in-section"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mt-1">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span>{achievement.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{achievement.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <SectionHeading 
              title="Blog" 
              subtitle="Articles and insights coming soon"
            />
            
            <div className="space-y-6 mt-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl border border-border shadow-sm overflow-hidden hover-card-effect fade-in-section"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <a 
                      href={post.link} 
                      className="text-sm font-medium text-primary inline-flex items-center hover:underline"
                    >
                      Read More <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Stay tuned for upcoming articles on AI, machine learning, and data science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
