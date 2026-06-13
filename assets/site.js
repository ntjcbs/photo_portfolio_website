// natejacobs.net — tiny vanilla helpers (no dependencies)

// Google Analytics (GA4) — centralized here so every page picks it up
(function () {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-JM65C3R1R9";
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-JM65C3R1R9");
})();

(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Photo lightbox
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var openLightbox = function (src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lightbox.setAttribute("data-open", "true");
      document.body.style.overflow = "hidden";
    };
    var closeLightbox = function () {
      lightbox.setAttribute("data-open", "false");
      document.body.style.overflow = "";
    };

    document.querySelectorAll(".photo img").forEach(function (img) {
      img.addEventListener("click", function () {
        openLightbox(img.currentSrc || img.src, img.alt);
      });
    });
    lightbox.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }
})();
