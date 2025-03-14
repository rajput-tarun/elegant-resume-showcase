import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const experiences = [
    {
      position: "Data Science Intern",
      company: "ARKRAY, Japan",
      period: "Jan 2025 - Present",
      type: "Remote",
      description: [
        "Improved mAP by 5% for urine sediment analysis by integrating attention mechanisms like CBAM into YOLOX, enhancing diagnostic accuracy across 7 classes.",
        "Optimized the object detection pipeline, reducing detection time by 15% and enhancing efficiency in medical laboratory testing."
      ]
    },
    {
      position: "Associate Head",
      company: "Saathi Counselling cell, IIT Guwahati",
      period: "Apr 2023 - Present",
      type: "On-site",
      description: [
        "Implemented a data-driven feedback system for 1600+ students, boosting mentor-mentee engagement by 65%.",
        "Managed a team of 13 to coordinate with 200+ mentors, handle feedback, and enhance students' mental well-being."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey in the professional world"
          alignment="center"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="relative flex items-start md:justify-between md:even:flex-row-reverse group fade-in-section"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow-sm text-primary z-10 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                  <Briefcase size={20} />
                </div>
                
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm ml-8 md:ml-0 md:max-w-md md:group-odd:mr-8 md:group-even:ml-8 hover-card-effect">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <div className="bg-primary/10 text-primary font-medium text-sm px-3 py-1 rounded-full">
                      {experience.period}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {experience.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{experience.position}</h3>
                  <h4 className="text-muted-foreground mb-4">{experience.company}</h4>
                  
                  <ul className="space-y-3">
                    {experience.description.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm text-muted-foreground font-sans leading-relaxed"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
