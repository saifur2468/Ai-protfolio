import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Diploma in Engineering',
      field: 'Computer Science',
      institution: 'Borak Polytechinc institute',
      period: 'Present',
      year: '2023 - Present',
      status: 'ongoing',
      icon: GraduationCap,
    },
    {
      degree: 'Secondary School Certificate ',
      field: 'Science',
      institution: 'MEH ARIF College',
      period: '2022',
      year: '2022',
      status: 'completed',
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" ref={ref} className="relative py-32 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Academic Journey
          </span>
          <h2 className="mt-4 text-5xl font-bold text-white">
            Education
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="inline-block w-full"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 group-hover:border-emerald-500/50 transition-all">
                        <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                item.status === 'ongoing'
                                  ? 'bg-emerald-500 text-zinc-950'
                                  : 'bg-zinc-800 text-zinc-400'
                              }`}>
                                {item.status === 'ongoing' ? 'Currently Pursuing' : 'Graduated'}
                              </span>
                              <span className="text-sm text-zinc-500">{item.year}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1">
                              {item.degree}
                            </h3>
                            <p className="text-lg text-emerald-400 mb-3">{item.field}</p>
                            <p className="text-zinc-400">{item.institution}</p>
                          </div>

                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                            className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg shadow-emerald-500/20"
                          >
                            <item.icon className="size-7 text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                  className="relative z-10"
                >
                  <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-zinc-900 shadow-lg shadow-emerald-500/50" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute inset-0 bg-emerald-500 rounded-full opacity-20"
                  />
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-full">
              <Award className="size-6 text-emerald-400" />
              <span className="text-white font-medium">Continuous Learning Journey</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
