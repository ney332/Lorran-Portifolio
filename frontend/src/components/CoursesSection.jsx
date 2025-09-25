import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { mockCourses } from '../data/mockData';

const CoursesSection = () => {
  const getTypeIcon = (type) => {
    return type === 'Degree' ? <GraduationCap size={20} /> : <Award size={20} />;
  };

  const getTypeColor = (type) => {
    return type === 'Degree' ? 'text-purple-400' : 'text-blue-400';
  };

  return (
    <section id="courses" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Continuous learning and professional development in technology
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCourses.map((course) => (
              <Card 
                key={course.id}
                className="bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-opacity-20 ${course.type === 'Degree' ? 'bg-purple-600' : 'bg-blue-600'}`}>
                      <span className={getTypeColor(course.type)}>
                        {getTypeIcon(course.type)}
                      </span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${course.type === 'Degree' ? 'border-purple-500/30 text-purple-300' : 'border-blue-500/30 text-blue-300'}`}
                    >
                      {course.type}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {course.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <BookOpen size={16} />
                      <span className="text-sm">{course.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{course.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Degree</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2023</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Latest Cert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">4+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;