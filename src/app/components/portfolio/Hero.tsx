import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Typewriter } from "react-simple-typewriter";
export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
              Full Stack Developer
            </span>
           
          </motion.div>

          <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-6 text-7xl font-bold text-white leading-tight"
>
  Hi, I'm Saifur
  <br />

  <span className="text-emerald-400">
    <Typewriter
      words={[
        "Building Scalable Web Apps",
        "Full Stack Developer",
        "React & Node.js Expert"
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={40}
      delaySpeed={1500}
    />
  </span>
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-6 text-xl text-zinc-400 max-w-2xl"
>
  I develop modern full stack web applications using React, Node.js, MongoDB, 
  and scalable backend technologies to create seamless digital experiences.
</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 rounded-lg hover:bg-emerald-400 transition-colors"
            >
              <span className="font-semibold">View Projects</span>
              <ArrowRight className="size-5" />
            </motion.button>

            <div className="flex items-center gap-4 ml-4">
              <motion.a
                whileHover={{ y: -3 }}
                href='https://github.com/saifur2468'
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <Github className="size-5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href='https://www.linkedin.com/in/md-saifur-rahman-62b710376/'
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <Linkedin className="size-5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="saifdevweb@gmail.com"
                className="p-3 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <Mail className="size-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zinc-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}