import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let's Work Together
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Have a project in mind?
              </h3>

              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">

              {/* Email */}
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg shrink-0">
                  <Mail className="size-6 text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <a
                    href="mailto:alex@example.com"
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                   saifdevweb@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg shrink-0">
                  <MapPin className="size-6 text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="text-white">Gazipur,Dhaka</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6 order-1 lg:order-2"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex items-center justify-center gap-2 w-full px-6 sm:px-8 py-4 bg-emerald-500 text-zinc-950 rounded-lg hover:bg-emerald-400 transition-colors"
            >
              <span className="font-semibold">Send Message</span>
              <Send className="size-5" />
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}