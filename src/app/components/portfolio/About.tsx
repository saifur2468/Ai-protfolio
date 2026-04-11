import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, MonitorSmartphone, Layers3 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import imgabout from '../../../assets/saifpi.jpg';
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Layers3,
      title: 'Full Stack Development',
      description:
        'Building complete web applications with frontend, backend, and database integration.',
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and efficient code following industry best practices.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Responsive Design',
      description:
        'Creating user-friendly interfaces that work seamlessly across all devices and screen sizes.',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Full Stack Developer
            </h2>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
              I'm a passionate full stack developer specializing in building modern,
              scalable, and high-performance web applications using React, Node.js,
              MongoDB, and backend technologies.
            </p>

            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
              I focus on creating seamless user experiences by combining clean code,
              responsive design, and efficient backend systems to deliver complete digital products.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg shrink-0">
                    <feature.icon className="size-6 text-emerald-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800">
              <ImageWithFallback
                src={imgabout}
                alt="Developer at work"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}