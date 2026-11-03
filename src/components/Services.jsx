import React from 'react';

const Services = () => {
  const servicesList = [
    {
      title: "Full Stack Web Development",
      description: "Building scalable, secure, and high-performance web applications from scratch. I handle everything from database architecture (MongoDB/SQL) to server logic and API integration.",
      icon: (
        <svg className="w-8 h-8 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing user interfaces. I start with classic pen and paper wireframes to map out seamless user flows, ensuring the core idea is solid before writing any code.",
      icon: (
        <svg className="w-8 h-8 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
      )
    },
    {
      title: "Frontend Development",
      description: "Turning designs into pixel-perfect, responsive websites using React and Tailwind CSS. I ensure smooth animations, fast load times, and mobile-first responsiveness.",
      icon: (
        <svg className="w-8 h-8 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      title: "Website Optimization & Audits",
      description: "Reviewing existing websites to improve performance, accessibility, and SEO. I help identify bottlenecks and implement modern solutions to make your site faster and better.",
      icon: (
        <svg className="w-8 h-8 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      title: "Graphic Design & Branding",
      description: "Creating eye-catching visual assets using Canva. From social media graphics and marketing materials to brand kits and presentation decks, I ensure your brand stands out visually.",
      icon: (
        // Palette/Design icon for Canva
        <svg className="w-8 h-8 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 pt-12 pb-20 font-sans text-[#111]">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold font-mono tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-xl font-mono text-gray-600 leading-relaxed max-w-3xl">
            I provide end-to-end digital solutions. From the first sketch of an idea to the final line of deployed code, here is how I can help your business or project succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              // The last item (index 4) spans full width on large screens to balance the 5-card grid
              className={`bg-white p-8 rounded-md border-2 border-[#111] shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#111] transition-all duration-200 flex flex-col ${index === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="mb-6 bg-gray-100 w-16 h-16 rounded-md border-2 border-[#111] flex items-center justify-center shadow-[2px_2px_0px_0px_#111]">
                {service.icon}
              </div>
              <h3 className="text-xl font-extrabold font-mono mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-mono flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;