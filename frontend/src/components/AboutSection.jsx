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
              Sobre Mim
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              apaixonado por tecnologia e desenvolvimento de Mobile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Olá me chamo <span className="text-purple-400 font-semibold">Lorran</span>, 
                um estudante de Sistemas de Informação, desenvolvedor mobile e multiplaforma fascinado pelo mundo moba, com 3 anos de imersão em desenvolvimento. gosto demais do processo de criação da experiência de usuário principalmente no Ecossistema iOS.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha jornada na tecnologia começou logo criança quando ganhei meu primeiro notebook, e com os primeiros acessos á internet me vinha a curiosidade de como funcionava tudo, por que eu precisava de mais memória? por que o tor browser escondia o IP, oque era IP?! curiosidades que me pesquisar cada vez mais sobre IoT e a cada descoberta é incrível! com o tempo fiz um curso de informática onde conheci conceitos basicos de web, sistemas e manutenção de hardwares.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
               Nos raros momentos que não com os olhos em uma linha de codigo, provavelmente estarei em algum estudo sobre uma nova tecnologia, um novo método ou um conhecimento aleatória que provavelmente nunca usarei.
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
                      <h3 className="text-xl font-semibold text-white mb-2">Experiência</h3>
                      <p className="text-gray-400">3 anos como desenvolvedor</p>
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
                      <h3 className="text-xl font-semibold text-white mb-2">Foco</h3>
                      <p className="text-gray-400">Mobile & Multiplataforma </p>
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
                      <h3 className="text-xl font-semibold text-white mb-2">paixão</h3>
                      <p className="text-gray-400">UX/UI</p>
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