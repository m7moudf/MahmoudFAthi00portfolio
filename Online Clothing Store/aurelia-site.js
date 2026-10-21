(() => {
  const routes = {
    home: "../aurelia_paris_haute_couture_luxury_fashion/code.html",
    shop: "../shop_aurelia_paris/code.html",
    men: "../men_aurelia_paris/code.html",
    women: "../women_aurelia_paris/code.html",
    "new-arrivals": "../new_arrivals_aurelia_paris/code.html",
    sale: "../shop_aurelia_paris/code.html",
    contact: "#owner-contact",
  };

  const pageFolder = decodeURIComponent(location.pathname.split("/").slice(-2, -1)[0] || "");
  document.body.classList.add("ma-fashion-page");

  const imageReplacements = {
    aurelia_paris_haute_couture_luxury_fashion: {
      source:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEbvwZl6eM1Eft7XUOpj2oPX1Td77_uz21X03MtOL1sl4TYMm5mH2hkRpE2L872jG2nBIivpTtoAB8GwNAoWJuGH619lOZaTDVkdTczjauQOsx8U-Xi-JlJkUbs5QOdaV4-bcu31NHzn-BVAfm4ocbC_Jbk4yFXN7z14YYEbGaDeYR4VWymq6U6Vw0wiAyO4aXiCaeJvyLuJqziOTxFixeMqMb1Ub72CQPaPMXTApNyScXWsYETcn6Cw",
      pattern: /female|woman|gown|dress|skirt|corset|bodysuit|sheer|cutout|neckline|halter|strapless|plunging|cleavage/i,
      alt: "Model wearing a fully covered black cashmere mockneck sweater",
    },
    men_aurelia_paris: {
      source:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQeXcxTxFbSJe-dY5ehmY2JzbNcUE3BTG1aa9h0AQtS3SH3uAeRsaHs3nkdjMy8Ypb_VujsMdWhCYhnMtqY78rQYFCNK78J2TT0AiRxeAg8cTpICAnD4cxTVYrtnQY5gdApdtX9z7ud0ue2O1VyopbkhHJbWlVQMi-0houe9CXY4v7zbJQBeMiuu6Patimnq9N7smvmhkv3dbziYEk8A827D3X6Xa8Qkx4mpHYjK1ywZpdowckjURAmA",
      pattern: /sheer georgette/i,
      alt: "Menswear model wearing a full-length black cashmere overcoat",
    },
    new_arrivals_aurelia_paris: {
      source:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5ZhpnWsVeH5wtdvqHuM50dk0ZrBMLKGR5ViBJ4acw61rGNUAKuOzathwZpcBLW62LvzdaPzdPT2ipOSZmw01xHFzOqQah9Vim5918xgRlINh3IK8uTOTVjluXbl1-xTR4RH81otPxKGhe0m79BVcj2IOIaOUtyd96OGCcnjN8BjYVyJ6VB48Pd5CH6wtPnzFycOJUGtnYOWAaY8qIAdY1vDreWJjwTmGFmt3N8yMdgoLuNYKeyqVYkw",
      pattern: /female|woman|gown|dress|skirt|corset|bodysuit|sheer|cutout|neckline|halter|strapless|plunging|cleavage|high-slit/i,
      alt: "Model wearing a fully covered black cashmere mockneck sweater",
    },
    shop_aurelia_paris: {
      source:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEbvwZl6eM1Eft7XUOpj2oPX1Td77_uz21X03MtOL1sl4TYMm5mH2hkRpE2L872jG2nBIivpTtoAB8GwNAoWJuGH619lOZaTDVkdTczjauQOsx8U-Xi-JlJkUbs5QOdaV4-bcu31NHzn-BVAfm4ocbC_Jbk4yFXN7z14YYEbGaDeYR4VWymq6U6Vw0wiAyO4aXiCaeJvyLuJqziOTxFixeMqMb1Ub72CQPaPMXTApNyScXWsYETcn6Cw",
      pattern: /female|woman|gown|dress|skirt|corset|bodysuit|sheer|cutout|neckline|halter|strapless|plunging|cleavage/i,
      alt: "Model wearing a fully covered black cashmere mockneck sweater",
    },
    women_aurelia_paris: {
      source:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEbvwZl6eM1Eft7XUOpj2oPX1Td77_uz21X03MtOL1sl4TYMm5mH2hkRpE2L872jG2nBIivpTtoAB8GwNAoWJuGH619lOZaTDVkdTczjauQOsx8U-Xi-JlJkUbs5QOdaV4-bcu31NHzn-BVAfm4ocbC_Jbk4yFXN7z14YYEbGaDeYR4VWymq6U6Vw0wiAyO4aXiCaeJvyLuJqziOTxFixeMqMb1Ub72CQPaPMXTApNyScXWsYETcn6Cw",
      pattern: /female|woman|gown|dress|skirt|corset|bodysuit|sheer|cutout|neckline|halter|strapless|plunging|cleavage|high slit/i,
      alt: "Model wearing a fully covered black cashmere mockneck sweater",
    },
  };
  const imageReplacement = imageReplacements[pageFolder];
  if (imageReplacement) {
    document.querySelectorAll("img[data-alt]").forEach((image) => {
      if (!imageReplacement.pattern.test(image.dataset.alt)) return;
      image.src = imageReplacement.source;
      image.alt = imageReplacement.alt;
      image.dataset.alt = imageReplacement.alt;
    });
  }

  document.querySelectorAll("a[data-path]").forEach((link) => {
    const route = routes[link.dataset.path];
    if (route) link.setAttribute("href", route);
  });

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    const label = link.textContent.toLowerCase().replace(/\s+/g, " ").trim();
    let route;

    if (/concierge|contact|bespoke|salon|styling|support/.test(label)) {
      route = routes.contact;
    } else if (/women|gown|couture/.test(label)) {
      route = routes.women;
    } else if (/men|tailor/.test(label)) {
      route = routes.men;
    } else if (/arrival|runway|lookbook/.test(label)) {
      route = routes["new-arrivals"];
    } else if (/shop collection|all ensembles|collection|footwear|leather|accessories|objects/.test(label)) {
      route = routes.shop;
    } else if (/sale|archive/.test(label)) {
      route = routes.sale;
    }

    if (route) link.setAttribute("href", route);
  });

  const footer = document.querySelector("footer > div");
  if (!footer) return;

  const section = document.createElement("section");
  section.id = "owner-contact";
  section.lang = "ar";
  section.dir = "rtl";
  section.className = "mt-8 border-t border-outline-variant pt-8";

  const title = document.createElement("h2");
  title.className = "mb-3 text-lg font-semibold text-on-surface";
  title.textContent = "من نحن والتواصل";

  const name = document.createElement("p");
  name.className = "mb-2 text-on-surface";
  name.textContent = "Mahmoud AbuSaeda";

  const bio = document.createElement("p");
  bio.className = "mb-4 max-w-3xl text-sm leading-7 text-on-surface-variant";
  bio.textContent =
    "دار أزياء راقية تستلهم أناقة باريس، وتجمع بين الحرفية الفرنسية والتصميم المعاصر في قطع مميزة بتفاصيل مدروسة.";

  const contacts = document.createElement("div");
  contacts.className = "flex flex-wrap gap-4 text-sm";

  const email = document.createElement("a");
  email.href = "mailto:zxaq.ama77@gmail.com";
  email.className = "text-primary underline underline-offset-4";
  email.textContent = "zxaq.ama77@gmail.com";

  const whatsapp = document.createElement("a");
  whatsapp.href = "https://wa.me/972597253835";
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener noreferrer";
  whatsapp.className = "text-primary underline underline-offset-4";
  whatsapp.textContent = "واتساب: +972597253835";

  contacts.append(email, whatsapp);
  section.append(title, name, bio, contacts);
  footer.append(section);
})();
