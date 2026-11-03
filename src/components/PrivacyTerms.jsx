import React from 'react';

const PrivacyTerms = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 pt-12 pb-24 font-sans text-[#111]">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold font-mono tracking-tight mb-4">
            Privacy Policy & Terms
          </h2>
          <p className="text-xl font-mono text-gray-600">
            Please read this document carefully to understand how your data is handled.
          </p>
        </div>
        
        {/* Main Document Card with Brutalist Shadow */}
        <div className="bg-white p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed font-mono text-sm md:text-base">
          
          {/* 1. Privacy Policy */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-[#111] border-b-2 border-gray-200 pb-2">1. Privacy Policy</h3>
            <p className="mb-4">
              Your privacy is of utmost importance. This portfolio website is designed to be a safe space for you to explore my work. I do not actively track you, and I do not sell your data to third parties.
            </p>
            <p>
              Any personal information you choose to share with me (such as your name and email address) through the contact form is used <strong className="font-bold text-[#111]">solely</strong> to respond to your inquiries, discuss potential projects, or answer your questions.
            </p>
          </div>

          {/* 2. Browser Actions & Data Storage */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-[#111] border-b-2 border-gray-200 pb-2">2. Browser Actions & Data Storage</h3>
            <p className="mb-4">
              This website does not use invasive tracking cookies or advertising pixels. However, standard browser actions may occur:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
              <li><strong className="font-bold text-[#111]">Local Storage:</strong> Your browser may cache elements (like images) to make the site load faster on your next visit.</li>
              <li><strong className="font-bold text-[#111]">Form Submissions:</strong> When you submit the contact form, your data is securely transmitted through a third-party service (Formspree) directly to my email inbox. It is not stored on this website's database.</li>
              <li><strong className="font-bold text-[#111]">Analytics:</strong> Depending on the hosting provider (see below), basic, anonymous data (like page views and approximate location) may be collected to help me understand traffic and improve the site.</li>
            </ul>
          </div>

          {/* 3. Hosting & Third-Party Services */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-[#111] border-b-2 border-gray-200 pb-2">3. Hosting & Third-Party Services</h3>
            <p className="mb-4">
              This website and its associated projects are hosted on modern cloud platforms (such as Vercel, Render, or Netlify). These providers may collect standard server logs (IP addresses, browser types, timestamps) for security and operational purposes. 
            </p>
            <p>
              By using the contact form, you acknowledge that your information is processed by Formspree, which abides by its own privacy and data protection standards.
            </p>
          </div>

          {/* 4. User Rights */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-[#111] border-b-2 border-gray-200 pb-2">4. User Rights</h3>
            <p className="mb-4">
              You have full control over your data. At any time, you have the right to:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li><strong className="font-bold text-[#111]">Access:</strong> Request a copy of the information you have sent me.</li>
              <li><strong className="font-bold text-[#111]">Deletion:</strong> Request that I delete any emails or contact form submissions you have sent to me.</li>
              <li><strong className="font-bold text-[#111]">Correction:</strong> Request to update any inaccurate information.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please reach out via the contact tab or directly at <strong className="font-bold text-[#111]">kaujacob4@gmail.com</strong>.
            </p>
          </div>

          {/* 5. Terms of Service & Copyright */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-[#111] border-b-2 border-gray-200 pb-2">5. Terms of Service & Copyright</h3>
            <p className="mb-4">
              By accessing this website, you agree to use it for lawful purposes only. 
            </p>
            <p className="mb-4">
              <strong className="font-bold text-[#111]">Copyright Notice:</strong> All content on this website, including but not limited to the user interface design, written text, graphics, and source code snippets, is the intellectual property of <strong className="font-bold text-[#111]">Jacob Mwambwa Kau</strong> unless otherwise stated. 
            </p>
            <p>
             Feel free to browse the projects, inspect the code in the browser, and draw inspiration. 
            </p>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t-2 border-gray-200 text-xs md:text-sm font-bold text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyTerms;