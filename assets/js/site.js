const LOCALE_KEY = "crosync-locale";
const SUPPORTED_LOCALES = ["en", "zh", "ja"];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function resolveLocale({ savedLocale, browserLanguage } = {}) {
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale;
  }

  const language = (browserLanguage || "en").toLowerCase();
  if (language.startsWith("zh")) return "zh";
  if (language.startsWith("ja")) return "ja";
  return "en";
}

function renderLanguageSwitcher(locale, shared) {
  const labels = shared[locale];
  return `
    <div class="language-switcher" aria-label="${escapeHtml(labels.localeLabel)}">
      ${SUPPORTED_LOCALES.map(
        (code) => `
          <button
            type="button"
            class="locale-button${code === locale ? " is-active" : ""}"
            data-locale="${code}"
            aria-pressed="${String(code === locale)}"
          >
            ${escapeHtml(labels.locales[code])}
          </button>
        `
      ).join("")}
    </div>
  `;
}

function renderSteps(steps) {
  return steps
    .map(
      (step, index) => `
        <article class="step-card">
          <div class="step-index">0${index + 1}</div>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderScreenshots(home) {
  return home.screenshots
    .map(
      (shot) => `
        <figure class="shot-card">
          <img src="${shot.src}" alt="${escapeHtml(shot.alt)}">
        </figure>
      `
    )
    .join("");
}

function renderFaq(home) {
  return home.faq
    .map(
      (item, index) => `
        <details class="faq-item"${item.defaultOpen ? " open" : ""}>
          <summary>
            <span>${escapeHtml(item.question)}</span>
            <span class="faq-icon" aria-hidden="true">${index < 9 ? `0${index + 1}` : index + 1}</span>
          </summary>
          <p>${escapeHtml(item.answer)}</p>
        </details>
      `
    )
    .join("");
}

export function renderFooter(locale, shared) {
  const content = shared[locale];
  return `
    <footer class="site-footer">
      <span>${escapeHtml(content.footer.copyright)}</span>
      <nav aria-label="Footer">
        <a href="privacy.html">${escapeHtml(content.footer.privacy)}</a>
        <a href="terms.html">${escapeHtml(content.footer.terms)}</a>
      </nav>
    </footer>
  `;
}

export function renderHomePage(locale, siteContent) {
  const home = siteContent.home[locale];
  return `
    <div class="page-shell">
      <section class="hero-card">
        <div class="hero-topbar">
          <div>
            <p class="eyebrow">${escapeHtml(home.hero.eyebrow)}</p>
            <h1>${escapeHtml(home.hero.title)}</h1>
          </div>
          ${renderLanguageSwitcher(locale, siteContent.shared)}
        </div>
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="hero-subtitle">${escapeHtml(home.hero.subtitle)}</p>
            <p class="hero-note">${escapeHtml(home.hero.note)}</p>
            <p class="hero-hint">${escapeHtml(home.hero.appHint)}</p>
          </div>
          <div class="hero-actions">
            <a class="download-button windows" href="${siteContent.downloads.windows}">${escapeHtml(home.hero.windowsCta)}</a>
            <a class="download-button mac" href="${siteContent.downloads.mac}">${escapeHtml(home.hero.macCta)}</a>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="section-label">Workflow</p>
          <h2>${escapeHtml(home.stepsTitle)}</h2>
        </div>
        <div class="steps-grid">
          ${renderSteps(home.steps)}
        </div>
      </section>

      <section class="section-block gallery-block">
        <div class="section-heading">
          <p class="section-label">Preview</p>
          <h2>${escapeHtml(home.screenshotsTitle)}</h2>
          <p>${escapeHtml(home.screenshotsIntro)}</p>
        </div>
        <div class="shots-grid">
          ${renderScreenshots(home)}
        </div>
      </section>

      <section class="section-block faq-block">
        <div class="section-heading">
          <p class="section-label">Support</p>
          <h2>${escapeHtml(home.faqTitle)}</h2>
          <p>${escapeHtml(home.faqIntro)}</p>
        </div>
        <div class="faq-list">
          ${renderFaq(home)}
        </div>
        <div class="support-box">
          <h3>${escapeHtml(home.supportTitle)}</h3>
          <p>
            ${escapeHtml(home.supportBody)}
            <a href="mailto:${home.supportEmail}">${escapeHtml(home.supportEmail)}</a>
          </p>
        </div>
      </section>

      ${renderFooter(locale, siteContent.shared)}
    </div>
  `;
}

export function renderLegalPage(kind, siteContent) {
  const page = siteContent.legal[kind];
  return `
    <div class="page-shell legal-shell">
      <main class="legal-page">
        <header class="legal-header">
          <p class="section-label">Legal</p>
          <h1>${escapeHtml(page.pageTitle)}</h1>
          <p>${escapeHtml(page.intro)}</p>
        </header>
        <div class="legal-sections">
          ${page.sections
            .map(
              (section) => `
                <section class="legal-section">
                  <div class="legal-language">${escapeHtml(section.languageLabel)}</div>
                  <h2>${escapeHtml(section.title)}</h2>
                  ${section.body
                    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
                    .join("")}
                </section>
              `
            )
            .join("")}
        </div>
      </main>
      ${renderFooter("en", siteContent.shared)}
    </div>
  `;
}

function getSavedLocale() {
  try {
    return window.localStorage.getItem(LOCALE_KEY);
  } catch {
    return null;
  }
}

function persistLocale(locale) {
  try {
    window.localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    return;
  }
}

function renderPage(page, locale, siteContent) {
  if (page === "privacy") return renderLegalPage("privacy", siteContent);
  if (page === "terms") return renderLegalPage("terms", siteContent);
  return renderHomePage(locale, siteContent);
}

export function mountSite(siteContent, root = document.getElementById("app")) {
  if (!root) return;

  const page = document.body.dataset.page || "home";
  let currentLocale = resolveLocale({
    savedLocale: getSavedLocale(),
    browserLanguage: navigator.language
  });

  const rerender = () => {
    root.innerHTML = renderPage(page, currentLocale, siteContent);
    if (page === "home") {
      root.querySelectorAll("[data-locale]").forEach((button) => {
        button.addEventListener("click", () => {
          const locale = button.getAttribute("data-locale");
          if (!SUPPORTED_LOCALES.includes(locale)) return;
          currentLocale = locale;
          persistLocale(locale);
          rerender();
        });
      });
    }
  };

  rerender();
}
