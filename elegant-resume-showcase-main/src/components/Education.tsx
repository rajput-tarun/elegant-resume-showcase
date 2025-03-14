
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const educationData = [
    {
      degree: "M.Tech",
      institution: "Indian Institute of Technology, Guwahati",
      score: "CGPA: 9.20",
      year: "2023-Present",
      description: "Specializing in Data Science with focus on machine learning, deep learning, and natural language processing."
    },
    {
      degree: "PGDIIT",
      institution: "Indian Institute of Technology, Bombay",
      score: "CGPA: 9.27",
      year: "2022-23",
      description: "Department Rank 2. Gained expertise in data science fundamentals and applications."
    },
    {
      degree: "B.Tech",
      institution: "Aryabhatta Knowledge University",
      score: "CGPA: 8.62",
      year: "2018-22",
      description: "Developed strong foundation in engineering principles and technical skills."
    },
    {
      degree: "Senior Secondary",
      institution: "Bihar State Examination Board",
      score: "Percentage: 73.4%",
      year: "2018",
      description: "Completed secondary education with strong academic performance."
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Educational Background" 
          subtitle="My academic journey and qualifications"
          alignment="center"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {educationData.map((item, index) => (
              <div 
                key={index}
                className="relative flex items-start md:justify-between md:even:flex-row-reverse group fade-in-section"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow-sm text-primary z-10 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
                  <GraduationCap size={20} />
                </div>
                
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm ml-8 md:ml-0 md:max-w-md md:group-odd:mr-8 md:group-even:ml-8 hover-card-effect">
                  <div className="flex flex-wrap items-center justify-between mb-1">
                    <div className="bg-primary/10 text-primary font-medium text-sm px-3 py-1 rounded-full">
                      {item.year}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.score}
                    </span>
                  </div>
                  <div className="mb-2">
                    <h4 className="font-bold text-xl">{item.degree}</h4>
                    <h5 className="text-muted-foreground">{item.institution}</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Key Courses</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Deep Learning", 
              "Machine Learning",
              "NLP with Large Language Models",
              "Data Structures and Algorithms",
              "DBMS",
              "OOP",
              "Data Visualization",
              "Image Processing with ML",
              "Probability and Statistics", 
              "Matrix Computation", 
              "Optimization Techniques", 
              "Linear Algebra"
            ].map((course, index) => (
              <span 
                key={index} 
                className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
