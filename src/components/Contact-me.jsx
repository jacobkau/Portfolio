import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdeepdow", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 pt-12 pb-20 font-sans text-[#111]">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold font-mono tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-xl font-mono text-gray-600 max-w-3xl">
            Have a project in mind or just want to say hi? Drop a message below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
          
          {/* Left Column - Information & Links */}
          <div className="flex flex-col gap-6">
            <p className="text-lg text-gray-700 leading-relaxed font-mono">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            {/* Contact Info Card with Brutalist Shadow */}
            <div className="bg-white p-6 rounded-md border-2 border-[#111] shadow-[4px_4px_0px_0px_#111] mt-4">
              <h3 className="text-xl font-extrabold font-mono mb-4 text-[#111]">Contact Information</h3>
              <div className="space-y-4 text-gray-700 font-mono">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:kaujacob4@gmail.com" className="hover:text-blue-600 font-bold transition-colors">kaujacob4@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="font-bold">Nairobi, Kenya (Open to Remote)</span>
                </div>
              </div>
            </div>

            {/* Social Links with Brutalist Shadow */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/jacob-mwambwa-8b7296362" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#111] border-2 border-[#111] rounded-md shadow-[4px_4px_0px_0px_#111] hover:shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 transition-all duration-200 font-extrabold font-mono text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/jacobkau" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#111] border-2 border-[#111] rounded-md shadow-[4px_4px_0px_0px_#111] hover:shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 transition-all duration-200 font-extrabold font-mono text-sm"
              >
                GitHub
              </a>
              <a 
                href="https://linktr.ee/jacob_mwambwa" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#111] border-2 border-[#111] rounded-md shadow-[4px_4px_0px_0px_#111] hover:shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 transition-all duration-200 font-extrabold font-mono text-sm"
              >
                Linktree
              </a>
              <a 
                href="https://x.com/jacob_witty4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#111] border-2 border-[#111] rounded-md shadow-[4px_4px_0px_0px_#111] hover:shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 transition-all duration-200 font-extrabold font-mono text-sm"
              >
                X (Twitter)
              </a>
            </div>
          </div>

          {/* Right Column - Formspree Form with Brutalist Shadow */}
          <div className="bg-white p-8 rounded-md border-2 border-[#111] shadow-[8px_8px_0px_0px_#111]">
            <h3 className="text-2xl font-extrabold font-mono mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-mono">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-[#111] focus:ring-0 outline-none transition-colors font-mono text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-[#111] focus:ring-0 outline-none transition-colors font-mono text-sm"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-[#111] focus:ring-0 outline-none transition-colors resize-none font-mono text-sm"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#111] text-white rounded-md border-2 border-[#111] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-200 font-extrabold disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                )}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-800 border-2 border-green-500 rounded-md text-sm font-bold text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-800 border-2 border-red-500 rounded-md text-sm font-bold text-center">
                  Oops! Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;