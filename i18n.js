/**
 * i18n Engine for Markdown Viewer
 * Supports 15 languages with browser language detection + prompt
 */
(function () {
  'use strict';

  const SUPPORTED_LANGS = ['en', 'zh', 'zh-TW', 'ja', 'ko', 'ru', 'fr', 'es', 'de', 'it', 'pt', 'nl', 'pl', 'sv', 'ar'];
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'mdv-lang';
  const LANG_CHOSEN_KEY = 'mdv-lang-chosen';

  const LANG_NAMES = {
    en: 'English', zh: '中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어',
    ru: 'Русский', fr: 'Français', es: 'Español', de: 'Deutsch', it: 'Italiano',
    pt: 'Português', nl: 'Nederlands', pl: 'Polski', sv: 'Svenska', ar: 'العربية'
  };

  const LANG_FLAGS = {
    en: '🇺🇸', zh: '🇨🇳', 'zh-TW': '🇹🇼', ja: '🇯🇵', ko: '🇰🇷',
    ru: '🇷🇺', fr: '🇫🇷', es: '🇪🇸', de: '🇩🇪', it: '🇮🇹',
    pt: '🇧🇷', nl: '🇳🇱', pl: '🇵🇱', sv: '🇸🇪', ar: '🇸🇦'
  };

  let currentLang = DEFAULT_LANG;
  let translations = {};
  let metaTranslations = {};

  window.I18n = {
    init: init,
    t: t,
    getCurrentLang: function () { return currentLang; },
    getSupportedLangs: function () { return SUPPORTED_LANGS; },
    getLangName: function (code) { return LANG_NAMES[code] || code; },
    getLangFlag: function (code) { return LANG_FLAGS[code] || '🌐'; },
    setLanguage: setLanguage,
    getMetaTranslation: getMetaTranslation,
  };

  async function init() {
    var savedLang = localStorage.getItem(STORAGE_KEY);
    if (savedLang && SUPPORTED_LANGS.indexOf(savedLang) !== -1) {
      currentLang = savedLang;
    } else {
      currentLang = detectBrowserLanguage() || DEFAULT_LANG;
    }

    await loadTranslations(currentLang);
    applyTranslations();
    updateMetaTags();
    updateHtmlAttributes();
    initLangSwitcher();

    setTimeout(showLanguagePrompt, 800);
  }

  function detectBrowserLanguage() {
    var browserLangs = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < browserLangs.length; i++) {
      var bl = browserLangs[i];
      if (SUPPORTED_LANGS.indexOf(bl) !== -1) return bl;
      if (bl.indexOf('zh') === 0 && (bl.indexOf('TW') !== -1 || bl.indexOf('Hant') !== -1)) return 'zh-TW';
      var prefix = bl.split('-')[0];
      if (prefix === 'zh') return 'zh';
      if (SUPPORTED_LANGS.indexOf(prefix) !== -1) return prefix;
    }
    return null;
  }

  async function loadTranslations(lang) {
    try {
      var transRes = await fetch('i18n/' + lang + '.json');
      if (transRes.ok) {
        translations = await transRes.json();
      }
      var metaRes = await fetch('i18n/meta.json');
      if (metaRes.ok) {
        var allMeta = await metaRes.json();
        metaTranslations = allMeta[lang] || allMeta[DEFAULT_LANG] || {};
      }
    } catch (e) {
      console.warn('Failed to load translations:', e);
      translations = {};
    }
  }

  function t(key) {
    return translations[key] || key;
  }

  async function setLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    localStorage.setItem(LANG_CHOSEN_KEY, 'true');
    await loadTranslations(lang);
    applyTranslations();
    updateMetaTags();
    updateHtmlAttributes();
    updateLangSwitcherUI();
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
  }

  function getMetaTranslation(key) {
    return metaTranslations[key] || '';
  }

  function applyTranslations() {
    // data-i18n: translate textContent
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      var translated = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = translated;
      } else {
        el.textContent = translated;
      }
    }

    // data-i18n-placeholder: translate placeholder
    var phEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < phEls.length; j++) {
      var phEl = phEls[j];
      var phKey = phEl.getAttribute('data-i18n-placeholder');
      phEl.placeholder = t(phKey);
    }

    // data-i18n-title: translate title attribute
    var titleEls = document.querySelectorAll('[data-i18n-title]');
    for (var k = 0; k < titleEls.length; k++) {
      var tEl = titleEls[k];
      tEl.title = t(tEl.getAttribute('data-i18n-title'));
    }

    // Update lang switcher button text
    var langBtn = document.getElementById('lang-switcher-btn');
    if (langBtn) {
      langBtn.querySelector('.lang-label').textContent = LANG_NAMES[currentLang] || 'English';
      langBtn.querySelector('.lang-flag').textContent = LANG_FLAGS[currentLang] || '🌐';
    }
  }

  function updateMetaTags() {
    if (!metaTranslations.title) return;
    document.title = metaTranslations.title;

    var setMeta = function (sel, val) {
      var el = document.querySelector(sel);
      if (el) el.setAttribute('content', val);
    };

    setMeta('meta[name="title"]', metaTranslations.title);
    setMeta('meta[name="description"]', metaTranslations.description);
    setMeta('meta[name="keywords"]', metaTranslations.keywords);
    setMeta('meta[property="og:title"]', metaTranslations.title);
    setMeta('meta[property="og:description"]', metaTranslations.description);
    setMeta('meta[property="twitter:title"]', metaTranslations.title);
    setMeta('meta[property="twitter:description"]', metaTranslations.description);
  }

  function updateHtmlAttributes() {
    var html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  // ---- Language Switcher Dropdown ----
  function initLangSwitcher() {
    var btn = document.getElementById('lang-switcher-btn');
    var dropdown = document.getElementById('lang-dropdown');
    if (!btn || !dropdown) return;

    // Build dropdown items
    var html = '';
    for (var i = 0; i < SUPPORTED_LANGS.length; i++) {
      var code = SUPPORTED_LANGS[i];
      var isActive = code === currentLang ? ' active' : '';
      html += '<button class="lang-dropdown-item' + isActive + '" data-lang="' + code + '">';
      html += '<span class="item-flag">' + (LANG_FLAGS[code] || '🌐') + '</span>';
      html += '<span class="item-name">' + (LANG_NAMES[code] || code) + '</span>';
      if (isActive) html += '<span class="item-check">✓</span>';
      html += '</button>';
    }
    dropdown.innerHTML = html;

    // Toggle dropdown
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    // Click item to switch language
    dropdown.addEventListener('click', function (e) {
      var item = e.target.closest('.lang-dropdown-item');
      if (item) {
        var lang = item.getAttribute('data-lang');
        setLanguage(lang);
        dropdown.classList.remove('show');
      }
    });

    // Close on outside click
    document.addEventListener('click', function () {
      dropdown.classList.remove('show');
    });

    updateLangSwitcherUI();
  }

  function updateLangSwitcherUI() {
    var dropdown = document.getElementById('lang-dropdown');
    if (!dropdown) return;
    var items = dropdown.querySelectorAll('.lang-dropdown-item');
    for (var i = 0; i < items.length; i++) {
      var code = items[i].getAttribute('data-lang');
      if (code === currentLang) {
        items[i].classList.add('active');
        if (!items[i].querySelector('.item-check')) {
          var check = document.createElement('span');
          check.className = 'item-check';
          check.textContent = '✓';
          items[i].appendChild(check);
        }
      } else {
        items[i].classList.remove('active');
        var ck = items[i].querySelector('.item-check');
        if (ck) ck.remove();
      }
    }
  }

  // ---- Language Prompt Banner ----
  function showLanguagePrompt() {
    if (localStorage.getItem(LANG_CHOSEN_KEY)) return;
    var browserLang = detectBrowserLanguage();
    if (!browserLang || browserLang === DEFAULT_LANG || browserLang === currentLang) return;

    var prompt = document.createElement('div');
    prompt.id = 'lang-prompt';
    prompt.style.cssText = 'position:fixed;top:60px;right:16px;z-index:10000;' +
      'background:var(--bg-primary,#fff);border:1px solid var(--border-color,#e1e4e8);' +
      'border-radius:12px;padding:14px 18px;box-shadow:0 4px 20px rgba(0,0,0,0.15);' +
      'max-width:320px;font-size:14px;display:flex;align-items:center;gap:10px;' +
      'animation:slideIn 0.3s ease;';

    var flagEmoji = LANG_FLAGS[browserLang] || '🌐';
    var langName = LANG_NAMES[browserLang] || browserLang;

    prompt.innerHTML =
      '<span style="font-size:22px;">' + flagEmoji + '</span>' +
      '<div style="flex:1;">' +
        '<div style="font-weight:600;margin-bottom:4px;">' + langName + '</div>' +
        '<div style="color:#666;font-size:12px;">Switch to ' + langName + '?</div>' +
      '</div>' +
      '<div style="display:flex;gap:6px;">' +
        '<button id="lang-prompt-yes" style="padding:5px 14px;border-radius:6px;border:none;' +
          'background:#0969da;color:#fff;cursor:pointer;font-size:13px;font-weight:500;">OK</button>' +
        '<button id="lang-prompt-no" style="padding:5px 10px;border-radius:6px;border:1px solid #d0d7de;' +
          'background:transparent;cursor:pointer;font-size:13px;">✕</button>' +
      '</div>';

    document.body.appendChild(prompt);

    document.getElementById('lang-prompt-yes').addEventListener('click', function () {
      prompt.remove();
      setLanguage(browserLang);
    });

    document.getElementById('lang-prompt-no').addEventListener('click', function () {
      prompt.remove();
      localStorage.setItem(LANG_CHOSEN_KEY, 'true');
    });
  }

})();
