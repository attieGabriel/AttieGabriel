function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

function mudarConteudo(idioma) {
  const traducoes = {
    pt: {
      welcome: "Bem-vindo ao Meu Site",
      about_me: "Sobre Mim",
      expe_me: "Experiência",
      portifolio_me: "Projetos",
      languages_me: "Idiomas",
      cert_me: "Certificados Disponíveis",
      about: "Sobre Mim",
      about_text: "Graduado em ciências da computação pela UFS(Universidade Federal de Sergipe) com experiência como aluno de PIBIC, suporte de TI, desenvolvedor web/mobile e atualmente como desenvolvedor e analista de dados. Já trabalhei com: Java | Python | Node.js | C | VM | Sumo | Veins | Omnet++ | SQL | Git | AWs | Mendix | Foundry",
      expe: "Experiência",
      initiation: "Iniciação Científica",
      initiation_1: "Pesquisa e simulação de redes veiculares com 5G",
      initiation_2: "1 ano e meio de pesquisa",
      initiation_3: "Apresentação no 31º encontro de iniciação científica - EIC da UFS",
      support: "Suporte Técnico",
      support_1: "Estágio na SEJUC (Secretaria de Estado da Justiça e de Defesa do Consumidor Sergipe) fornecendo suporte técnico e conserto de computadores",
      support_2: "Monitoramento de redes",
      support_3: "6 meses de estágio",
      intern: "Estágio Mendix",
      intern_1: "Estágio como desenvolvedor mendix na USERH",
      intern_2: "Desenvolvimento em low-code de sistemas diversos",
      intern_3: "Agosto de 2023 até Novembro de 2024",
      dev_junior: "Desenvolvedor e Analista de Dados Júnior",
      dev_junior_1: "Desenvolvedor júnior na plataforma palantir foundry pela Vf consultancy",
      dev_junior_2: "Desenvolvimento de aplicações para análise de dados",
      dev_junior_3: "Desde Março de 2025",
      portfolio: "Projetos",
      kitchen: "Cozinha Virtual: Rede social para apaixonados pela culinária",
      kitchen_tecs: "Tecnologias mais utlizadas",
      twod: "Jogo 2D: Jogo de pular e desviar de obstáculos",
      twod_tecs: "Tecnologias mais utlizadas",
      tcc: "TCC: Aplicativo que monitora a biometria comportamental de um usuário e determina se é o dono do celular que o está utilizando ou não",
      tcc_tecs: "Tecnologias mais utlizadas",
      Crud: "CRUD em python: crud feito em python",
      Crud_tecs: "Tecnologias mais utlizadas",
      PLN_1: "Sistema para classificar textos",
      PLN_1_tecs: "Tecnologias mais utlizadas",
      PLN_2: "Sistema para classificar qual registro tem mais similaridade com uma chave especifica",
      PLN_2_tecs: "Tecnologias mais utlizadas",
      Futfacil: "CRUD feito em next.js para cadastro de quadras de futebol",
      Futfacil_tecs: "Tecnologias mais utlizadas",
      language: "Idiomas",
      pt: "Português fluente",
      en: "Inglês fluente",
      es: "Espanhol básico",
      fr: "Francês básico",
      certificates: "Certificados Disponíveis",
      certificados_text: "Aqui estão todos os meus certificados disponíveis para download",
    },
    en: {
      welcome: "Welcome to My Site",
      about_me: "About Me",
      expe_me: "Experience",
      portifolio_me: "Projects",
      languages_me: "Languages",
      cert_me: "Available Certificates",
      about: "About Me",
      about_text: "Graduated in computer science from UFS (Federal University of Sergipe) with experience as a PIBIC student, IT support, web/mobile developer and currently as a developer and data analyst. I've worked with: Java | Python | Node.js | C | VM | Sumo | Veins | Omnet++ | SQL | Git | AWs | Mendix | Foundry",
      expe: "Experience",
      initiation: "Scientific Initiation",
      initiation_1: "Research and simulation of vehicular networks with 5G",
      initiation_2: "1 year and a half of research",
      initiation_3: "Presentation at the 31st scientific initiation meeting - EIC of UFS",
      support: "Technical Support",
      support_1: "Internship at SEJUC (Secretariat of State for Justice and Consumer Defense of Sergipe) providing technical support and computer repair",
      support_2: "Network monitoring",
      support_3: "6 months of internship",
      intern: "Mendix Internship",
      intern_1: "Internship as a Mendix developer at USERH",
      intern_2: "Development of a web application for the company's internal use",
      intern_3: "August 2023 to November 2024",
      dev_junior: "Junior developer and data analyst",
      dev_junior_1: "Junior developer on the palantir foundry platform by Vf consultancy",
      dev_junior_2: "Development of applications for data analysis",
      dev_junior_3: "Since March 2025",
      portfolio: "Projects",
      kitchen: "Virtual Kitchen: Social network for culinary lovers",
      kitchen_tecs: "Most used technologies",
      twod: "2D Game: Jumping and dodging obstacles game",
      twod_tecs: "Most used technologies",
      tcc: "TCC: Application that monitors the behavioral biometrics of a user and determines if it is the owner of the cell phone using it or not",
      tcc_tecs: "Most used technologies",
      Crud: "CRUD in python: crud made in python",
      Crud_tecs: "Most used technologies",
      PLN_1: "System for classifying texts",
      PLN_1_tecs: "Most used technologies",
      PLN_2: "System for classifying which record has the most similarity to a specific key",
      PLN_2_tecs: "Most used technologies",
      Futfacil: "CRUD made in next.js to register football courts",
      Futfacil_tecs: "Most used technologies",
      language: "Languages",
      pt: "Fluent Portuguese",
      en: "Fluent English",
      es: "Basic Spanish",
      fr: "Basic French",
      certificates: "Available Certificates",
      certificados_text: "Here are all my certificates available for download",
    },
    es: {
      welcome: "Bienvenido a Mi Sitio",
      about_me: "Sobre Mí",
      expe_me: "Experiencia",
      portifolio_me: "Proyectos",
      languages_me: "Idiomas",
      cert_me: "Certificados Disponibles",
      about: "Sobre Mí",
      about_text: "Graduado en ciencias de la computación por la UFS (Universidad Federal de Sergipe) con experiencia como estudiante de PIBIC, soporte técnico, desarrollador web/móvil y actualmente como desarrollador y analista de datos. He trabajado con: Java | Python | Node.js | C | VM | Sumo | Veins | Omnet++ | SQL | Git | AWs | Mendix | Foundry",
      expe: "Experiencia",
      initiation: "Iniciación Científica",
      initiation_1: "Investigación y simulación de redes vehiculares con 5G",
      initiation_2: "1 año y medio de investigación",
      initiation_3: "Presentación en el 31º encuentro de iniciación científica - EIC de la UFS",
      support: "Soporte Técnico",
      support_1: "Pasantía en SEJUC (Secretaría de Estado de Justicia y Defensa del Consumidor de Sergipe) brindando soporte técnico y reparación de computadoras",
      support_2: "Monitoreo de redes",
      support_3: "6 meses de pasantía",
      intern: "Pasantía Mendix",
      intern_1: "Pasantía como desarrollador mendix en USERH",
      intern_2: "Desarrollo en low-code de sistemas diversos",
      intern_3: "Agosto de 2023 hasta Noviembre de 2024",
      dev_junior: "Desarrollador y Analista de Datos Junior",
      dev_junior_1: "Desarrollador junior en la plataforma palantir foundry por Vf consultancy",
      dev_junior_2: "Desarrollo de aplicaciones para análisis de datos",
      dev_junior_3: "Desde Marzo de 2025",
      portfolio: "Proyectos",
      kitchen: "Cocina Virtual: Red social para amantes de la cocina",
      kitchen_tecs: "Tecnologías más utilizadas",
      twod: "Juego 2D: Juego de saltar y esquivar obstáculos",
      twod_tecs: "Tecnologías más utilizadas",
      tcc: "TCC: Aplicación que monitorea la biometría conductual de un usuario y determina si es el dueño del celular que lo está utilizando o no",
      tcc_tecs: "Tecnologías más utilizadas",
      Crud: "CRUD en python: crud hecho en python",
      Crud_tecs: "Tecnologías más utilizadas",
      PLN_1: "Sistema para clasificar textos",
      PLN_1_tecs: "Tecnologías más utilizadas",
      PLN_2: "Sistema para clasificar cuál registro tiene más similitud con una clave específica",
      PLN_2_tecs: "Tecnologías más utilizadas",
      Futfacil: "CRUD hecho en next.js para registro de canchas de fútbol",
      Futfacil_tecs: "Tecnologías más utilizadas",
      language: "Idiomas",
      pt: "Portugués fluido",
      en: "Inglés fluido",
      es: "Español básico",
      fr: "Francés básico",
      certificates: "Certificados Disponibles",
      certificados_text: "Aquí están todos mis certificados disponibles para descargar",
    },
    fr: {
      welcome: "Bienvenue sur mon site",
      about_me: "À propos de moi",
      expe_me: "Expérience",
      portifolio_me: "Projets",
      languages_me: "Langues",
      cert_me: "Certificats disponibles",
      about: "À propos de moi",
      about_text: "Diplômé en informatique de l'UFS (Université fédérale de Sergipe) avec une expérience en tant qu'étudiant PIBIC, support informatique, développeur web/mobile et actuellement développeur et analyste de données. J'ai travaillé avec : Java | Python | Node.js | C | VM | Sumo | Veins | Omnet++ | SQL | Git | AWs | Mendix | Foundry",
      expe: "Expérience",
      initiation: "Initiation scientifique",
      initiation_1: "Recherche et simulation de réseaux de véhicules avec 5G",
      initiation_2: "1 an et demi de recherche",
      initiation_3: "Présentation lors de la 31e rencontre de recherche scientifique - EIC de l'UFS",
      support: "Support technique",
      support_1: "Stage à la SEJUC (Secrétariat d'État à la justice et à la défense du consommateur de Sergipe) fournissant un support technique et réparant des ordinateurs",
      support_2: "Surveillance des réseaux",
      support_3: "6 mois de stage",
      intern: "Stage Mendix",
      intern_1: "Stage en tant que développeur mendix chez USERH",
      intern_2: "Développement d'applications en low-code pour divers systèmes",
      intern_3: "Août 2023 à novembre 2024",
      dev_junior: "Développeur junior et analyste de données",
      dev_junior_2: "Développement d'applications pour l'analyse de données",
      dev_junior_1: "Développement d'applications sur la plateforme palantir foundry par Vf consultancy",
      dev_junior_3: "Depuis mars 2025",
      portfolio: "Projets",
      kitchen: "Cuisine virtuelle : Réseau social pour les passionnés de cuisine",
      kitchen_tecs: "Technologies les plus utilisées",
      twod: "Jeu 2D : Jeu de saut et d'esquive d'obstacles",
      twod_tecs: "Technologies les plus utilisées",
      tcc: "TCC : Application qui surveille la biométrie comportementale d'un utilisateur et détermine s'il s'agit du propriétaire du téléphone portable qui l'utilise ou non",
      tcc_tecs: "Technologies les plus utilisées",
      Crud: "CRUD en python : crud fait en python",
      Crud_tecs: "Technologies les plus utilisées",
      PLN_1: "Système de classification de textes",
      PLN_1_tecs: "Technologies les plus utilisées",
      PLN_2: "Système de classification du registre ayant le plus de similarité avec une clé spécifique",
      PLN_2_tecs: "Technologies les plus utilisées",
      Futfacil: "CRUD fait en next.js pour l'enregistrement des terrains de football",
      Futfacil_tecs: "Technologies les plus utilisées",
      language: "Langues",
      pt: "Portugais courant",
      en: "Anglais courant",
      es: "Espagnol de base",
      fr: "Français de base",
      certificates: "Certificats disponibles",
      certificados_text: "Voici tous mes certificats disponibles au téléchargement",
    },
  };

  const traducoesSelecionadas = traducoes[idioma];

  if (!traducoesSelecionadas) {
    console.error("Idioma não suportado:", idioma);
    return;
  }

  document.getElementById("welcome").innerHTML = traducoesSelecionadas.welcome;
  document.getElementById("about_me").innerHTML = traducoesSelecionadas.about_me;
  document.getElementById("expe_me").innerHTML = traducoesSelecionadas.expe_me;
  document.getElementById("portifolio_me").innerHTML = traducoesSelecionadas.portifolio_me;
  document.getElementById("languages_me").innerHTML = traducoesSelecionadas.languages_me;
  document.getElementById("cert_me").innerHTML = traducoesSelecionadas.cert_me;
  document.getElementById("about").innerHTML = traducoesSelecionadas.about;
  document.getElementById("about_text").innerHTML = traducoesSelecionadas.about_text;
  document.getElementById("expe").innerHTML = traducoesSelecionadas.expe;
  document.getElementById("initiation").innerHTML = traducoesSelecionadas.initiation;
  document.getElementById("initiation_1").innerHTML = traducoesSelecionadas.initiation_1;
  document.getElementById("initiation_2").innerHTML = traducoesSelecionadas.initiation_2;
  document.getElementById("initiation_3").innerHTML = traducoesSelecionadas.initiation_3;
  document.getElementById("support").innerHTML = traducoesSelecionadas.support;
  document.getElementById("support_1").innerHTML = traducoesSelecionadas.support_1;
  document.getElementById("support_2").innerHTML = traducoesSelecionadas.support_2;
  document.getElementById("support_3").innerHTML = traducoesSelecionadas.support_3;
  document.getElementById("intern").innerHTML = traducoesSelecionadas.intern;
  document.getElementById("intern_1").innerHTML = traducoesSelecionadas.intern_1;
  document.getElementById("intern_2").innerHTML = traducoesSelecionadas.intern_2;
  document.getElementById("intern_3").innerHTML = traducoesSelecionadas.intern_3;
  document.getElementById("dev_junior").innerHTML = traducoesSelecionadas.dev_junior;
  document.getElementById("dev_junior_1").innerHTML = traducoesSelecionadas.dev_junior_1;
  document.getElementById("dev_junior_2").innerHTML = traducoesSelecionadas.dev_junior_2;
  document.getElementById("dev_junior_3").innerHTML = traducoesSelecionadas.dev_junior_3;
  document.getElementById("portfolio").innerHTML = traducoesSelecionadas.portfolio;
  document.getElementById("kitchen").innerHTML = traducoesSelecionadas.kitchen;
  document.getElementById("kitchen_tecs").innerHTML = traducoesSelecionadas.kitchen_tecs;
  document.getElementById("twod").innerHTML =  traducoesSelecionadas.twod;
  document.getElementById("twod_tecs").innerHTML = traducoesSelecionadas.twod_tecs;
  document.getElementById("tcc").innerHTML = traducoesSelecionadas.tcc;
  document.getElementById("tcc_tecs").innerHTML = traducoesSelecionadas.tcc_tecs;
  document.getElementById("Crud").innerHTML = traducoesSelecionadas.Crud;
  document.getElementById("Crud_tecs").innerHTML = traducoesSelecionadas.Crud_tecs;
  document.getElementById("PLN_1").innerHTML = traducoesSelecionadas.PLN_1;
  document.getElementById("PLN_1_tecs").innerHTML = traducoesSelecionadas.PLN_1_tecs;
  document.getElementById("PLN_2").innerHTML = traducoesSelecionadas.PLN_2;
  document.getElementById("PLN_2_tecs").innerHTML = traducoesSelecionadas.PLN_2_tecs;
  document.getElementById("Futfacil").innerHTML = traducoesSelecionadas.Futfacil;
  document.getElementById("Futfacil_tecs").innerHTML = traducoesSelecionadas.Futfacil_tecs;
  document.getElementById("language").innerHTML = traducoesSelecionadas.language;
  document.getElementById("pot").innerHTML = traducoesSelecionadas.pt;
  document.getElementById("eng").innerHTML = traducoesSelecionadas.en;
  document.getElementById("esp").innerHTML = traducoesSelecionadas.es;
  document.getElementById("fra").innerHTML = traducoesSelecionadas.fr;
  document.getElementById("certificates").innerHTML = traducoesSelecionadas.certificates;
  document.getElementById("certificados_text").innerHTML = traducoesSelecionadas.certificados_text;

}

document.addEventListener("DOMContentLoaded", function () {
  mudarConteudo("pt"); // Define o idioma padrão como português
});

document.addEventListener('DOMContentLoaded', function() {
  showSection('sobre'); // Mostra a seção "Sobre Mim" por padrão
});

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('collapsed');
}