/**
 * A++ Software House - Interactive Application Engine
 * Reads data from websiteData (data.js) and dynamically populates
 * all layout sections, handles portfolio switcher, FAQs, inline contact form,
 * and the full-screen image lightbox with blurred backdrop.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof websiteData === "undefined") {
    console.error("websiteData is not defined. Ensure data.js is loaded before app.js.");
    return;
  }

  initHeaderAndNav();
  initHero();
  initMarquee();
  initAbout();
  initServices();
  initPortfolio();
  initProcess();
  initTechStack();
  initTestimonials();
  initFaqs();
  initContactSection();
  initFooter();
  initLightbox();
  initScrollEffects();
});

/* --------------------------------------------------------------------------
   1. Header & Navigation (Pure Logo Image, Bigger Size, No Clashing Text)
   -------------------------------------------------------------------------- */
function initHeaderAndNav() {
  const brandLogoContainer = document.getElementById("header-brand");
  const navMenu = document.getElementById("nav-menu");
  const mobileNavLinks = document.getElementById("mobile-nav-links");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerClose = document.getElementById("drawer-close");

  // Pure Logo Image Only - No Text Beside It
  if (brandLogoContainer) {
    brandLogoContainer.innerHTML = `
      <img src="${websiteData.company.assets.logoNoBg}" alt="${websiteData.company.name}" class="brand-logo-img" onerror="this.src='${websiteData.company.assets.logoSvg}'" />
    `;
  }

  // Populate Desktop Nav
  if (navMenu) {
    navMenu.innerHTML = websiteData.navigation
      .map(item => `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`)
      .join("");
  }

  // Populate Mobile Nav
  if (mobileNavLinks) {
    mobileNavLinks.innerHTML = websiteData.navigation
      .map(item => `<a href="${item.href}" class="mobile-nav-link">${item.label}</a>`)
      .join("");

    mobileNavLinks.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer?.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Mobile Drawer Toggle
  if (mobileToggle && mobileDrawer && drawerClose) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    drawerClose.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
}

/* --------------------------------------------------------------------------
   2. Hero Section
   -------------------------------------------------------------------------- */
function initHero() {
  const heroBg = document.getElementById("hero-bg-img");
  const heroBadge = document.getElementById("hero-badge");
  const heroTitle = document.getElementById("hero-title");
  const heroDesc = document.getElementById("hero-desc");
  const heroCtaPrimary = document.getElementById("hero-cta-primary");
  const heroCtaSecondary = document.getElementById("hero-cta-secondary");
  const heroLocationTag = document.getElementById("hero-location-text");
  const heroRightCard = document.getElementById("hero-right-card");

  if (heroBg) {
    heroBg.src = websiteData.company.assets.heroBg;
    heroBg.alt = "A++ Software House Office";
  }

  // Safe check if heroBadge exists (removed in HTML as requested)
  if (heroBadge) {
    heroBadge.style.display = "none";
  }

  if (heroTitle) {
    heroTitle.textContent = websiteData.hero.title;
  }

  if (heroDesc) {
    heroDesc.textContent = websiteData.hero.description;
  }

  if (heroCtaPrimary) {
    heroCtaPrimary.textContent = websiteData.hero.ctaPrimary.text;
    heroCtaPrimary.href = websiteData.hero.ctaPrimary.href;
  }

  if (heroCtaSecondary) {
    heroCtaSecondary.textContent = websiteData.hero.ctaSecondary.text;
    heroCtaSecondary.href = websiteData.hero.ctaSecondary.href;
  }

  if (heroLocationTag) {
    heroLocationTag.textContent = websiteData.hero.locationNote;
  }

  if (heroRightCard) {
    heroRightCard.innerHTML = `
      <div class="hero-indicator-top">
        <span class="hero-step-num">01 / HUB</span>
        <span class="hero-live-badge"><span class="pulse-dot"></span> ONLINE</span>
      </div>
      <h3 class="hero-indicator-title">Mandi Bahauddin HQ</h3>
      <p class="hero-indicator-text">
        Phalia Road, Punjab Center. Providing custom POS software, institutional ERPs, web systems & mobile solutions.
      </p>
      <div class="hero-indicator-pills">
        <span class="tech-mini-pill">Retail POS</span>
        <span class="tech-mini-pill">College ERP</span>
        <span class="tech-mini-pill">Pharmacy POS</span>
        <span class="tech-mini-pill">Wholesale ERP</span>
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   3. Marquee Ticker
   -------------------------------------------------------------------------- */
function initMarquee() {
  const marqueeTrack = document.getElementById("marquee-track");
  if (!marqueeTrack) return;

  const items = websiteData.marquee;
  const doubled = [...items, ...items];

  marqueeTrack.innerHTML = doubled
    .map(
      item => `
      <div class="marquee-item">
        <span class="item-bullet"></span>
        <span>${item}</span>
      </div>
    `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   4. About / Value Proposition
   -------------------------------------------------------------------------- */
function initAbout() {
  const aboutTag = document.getElementById("about-tag");
  const aboutHeading = document.getElementById("about-heading");
  const aboutParagraphs = document.getElementById("about-paragraphs");
  const statsContainer = document.getElementById("about-stats-grid");

  if (aboutTag) {
    aboutTag.innerHTML = `<span class="dot"></span> [ ${websiteData.about.sectionNumber} ] / ${websiteData.about.tag}`;
  }

  if (aboutHeading) {
    aboutHeading.textContent = websiteData.about.heading;
  }

  if (aboutParagraphs) {
    aboutParagraphs.innerHTML = `
      <div class="leadership-note">
        <strong>Executive Leadership:</strong> ${websiteData.company.ceo} (${websiteData.company.ceoTitle}) &bull; Location: ${websiteData.company.location}
      </div>
      <p>${websiteData.about.paragraph1}</p>
      <p>${websiteData.about.paragraph2}</p>
    `;
  }

  if (statsContainer) {
    statsContainer.innerHTML = websiteData.about.stats
      .map(
        stat => `
        <div class="stat-card">
          <div class="stat-number">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
          <div class="stat-desc">${stat.description}</div>
        </div>
      `
      )
      .join("");
  }
}

/* --------------------------------------------------------------------------
   5. Services Section (Quad Grid + Enterprise Column)
   -------------------------------------------------------------------------- */
function initServices() {
  const servicesTag = document.getElementById("services-tag");
  const servicesHeading = document.getElementById("services-heading");
  const servicesSub = document.getElementById("services-sub");
  const quadGrid = document.getElementById("services-quad-grid");
  const featureCol = document.getElementById("services-feature-col");

  if (servicesTag) {
    servicesTag.innerHTML = `<span class="dot"></span> [ ${websiteData.services.sectionNumber} ] / ${websiteData.services.tag}`;
  }

  if (servicesHeading) {
    servicesHeading.textContent = websiteData.services.heading;
  }

  if (servicesSub) {
    servicesSub.textContent = websiteData.services.subheading;
  }

  const iconSvg = {
    receipt: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"></path><line x1="8" y1="8" x2="16" y2="8"></line><line x1="8" y1="12" x2="16" y2="12"></line><line x1="8" y1="16" x2="12" y2="16"></line></svg>`,
    globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    smartphone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    "trending-up": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    server: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`
  };

  const coreServices = websiteData.services.items.filter(item => !item.isWide);
  const wideService = websiteData.services.items.find(item => item.isWide) || websiteData.services.items[0];

  // Quad Grid
  if (quadGrid) {
    quadGrid.innerHTML = coreServices
      .map(item => {
        const bullets = item.features.slice(0, 3)
          .map(
            f => `
            <li class="service-bullet-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${f}</span>
            </li>
          `
          )
          .join("");

        return `
          <div class="service-card" data-service-id="${item.id}">
            <div>
              <div class="service-card-top">
                <span class="service-tag">${item.tag}</span>
                <span class="service-badge">${item.badge}</span>
              </div>
              <div class="service-icon-box">
                ${iconSvg[item.icon] || iconSvg.receipt}
              </div>
              <h3 class="service-title">${item.title}</h3>
              <p class="service-desc">${item.shortDesc}</p>
              <ul class="service-feature-bullets">
                ${bullets}
              </ul>
            </div>
            <div class="service-card-footer">
              <a href="#contact" class="service-action-link" onclick="selectServiceInForm('${item.title}')">
                <span>Inquire Service</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // Feature Enterprise Card
  if (featureCol) {
    const wideBullets = wideService.features
      .map(
        f => `
        <li class="service-bullet-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${f}</span>
        </li>
      `
      )
      .join("");

    featureCol.innerHTML = `
      <div class="service-enterprise-card">
        <div>
          <div class="service-card-top">
            <span class="service-tag">${wideService.tag}</span>
            <span class="service-badge">${wideService.badge}</span>
          </div>
          <h3 class="service-title">${wideService.title}</h3>
          <p class="service-desc">${wideService.shortDesc}</p>
          <ul class="service-feature-bullets">
            ${wideBullets}
          </ul>
        </div>
        <div class="service-card-footer">
          <a href="#contact" class="service-action-link" onclick="selectServiceInForm('${wideService.title}')">
            <span>Explore Custom Architecture</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   6. Portfolio Section (Interactive Project Switcher & Lightbox Trigger)
   -------------------------------------------------------------------------- */
let currentActiveProject = null;

function initPortfolio() {
  const portfolioTag = document.getElementById("portfolio-tag");
  const portfolioHeading = document.getElementById("portfolio-heading");
  const portfolioSub = document.getElementById("portfolio-sub");
  const projectList = document.getElementById("project-list");

  const previewImg = document.getElementById("preview-active-img");
  const previewBadge = document.getElementById("preview-badge");
  const previewClient = document.getElementById("preview-client");
  const previewTitle = document.getElementById("preview-title");
  const previewDesc = document.getElementById("preview-desc");
  const previewTechTags = document.getElementById("preview-tech-tags");
  const stickyPreviewWrapper = document.getElementById("sticky-preview-wrapper");

  if (portfolioTag) {
    portfolioTag.innerHTML = `<span class="dot"></span> [ ${websiteData.portfolio.sectionNumber} ] / ${websiteData.portfolio.tag}`;
  }

  if (portfolioHeading) {
    portfolioHeading.textContent = websiteData.portfolio.heading;
  }

  if (portfolioSub) {
    portfolioSub.textContent = websiteData.portfolio.subheading;
  }

  const projects = websiteData.portfolio.projects;
  if (!projectList || projects.length === 0) return;

  projectList.innerHTML = projects
    .map(
      (proj, index) => `
      <div class="project-item ${index === 0 ? "active" : ""}" data-index="${index}">
        <div class="project-main-row">
          <div class="project-info-left">
            <span class="project-num">${proj.number}</span>
            <h3 class="project-title">${proj.title}</h3>
          </div>
          <div class="project-meta-right">
            <span class="project-cat-pill">${proj.category}</span>
            <div class="project-arrow">&rarr;</div>
          </div>
        </div>
        <!-- Mobile Inline Preview with Lightbox Trigger -->
        <div class="project-mobile-preview">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" onclick="openLightbox('${proj.image}', '${proj.title} - ${proj.category}')" />
          <div style="padding: 0.85rem 0;">
            <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.4rem;">${proj.description}</p>
            <div style="display:flex; flex-wrap:wrap; gap:0.3rem;">
              ${proj.techStack.map(t => `<span class="preview-tech-tag">${t}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  function updatePreview(index) {
    const proj = projects[index];
    if (!proj) return;
    currentActiveProject = proj;

    if (previewImg) {
      previewImg.style.opacity = "0.2";
      setTimeout(() => {
        previewImg.src = proj.image;
        previewImg.alt = proj.title;
        previewImg.style.opacity = "1";
      }, 120);
    }

    if (previewBadge) previewBadge.textContent = proj.metrics;
    if (previewClient) previewClient.textContent = proj.client;
    if (previewTitle) previewTitle.textContent = proj.title;
    if (previewDesc) previewDesc.textContent = proj.description;

    if (previewTechTags) {
      previewTechTags.innerHTML = proj.techStack
        .map(tag => `<span class="preview-tech-tag">${tag}</span>`)
        .join("");
    }
  }

  updatePreview(0);

  // Click on sticky preview wrapper opens full-screen lightbox
  if (stickyPreviewWrapper) {
    stickyPreviewWrapper.addEventListener("click", () => {
      if (currentActiveProject) {
        openLightbox(currentActiveProject.image, `${currentActiveProject.title} (${currentActiveProject.category})`);
      }
    });
  }

  const projectItems = projectList.querySelectorAll(".project-item");
  projectItems.forEach((item, idx) => {
    item.addEventListener("mouseenter", () => {
      projectItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      updatePreview(idx);
    });

    item.addEventListener("click", () => {
      projectItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      updatePreview(idx);
    });
  });
}

/* --------------------------------------------------------------------------
   7. Process Section ("How we ship certainty" - Clean 4-Card System)
   -------------------------------------------------------------------------- */
function initProcess() {
  const processTag = document.getElementById("process-tag");
  const processHeading = document.getElementById("process-heading");
  const processSub = document.getElementById("process-sub");
  const processStepsGrid = document.getElementById("process-steps-grid");

  if (processTag) {
    processTag.innerHTML = `<span class="dot"></span> [ ${websiteData.process.sectionNumber} ] / ${websiteData.process.tag}`;
  }

  if (processHeading) {
    processHeading.textContent = websiteData.process.heading;
  }

  if (processSub) {
    processSub.textContent = websiteData.process.subheading;
  }

  if (processStepsGrid) {
    processStepsGrid.innerHTML = websiteData.process.steps
      .map(
        step => `
        <div class="process-step-box">
          <div>
            <div class="process-step-header">
              <span class="process-step-num">${step.step}</span>
              <span class="process-step-badge">Phase ${step.step}</span>
            </div>
            <h3 class="process-step-title">${step.title}</h3>
          </div>
          <p class="process-step-desc">${step.desc}</p>
        </div>
      `
      )
      .join("");
  }
}

/* --------------------------------------------------------------------------
   8. Tech Stack / Tools We Trust
   -------------------------------------------------------------------------- */
function initTechStack() {
  const toolsTag = document.getElementById("tools-tag");
  const toolsHeading = document.getElementById("tools-heading");
  const toolsSub = document.getElementById("tools-sub");
  const techGrid = document.getElementById("tech-grid");

  if (toolsTag) {
    toolsTag.innerHTML = `<span class="dot"></span> ${websiteData.toolsWeTrust.tag}`;
  }

  if (toolsHeading) {
    toolsHeading.textContent = websiteData.toolsWeTrust.heading;
  }

  if (toolsSub) {
    toolsSub.textContent = websiteData.toolsWeTrust.subheading;
  }

  if (techGrid) {
    techGrid.innerHTML = websiteData.toolsWeTrust.tools
      .map(
        tool => `
        <div class="tech-badge">
          <span>${tool.name}</span>
          <span class="tech-category">${tool.category}</span>
        </div>
      `
      )
      .join("");
  }
}

/* --------------------------------------------------------------------------
   9. Testimonials
   -------------------------------------------------------------------------- */
function initTestimonials() {
  const testTag = document.getElementById("testimonials-tag");
  const testHeading = document.getElementById("testimonials-heading");
  const testSub = document.getElementById("testimonials-sub");
  const testGrid = document.getElementById("testimonials-grid");

  if (testTag) {
    testTag.innerHTML = `<span class="dot"></span> [ ${websiteData.testimonials.sectionNumber} ] / ${websiteData.testimonials.tag}`;
  }

  if (testHeading) {
    testHeading.textContent = websiteData.testimonials.heading;
  }

  if (testSub) {
    testSub.textContent = websiteData.testimonials.subheading;
  }

  if (testGrid) {
    testGrid.innerHTML = websiteData.testimonials.items
      .map(item => {
        const stars = Array(item.rating).fill("&#9733;").join("");
        const initials = item.author
          .split(" ")
          .map(n => n[0])
          .slice(0, 2)
          .join("");

        return `
          <div class="testimonial-card">
            <div>
              <div class="testimonial-stars">${stars}</div>
              <blockquote class="testimonial-quote">"${item.quote}"</blockquote>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">${initials}</div>
              <div class="author-info">
                <div class="author-name">${item.author}</div>
                <div class="author-role">${item.role}, ${item.company}</div>
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  }
}

/* --------------------------------------------------------------------------
   10. FAQs Accordion
   -------------------------------------------------------------------------- */
function initFaqs() {
  const faqTag = document.getElementById("faqs-tag");
  const faqHeading = document.getElementById("faqs-heading");
  const faqSub = document.getElementById("faqs-sub");
  const faqWrapper = document.getElementById("faq-wrapper");

  if (faqTag) {
    faqTag.innerHTML = `<span class="dot"></span> [ ${websiteData.faqs.sectionNumber} ] / ${websiteData.faqs.tag}`;
  }

  if (faqHeading) {
    faqHeading.textContent = websiteData.faqs.heading;
  }

  if (faqSub) {
    faqSub.textContent = websiteData.faqs.subheading;
  }

  if (faqWrapper) {
    faqWrapper.innerHTML = websiteData.faqs.items
      .map(
        (faq, idx) => `
        <div class="faq-item ${idx === 0 ? "active" : ""}">
          <button class="faq-question-btn" type="button" aria-expanded="${idx === 0}">
            <span>${faq.question}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer-panel">
            <p>${faq.answer}</p>
          </div>
        </div>
      `
      )
      .join("");

    const faqButtons = faqWrapper.querySelectorAll(".faq-question-btn");
    faqButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isOpen = item.classList.contains("active");

        faqWrapper.querySelectorAll(".faq-item").forEach(i => {
          i.classList.remove("active");
          i.querySelector(".faq-question-btn").setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          item.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }
}

/* --------------------------------------------------------------------------
   11. Inline Contact Section (Directly Above Footer)
   -------------------------------------------------------------------------- */
function initContactSection() {
  const addressVal = document.getElementById("contact-address-val");
  const phoneVal = document.getElementById("contact-phone-val");
  const emailVal = document.getElementById("contact-email-val");
  const waBtn = document.getElementById("contact-whatsapp-btn");
  const bannerTitle = document.getElementById("contact-banner-title");
  const bannerSub = document.getElementById("contact-banner-sub");
  const form = document.getElementById("project-contact-form");
  const successBanner = document.getElementById("form-success-banner");
  const serviceSelect = document.getElementById("form-service-select");

  if (addressVal) addressVal.textContent = websiteData.company.address;
  if (phoneVal) phoneVal.textContent = websiteData.company.phone;
  if (emailVal) emailVal.textContent = websiteData.company.email;

  if (waBtn) {
    waBtn.href = websiteData.ctaBanner.whatsappHref;
    waBtn.target = "_blank";
    waBtn.rel = "noopener noreferrer";
  }

  if (bannerTitle) bannerTitle.textContent = websiteData.ctaBanner.title;
  if (bannerSub) bannerSub.textContent = websiteData.ctaBanner.subtitle;

  window.selectServiceInForm = function(serviceName) {
    if (serviceSelect && serviceName) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.getElementById("contact-name")?.focus();
      }, 500);
    }
  };

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const phone = document.getElementById("contact-phone").value;
      const service = serviceSelect ? serviceSelect.value : "POS Software";

      if (successBanner) {
        successBanner.style.display = "block";
        successBanner.innerHTML = `
          <strong>Thank you, ${name}!</strong><br>
          Your project inquiry for <strong>${service}</strong> has been received.<br>
          CEO Waqar Azeem Ranjha and our Mandi Bahauddin team will contact you at <strong>${phone}</strong> shortly.
        `;
      }

      form.reset();
      successBanner?.scrollIntoView({ behavior: "smooth", block: "nearest" });

      setTimeout(() => {
        if (successBanner) {
          successBanner.style.display = "none";
        }
      }, 7000);
    });
  }
}

