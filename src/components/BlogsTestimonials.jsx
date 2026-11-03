import React, { useState } from 'react';

const BlogsTestimonials = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const testimonials = [
    {
      quote: "Jacob is a highly motivated developer. He takes the time to understand the UX requirements and translates them perfectly into clean, scalable code.",
      author: "Developer",
      company: "HustlerLink.com"
    },
    {
      quote: "Working with Jacob on our e-learning initiative was a great experience. He is patient, knowledgeable, and excellent at explaining technical concepts.",
      author: "School Administrator",
      company: "MOE Kitui West"
    },
    {
      quote: "Jacob's ability to handle both the UI design and the backend logic saved us a lot of time. He delivered a polished Financing platform (Paydebt Microfinance) right on schedule.",
      author: "Director",
      company: "Zukbits Online"
    },
    {
      quote: "We needed a digital portal that was respectful, easy to navigate, and accessible for our congregation. Jacob delivered a beautiful, secure platform that perfectly serves our community.",
      author: "Project Lead",
      company: "Catholic Portal (via Zukbits)"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Why I Combine UI/UX with Full-Stack Development",
      date: "Tech Field",
      excerpt: "Understanding both design and code allows me to build products that are not only functional but incredibly user-friendly.",
      content: "I believe that a great developer isn't just someone who writes code, but someone who understands the 'why' behind the code. By studying UI/UX design, I've learned to look at software through the eyes of the user. This dual perspective allows me to bridge the gap between beautiful aesthetics and robust backend architecture. When I build a feature, I think about how it feels to click that button, and I also think about how efficiently the database query resolves. Merging these two fields has made me a more empathetic and effective engineer."
    },
    {
      id: 2,
      title: "Building Secure Voting Systems: My Approach",
      date: "Witty Voting System",
      excerpt: "A deep dive into the architecture and security protocols I used when building the Witty Voting System.",
      content: "Security is the backbone of any voting system. For the Witty Voting System, I implemented a multi-layered authentication process to ensure that each user could only vote once. Beyond user authentication, I focused heavily on database integrity. Every vote is encrypted and logged with a timestamp, creating an immutable audit trail. The frontend uses HTML5, JS & CSS to provide real-time visual feedback, while the backend handles the heavy lifting of verification and secure data storage."
    },
    {
      id: 3,
      title: "Connecting Communities: The Witty HandUp System",
      date: "Witty HandUp System",
      excerpt: "How I built a platform to connect volunteers with community projects using modern web technologies.",
      content: "The Witty HandUp System was born out of a desire to make volunteering easier. The challenge was creating an intuitive interface where organizers could post tasks, and volunteers could easily find them. I built a robust task-tracking dashboard and implemented a seamless communication channel within the app. This project taught me a lot about handling complex state management on the frontend and designing relational databases that can handle many-to-many relationships efficiently."
    },
    {
      id: 4,
      title: "Scaling E-Commerce with WittyMart",
      date: "WittyMart E-Commerce",
      excerpt: "The architecture behind a full-stack e-commerce solution, from product catalogs to secure checkout.",
      content: "Building WittyMart required a deep understanding of transactional data. From managing product inventories to handling shopping carts and secure checkouts, every interaction needs to be flawless. I utilized a robust backend to manage orders and user sessions, ensuring that if a user leaves the site, their cart remains intact. The UI was designed to reduce friction, guiding the user smoothly from browsing to checkout without distraction."
    },
    {
      id: 5,
      title: "Designing for Mental Health: Witty MoodTracker",
      date: "Witty MoodTracker",
      excerpt: "Creating a safe, intuitive digital space for users to log their daily moods and visualize emotional trends.",
      content: "The Witty MoodTracker was a deeply personal project. Designing an app for mental health requires immense empathy. The interface needs to be calming, non-judgmental, and easy to use, even when a user might be feeling overwhelmed. I focused on smooth animations, soft color palettes, and a journaling feature that feels like talking to a friend. Data visualization was key here, turning complex emotional data into simple, easy-to-read charts."
    },
    {
      id: 6,
      title: "Headless CMS & The Witty Blog System",
      date: "Witty Blog System",
      excerpt: "Why I chose a dynamic content management system with Markdown support for a distraction-free writing experience.",
      content: "For the Witty Blog System, the goal was to get out of the writer's way. I built a custom Content Management System that supports Markdown, allowing writers to format their text without touching any complex HTML. The frontend was optimized for reading, with careful attention paid to typography, line height, and color contrast. The system dynamically fetches and renders the content, making publishing new articles incredibly fast and efficient."
    },
    {
      id: 7,
      title: "Real-Time Communication: Inside Witty Chat",
      date: "Witty Chat App",
      excerpt: "How WebSockets power instant messaging, notifications, and group chat in the Witty Chat App.",
      content: "Real-time functionality changes the way users interact with an application. For the Witty Chat App, I relied heavily on WebSockets to keep the connection open between the client and the server. This allowed for instant message delivery, typing indicators, and real-time notifications without the need to refresh the page. Handling media sharing and ensuring messages are securely routed to the correct group or individual was the most challenging and rewarding part of this build."
    }
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 pt-12 pb-20 font-sans text-[#111] relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold font-mono tracking-tight mb-4">
              Testimonials
            </h2>
            <p className="text-xl font-mono text-gray-600 max-w-3xl">
              What clients and colleagues have to say about working with me.
            </p>
          </div>

          {/* Changed to lg:grid-cols-2 to fit the 4th testimonial nicely */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="relative bg-white p-6 rounded-2xl rounded-bl-none border-2 border-gray-300 shadow-sm hover:border-[#111] hover:shadow-[4px_4px_0px_0px_#111] transition-all duration-200">
                
                {/* Chat Bubble Tail */}
                <div className="absolute -bottom-[2px] -left-[24px] w-6 h-6 bg-white border-b-2 border-l-2 border-gray-300 rounded-bl-xl" 
                     style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 relative z-10 font-mono text-sm md:text-base">
                  "{test.quote}"
                </p>
                <div className="border-t-2 border-gray-100 pt-3">
                  <p className="font-extrabold text-[#111] text-sm font-mono">{test.author}</p>
                  <p className="text-xs text-gray-500 font-bold font-mono">{test.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blogs Section */}
        <div>
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold font-mono tracking-tight mb-4">
              Articles & Insights
            </h2>
            <p className="text-xl font-mono text-gray-600 max-w-3xl">
              Deep dives into the projects I've built and my thoughts on the tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article 
                key={article.id} 
                onClick={() => setSelectedArticle(article)}
                className="bg-white p-6 rounded-md border-2 border-[#111] shadow-[4px_4px_0px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all duration-200 cursor-pointer group flex flex-col h-full"
              >
                <p className="text-xs font-extrabold text-blue-600 mb-2 uppercase tracking-wider font-mono">{article.date}</p>
                <h3 className="text-lg font-extrabold mb-3 group-hover:text-blue-600 transition-colors leading-tight font-mono">{article.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow font-mono">
                  {article.excerpt}
                </p>
                <span className="text-sm font-extrabold text-[#111] flex items-center gap-1 mt-auto font-mono group-hover:text-blue-600">
                  Read Article
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </article>
            ))}
          </div>
        </div>

      </div>

      {/* Article Modal Overlay */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          
          <div className="bg-white rounded-md shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 border-2 border-[#111]">
            
            <div className="flex justify-between items-start p-6 border-b-2 border-gray-200 bg-gray-50">
              <div>
                <p className="text-xs font-extrabold text-blue-600 mb-2 uppercase tracking-wider font-mono">{selectedArticle.date}</p>
                <h3 className="text-2xl font-extrabold text-[#111] leading-tight font-mono">{selectedArticle.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-gray-500 hover:text-[#111] bg-gray-200 hover:bg-gray-300 rounded-md p-2 transition-colors ml-4 flex-shrink-0 border border-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap font-mono">
                {selectedArticle.content}
              </p>
            </div>

            <div className="p-6 border-t-2 border-gray-200 bg-gray-50 flex justify-end">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 bg-[#111] text-white rounded-md font-extrabold hover:bg-gray-800 transition-colors font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] border-2 border-[#111]"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default BlogsTestimonials;