// =========================================
// BASIC INTERACTIVITY
// - Mobile nav toggle
// - Smooth scrolling for internal links
// - Dynamic year in footer
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const yearSpan = document.getElementById("year");

  // 1. Mobile Toggle Logic
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
      
      // Prevent scrolling the background when menu is open
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    });
  }

  // 2. Smooth Scroll for on-page anchors (like "Back to Top")
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#" && targetId.startsWith("#")) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // 3. Footer Year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});;