/* --------------------------------------------------------------------------
   12. Footer (Pure Logo Image, No Text Redundancy)
   -------------------------------------------------------------------------- */
function initFooter() {
  const footerLogo = document.getElementById("footer-brand-logo");
  const footerDesc = document.getElementById("footer-desc");
  const footerPages = document.getElementById("footer-pages-list");
  const footerServices = document.getElementById("footer-services-list");
  const footerContactInfo = document.getElementById("footer-contact-info");
  const footerGiantWatermark = document.getElementById("footer-giant-watermark");
  const footerCopyright = document.getElementById("footer-copyright");

  // Pure Logo Image Only - No Text Redundancy
  if (footerLogo) {
    footerLogo.innerHTML = `
      <img src="${websiteData.company.assets.logoNoBg}" alt="${websiteData.company.name}" class="brand-logo-img" onerror="this.src='${websiteData.company.assets.logoSvg}'" />
    `;
  }

  if (footerDesc) {
    footerDesc.textContent = `${websiteData.company.tagline}. High-performance Point of Sale and customized ERP systems.`;
  }

  if (footerPages) {
    footerPages.innerHTML = websiteData.footer.col1.links
      .map(l => `<li><a href="${l.href}" class="footer-link">${l.label}</a></li>`)
      .join("");
  }

  if (footerServices) {
    footerServices.innerHTML = websiteData.footer.col2.links
      .map(l => `<li><a href="${l.href}" class="footer-link" onclick="selectServiceInForm('${l.label}')">${l.label}</a></li>`)
      .join("");
  }

  if (footerContactInfo) {
    footerContactInfo.innerHTML = `
      <div class="footer-contact-item">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>${websiteData.company.address}</span>
      </div>
      <div class="footer-contact-item">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>${websiteData.company.ceo} (${websiteData.company.ceoTitle})</span>
      </div>
      <div class="footer-contact-item">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span>${websiteData.company.phone}</span>
      </div>
      <div class="footer-contact-item">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        <span>${websiteData.company.email}</span>
      </div>
    `;
  }

  if (footerGiantWatermark) {
    footerGiantWatermark.textContent = websiteData.footer.watermark;
  }

  if (footerCopyright) {
    footerCopyright.textContent = websiteData.footer.copyright;
  }
}

/* --------------------------------------------------------------------------
   13. Full-Screen Image Lightbox with Blurred Backdrop
   -------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close-btn");

  window.openLightbox = function(src, captionText) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modalImg.alt = captionText || "System Preview";
    if (modalCaption) modalCaption.textContent = captionText || "";
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
    if (modalImg) modalImg.src = "";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      // Close when clicking outside image
      if (e.target === modal) {
        closeLightbox();
      }
    });
  }

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("open")) {
      closeLightbox();
    }
  });
}

/* --------------------------------------------------------------------------
   14. Scroll Effects & Header Shrink
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });
}
