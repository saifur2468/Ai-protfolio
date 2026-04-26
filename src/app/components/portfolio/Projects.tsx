import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Gaming Rating Website",
    image: "https://i.postimg.cc/x811MNfL/Screenshot-2026-03-02-225059.png",
    description: "A full-stack MERN app for Game Rating",
    features: [
      "User Authentication",
      "Add & Review Games",
      "Rating System",
      "Responsive UI",
    ],
    technology: ["React", "Node.js", "MongoDB", "Firebase"],
    liveLink: "https://gaming-rating.web.app/",
    github: "https://github.com/saifur2468/Assignment-10-client",
  },
  {
    title: "Apartment Booking Website",
    image: "https://i.postimg.cc/L8D2TLFG/Screenshot-2026-03-14-163117.png",
    description: "Full-stack Apartment Booking platform",
    features: [
      "User Login & Register",
      "Apartment Booking",
      "Payment System",
      "Admin Dashboard",
    ],
    technology: ["React", "Node.js", "MongoDB", "Tailwind" ,"Firebase"],
    liveLink: "https://building-e4f32.web.app/",
    github: "https://github.com/saifur2468/Assignment-12",
  },
  {
    title: "Volunteer Management",
    image: "https://i.postimg.cc/jdGJ0vqn/Screenshot-2026-03-02-230510.png",
    description: "Connect volunteers with meaningful causes",
    features: [
      "Create Volunteer Posts",
      "Join Requests",
      "User Dashboard",
      "Real-time Updates",
    ],
    technology: ["React", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://volunter-managment-ae225.web.app",
    github:
      "https://github.com/saifur2468/Assignment-11-client-Side",
  },
  {
    title: "Bistro Restaurant Web Application",
    image: "https://i.postimg.cc/15xcBWm1/Screenshot-2026-03-23-151950.png",
    description: "Restaurant management system",
    features: [
      "Food Ordering",
      "Cart & Payment",
      "Table Booking",
      "Admin Control Panel",
    ],
    technology: ["React", "Firebase", "Node.js", "MongoDB"],
    liveLink: "https://bistro-boss-17795.web.app/",
    github:
      "https://github.com/saifur2468/Bistro-restaurant-client",
  },
];

const ProjectSection = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!btnRef.current || !spanRef.current) return;

      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      if (!spanRef.current) return;

      spanRef.current.animate(
        { left: "50%" },
        { duration: 200, fill: "forwards" }
      );
    };

    const button = btnRef.current;

    if (button) {
      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (button) {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="project" className="py-20  min-h-screen bg-zinc-950 ">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl font-bold text-center text-white mb-2"
          >
            All Projects
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[320px] overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>
              </div>

              {/* Top Icon */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-5 right-5 p-2 rounded-full border border-white/40 hover:bg-white hover:text-black transition"
              >
                <FiArrowUpRight className="text-white group-hover:text-black" />
              </a>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                <h3 className="text-2xl font-bold mb-1">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-2">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="text-xs text-gray-300 list-disc ml-4 mb-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Technology */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technology?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 bg-white text-black rounded flex items-center gap-1"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 border border-white rounded flex items-center gap-1"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileTap={{ scale: 0.98 }}
            ref={btnRef}
            className="relative w-full max-w-xs overflow-hidden rounded-lg bg-emerald-400 px-4 py-3 text-lg font-medium text-blue-400"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 mix-blend-difference">
              See All Projects <FaArrowRight />
            </span>

            <span
              ref={spanRef}
              className="absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;