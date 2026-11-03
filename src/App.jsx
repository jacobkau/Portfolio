import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import BlogsTestimonials from "./components/BlogsTestimonials";
import Contact from "./components/Contact-me";
import PrivacyTerms from "./components/PrivacyTerms";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  // State to track if we should show the Hero
  const [showHero, setShowHero] = useState(true);

  // This function handles clicking a tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowHero(false); // Hide hero when a tab is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // This function handles clicking the Hero's "View Projects" button
  const handleHeroNavigation = (tab) => {
    setActiveTab(tab);
    setShowHero(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "about": return <About />;
      case "tech": return <TechStack />;
      case "projects": return <Projects />;
      case "services": return <Services />;
      case "blogs": return <BlogsTestimonials />;
      case "contact": return <Contact />;
      case "privacy": return <PrivacyTerms />;
      default: return <About />;
    }
  };

  return (
    <div className="App bg-[#1a1a1a] min-h-screen font-mono flex flex-col">
      <main className="flex-grow">
        
    
        {showHero && (
          <div className="animate-in fade-in duration-500">
            <Hero setActiveTab={handleHeroNavigation} />
          </div>
        )}

      
        <div className="sticky top-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b-2 border-gray-700 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex overflow-x-auto space-x-3 scrollbar-hide items-center">
              
            
              <button
                onClick={() => {
                  setShowHero(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="whitespace-nowrap px-4 py-2 rounded-md border-2 border-transparent text-sm md:text-base font-extrabold text-gray-500 hover:text-white transition-all focus:outline-none mr-2"
                title="Back to Home"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Home </button>

              {[
                { id: 'about', label: 'Who I Am' },
                { id: 'tech', label: 'Tech Stack' },
                { id: 'services', label: 'What I Do' },
                { id: 'projects', label: 'Projects' },
                { id: 'blogs', label: 'Blogs & Testimonials' },
                { id: 'contact', label: 'Contact Me' },
                { id: 'privacy', label: 'Privacy & Terms' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-md border-2 text-sm md:text-base font-extrabold transition-all duration-200 focus:outline-none ${
                    activeTab === tab.id && !showHero
                      ? "bg-white border-white text-[#111] shadow-[4px_4px_0px_0px_#facc15] translate-y-[-2px]" 
                      : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full">
          {renderContent()}
        </div>
      </main>
      
      <Footer setActiveTab={handleTabChange} setShowHero={setShowHero} />
    </div>
  );
}