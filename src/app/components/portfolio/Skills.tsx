import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FaAws } from "react-icons/fa";
import { IoPrism } from "react-icons/io5";
import { SiAxios } from "react-icons/si";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  // SiAmazonaws,
  SiFigma,
  SiGit
} from 'react-icons/si';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'JavaScript', icon: SiJavascript,  },
    { name: 'React', icon: SiReact,  },
    { name: 'Redux', icon: SiRedux,  },
    { name: 'TypeScript', icon: SiTypescript,  },
    { name: 'Next.js', icon: SiNextdotjs,  },
    { name: 'Tailwind CSS', icon: SiTailwindcss,  },
    { name: 'Node.js', icon: SiNodedotjs,  },
    { name: 'Express', icon: SiExpress,  },
    { name: 'PostgreSQL', icon: SiPostgresql,  },
    { name: 'MongoDB', icon: SiMongodb,  },
    { name: 'Git', icon: SiGit, },
    { name: 'Docker', icon: SiDocker,  },
    // { name: 'AWS', icon: SiAmazonaws, color: 'from-orange-500 to-yellow-500' },
    { name: 'Figma', icon: SiFigma,  },
     { name: 'AWS', icon: FaAws ,  },
  
      { name: 'Prisma', icon:    IoPrism  ,  },
       { name: 'Axios', icon:    SiAxios,  },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 bg-zinc-950 ">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Skills & Expertise
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Technical Proficiency
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6 md:p-8 transition-all group-hover:border-emerald-500/50">

                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div
                    className={`p-3 sm:p-4 rounded-lg bg-gradient-to-br ${skill} bg-opacity-10`}
                  >
                    <skill.icon className="text-3xl sm:text-4xl text-white" />
                  </div>

                  <span className="text-sm sm:text-base md:text-lg font-medium text-white text-center">
                    {skill.name}
                  </span>
                </div>

                {/* Hover Gradient Effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}