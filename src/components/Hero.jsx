import AdminImg from "../assets/admin.png";
import { motion } from "framer-motion";

const Hero = ({ setActiveTab }) => {
  const transitionSettings = {
    duration: 14,
    repeat: Infinity,
    ease: "linear",
    repeatDelay: 2,
  };

  const imageAnimation = {
    x: [0, 20, 0, -20, 0],
    y: [0, 10, 20, 10, 0],
  };

  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-20 lg:py-28 font-sans text-[#111] overflow-hidden bg-gray-50">
      
      {/* DARKER DEVELOPER GRID OVERLAY */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #9ca3af 1px, transparent 1px), linear-gradient(to bottom, #9ca3af 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.15 // Controls the overall darkness of the grid
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-mono text-[#111]">
              Jacob Mwambwa Kau
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-500 font-medium mt-2 font-mono">
              Full Stack Developer | UI/UX Designer | Software Engineer
            </h2>
          </div>

          <div className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-2xl mt-4 space-y-6 font-mono">
            <p>
              Hello there! My name is Jacob Mwambwa Kau, and I'm a passionate
              full-stack developer and UI/UX designer with a love for creating
              seamless digital experiences. I specialize in building responsive
              web applications and intuitive user interfaces that not only look
              great but also provide an exceptional user experience. Currently,
              I am a freelance developer and indie maker, focused on building my
              own products. I've always been deeply immersed in tech, and I love
              building software that solves real problems.
            </p>

            <p>
              Throughout my career, I have designed and implemented features,
              planned roadmaps, and built seamless digital experiences for
              various clients and startups. I specialize in bridging the gap
              between beautiful design and robust, scalable backend
              architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
  
  {/* Hire Me - Solid Black Background */}
  <a 
    href="mailto:kaujacob4@gmail.com" 
    className="flex items-center gap-2 px-6 py-3 bg-[#111] text-white border-2 border-[#111] rounded-full shadow-[4px_4px_0px_0px_#111] hover:shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 transition-all duration-200 font-extrabold font-mono text-sm"
  >
    Hire Me
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
  </a>

  {/* View CV - White with Black Border & Shadow */}
  <a 
    href="/Jacob_Mwambwa_CV.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-white text-[#111] border-2 border-[#111] rounded-full shadow-[4px_4px_0px_0px_#111] hover:shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 transition-all duration-200 font-extrabold font-mono text-sm"
  >
    View CV
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  </a>

  {/* View Projects - White with Black Border & Shadow */}
  <button 
    onClick={() => setActiveTab('projects')}
    className="flex items-center gap-2 px-6 py-3 bg-white text-[#111] border-2 border-[#111] rounded-full shadow-[4px_4px_0px_0px_#111] hover:shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 transition-all duration-200 font-extrabold font-mono text-sm"
  >
    View Projects
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  </button>

  {/* LinkedIn - White with Black Border & Shadow */}
  <a 
    href="https://www.linkedin.com/in/jacob-mwambwa-8b7296362" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-white text-[#111] border-2 border-[#111] rounded-full shadow-[4px_4px_0px_0px_#111] hover:shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 transition-all duration-200 font-extrabold font-mono text-sm"
  >
    LinkedIn
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
  </a>

</div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center w-full mt-16 lg:mt-0">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
            
            <motion.div
              animate={{ x: [0, 25, 0, -25, 0], y: [0, 15, 25, 15, 0] }}
              transition={{ ...transitionSettings, delay: 0 }}
              className="absolute -top-12 -left-24 hidden md:block w-32 text-center text-gray-600 font-medium z-20 hover:text-blue-600 transition-colors cursor-default"
              style={{ fontFamily: "cursive", transform: "rotate(-8deg)" }}
            >
              <span className="block text-[15px] leading-tight whitespace-nowrap">Always learning</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, 25, 0, -25, 0], y: [0, 15, 25, 15, 0] }}
              transition={{ ...transitionSettings, delay: 0.8 }}
              className="absolute -top-20 left-1/2 -translate-x-1/2 hidden md:block w-40 text-center text-gray-600 font-medium z-20 hover:text-blue-600 transition-colors cursor-default"
              style={{ fontFamily: "cursive", transform: "rotate(-3deg)" }}
            >
              <span className="block text-[15px] leading-tight whitespace-nowrap">Driven by curiosity</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, 25, 0, -25, 0], y: [0, 15, 25, 15, 0] }}
              transition={{ ...transitionSettings, delay: 1.6 }}
              className="absolute -top-10 -right-24 hidden md:block w-32 text-center text-gray-600 font-medium z-20 hover:text-blue-600 transition-colors cursor-default"
              style={{ fontFamily: "cursive", transform: "rotate(10deg)" }}
            >
              <span className="block text-[15px] leading-tight whitespace-nowrap">Clean code</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, 25, 0, -25, 0], y: [0, 15, 25, 15, 0] }}
              transition={{ ...transitionSettings, delay: 2.4 }}
              className="absolute top-1/2 -left-32 -translate-y-1/2 hidden md:block w-32 text-center text-gray-600 font-medium z-20 hover:text-blue-600 transition-colors cursor-default"
              style={{ fontFamily: "cursive", transform: "rotate(-12deg)" }}
            >
              <span className="block text-[15px] leading-tight whitespace-nowrap">Real solutions</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, 25, 0, -25, 0], y: [0, -15, -25, -15, 0] }}
              transition={{ ...transitionSettings, delay: 3.2 }}
              className="absolute -bottom-12 -left-24 hidden md:block w-36 text-center text-gray-600 font-medium z-20 hover:text-blue-600 transition-colors cursor-default"
              style={{ fontFamily: "cursive", transform: "rotate(-5deg)" }}
            >
              <span className="block text-[15px] leading-tight whitespace-nowrap">Design meets function</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, 25, 0, -25, 0], y: [0, -15, -25, -15, 0] }}
              transition={{ ...transitionSettings, delay: 4.0 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 hidden md:block w-32 text-center text-gray-600 font-medium z-20 hover:text-blue-600 transition-colors cursor-default"
              style={{ fontFamily: "cursive", transform: "rotate(4deg)" }}
            >
              <span className="block text-[15px] leading-tight whitespace-nowrap">Iterate & improve</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, 25, 0, -25, 0], y: [0, -15, -25, -15, 0] }}
              transition={{ ...transitionSettings, delay: 4.8 }}
              className="absolute -bottom-12 -right-24 hidden md:block w-32 text-center text-gray-600 font-medium z-20 hover:text-blue-600 transition-colors cursor-default"
              style={{ fontFamily: "cursive", transform: "rotate(6deg)" }}
            >
              <span className="block text-[15px] leading-tight whitespace-nowrap">Passionate UX</span>
            </motion.div>

            <motion.div 
              animate={imageAnimation}
              transition={{ ...transitionSettings, delay: 1.2 }}
              className="relative w-full h-full rounded-full border-[3px] border-blue-600 overflow-hidden bg-gray-100 z-10 transition-transform duration-500 hover:scale-[1.02] shadow-xl ring-[12px] ring-white"
            >
              <img
                src={AdminImg}
                alt="Jacob Mwambwa Kau"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;