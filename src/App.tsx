import React, { useState } from 'react';
import gustavoImg from './assets/guustavoPetry.jpg';
import { Code, Database, Globe, Layout, Mail, Menu, Moon, Phone, Sun, X, Github, Linkedin, ExternalLink, ChevronRight } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`fixed w-full z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold flex items-center">
            <Code className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span>Gustavo Petry</span>
          </a>
          
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Home</a>
              <a href="#about" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Sobre</a>
              <a href="#skills" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Habilidades</a>
              <a href="#projects" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Projetos</a>
              <a href="#contact" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>Contato</a>
            </nav>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className={`ml-4 p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="ml-4 md:hidden p-2" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} py-4`}>
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#home" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Sobre</a>
              <a href="#skills" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Habilidades</a>
              <a href="#projects" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Projetos</a>
              <a href="#contact" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Contato</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Olá, eu sou <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Gustavo Petry</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">Desenvolvedor de Software Full Stack</h2>
            <p className="text-lg mb-8 max-w-lg">
              Desenvolvedor apaixonado por resolver problemas e criar experiências digitais envolventes para web e mobile.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium transition-colors`}
              >
                Entre em contato
              </a>
              <a 
                href="#projects" 
                className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-medium transition-colors`}
              >
                Ver projetos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={gustavoImg}
              alt="Gustavo Petry" 
              className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Me chamo Gustavo Petry, tenho 26 anos, e sou profissional da indústria metal-mecânica há 7 anos. Durante essa jornada, trabalhei na área de Preparação e Programação de Centros de Usinagem CNC, e atualmente atuo no Controle de Qualidade Dimensional de peças mecânicas, utilizando Máquinas de Medição de Coordenadas de Ponte (CMM's). Nos últimos 2 anos, venho estudando programação com o objetivo de ingressar nessa área em breve.
            </p>
            <p className="text-lg mb-6">
              Minha trajetória na programação começou com o curso Jovem Programador 2024, onde aprendi a programar nas linguagens Python e JavaScript, criei interfaces gráficas utilizando HTML e CSS, além de trabalhar com Bancos de Dados Relacionais utilizando MySQL. Também tive a oportunidade de desenvolver um projeto FullStack com o Framework Django. Atualmente, estou participando do curso Entra21, uma experiência extremamente enriquecedora. Nesse curso, estou revisitando conceitos fundamentais, como Metodologias Ágeis e Versionamento de Código com Git, além de aprender Dart e usar o Framework Flutter para desenvolver aplicativos móveis com interfaces modernas e focadas nas necessidades do usuário.

            </p>
            <p className="text-lg mb-6">
              Meu objetivo é ingressar na área como Desenvolvedor Júnior, para poder me desenvolver como profissional e adquirir experiência prática, com o intuito de contribuir de forma significativa para as empresas que me oferecerem a oportunidade. Busco um ambiente dinâmico e colaborativo, onde possa aprender constantemente, expandir minhas habilidades técnicas e crescer profissionalmente, me destacando no mercado de trabalho e sendo um profissional altamente qualificado na área de desenvolvimento de software.
            </p>
            <div className="flex justify-center space-x-6 mt-8">
              <a 
                href="https://github.com/GuustavoPetry" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
              >
                <Github className="mr-2" /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/ogustavopetry1999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
              >
                <Linkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Minhas Habilidades</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Python */}
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors`}>
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                <Code size={32} className={darkMode ? 'text-blue-300' : 'text-blue-600'} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Python/Django</h3>
              <p className="text-center">Desenvolvimento de aplicações backend, criação de aplicações web robustas, APIs RESTful e sistemas de gerenciamento de conteúdo.</p>
            </div>
            
            {/* HTML/CSS/JS */}
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors`}>
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'}`}>
                <Layout size={32} className={darkMode ? 'text-yellow-300' : 'text-yellow-600'} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">HTML/CSS/JS</h3>
              <p className="text-center">Desenvolvimento de interfaces responsivas, interativas e acessíveis para web.</p>
            </div>
            
            {/* Flutter/Dart */}
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors`}>
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                <Phone size={32} className={darkMode ? 'text-purple-300' : 'text-purple-600'} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Flutter/Dart</h3>
              <p className="text-center">Criação de aplicativos móveis multiplataforma com interfaces nativas e performance otimizada.</p>
            </div>
            
            {/* MySQL */}
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors`}>
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${darkMode ? 'bg-red-900' : 'bg-red-100'}`}>
                <Database size={32} className={darkMode ? 'text-red-300' : 'text-red-600'} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">MySQL</h3>
              <p className="text-center">Modelagem de dados, otimização de consultas e administração de bancos de dados relacionais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projetos Recentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Sistema para conveniências" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sistema para Conveniências</h3>
                <p className="mb-4">Aplicação desenvolvido na linguagem Python, utilizando o Framework Streamlit.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>Python</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>Streamlit</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'}`}>MySQL</span>
                </div>
                <a 
                  href="https://github.com/GuustavoPetry/sistemaConveniencia"
                  target="_blank" 
                  className={`inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                >
                  Ver projeto <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <img 
                src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80" 
                alt="Site de E-commerce" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Site de E-commerce</h3>
                <p className="mb-4">Site de E-commerce desenvolvido com Python, utilizando o Framework Django.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>Python</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>Django</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>HTML</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'}`}>MySQL</span>
                </div>
                <a 
                  href="https://github.com/GuustavoPetry/Beair" 
                  target='_blank'
                  className={`inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                >
                  Ver projeto <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                alt="Dashboard Analítico" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gráficos com HTML e JavaScript</h3>
                <p className="mb-4">Criando gráficos interativos utilizando a linguagem JavaScript, juntamente com HTML e CSS.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>JavaScript</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>HTML</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'}`}>CSS</span>
                </div>
                <a 
                  href="https://github.com/GuustavoPetry/charts-html-css-js" 
                  target='_blank'
                  className={`inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                >
                  Ver projeto <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <Mail className="mr-3" /> 
                  <a href="mailto:ogustavopetry@gmail.com" className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                    ogustavopetry@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-3" /> 
                  <a href="tel:+5511987654321" className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                    +55 (47) 99600-0561
                  </a>
                </p>
                <div className="flex space-x-4 mt-6">
                  <a 
                    href="https://github.com/guustavopetry" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/ogustavopetry1999" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none ${darkMode ? 'focus:border-blue-400' : 'focus:border-blue-500'}`} 
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none ${darkMode ? 'focus:border-blue-400' : 'focus:border-blue-500'}`} 
                    placeholder="Seu email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none ${darkMode ? 'focus:border-blue-400' : 'focus:border-blue-500'}`} 
                    placeholder="Sua mensagem"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium transition-colors`}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Gustavo Petry. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="https://github.com/guustavopetry" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/ogustavopetry1999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;