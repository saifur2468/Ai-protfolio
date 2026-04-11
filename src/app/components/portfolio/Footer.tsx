import { motion } from 'motion/react';
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/saifur2468', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/md-saifur-rahman-62b710376/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'saifdevweb@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 className="size-6 text-emerald-400" />
            <span className="text-lg font-semibold text-white">
         saifur
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ y: -3 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <link.icon className="size-5" />
              </motion.a>
            ))}
          </div>

        </div>

        {/* Bottom Section */}
        {/* <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-zinc-500 text-center md:text-left">
          <p>© {currentYear} Alex Chen. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div> */}

      </div>
    </footer>
  );
}