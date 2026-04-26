import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "Borak Polytechnic Institute",
    duration: "2022 - Present",
    degree: "Diploma in Computer Science",
    description: "Currently pursuing a diploma with a focus on core computer science principles, software development, and modern web technologies.",
    status: "Current"
  },
  {
    institution: "MEH ARIF COLLEGE",
    duration: "2020 - 2022",
    degree: "Secondary School Certificate (SSC)",
    description: "Completed secondary education under the Science group with a strong foundation in mathematics and analytical sciences.",
    status: "Completed"
  }
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Title Section */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            My Education
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white max-w-2xl leading-relaxed"
          >
            My academic journey has been a process of constant learning and building a solid technical foundation in the field of technology.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-orange-100 ml-3 md:ml-48">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-12 last:mb-0 relative">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-sm"></div>

              {/* Layout: Date on left (for desktop) and Content on right */}
              <div className="md:flex items-start">
                
                {/* Institution and Date (Hidden on mobile, positioned left on desktop) */}
                <div className="hidden md:block absolute -left-52 text-right w-40">
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide">
                    {edu.institution}
                  </h4>
                  <span className="text-orange-500 font-semibold text-xs">
                    {edu.duration}
                  </span>
                </div>

                {/* Mobile view only labels */}
                <div className="md:hidden pl-8 mb-2">
                  <span className="text-orange-500 font-bold text-xs uppercase">{edu.duration}</span>
                  <h4 className="font-bold text-[#0f172a]">{edu.institution}</h4>
                </div>

                {/* Content Box */}
                <div className="pl-8 md:pl-12">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-extrabold text-white">
                      {edu.degree}
                    </h3>
                    {edu.status === "Running" && (
                      <span className="bg-orange-100 text-orange-600 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                        Running
                      </span>
                    )}
                  </div>
                  <p className="text-white leading-relaxed text-sm md:text-base max-w-3xl">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;