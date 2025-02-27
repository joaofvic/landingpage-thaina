import { useState, useEffect } from 'react';
import { GraduationCap, Book, Award, Stethoscope, Microscope, ChevronLeft, ChevronRight, MapPin, Phone, MessageSquare, Instagram, Facebook, Linkedin } from 'lucide-react';
import './index.css';
//simbol
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      image: "/images/clareamento.jpeg",
      title: "Clareamento Dental",
      description: "Sorria com segurança, o clareamento dental transforma o seu sorriso, deixando seus dentes mais brancos e radiantes."
    },
    {
      image: "/images/ortodontia.jpeg",
      title: "Ortodontia",
      description: "Transforme seu sorriso com o aparelho dental, melhoramos a estética e a sua saúde bucal de forma eficaz."
    },
    {
      image: "/images/gengivoplastia.jpeg",
      title: "Gengivoplastia",
      description: "Recupere a harmonia do seu sorriso, corrigimos o contorno da gengiva e realçamos a estética dental de forma rápida e eficaz."
    },
    {
      image: "/images/limpeza.jpeg",
      title: "Limpeza Dental",
      description: "Mantenha seu sorriso saudável e radiante, removemos a placa, tártaro de forma rápida e indolor e evite problemas bucais."
    },
    {
      image: "/images/restauração.jpeg",
      title: "Restaurações Dentais",
      description: "Recupere a funcionalidade e estética do seu sorriso com restaurações dentais de alta qualidade e tecnologia avançada."
    }
  ];

  const education = [
    {
      period: "2013 a 2018",
      title: "Graduação em Odontologia",
      type: "graduation",
      icon: GraduationCap,
      color: "bg-primary-100"
    },
    {
      period: "2018 a 2021",
      title: "Pós graduação em Endodontia (Canal)",
      type: "post-graduation",
      icon: Book,
      color: "bg-primary-200"
    },
    {
      period: "2021 a 2022",
      title: "Aperfeiçoamento em Cirurgia Oral Menor",
      type: "specialization",
      icon: Stethoscope,
      color: "bg-primary-300"
    },
    {
      period: "2024 a 2025",
      title: "Aperfeiçoamento em Estética Dental e Periodontia",
      type: "specialization",
      icon: Award,
      color: "bg-primary-200"
    },
    {
      period: "2023 a 2026",
      title: "Especializando Ortodontia",
      type: "ongoing",
      icon: Microscope,
      color: "bg-primary-100"
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="min-h-screen bg-primary-50">
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 py-4 border-b border-primary-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center">
                <img src="/images/logo.png" alt="DentCare Logo" className="h-12 w-auto" />
              </a>
              <div className="hidden md:flex space-x-6">
                <a href="#inicio" className="nav-link">Início</a>
                <a href="#tratamentos" className="nav-link">Tratamentos</a>
                <a href="#servicos" className="nav-link">Serviços</a>
                <a href="#resultados" className="nav-link">Resultados</a>
                <a href="#historias" className="nav-link">Histórias</a>
              </div>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-2">
                <a href="#inicio" className="nav-link">Início</a>
                <a href="#tratamentos" className="nav-link">Tratamentos</a>
                <a href="#servicos" className="nav-link">Serviços</a>
                <a href="#resultados" className="nav-link">Resultados</a>
                <a href="#historias" className="nav-link">Histórias</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-display text-primary-400 mb-6">
                Excelência em<br />Odontologia Estética
              </h1>
              <p className="text-primary-300 mb-8 max-w-lg">
              Thainá Firmino, uma profissional destacada com formação em odontologia pela Unifametro.
              </p>
              <button className="button-primary">
                AGENDE SUA CONSULTA
              </button>
              <div className="mt-8">
                <p className="text-sm text-primary-300 mb-2">Reconhecido por</p>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/250px-Forbes_logo.svg.png" 
                  alt="Forbes" 
                  className="h-8 opacity-70"
                />
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/header.jpeg" 
                alt="Dentista" 
                className="w-full h-[600px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-8 md:mb-16">
              Formação e<br />
              <span className="text-primary-400">Especializações</span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-8 sm:left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary-100 via-primary-300 to-primary-100"></div>
              
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className={`relative flex flex-col sm:flex-row items-start mb-8 sm:mb-12 group ${
                      index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    <div className={`pl-20 sm:pl-0 w-full sm:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
                    }`}>
                      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-1 border border-primary-100/30">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${item.color} bg-opacity-20`}>
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className="text-sm font-medium text-primary-300">{item.period}</span>
                              {item.type === 'ongoing' && (
                                <span className="px-2 py-1 text-xs font-medium bg-primary-100/50 text-primary-400 rounded-full">
                                  Em andamento
                                </span>
                              )}
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-400 leading-tight">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-8 sm:left-1/2 top-8 sm:top-1/2 transform -translate-x-1/2 sm:-translate-y-1/2">
                      <div className="w-4 h-4 bg-primary-300 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como podemos transformar
          </h2>
          <h3 className="text-2xl md:text-3xl font-display text-primary-400 text-center mb-16">
            seu sorriso e sua vida?
          </h3>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 via-transparent to-primary-50/20 rounded-3xl -mx-8 -my-4"></div>
            
            <div 
              className="relative overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className={`
                      service-card p-6 md:p-8 
                      transform transition-all duration-500 
                      ${currentSlide === index ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}
                    `}>
                      <div className="relative overflow-hidden rounded-xl mb-6 group">
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-primary-400">{service.title}</h3>
                      <p className="text-primary-300 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6 text-primary-400" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6 text-primary-400" />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    transition-all duration-300 relative
                    ${currentSlide === index ? 'w-8' : 'w-3'} 
                    h-3 rounded-full
                    ${currentSlide === index ? 'bg-primary-400' : 'bg-primary-200'}
                  `}
                >
                  <span className="absolute inset-0 rounded-full bg-primary-400/20 animate-ping"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Nosso Espaço de<br />
                <span className="text-primary-400">Atendimento</span>
              </h2>
              <p className="text-primary-300 text-lg max-w-2xl mx-auto">
                Conheça nossa clínica, um ambiente moderno e acolhedor projetado para 
                proporcionar o máximo conforto durante seu tratamento.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube-nocookie.com/embed/oQsX2fd6AWM"
                  title="Tour Virtual da Clínica"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-display text-primary-400">
                    Estrutura Moderna e Completa
                  </h3>
                  <p className="text-primary-300 leading-relaxed">
                    Nossa clínica foi planejada para oferecer o máximo em conforto e tecnologia. 
                    Equipada com aparelhos de última geração e seguindo rigorosos protocolos de 
                    biossegurança, garantimos um atendimento de excelência em um ambiente acolhedor.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary-100">
                        <Stethoscope className="w-6 h-6 text-primary-400" />
                      </div>
                      <h4 className="font-bold text-primary-400">Tecnologia</h4>
                    </div>
                    <p className="text-primary-300">
                      Equipamentos modernos para diagnósticos precisos e tratamentos eficientes
                    </p>
                  </div>

                  <div className="bg-primary-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary-100">
                        <Award className="w-6 h-6 text-primary-400" />
                      </div>
                      <h4 className="font-bold text-primary-400">Conforto</h4>
                    </div>
                    <p className="text-primary-300">
                      Ambiente climatizado e acolhedor para sua melhor experiência
                    </p>
                  </div>
                </div>

                <button className="button-primary w-full md:w-auto">
                  AGENDE SUA VISITA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Nossa<br />
                <span className="text-primary-400">Localização</span>
              </h2>
              <p className="text-primary-300 text-lg max-w-2xl mx-auto">
                Venha nos visitar! Estamos em um local de fácil acesso.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0901255883656!2d-38.46022392414567!3d-7.236435992770771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a1832c5a0c3841%3A0x7c3c29d0b6048f47!2sR.%20S%C3%A3o%20Judas%20Tadeu%2C%20125%20-%20Pereiro%2C%20CE%2C%2063460-000!5e0!3m2!1spt-BR!2sbr!4v1709899894949!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-100">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-400 mb-2">Endereço</h3>
                  <p className="text-primary-300">
                    R. São Judas Tadeu, 125 - Pereiro, CE, 63460-000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 md:py-16 border-t border-primary-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8">
              <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center shrink-0">
                <img src="/images/simbolo.png" alt="Símbolo" className="w-10 h-10 object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium text-primary-400">Dra. Thainá Firmino</h3>
                <p className="text-primary-300 text-sm">CRO CE 10338</p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a 
                href="#" 
                className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-primary-50 flex items-center justify-center transition-all duration-300 hover:bg-primary-100"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 md:w-5 md:h-5 text-primary-400" />
              </a>
              <a 
                href="https://wa.me/558882235210" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-primary-50 flex items-center justify-center transition-all duration-300 hover:bg-primary-100"
                aria-label="WhatsApp"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 md:w-5 md:h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a0.5 .5 0 0 0 1 0V9a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-primary-50 flex items-center justify-center transition-all duration-300 hover:bg-primary-100"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 md:w-5 md:h-5 text-primary-400" />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <a 
                href="tel:+558899999999" 
                className="text-lg font-medium text-primary-400 hover:text-primary-300 transition-colors"
              >
                +55 88 8223-5210
              </a>
              <button className="px-6 py-2 text-primary-300 hover:text-primary-400 transition-colors border border-primary-100 rounded-full hover:bg-primary-50">
                Agende sua consulta
              </button>
            </div>
          </div>

          <div className="mt-10 md:mt-12 pt-8 border-t border-primary-100/50">
            <p className="text-center text-sm text-primary-300">
              Copyright © {new Date().getFullYear()} DentCare. Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;