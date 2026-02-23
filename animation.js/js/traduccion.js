/* ===============================
   🌍 SISTEMA DE TRADUCCIÓN
================================== */

const translations = {
  pt: {
    curriculum: "Currículo",
    projects: "Projetos",
    contact: "Contato",
    about: "Sobre mim",
    welcome_text: "Olá! Bem-vindo(a)! Obrigada por visitar meu espaço. Aqui você pode saber mais sobre minha carreira, habilidades e projetos em que trabalhei."
  },
  es: {
    curriculum: "Currículum",
    projects: "Mis proyectos",
    contact: "Contacto",
    about: "Sobre mí",
    welcome_text: "¡Hola! ¡Bienvenido(a)! Gracias por visitar mi espacio. Aquí puedes conocer más sobre mi carrera, habilidades y proyectos en los que he trabajado."
  },
  en: {
    curriculum: "Resume",
    projects: "My projects",
    contact: "Contact",
    about: "About me",
    welcome_text: "Hello! Welcome! Thank you for visiting my space. Here you can learn more about my career, skills, and projects I have worked on."
  }
};

function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.substring(0, 2);
  return translations[lang] ? lang : "pt";
}

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Cargar idioma guardado o detectar
  const savedLang = localStorage.getItem("lang");
  const currentLang = savedLang || detectLanguage();
  translatePage(currentLang);

  // 2️⃣ Escuchar botones
  const buttons = document.querySelectorAll(".lang-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      localStorage.setItem("lang", lang);
      translatePage(lang);
    });
  });

});document.querySelectorAll("[data-i18n]")
