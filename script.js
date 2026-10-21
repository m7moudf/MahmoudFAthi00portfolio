const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

if (menuToggle && siteNavigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNavigation.classList.toggle("is-open", !isExpanded);
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNavigation.classList.remove("is-open");
    }
  });
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll("[data-reveal]");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  document.body.classList.add("has-motion");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll("[data-image-motion]").forEach((frame) => {
  frame.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || reduceMotion) return;

    const bounds = frame.getBoundingClientRect();
    const moveX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const moveY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;

    frame.style.setProperty("--image-x", `${-moveX}px`);
    frame.style.setProperty("--image-y", `${-moveY}px`);
  });

  frame.addEventListener("pointerleave", () => {
    frame.style.setProperty("--image-x", "0");
    frame.style.setProperty("--image-y", "0");
  });
});
