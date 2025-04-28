document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").classList.add("reveal-show");

  /* Sectionök megjelenítése */
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section:not(:first-child)");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        section.classList.add("reveal-show");
      }
    });
  });
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  /* Képek megjelenítése */

  const imageContainer = document.getElementById("project-images");
  for (let i = 1; i <= 9; i++) {
    const img = document.createElement("img");
    img.src = `./images/recepTar/photo_${i}.png`;
    img.alt = "Projekt 1";
    img.classList.add("project-thumb");
    imageContainer.appendChild(img);

    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      document.body.style.overflow = "hidden";
    });
  }

  // Modal bezárása escape-el
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Modal bezárása x-el
  document.querySelector(".modal .close").onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  //linkek másoslása clickre
  // email másolása
  document.getElementById("email-link").onclick = function () {
    copyText("email-link", "tooltip-email");
  };

  // linkedin másolása
  /*  document.getElementById("linkedin-link").onclick = function () {
    copyText("linkedin-link", "tooltip-linkedin");
  }; */

  function copyText(spanId, tooltipId) {
    const copyText = document.getElementById(spanId).innerText;
    navigator.clipboard.writeText(copyText);

    const tooltip = document.getElementById(tooltipId);
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";

    setTimeout(() => {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
    }, 2000);
  }

  const navbarContent = document.getElementById("navbar-content");
  const openNavbar = document.getElementById("open-navbar");
  const closeNavbar = document.getElementById("close-navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  openNavbar.onclick = function () {
    navbarContent.classList.add("show");
    openNavbar.classList.add("none");
    closeNavbar.classList.remove("none");
  };

  closeNavbar.onclick = function () {
    navbarContent.classList.remove("show");
    openNavbar.classList.remove("none");
    closeNavbar.classList.add("none");
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      navbarContent.classList.remove("show");
      openNavbar.classList.remove("none");
      closeNavbar.classList.add("none");
    });
  });

  const langHu = document.querySelector(".lang-hu");
  const langEn = document.querySelector(".lang-en");

  if (window.location.href.includes("en.html")) {
    langEn.classList.add("active");
    langHu.classList.remove("active");
  } else {
    langHu.classList.add("active");
    langEn.classList.remove("active");
  }
});
