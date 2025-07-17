import React from "react";
import profileImg from "../assets/Profile.jpg"; // ✅ Make sure this file exists
import Skills from "../Data/Skills"; // ✅ Your array of skills with icons

const About = () => {
  return (
    <section className="pt-[80px] px-6 md:px-12 bg-[#081b29] min-h-screen text-white font-poppins">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-5 text-[20px]">
          <h1 className="text-3xl font-bold text-cyan-400">About Me</h1>
          <p>
            Hello! I'm <strong className="text-yellow-400">Asmit Nagesh Samal</strong>, a final-year BSc Computer Science student at Mumbai University. I enjoy solving real-world problems through clean, responsive web applications.
          </p>
          <p>
            I’ve worked on several projects like the <strong className="text-yellow-400">e-RTO Smart Transport System</strong> and keep exploring tech like React, Node.js, and AWS. I also love learning about cybersecurity and public digital systems.
          </p>
          <p>
            I've earned certifications from <strong className="text-yellow-400">Accenture</strong>, <strong>freeCodeCamp</strong>, and <strong>Cisco</strong>, and completed internships that sharpened both my technical and communication skills.
          </p>
          <p>
            Outside of coding, I’m curious about digital marketing (thanks to IIDE), AI, and creating inclusive user experiences. I speak English, Hindi, Marathi, and Telugu — and enjoy working with diverse teams!
          </p>
          <p>
            I'm open to internships and entry-level roles where I can grow and contribute meaningfully.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-[600px] h-[700px] rounded-xl shadow-lg relative overflow-hidden">
          <img
            src={profileImg}
            alt="Asmit Samal"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-t-4 border-cyan-400" />

      {/* Skills Section */}
      <section className="Skills pb-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">My Skills</h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max animate-scrollIcons px-2">
            {Skills.concat(Skills).map((skill, index) => (
              <div
                key={index}
                className="border-2 border-yellow-600 bg-[#0d1f2a] w-[120px] h-[120px] rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </div>
            ))}
          </div>
          {/* Fading edges */}
          <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-[#081b29] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-[#081b29] to-transparent z-10" />
        </div>
      </section>
    </section>
  );
};

export default About;
