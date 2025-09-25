import React from 'react';
import { Card, CardContent } from './ui/card';
import { User, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer with expertise in mobile and multiplatform solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I'm <span className="text-purple-400 font-semibold">Lorran Ney</span>, 
                a passionate mobile and multiplatform developer with over 4 years of experience 
                creating innovative digital solutions. I specialize in building exceptional user 
                experiences across iOS, Android, and web platforms.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in technology started with a curiosity about how mobile apps work, 
                which led me to master Swift for iOS development and expand into full-stack 
                web development with JavaScript, PHP, and modern databases.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Right Column - Cards */}
            <div className="space-y-4">
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <User className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                      <p className="text-gray-400">4+ years of professional development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Target className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Focus</h3>
                      <p className="text-gray-400">Mobile & Multiplatform Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Heart className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Passion</h3>
                      <p className="text-gray-400">Creating exceptional user experiences</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;