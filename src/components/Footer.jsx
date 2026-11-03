import React from 'react';

const Footer = ({ setActiveTab, setShowHero }) => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    if (setShowHero) {
      setShowHero(true);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button 
        onClick={handleBackToTop}
        className="fixed bottom-8 right-8 z-[90] flex items-center justify-center px-6 py-3 bg-white text-[#111] border-2 border-[#111] rounded-full shadow-[4px_4px_0px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all duration-200 group"
        title="Back to Top"
      >
        <span className="mr-2 font-extrabold font-mono">Top</span>
        <svg 
          className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <footer className="bg-[#111] text-gray-300 py-12 border-t-2 border-[#111] font-mono relative mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="md:col-span-2">
              <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
                Jacob Mwambwa Kau
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-sm mb-6 text-sm">
                Full Stack Developer & UI/UX Designer. I build scalable, user-centric digital solutions that bridge the gap between beautiful design and robust architecture.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/jacobkau" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jacob-mwambwa-8b7296362" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-extrabold mb-4 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-3 text-sm font-bold">
                <li>
                  <button onClick={() => { setActiveTab('about'); }} className="hover:text-white hover:underline transition-all">Who I Am</button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('tech'); }} className="hover:text-white hover:underline transition-all">Tech Stack</button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('services'); }} className="hover:text-white hover:underline transition-all">What I Do</button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab('projects'); }} className="hover:text-white hover:underline transition-all">Projects</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-extrabold mb-4 uppercase tracking-wider text-sm">Get in Touch</h4>
              <ul className="space-y-3 text-sm font-bold">
                <li>
                  <a href="mailto:kaujacob4@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Nairobi, Kenya
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-500">
            <p>&copy; {currentYear} Jacob Mwambwa Kau. All rights reserved.</p>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => { setActiveTab('privacy'); }} 
                className="hover:text-white transition-colors"
              >
                Privacy & Terms
              </button>
              <button 
                onClick={() => { setActiveTab('contact'); }} 
                className="hover:text-white transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;