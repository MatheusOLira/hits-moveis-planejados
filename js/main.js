/*
  HITS Móveis Planejados — configurações e interações.
  WhatsApp comercial configurado com DDI + DDD + número.
*/
const HITS_CONFIG = {
  WHATSAPP_NUMBER: "5511970385732", // +55 11 97038-5732
  DEFAULT_MESSAGE: "Olá! Conheci a HITS Móveis Planejados pelo site e gostaria de solicitar um orçamento."
};

document.documentElement.classList.add("js-ready");

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];

function closeMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}
function toggleMenu() {
  const opening = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(opening));
  menuToggle.setAttribute("aria-label", opening ? "Fechar menu" : "Abrir menu");
  mainNav.classList.toggle("is-open", opening);
  document.body.classList.toggle("menu-open", opening);
}
menuToggle?.addEventListener("click", toggleMenu);
navLinks.forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMenu();
});

function whatsappUrl(message) {
  const number = HITS_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message || HITS_CONFIG.DEFAULT_MESSAGE)}`;
}
document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const url = whatsappUrl(link.dataset.message || HITS_CONFIG.DEFAULT_MESSAGE);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        const active = link.getAttribute("href") === `#${id}` ||
          (id === "projetos" && link.getAttribute("href") === "#ambientes");
        link.classList.toggle("active", active);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

// Galeria com modal acessível, navegação por teclado, Escape e clique fora.
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("figcaption");
const allPortfolioItems = [...document.querySelectorAll(".portfolio-item")];
let portfolioItems = [...allPortfolioItems];
document.querySelectorAll(".portfolio-filter").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".portfolio-filter").forEach(b => {
      const active = b === button;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    allPortfolioItems.forEach(item => {
      item.hidden = filter !== "todos" && item.dataset.category !== filter;
    });
    portfolioItems = allPortfolioItems.filter(item => !item.hidden);
  });
});
let currentImageIndex = 0;
let previousFocus = null;

function showLightboxImage(index) {
  currentImageIndex = (index + portfolioItems.length) % portfolioItems.length;
  const item = portfolioItems[currentImageIndex];
  lightboxImage.src = item.dataset.full;
  lightboxImage.alt = item.dataset.alt || "";
  lightboxCaption.textContent = item.dataset.alt || "Projeto realizado";
}
function openLightbox(index) {
  previousFocus = document.activeElement;
  showLightboxImage(index);
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
  lightbox.querySelector(".lightbox-close").focus();
}
function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("modal-open");
  lightboxImage.src = "";
  previousFocus?.focus();
}
allPortfolioItems.forEach(item => item.addEventListener("click", () => openLightbox(portfolioItems.indexOf(item))));
lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => showLightboxImage(currentImageIndex - 1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => showLightboxImage(currentImageIndex + 1));
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showLightboxImage(currentImageIndex - 1);
  if (event.key === "ArrowRight") showLightboxImage(currentImageIndex + 1);
});
