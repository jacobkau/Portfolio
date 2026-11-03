import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 pt-12 pb-20 font-sans text-[#111]">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight mb-4">
            My Journey & Expertise
          </h2>
          <p className="text-xl text-gray-600  font-mono leading-relaxed max-w-3xl">
            I am a Full Stack Developer and UI/UX Designer dedicated to building scalable, user-centric digital solutions. I bridge the gap between beautiful design and robust backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="lg:col-span-2 space-y-12">
            
            <div>
              <h3 className="text-2xl font-mono font-bold mb-8 pb-2 border-b border-gray-200">Experience</h3>
              
              <div className="space-y-8 border-l-2 border-blue-100 ml-3 pl-6 relative">
                
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white"></span>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h4 className="text-lg font-mono font-bold">ICT Intern</h4>
                    <span className="text-sm font-medium text-gray-500">October 2026 - October 2026</span>
                  </div>
                  <p className="text-md font-mono font-medium text-blue-600 mb-2">MOE Kitui West Sub-County</p>
                  <ul className="list-disc font-mono list-outside ml-4 space-y-1 text-gray-600 text-sm leading-relaxed">
                    <li>Supported e-learning initiatives and assisted in the implementation of the Digital Literacy Programme across schools.</li>
                    <li>Trained and supported teachers in the use of digital devices and ICT integration in teaching, learning, and assessment.</li>
                    <li>Provided first-line technical support, system maintenance, and promoted the safe and ethical use of technology.</li>
                  </ul>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white"></span>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h4 className="text-lg font-mono font-bold">Software Developer</h4>
                    <span className="text-sm font-medium text-gray-500">Jan 2025 - Sept 2025</span>
                  </div>
                  <p className="text-md font-mono font-medium text-blue-600 mb-2">Zukbits Online - Kenya</p>
                  <ul className="list-disc font-mono list-outside ml-4 space-y-1 text-gray-600 text-sm leading-relaxed">
                    <li>Automated software builds, testing, and deployment to drive efficient and reliable release cycles.</li>
                    <li>Collaborated with UI/UX personnel to integrate ease-of-use and accessibility considerations into developed software.</li>
                  </ul>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white"></span>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h4 className="text-lg font-mono font-bold">Remote Business Development Representative Intern</h4>
                    <span className="text-sm font-medium text-gray-500">March 2025 - April 2025</span>
                  </div>
                  <p className="text-md font-mono font-medium text-blue-600 mb-2">Fihankra Comtech LLC - Ghana</p>
                  <ul className="list-disc list-outside font-mono ml-4 space-y-1 text-gray-600 text-sm leading-relaxed">
                    <li>Identified client objectives to present product and service solutions.</li>
                    <li>Employed strategies to resolve client issues, retain clients, and achieve sales goals.</li>
                  </ul>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-white"></span>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h4 className="text-lg font-mono font-bold">Intern Software Developer</h4>
                    <span className="text-sm font-medium text-gray-500">Aug 2025 - Nov 2025</span>
                  </div>
                  <p className="text-md font-medium font-mono text-blue-600 mb-2">Zukbits Online - Kenya</p>
                  <ul className="list-disc font-mono list-outside ml-4 space-y-1 text-gray-600 text-sm leading-relaxed">
                    <li>Developed security protocols to protect sensitive information from unauthorized access.</li>
                  </ul>
                </div>

              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 pb-2 font-mono border-b border-blue-200">Education</h3>
              
              <div className="border-l-2 border-blue-100 ml-3 pl-6 relative">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-400 rounded-full ring-4 ring-white"></span>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h4 className="text-lg font-mono font-bold">Bachelor of Science in Information Technology</h4>
                    <span className="text-sm font-mono font-medium text-gray-500">November 2024</span>
                  </div>
                  <p className="text-blue-700 font-mono text-sm">Kibabii University - Bungoma</p>
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-12">
            
            <div>
              <h3 className="text-2xl font-mono font-bold mb-4 pb-2 border-b border-gray-200">Availability</h3>
              <ul className="space-y-3 font-mono text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <strong>Status:</strong> Open to new opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <strong>Work Setup:</strong> Remote, Hybrid, or On-site
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  <strong>Location:</strong> Kenya (Open to Global Remote)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 pb-2 border-b font-mono border-gray-200">How I Work</h3>
              <p className="text-sm  font-mono text-gray-600 leading-relaxed mb-4">
                I believe in clear communication, continuous learning, and delivering value early. I approach every project with a problem-solving mindset, ensuring that the user is always at the center of the design and development process.
              </p>
              <h4 className="font-bold text-md mb-2">Core Principles</h4>
              <ul className="list-disc list-outside font-mono ml-4 space-y-1 text-gray-600 text-sm leading-relaxed">
                <li><strong>Simplicity:</strong> Writing clean, maintainable code and designing intuitive interfaces.</li>
                <li><strong>Collaboration:</strong> Working closely with teams to bridge the gap between design and engineering.</li>
                <li><strong>Adaptability:</strong> Thriving in fast-paced environments and learning new technologies quickly.</li>
                <li><strong>Accountability:</strong> Taking ownership of tasks from conception to deployment.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;