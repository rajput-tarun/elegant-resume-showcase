import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about my background and professional journey"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <h3 className="text-2xl font-semibold mb-4">Professional Overview</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a data science enthusiast currently pursuing an M.Tech at IIT Guwahati with a strong background in machine learning, deep learning, and NLP. My work combines technical expertise with a passion for solving real-world problems through AI innovation.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With experience at ARKRAY, Japan as a Data Science Intern and various academic projects, I've developed skills in optimizing machine learning models, implementing attention mechanisms, and creating efficient AI solutions across multiple domains including healthcare and energy consumption analysis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond technical work, I serve as an Associate Head at Saathi Counselling cell at IIT Guwahati, where I've implemented data-driven systems and managed mentorship programs to enhance student well-being.
            </p>
          </div>
          
          <div className="space-y-8 fade-in-section">
            <div className="bg-card rounded-2xl p-6 border border-border hover-card-effect">
              <h4 className="text-xl font-medium mb-4 font-display">Research Interests</h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground font-display">
                  <span className="text-primary mr-2">•</span>
                  Machine Learning & Deep Learning
                </li>
                <li className="text-muted-foreground font-display">
                  <span className="text-primary mr-2">•</span>
                  Natural Language Processing
                </li>
                <li className="text-muted-foreground font-display">
                  <span className="text-primary mr-2">•</span>
                  Computer Vision & Medical Image Analysis
                </li>
                <li className="text-muted-foreground font-display">
                  <span className="text-primary mr-2">•</span>
                  Large Language Models
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border hover-card-effect">
              <h4 className="text-xl font-medium mb-3 font-display">Current Focus</h4>
              <p className="text-muted-foreground font-display">
                Currently focused on optimizing downstream NLP tasks through advanced data augmentation techniques using Large Language Models. My research aims to enhance model performance on sentiment analysis and emotion detection tasks.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border hover-card-effect">
              <h4 className="text-xl font-medium mb-3 font-display">Personal Philosophy</h4>
              <p className="text-muted-foreground font-display">
                I believe in the power of AI to transform industries and improve lives. My approach combines technical rigor with practical implementation, focusing on creating solutions that address real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
