import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section className="h-screen px-[10%] flex items-center bg-[#081b29] text-white font-poppins relative overflow-hidden">
      {/* Text Section */}
      <div className="max-w-[600px] space-y-6 animate-slide-in">
        <h1 className="text-[3rem] font-bold">Hello, I am Asmit</h1>
        <h3 className="text-[2rem] font-bold text-cyan-400">Frontend Developer</h3>
        <p className="text-[20px]">
          I’m a Computer Science student and frontend enthusiast focused on
          creating intuitive web experiences. Currently exploring React and
          real-world projects like my e-RTO system.
        </p>

        {/* Animated Buttons */}
        <div className="flex gap-5 max-w-[340px] h-[50px] mt-4">
          {/* Hire Me Button */}
          <a
            href="#"
            className="relative group w-[150px] h-[50px] flex items-center justify-center border-2 border-cyan-400 text-white rounded-md overflow-hidden font-semibold z-10"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full z-[-1] " />
            <span className="relative z-10 group-hover:text-[#081b29] transition-colors duration-300 text-[18px]">
              Hire Me!
            </span>
          </a>

          {/* Let's Talk Button */}
          <a
            href="#"
            className="relative group w-[150px] h-[50px] flex items-center justify-center border-2 border-cyan-400 text-white rounded-md overflow-hidden font-semibold z-10"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full z-[-1]" />
            <span className="relative z-10 group-hover:text-[#081b29] transition-colors duration-300 text-[18px]">
              Let's Talk!
            </span>
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-10 left-[10%] flex gap-4 animate-fade-in delay-[1000ms]">
        {/* GitHub */}
        <a
          href="https://github.com/Asmit1211"
          target="_blank"
          rel="noreferrer"
          className="relative group w-[40px] h-[40px] border-2 border-cyan-400 rounded-full flex items-center justify-center overflow-hidden z-10"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full z-[-1]" />
          <FaGithub className="relative z-10 text-white group-hover:text-[#081b29] transition-colors duration-300" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/asmitsamal"
          target="_blank"
          rel="noreferrer"
          className="relative group w-[40px] h-[40px] border-2 border-cyan-400 rounded-full flex items-center justify-center overflow-hidden z-10"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full z-[-1]" />
          <FaLinkedinIn className="relative z-10 text-white group-hover:text-[#081b29] transition-colors duration-300" />
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/asmit74518"
          target="_blank"
          rel="noreferrer"
          className="relative group w-[40px] h-[40px] border-2 border-cyan-400 rounded-full flex items-center justify-center overflow-hidden z-10"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full z-[-1]" />
          <FaTwitter className="relative z-10 text-white group-hover:text-[#081b29] transition-colors duration-300" />
        </a>

        {/* Email */}
        <a
          href="mailto:asmitsamal2@email.com"
          target="_blank"
          rel="noreferrer"
          className="relative group w-[40px] h-[40px] border-2 border-cyan-400 rounded-full flex items-center justify-center overflow-hidden z-10"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full z-[-1]" />
          <FaEnvelope className="relative z-10 text-white group-hover:text-[#081b29] transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Home;
