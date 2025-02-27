function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

function mudarConteudo() {
  const element2d = document.querySelector('[data-id="2d"]');
  if (document.getElementById("translate").innerHTML == "Translate to english") {
    document.getElementById("translate").innerHTML = "Traduza para portugues";
    document.getElementById("welcome").innerHTML = "Welcome to my website";
    document.getElementById("about_me").innerHTML = "About me";
    document.getElementById("expe_me").innerHTML = "Experiences";
    document.getElementById("portifolio_me").innerHTML = "Projects";
    document.getElementById("languages_me").innerHTML = "Languages";
    document.getElementById("contact_me").innerHTML = "Contact";
    document.getElementById("about").innerHTML = "About me";
    document.getElementById("about_text").innerHTML = "Graduated in computer science with experience in research (simulation and model analysis for route planning in smart cities) for 1 year and a half and an internship of 1 year and 4 months with web/mobile development. I have experience with: Java | Python | Node.js | C | VM | Juice | Veins | Omnet++ | SQL | Git | AWS | Mendix";
    document.getElementById("expe").innerHTML = "Experiences";
    document.getElementById("initiation").innerHTML = "Scientific initiation";
    document.getElementById("initiation_1").innerHTML = "Research and simulation of vehicular networks with 5G";
    document.getElementById("initiation_2").innerHTML = "1 year and a half of research";
    document.getElementById("initiation_3").innerHTML = "Presentation at the 31st scientific initiation meeting - EIC of UFS";
    document.getElementById("support").innerHTML = "Technical support";
    document.getElementById("support_1").innerHTML = "Internship at SEJUC(Secretaria de Estado da Justiça e de Defesa do Consumidor Sergipe) providing technical support and computer repair";
    document.getElementById("support_2").innerHTML = "Network monitoring";
    document.getElementById("support_3").innerHTML = "6 months internship";
    document.getElementById("intern").innerHTML = "Mendix Internship";
    document.getElementById("intern_1").innerHTML = "Internship as mendix developer at USERH";
    document.getElementById("intern_2").innerHTML = "Low-code development of web and mobile systems";
    document.getElementById("intern_3").innerHTML = "From August/2023 to November/2024";
    document.getElementById("portfolio").innerHTML = "Projects";
    document.getElementById("kitchen").innerHTML = "Cozinha Virtual: Social network for culinary lovers";
    if (element2d) {
      element2d.id = 'novoId';
      element2d.querySelector('a').innerHTML = "2D Game: Jumping and avoiding obstacles game";
    }
    document.getElementById("tcc").innerHTML = "TCC: Application that monitors the behavioral biometrics of a user and determines if it is the owner of the cell phone that is using it or not";
    document.getElementById("language").innerHTML = "Languages";
    document.getElementById("pt").innerHTML = "Fluent Portuguese";
    document.getElementById("en").innerHTML = "Fluent English";
    document.getElementById("es").innerHTML = "Basic Spanish";
    document.getElementById("fr").innerHTML = "Basic French";
    document.getElementById("download").innerHTML = "My certificates";
    document.getElementById("certificados").innerHTML = "Certificates";
    document.getElementById("download_certificados").innerHTML = "Click the button below to download the certificates";
    document.getElementById("cert").innerHTML = "Download Certificates";
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementById("phone").innerHTML = "Telephone: : +55 (79) 98154-6130 <br >E-mail: gabrielgattie@gmail.com <br> <a href=https://github.com/attieGabriel target=_blank>Github: attieGabriel</a> <br> <a href=https://www.linkedin.com/in/gabriel-gomes-attie-9698101b1/ target=_blank>Linkedin: Gabriel Gomes Attie</a>";
  } else {
    document.getElementById("translate").innerHTML = "Translate to english";
    document.getElementById("welcome").innerHTML = "Bem-vindo ao Meu Site";
    document.getElementById("about_me").innerHTML = "Sobre mim";
    document.getElementById("expe_me").innerHTML = "Experiência";
    document.getElementById("portifolio_me").innerHTML = "Projetos";
    document.getElementById("languages_me").innerHTML = "Idiomas";
    document.getElementById("contact_me").innerHTML = "Contato";
    document.getElementById("about").innerHTML = "Sobre Mim";
    document.getElementById("about_text").innerHTML = " Graduado em ciências da computação com experiência em pesquisa (simulação e análise de modelos para o planejamento de rotas em cidades inteligentes) por 1 ano e meio e estágio de 1 ano e 4 meses com desenvolvimento web/mobile. Tenho experiência com: Java | Python | Node.js | C | VM | Sumo | Veins | Omnet++ | SQL | Git | AWs | Mendix";
    document.getElementById("expe").innerHTML = "Experiência";
    document.getElementById("initiation").innerHTML = "Iniciação Científica";
    document.getElementById("initiation_1").innerHTML = "Pesquisa e simulação de redes veiculares com 5G";
    document.getElementById("initiation_2").innerHTML = "1 ano e meio de pesquisa";
    document.getElementById("initiation_3").innerHTML = "Apresentação no 31º encontro de iniciação científica - EIC da UFS ";
    document.getElementById("support").innerHTML = "Suporte Técnico";
    document.getElementById("support_1").innerHTML = "Estágio na SEJUC(Secretaria de Estado da Justiça de Defesa do Consumidor Sergipe) fornecendo suporte técnico e conserto de computadores";
    document.getElementById("support_2").innerHTML = "Monitoramento de redes";
    document.getElementById("support_3").innerHTML = "6 meses de estágio";
    document.getElementById("intern").innerHTML = "Estágio Mendix";
    document.getElementById("intern_1").innerHTML = "Estágio como desenvolvedor mendix na USERH";
    document.getElementById("intern_2").innerHTML = "Desenvolvimento em low-code de web e mobile";
    document.getElementById("intern_3").innerHTML = "Agosto de 2023 até Novembro de 2024";
    document.getElementById("portfolio").innerHTML = "Projetos";
    document.getElementById("kitchen").innerHTML = "Cozinha Virtual: Rede social para apaixonados pela culinária";
    if (element2d) {
      element2d.id = '2d';
      element2d.querySelector('a').innerHTML = "Jogo 2D: Jogo de pular e desviar de obstáculos";
    }
    document.getElementById("tcc").innerHTML = "TCC: Aplicativo que monitora a biometria comportamental de um usuário e determina se é o dono do celular que o esta utilizando ou não";
    document.getElementById("language").innerHTML = "Idiomas";
    document.getElementById("pt").innerHTML = "Português fluente";
    document.getElementById("en").innerHTML = "Inglês fluente";
    document.getElementById("es").innerHTML = "Espanhol básico";
    document.getElementById("fr").innerHTML = "Francês básico";
    document.getElementById("download").innerHTML = "Meus certificados ";
    document.getElementById("certificados").innerHTML = "Certificados";
    document.getElementById("download_certificados").innerHTML = "Clique no botão abaixo para baixar os certificados";
    document.getElementById("cert").innerHTML = "Baixar Certificados";
    document.getElementById("contact").innerHTML = "Contato";
    document.getElementById("phone").innerHTML = "Telefone: (79) 98154-6130 <br>Email: gabrielgattie@gmail.com <br> <a href=https://github.com/attieGabriel target=_blank>Github: attieGabriel</a> <br> <a href=https://www.linkedin.com/in/gabriel-gomes-attie-9698101b1/ target=_blank>Linkedin: Gabriel Gomes Attie</a>";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  showSection('sobre'); // Mostra a seção "Sobre Mim" por padrão
});