function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

function mudarConteudo() {
  const isEnglish = document.getElementById("translate").innerHTML === "Translate to english";

  document.getElementById("translate").innerHTML = isEnglish ? "Traduza para português" : "Translate to english";
  document.getElementById("welcome").innerHTML = isEnglish ? "Welcome to My Site" : "Bem-vindo ao Meu Site";
  document.getElementById("about_me").innerHTML = isEnglish ? "About Me" : "Sobre Mim";
  document.getElementById("expe_me").innerHTML = isEnglish ? "Experience" : "Experiência";
  document.getElementById("portifolio_me").innerHTML = isEnglish ? "Projects" : "Projetos";
  document.getElementById("languages_me").innerHTML = isEnglish ? "Languages" : "Idiomas";
  document.getElementById("download").innerHTML = isEnglish ? "My Certificates" : "Meus Certificados";
  document.getElementById("about").innerHTML = isEnglish ? "About Me" : "Sobre Mim";
  document.getElementById("about_text").innerHTML = isEnglish ? 
    "Graduated in computer science with experience in research (simulation and analysis of models for route planning in smart cities) for 1 year and a half and an internship of 1 year and 4 months with web/mobile development. I have experience with: Java | Python | Node.js | C | VM | Sumo | Veins | Omnet++ | SQL | Git | AWS | Mendix" : 
    "Graduado em ciências da computação com experiência em pesquisa (simulação e análise de modelos para o planejamento de rotas em cidades inteligentes) por 1 ano e meio e estágio de 1 ano e 4 meses com desenvolvimento web/mobile. Tenho experiência com: Java | Python | Node.js | C | VM | Sumo | Veins | Omnet++ | SQL | Git | AWS | Mendix";
  document.getElementById("expe").innerHTML = isEnglish ? "Experience" : "Experiência";
  document.getElementById("initiation").innerHTML = isEnglish ? "Scientific Initiation" : "Iniciação Científica";
  document.getElementById("initiation_1").innerHTML = isEnglish ? "Research and simulation of vehicular networks with 5G" : "Pesquisa e simulação de redes veiculares com 5G";
  document.getElementById("initiation_2").innerHTML = isEnglish ? "1 year and a half of research" : "1 ano e meio de pesquisa";
  document.getElementById("initiation_3").innerHTML = isEnglish ? "Presentation at the 31st scientific initiation meeting - EIC of UFS" : "Apresentação no 31º encontro de iniciação científica - EIC da UFS";
  document.getElementById("support").innerHTML = isEnglish ? "Technical Support" : "Suporte Técnico";
  document.getElementById("support_1").innerHTML = isEnglish ? "Internship at SEJUC (Secretariat of State for Justice and Consumer Defense of Sergipe) providing technical support and computer repair" : "Estágio na SEJUC (Secretaria de Estado da Justiça e de Defesa do Consumidor Sergipe) fornecendo suporte técnico e conserto de computadores";
  document.getElementById("support_2").innerHTML = isEnglish ? "Network monitoring" : "Monitoramento de redes";
  document.getElementById("support_3").innerHTML = isEnglish ? "6 months of internship" : "6 meses de estágio";
  document.getElementById("intern").innerHTML = isEnglish ? "Mendix Internship" : "Estágio Mendix";
  document.getElementById("intern_1").innerHTML = isEnglish ? "Internship as a Mendix developer at USERH" : "Estágio como desenvolvedor mendix na USERH";
  document.getElementById("intern_2").innerHTML = isEnglish ? "Low-code development of various systems" : "Desenvolvimento em low-code de sistemas diversos";
  document.getElementById("intern_3").innerHTML = isEnglish ? "August 2023 to November 2024" : "Agosto de 2023 até Novembro de 2024";
  document.getElementById("portfolio").innerHTML = isEnglish ? "Projects" : "Projetos";
  document.getElementById("kitchen").innerHTML = isEnglish ? "Virtual Kitchen: Social network for culinary lovers" : "Cozinha Virtual: Rede social para apaixonados pela culinária";
  document.getElementById("2d").innerHTML = isEnglish ? "2D Game: Jumping and dodging obstacles game" : "Jogo 2D: Jogo de pular e desviar de obstáculos";
  document.getElementById("tcc").innerHTML = isEnglish ? "TCC: Application that monitors the behavioral biometrics of a user and determines if it is the owner of the cell phone using it or not" : "TCC: Aplicativo que monitora a biometria comportamental de um usuário e determina se é o dono do celular que o está utilizando ou não";
  document.getElementById("language").innerHTML = isEnglish ? "Languages" : "Idiomas";
  document.getElementById("pt").innerHTML = isEnglish ? "Fluent Portuguese" : "Português fluente";
  document.getElementById("en").innerHTML = isEnglish ? "Fluent English" : "Inglês fluente";
  document.getElementById("es").innerHTML = isEnglish ? "Basic Spanish" : "Espanhol básico";
  document.getElementById("fr").innerHTML = isEnglish ? "Basic French" : "Francês básico";
  document.getElementById("certificados").innerHTML = isEnglish ? "Available Certificates" : "Certificados Disponíveis";
  document.getElementById("download_certificados").innerHTML = isEnglish ? "Click the button below to download the certificates:" : "Clique no botão abaixo para baixar os certificados:";
}
document.addEventListener('DOMContentLoaded', function() {
  showSection('projetos'); // Mostra a seção "Sobre Mim" por padrão
});