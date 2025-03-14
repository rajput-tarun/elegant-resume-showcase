
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 75 },
        { name: "MATLAB", level: 50 },
        { name: "R", level: 60 },
      ]
    },
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow/Keras", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "Natural Language Processing", level: 80 },
        { name: "Computer Vision", level: 85 },
      ]
    },
    {
      category: "Data Management & Tools",
      skills: [
        { name: "MySQL", level: 75 },
        { name: "Pandas/NumPy", level: 95 },
        { name: "Data Visualization", level: 85 },
        { name: "YOLO", level: 80 },
        { name: "LangChain", level: 75 },
        { name: "Docker", level: 70 },
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Research & Analysis",
    "Technical Communication",
    "Team Leadership",
    "Project Management",
    "Mentoring",
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My technical expertise and proficiencies"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in-section">
            {technicalSkills.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8 fade-in-section">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-secondary/50 rounded-lg p-4 text-center hover:bg-secondary transition-colors duration-300"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium">GATE 2022</h4>
                  <p className="text-sm text-muted-foreground">All India Rank: 255</p>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium">Currently Ranked 1</h4>
                  <p className="text-sm text-muted-foreground">M.Tech Data Science, IIT Guwahati (July'23 - Present)</p>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium">Department Rank 2</h4>
                  <p className="text-sm text-muted-foreground">Department of MEMS, IIT Bombay (July'22 - July'23)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border border-border rounded-lg text-center">
                  <h4 className="font-medium">English</h4>
                  <p className="text-sm text-muted-foreground">Professional</p>
                </div>
                <div className="p-3 border border-border rounded-lg text-center">
                  <h4 className="font-medium">Hindi</h4>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
