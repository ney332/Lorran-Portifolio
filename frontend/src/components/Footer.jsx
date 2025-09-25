import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Contact Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and create something amazing together!
            </p>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="mailto:lorran@example.com">
                <Mail size={20} className="mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left - Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                Lorran Ney
              </h3>
              <p className="text-gray-400">Mobile & Multiplatform Developer</p>
            </div>

            {/* Center - Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/lorranney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors p-3 hover:bg-purple-600/10 rounded-full"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/lorranney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors p-3 hover:bg-purple-600/10 rounded-full"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:lorran@example.com"
                className="text-gray-400 hover:text-purple-400 transition-colors p-3 hover:bg-purple-600/10 rounded-full"
                aria-label="Send Email"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Right - Back to Top */}
            <div className="text-center md:text-right">
              <Button
                variant="ghost"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-purple-400 hover:bg-purple-600/10"
              >
                <ArrowUp size={20} className="mr-2" />
                Back to Top
              </Button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              © 2024 Lorran Ney. Made with 
              <Heart size={16} className="text-purple-400" /> 
              and lots of code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;