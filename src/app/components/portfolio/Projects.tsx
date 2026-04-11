import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured online store with payment integration, inventory management, and real-time analytics.',
      image:
        'https://images.unsplash.com/photo-1627634771521-9754fe2bc49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates, team chat, and productivity tracking.',
      image:
        'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for managing multiple social media accounts with scheduling and insights.',
      image:
        'https://images.unsplash.com/photo-1627634777217-c864268db30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['React', 'Express', 'Redis', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 bg-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 md:space-y-24">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
            >
              
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative rounded-xl overflow-hidden border border-zinc-800">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
              </motion.div>

              {/* Content */}
              <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? 50 : -50,
                  }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-emerald-400 rounded-full text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <motion.a
                      whileHover={{ y: -3 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-emerald-500 transition-colors w-full sm:w-auto"
                    >
                      <Github className="size-5" />
                      <span>Code</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ y: -3 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 rounded-lg hover:bg-emerald-400 transition-colors w-full sm:w-auto"
                    >
                      <ExternalLink className="size-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}