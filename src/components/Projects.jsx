import React from "react";

import votingImg from "../assets/Voting.jpg";
import handupImg from "../assets/Handup.png";
import highbrowImg from "../assets/WHT.png";
import wittymartImg from "../assets/wittymart.png";
import moodtrackerImg from "../assets/moodtracker.png";
import blogImg from "../assets/Blog.png";
import chatImg from "../assets/chat.png";
import moeImg from "../assets/moe-kitui-west.png"; // <-- ADD THIS IMAGE TO YOUR ASSETS

const Projects = () => {
  const projectsList = [
    {
      title: "MOE Kitui West Data Portal",
      description: "A comprehensive data collection and school registry management system for the Ministry of Education. Features dynamic form building, live submission tracking, Excel/CSV bulk imports, and automated PDF/Excel exports.",
      image: moeImg, 
      liveUrl: "https://moe-kitui-west.vercel.app/", 
      githubUrl: "https://github.com/jacobkau/MOE-Kitui-West", 
    },
    {
      title: "Witty Voting System",
      description: "A secure and scalable digital voting platform featuring real-time results, user authentication, and an intuitive admin dashboard.",
      image: votingImg, 
      liveUrl: "https://witty-voting-system.onrender.com/", 
      githubUrl: "https://github.com/jacobkau/Voting-System", 
    },
    {
      title: "Witty HandUp System",
      description: "A platform designed to connect volunteers with community projects. Features task tracking, user profiles, and seamless communication.",
      image: handupImg, 
      liveUrl: "https://wittyhandupsystem.vercel.app/",
      githubUrl: "https://github.com/jacobkau/Witty-HandUp-System",
    },
    {
      title: "Witty Highbrow Technologies",
      description: "The official corporate website for a tech agency. Built with a focus on performance, SEO, and a modern, responsive UI.",
      image: highbrowImg, 
      liveUrl: "https://witty-highbrow-technologies.onrender.com/#",
      githubUrl: "https://github.com/jacobkau/Witty-Highbrow-Technologies",
    },
    {
      title: "WittyMart E-Commerce System",
      description: "A full-stack e-commerce solution featuring product catalogs, a shopping cart, secure checkout, and an order management system.",
      image: wittymartImg,
      liveUrl: "https://wittymart.onrender.com/",
      githubUrl: "https://github.com/jacobkau/WittyMart-Fronted-and-Backend",
    },
    {
      title: "Witty MoodTracker",
      description: "A mental health companion app that helps users log their daily moods, visualize emotional trends, and maintain a personal journal.",
      image: moodtrackerImg, 
      liveUrl: "https://mood-tracker-bice.vercel.app/",
      githubUrl: "https://github.com/jacobkau/mood-tracker",
    },
    {
      title: "Witty Blog System",
      description: "A dynamic content management system for writers. Features markdown support, comment sections, and a clean, distraction-free reading experience.",
      image: blogImg,
      liveUrl: "https://blog-system-ochre.vercel.app/",
      githubUrl: "https://github.com/jacobkau/Blog-system",
    },
    {
      title: "Witty Chat App",
      description: "A real-time messaging application with instant notifications, media sharing, and group chat functionality built using WebSockets.",
      image: chatImg, 
      liveUrl: "https://witty-chat-app.vercel.app/",
      githubUrl: "https://github.com/jacobkau/Witty-Chat-App",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 pt-12 pb-20 font-sans text-[#111]">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold font-mono tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-xl font-mono text-gray-600 max-w-3xl">
            A selection of my recent work, ranging from full-stack web applications to intuitive user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectsList.map((project, index) => (
            
            /* Project Card - Brutalist Style */
            <div 
              key={index} 
              className="bg-white rounded-md border-2 border-[#111] shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#111] transition-all duration-200 flex flex-col h-full overflow-hidden"
            >
              
              {/* Image Container */}
              <div className="h-40 border-b-2 border-[#111] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Body */}
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-extrabold font-mono text-lg mb-2 text-[#111] leading-tight">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-gray-600 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
              </div>
              
              {/* Footer Links */}
              <div className="p-4 flex items-center justify-between border-t-2 border-gray-100 mt-auto bg-gray-50">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-mono text-[#111] bg-white border border-gray-300 rounded hover:border-[#111] transition-colors"
                >
                  Live Demo
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-mono text-[#111] bg-white border border-gray-300 rounded hover:border-[#111] transition-colors"
                >
                  GitHub
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
