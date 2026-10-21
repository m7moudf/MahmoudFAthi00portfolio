const brandingScript = document.currentScript;

if (brandingScript) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = new URL("portfolio-branding.css", brandingScript.src).href;
  document.head.append(stylesheet);

  const portfolioHref = brandingScript.dataset.portfolioHref;

  if (portfolioHref) {
    const signature = document.createElement("div");
    signature.className = "ma-signature";
    signature.innerHTML = `
      <a class="ma-signature-brand" href="${portfolioHref}" aria-label="Mahmoud AbuSaeda portfolio">
        <span class="ma-signature-mark" aria-hidden="true">MA</span>
        <span class="ma-signature-name">Mahmoud AbuSaeda</span>
      </a>
      <span class="ma-signature-role">Front-End Developer <span aria-hidden="true">·</span> IT Graduate</span>
      <a class="ma-signature-portfolio" href="${portfolioHref}">Portfolio &amp; CV <span aria-hidden="true">↗</span></a>
    `;
    document.body.prepend(signature);

    const projectHeader = document.body.querySelector(":scope > header");
    const nextSection = projectHeader?.nextElementSibling;
    const projectNavigation = nextSection?.tagName !== "MAIN" && nextSection?.querySelector("nav")
      ? nextSection
      : null;

    if (projectHeader) {
      projectHeader.style.position = "static";
      projectHeader.style.top = "auto";
    }

    if (projectNavigation) {
      projectNavigation.classList.add("ma-project-navigation");
      projectNavigation.style.position = "static";
      projectNavigation.style.top = "auto";
      projectNavigation.style.right = "auto";
      projectNavigation.style.left = "auto";
      projectNavigation.style.width = "auto";
      projectNavigation.style.zIndex = "auto";
    }

    const footer = document.createElement("footer");
    footer.className = "ma-project-footer";
    footer.innerHTML = `
      <div class="ma-project-footer-inner">
        <div>
          <p class="ma-footer-kicker">DESIGNED &amp; BUILT BY</p>
          <p class="ma-footer-name">Mahmoud AbuSaeda</p>
          <p class="ma-footer-role">Front-End Developer · Information Technology Graduate</p>
        </div>
        <div class="ma-footer-links">
          <a href="mailto:zxaq.ama77@gmail.com">zxaq.ama77@gmail.com</a>
          <a href="https://wa.me/972597253835" target="_blank" rel="noopener noreferrer">WhatsApp · +972 59 725 3835</a>
          <a class="ma-footer-portfolio" href="${portfolioHref}">Back to portfolio &amp; CV ↑</a>
        </div>
      </div>
    `;
    document.body.append(footer);
  }
}
