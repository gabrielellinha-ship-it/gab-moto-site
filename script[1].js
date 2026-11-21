// GAB MOTO — interações do site
// Número oficial do WhatsApp: 55 66 99600-8227
const WHATSAPP_URL = "https://wa.me/5566996008227";

document.addEventListener("DOMContentLoaded", () => {
  // Menu para celular
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Dados dos serviços usados nos cartões e na janela de detalhes
  const services = {
    "lavagem-padrao": {
      title: "Lavagem Padrão",
      description: "Limpeza de rotina para retirar a sujeira do dia a dia e manter o veículo apresentável. Ideal para quem utiliza o veículo com frequência, vai sair para um passeio ou deseja apenas remover a sujeira acumulada."
    },
    "lavagem-detalhada": {
      title: "Lavagem Detalhada",
      description: "Limpeza minuciosa, com atenção a cantos, frestas e áreas de difícil acesso. Busca remover sujeiras aderidas e encardidos. Em motos, pode incluir desmontagem de componentes específicos quando necessário e previamente combinado."
    },
    "polimento": {
      title: "Polimento",
      description: "Processo técnico de correção e refinamento da pintura, indicado para reduzir marcas, riscos superficiais e opacidade, conforme a condição e a espessura do verniz."
    },
    "vitrificacao": {
      title: "Vitrificação",
      description: "Proteção aplicada sobre a superfície preparada. Ajuda a preservar o acabamento, intensificar o brilho, reduzir a aderência de contaminantes e facilitar as lavagens. Exige manutenção adequada e não elimina a necessidade de lavar o veículo."
    },
    "ppf": {
      title: "PPF — Proteção de Pintura",
      description: "Película aplicada em áreas selecionadas para ajudar a proteger a pintura contra impactos leves e abrasões do uso diário. A cobertura é definida conforme as peças e o projeto."
    },
    "envelopamento": {
      title: "Envelopamento",
      description: "Aplicação de película para personalização visual de partes ou de todo o veículo. Cores, acabamentos, materiais e viabilidade são definidos após avaliação."
    }
  };

  // Cartões abrem uma janela com explicação resumida
  const modal = document.getElementById("serviceModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  document.querySelectorAll("[data-service]").forEach(card => {
    card.addEventListener("click", () => {
      const item = services[card.dataset.service];
      if (!item || !modal) return;
      modalTitle.textContent = item.title;
      modalDescription.textContent = item.description;
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-close-modal]").forEach(button => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });

  // Abre/fecha as explicações completas na seção "Entenda cada opção"
  document.querySelectorAll(".detail-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const item = toggle.closest(".detail-item");
      const willOpen = !item.classList.contains("open");
      item.classList.toggle("open", willOpen);
      toggle.setAttribute("aria-expanded", String(willOpen));
      toggle.querySelector("b").textContent = willOpen ? "×" : "+";
    });
  });

  // Mantém os links de orçamento usando o mesmo número.
  // Para alterar o número no futuro, edite WHATSAPP_URL acima e os hrefs do index.html.
  document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
    if (link.getAttribute("href").startsWith("https://wa.me/5566996008227")) {
      link.setAttribute("href", link.getAttribute("href").replace("https://wa.me/5566996008227", WHATSAPP_URL));
    }
  });
});
