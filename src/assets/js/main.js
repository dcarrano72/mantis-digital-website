

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const siteHeader = document.querySelector(".site-header");
const mainNavLinks = document.querySelectorAll(".main-nav a");

if (navToggle && siteHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Optional: close menu on link click (good mobile UX)
  mainNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.replace(/\/$/, "");

  links.forEach(link => {
    const linkPath = link.getAttribute("href").replace(/\/$/, "");

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
