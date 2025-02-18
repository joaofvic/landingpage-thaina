import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 py-4">
        <div className="container mx-auto px-6">
          <ul className="flex items-center justify-start space-x-8">
            <li><a href="#inicio" className="text-gray-600 hover:text-gray-900 text-sm">Início</a></li>
            <li><a href="#tratamentos" className="text-gray-600 hover:text-gray-900 text-sm">Tratamentos</a></li>
            <li><a href="#servicos" className="text-gray-600 hover:text-gray-900 text-sm">Serviços</a></li>
            <li><a href="#resultados" className="text-gray-600 hover:text-gray-900 text-sm">Resultados</a></li>
            <li><a href="#historias" className="text-gray-600 hover:text-gray-900 text-sm">Histórias</a></li>
            <li><a href="#contato" className="text-gray-600 hover:text-gray-900 text-sm">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Excelência em<br />Odontologia Estética
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <img src="/images/dentista.jpg" alt="Doutor" className="w-12 h-12 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm text-gray-600">Odontólogo especialista em estética dental</p>
                <p className="text-sm text-gray-600">Mais de 15 anos de experiência</p>
              </div>
            </div>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Agende sua Consulta
            </button>
            <div className="mt-12">
              <img src="/images/forbes-logo.png" alt="Forbes" className="h-8 mx-auto opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl text-gray-900 mb-6">
              Nosso espaço de atendimento
            </h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <img src="/images/consultorio-video.jpg" alt="Vídeo do consultório" className="w-full h-full object-cover" />
              <div className="w-full h-full flex items-center justify-center absolute inset-0 bg-black bg-opacity-30">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformação Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-12">
              Como podemos transformar<br />
              <span className="text-blue-600">seu sorriso e sua vida?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/images/ortodontia.jpg" alt="Ortodontia" className="w-full h-64 rounded-lg mb-4 object-cover" />
                <h3 className="text-lg font-medium mb-2">Ortodontia</h3>
                <p className="text-sm text-gray-600">Alinhe seus dentes com as técnicas mais modernas e eficientes.</p>
              </div>
              <div className="text-center">
                <img src="/images/botox.jpg" alt="Botox" className="w-full h-64 rounded-lg mb-4 object-cover" />
                <h3 className="text-lg font-medium mb-2">Botox</h3>
                <p className="text-sm text-gray-600">Harmonização facial completa para realçar sua beleza natural.</p>
              </div>
              <div className="text-center">
                <img src="/images/lentes.jpg" alt="Lentes" className="w-full h-64 rounded-lg mb-4 object-cover" />
                <h3 className="text-lg font-medium mb-2">Lentes de Contato</h3>
                <p className="text-sm text-gray-600">Transforme seu sorriso com lentes ultra finas e naturais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-8">
              Quer ter um sorriso perfeito e uma<br />aparência harmoniosa?
            </h2>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <img src="/images/antes-1.jpg" alt="Antes" className="w-full h-80 rounded-lg object-cover" />
              <img src="/images/depois-1.jpg" alt="Depois" className="w-full h-80 rounded-lg object-cover" />
            </div>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Agende uma avaliação
            </button>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-12 text-center">
              Veja alguns resultados!
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <img src="/images/resultado-1.jpg" alt="Resultado 1" className="w-full h-64 rounded-lg opacity-50 object-cover" />
              <img src="/images/resultado-2.jpg" alt="Resultado 2" className="w-full h-64 rounded-lg object-cover" />
              <img src="/images/resultado-3.jpg" alt="Resultado 3" className="w-full h-64 rounded-lg opacity-50 object-cover" />
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-2 h-2 rounded-full bg-gray-300"></button>
              <button className="w-2 h-2 rounded-full bg-gray-900"></button>
              <button className="w-2 h-2 rounded-full bg-gray-300"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultório Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">
              Nosso Consultório
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Contamos com a mais alta tecnologia e uma equipe de profissionais altamente capacitados para oferecer o melhor atendimento.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/consultorio-1.jpg" alt="Consultório" className="w-full h-80 rounded-lg object-cover" />
              <img src="/images/consultorio-2.jpg" alt="Equipamentos" className="w-full h-80 rounded-lg object-cover" />
            </div>
            <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Conheça nosso espaço
            </button>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-12 text-center">
              Depoimentos
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/images/paciente-1.jpg" alt="Paciente 1" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-sm text-gray-600 mb-4">
                  "Excelente atendimento! Mudou completamente meu sorriso e minha autoestima."
                </p>
                <h4 className="text-sm font-medium">Maria Silva</h4>
              </div>
              <div className="text-center">
                <img src="/images/paciente-2.jpg" alt="Paciente 2" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-sm text-gray-600 mb-4">
                  "Profissionais altamente qualificados e ambiente super acolhedor."
                </p>
                <h4 className="text-sm font-medium">João Santos</h4>
              </div>
              <div className="text-center">
                <img src="/images/paciente-3.jpg" alt="Paciente 3" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-sm text-gray-600 mb-4">
                  "Resultado incrível com as lentes de contato dental. Super recomendo!"
                </p>
                <h4 className="text-sm font-medium">Ana Costa</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="h-[400px] bg-gray-100">
        {/* Mapa será integrado aqui */}
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <img src="/images/logo.svg" alt="Logo" className="h-8" />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;