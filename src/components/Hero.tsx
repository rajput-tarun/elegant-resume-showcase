import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative pt-20 pb-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-right">
            <div className="inline-block bg-secondary/80 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4 font-display">
              Data Science Specialist
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Hi, I'm <span className="text-primary dark:text-white font-display">Tarun Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg font-display">
              Leveraging AI and machine learning to solve complex problems and create innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="btn btn-primary font-display"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline font-display"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:t.kumar@iitg.ac.in" 
                className="p-2 border border-border rounded-full hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/rajput-tarun" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 border border-border rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tarun-kumar-iitb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 border border-border rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 mx-auto animate-slide-left">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  <img 
                    src="image/tarun_img.jpg" 
                    alt="Tarun Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 border border-border rounded-full animate-bounce cursor-pointer"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
