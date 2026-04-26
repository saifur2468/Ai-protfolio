import React from 'react';
import { Code2, Laptop, Database } from 'lucide-react';
import abimg from '../../../assets/saifpi.jpg';

const About = () => {
  const services = [
    {
      title: "Frontend Dev",
      description: "Building fast, responsive, and interactive user interfaces using modern web technologies.",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Responsive Design",
      description: "Ensuring your website looks great on all screens, from mobile devices to large desktops.",
      icon: <Laptop className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "MERN Stack Development",
      description: "Full-stack solutions with MongoDB, Express, React, and Node.js for scalable apps.",
      icon: <Database className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (

    <section id='about' className="py-16 px-6  mx-auto font-sans bg-zinc-950 text-white">
      
      {/* Top Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          About <span className="h-0.5 w-16 bg-blue-500"></span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Profile Photo */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
    
          <div className="relative p-1 rounded-full border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] mb-6">
            <img 
              src={abimg}
              alt="Saifur Rahman" 
              className="w-64 h-64 rounded-full object-cover   transition-all duration-500"
            />
          </div>
          <div className="text-center">
            <p className="text-white italic text-sm max-w-[200px]">
              Building meaningful digital experiences through creative code.
            </p>
          </div>
        </div>

        {/* Right Side: Content & Cards */}
        <div className="w-full lg:w-2/3">
     
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-blue-500"></span>   Full Stack Developer
          </h1>
          <p className="text-white text-lg leading-relaxed mb-10">
            I'm a passionate full stack developer specializing in building modern,
              scalable, and high-performance web applications using React, Node.js,
              MongoDB, and backend technologies I focus on creating seamless user experiences by combining clean code,
              responsive design, and efficient backend systems to deliver complete digital products.
          </p>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#111111] p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-blue-500/30 hover:bg-[#161616] transition-all group"
              >
               
                <div className="bg-blue-500/10 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{service.title}</h4>
                <p className="text-gray-500 text-sm leading-snug">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;