function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Função para traduzir o texto utilizando a API LibreTranslate
async function traduzirTextoPorId(id, idiomaOrigem, idiomaDestino) {
  const textoOriginal = document.getElementById(id).textContent || document.getElementById(id).innerText; // Pega o texto do HTML

  const resposta = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          q: textoOriginal,
          source: idiomaOrigem,
          target: idiomaDestino,
          format: 'text',
      }),
  });

  const dados = await resposta.json();
  return dados.translatedText;
}

// Função que será chamada ao clicar no botão para alternar os idiomas
async function mudarConteudo() {
  const isEnglish = document.getElementById("translate").innerText === "Translate to English";
  document.getElementById("translate").innerText = isEnglish ? "Traduza para Português" : "Translate to English";

  // Traduzir os textos
  const textosIds = [
      'welcome',
      'about_me',
      'expe_me',
      'portifolio_me',
      'languages_me',
      'cert_me',
      'about',
      'about_text',
      'expe',
      'initiation',
      'initiation_1',
      'initiation_2',
      'initiation_3',
      'support',
      'support_1',
      'support_2',
      'support_3',
      'intern',
      'intern_1',
      'intern_2',
      'intern_3',
      'dev_junior',
      'dev_junior_1',
      'dev_junior_2',
      'dev_junior_3',
      'portfolio',
      'kitchen',
      'kitchen_tecs',
      '2d',
      '2d_tecs',
      'tcc',
      'tcc_tecs',
      'Crud',
      'Crud_tecs',
      'PLN_1',
      'PLN_1_tecs',
      'PLN_2',
      'PLN_2_tecs',
      'Futfacil',
      'Futfacil_tecs',
      'language',
      'pt',
      'en',
      'es',
      'fr',
      'certificates',
      'certificados_text',
  ];

  for (let i = 0; i < textosIds.length; i++) {
      const id = textosIds[i];  // ID do texto
      const textoTraduzido = await traduzirTextoPorId(id, isEnglish ? 'pt' : 'en', isEnglish ? 'en' : 'pt');
      document.getElementById(id).textContent = textoTraduzido;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  showSection('sobre'); // Mostra a seção "Sobre Mim" por padrão
});