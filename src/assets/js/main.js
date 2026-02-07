

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


// GSAP
// /assets/js/reveal.js
(() => {
  // Respect reduced motion
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  if (!window.gsap || !window.ScrollTrigger) {
    console.warn("GSAP / ScrollTrigger not found. Check script includes.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const items = gsap.utils.toArray(".reveal");

  items.forEach((el) => {
    // Optional: prevent "flash" before JS runs (best paired with CSS below)
    // gsap.set(el, { opacity: 0, y: 16 });

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",      // when element hits 85% down the viewport
          toggleActions: "play none none none",
          // once: true, // Uncomment if you never want it to re-run (GSAP 3.12+ supports this)
        },
      }
    );
  });
  gsap.utils.toArray(".js-form-reveal").forEach((wrap) => {
  const fields = wrap.querySelectorAll(".js-form-field");
  if (!fields.length) return;

  // Hide only the fields (safe: doesn't blank the page)
  gsap.set(fields, { autoAlpha: 0, y: 14 });

  gsap.to(fields, {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.3,
    overwrite: "auto",
    scrollTrigger: {
      trigger: wrap,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});
})();
