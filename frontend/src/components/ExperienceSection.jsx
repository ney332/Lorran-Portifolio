import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building, MapPin, Calendar } from 'lucide-react';
import { mockExperience } from '../data/mockData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My journey through various roles in mobile and web development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {mockExperience.map((exp, index) => (
              <Card 
                key={exp.id}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.01] relative"
              >
                {/* Timeline Connector */}
                {index < mockExperience.length - 1 && (
                  <div className="absolute -bottom-8 left-8 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent hidden md:block"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-purple-600 rounded-full border-4 border-gray-900 hidden md:block"></div>
                
                <CardContent className="p-8 md:pl-16">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column - Company Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="text-purple-400" size={20} />
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">{exp.position}</h4>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Description & Technologies */}
                    <div className="md:col-span-2">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies Used */}
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline"
                              className="border-purple-500/30 text-purple-300 hover:bg-purple-600/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;