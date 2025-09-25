import React from 'react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { 
  Code, 
  Code2, 
  Database, 
  Server, 
  Figma, 
  FileText,
  Smartphone,
  Globe,
  Palette
} from 'lucide-react';
import { mockSkills } from '../data/mockData';

const SkillsSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      Code: Code,
      Code2: Code2,
      Database: Database,
      Server: Server,
      Figma: Figma,
      FileText: FileText,
      Smartphone: Smartphone,
      Globe: Globe,
      Palette: Palette
    };
    const IconComponent = icons[iconName] || Code;
    return <IconComponent size={24} />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      Mobile: 'text-purple-400 bg-purple-600/20',
      Web: 'text-blue-400 bg-blue-600/20',
      Database: 'text-green-400 bg-green-600/20',
      Backend: 'text-orange-400 bg-orange-600/20',
      Design: 'text-pink-400 bg-pink-600/20',
      Productivity: 'text-gray-400 bg-gray-600/20'
    };
    return colors[category] || 'text-gray-400 bg-gray-600/20';
  };

  const skillsByCategory = mockSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getCategoryColor(category)}`}>
                    {category === 'Mobile' && <Smartphone size={20} />}
                    {category === 'Web' && <Globe size={20} />}
                    {category === 'Database' && <Database size={20} />}
                    {category === 'Backend' && <Server size={20} />}
                    {category === 'Design' && <Palette size={20} />}
                    {category === 'Productivity' && <FileText size={20} />}
                  </div>
                  {category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <Card 
                      key={index}
                      className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-2 rounded-lg ${getCategoryColor(skill.category)}`}>
                            {getIcon(skill.icon)}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                            <p className="text-sm text-gray-400">{skill.proficiency}% proficiency</p>
                          </div>
                        </div>
                        
                        <Progress 
                          value={skill.proficiency} 
                          className="h-2 bg-gray-700"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">9</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100K+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Users Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;