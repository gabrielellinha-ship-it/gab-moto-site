// CONFIGURAÇÃO DA GAB MOTO
// Substitua o valor abaixo pelo número da empresa, com código do país e DDD.
// Exemplo de formato: 5511999999999 (não use +, espaços ou traços).
const WHATSAPP_NUMBER = "CONFIGURAR_NUMERO_AQUI";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappLink = document.querySelector(".whatsapp-link");
const message = encodeURIComponent("Olá! Conheci a GAB MOTO pelo site e gostaria de informações sobre os serviços.");
if (WHATSAPP_NUMBER !== "CONFIGURAR_NUMERO_AQUI") {
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
} else {
  whatsappLink.href = "https://www.instagram.com/Gab_moto_estetica/";
  whatsappLink.addEventListener("click", event => {
    event.preventDefault();
    alert("O WhatsApp ainda não foi configurado. Por enquanto, fale com a GAB MOTO pelo Instagram @Gab_moto_estetica.");
  });
}
