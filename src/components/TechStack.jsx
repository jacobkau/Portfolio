import React from 'react';

const TechStack = () => {
  const stack = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Vite"]
    },
    {
      category: "Backend & Databases",
      items: ["Node.js", "Express", "PHP", "MongoDB", "SQL", "RESTful APIs", "WebSockets"]
    },
    {
      category: "Design & UI/UX",
      items: ["Prototyping", "Responsive Design", "Graphic Design"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git & GitHub", "VS Code","Netlify", "Cloudinary","EmailJS", "Vercel", "Render", "Windows / Mac"]
    },
    {
      category: "IT Consultancy",
      items: ["IT Strategy & Planning", "Systems Analysis", "Technology Advisory", "Digital Transformation", "Process Optimization", "IT Infrastructure Consulting"]
    }
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 pt-12 pb-20 font-sans text-[#111]">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold font-mono tracking-tight mb-4">
            Tech Stack
          </h2>
          <p className="text-xl font-mono text-gray-600 leading-relaxed max-w-3xl">
            The technologies, frameworks, and tools I use daily to bring ideas to life and build robust applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stack.map((stackItem, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-md border-2 border-[#111] shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#111] transition-all duration-200"
            >
              <h3 className="text-xl font-extrabold font-mono mb-6 text-[#111] pb-3 border-b-2 border-gray-100">
                {stackItem.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {stackItem.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-white border-2 border-gray-300 text-[#111] rounded-md text-sm font-bold font-mono hover:border-[#111] hover:bg-gray-50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;