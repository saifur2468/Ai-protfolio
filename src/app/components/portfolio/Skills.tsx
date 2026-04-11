import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Code2,
  Database,
  GitBranch,
  Cloud,
  Figma,
  Box,
  Server,
  Palette,
} from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'React', icon: Code2, color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', icon: Code2, color: 'from-blue-600 to-blue-400' },
    { name: 'Next.js', icon: Code2, color: 'from-zinc-800 to-zinc-600' },
    { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-400 to-teal-400' },
    { name: 'Node.js', icon: Server, color: 'from-green-600 to-green-400' },
    { name: 'Express', icon: Server, color: 'from-zinc-700 to-zinc-500' },
    { name: 'PostgreSQL', icon: Database, color: 'from-blue-600 to-blue-400' },
    { name: 'MongoDB', icon: Database, color: 'from-green-600 to-green-400' },
    { name: 'Git', icon: GitBranch, color: 'from-orange-600 to-orange-400' },
    { name: 'Docker', icon: Box, color: 'from-blue-500 to-blue-300' },
    { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-yellow-500' },
    { name: 'Figma', icon: Figma, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 bg-zinc-950">
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
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6 md:p-8 transition-all group-hover:border-emerald-500/50">
                
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div
                    className={`p-3 sm:p-4 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10`}
                  >
                    <skill.icon className="size-8 sm:size-10 text-white" />
                  </div>

                  <span className="text-sm sm:text-base md:text-lg font-medium text-white text-center">
                    {skill.name}
                  </span>
                </div>

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