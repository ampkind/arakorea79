(() => {
  'use strict';

  const STORAGE_KEY = 'arakorea-language';
  const supported = ['ko', 'en', 'ja', 'zh'];
  const htmlLang = { ko: 'ko', en: 'en', ja: 'ja', zh: 'zh-CN' };

  const copy = {
    ko: {
      title: 'ARA KOREA · Contemporary K-Culture',
      description: '한국의 상징과 동시대 예술을 사운드, 무용, 미디어아트와 연결하는 ARA KOREA의 공연·예술영화·문화 아카이브입니다.',
      brandTag: 'Contemporary K-Culture',
      navHome: 'Home', navAbout: 'About', navCulture: 'K-Culture', navNews: 'News', navContact: 'Contact', menu: 'MENU',
      lead1: '한국의 상징을 오늘의 감각으로 확장하며,',
      lead2: '소리와 움직임, 빛이 만나는 장면을 기록합니다.',
      ctaExplore: 'Explore K-Culture', ctaStory: 'Our Story',
      figureArchive: 'Performance Archive', figureMedia: 'Sound · Movement · Image', scroll: 'SCROLL TO EXPLORE',
      identityIndex: '01 / IDENTITY',
      statementLine1: '전통의 기억을 오늘의 감각으로 잇고',
      statementLine2: '동시대 예술의 새로운 흐름을 펼칩니다',
      statementMobile: '전통의 기억을 오늘의 감각으로 잇고, 동시대 예술의 새로운 흐름을 펼칩니다',
      statementBody: 'ARA KOREA는 한국 문화의 상징과 서사를 공연, 예술영화, 미디어아트의 언어로 펼쳐냅니다. 무대에서 탄생한 감각은 영상과 이미지, 오브제로 확장되며 새로운 문화적 경험을 형성합니다.',
      cultureIndex: '02 / K-CULTURE', cultureTitle: 'Archive in Motion',
      cultureIntro1: '공연의 순간부터 기록의 시간까지,', cultureIntro2: 'ARA KOREA의 작업 세계를 만나보세요.',
      galleryDesc: '빛과 움직임으로 완성된 주요 장면',
      portfolioDesc: '수상 기록, 축사와 공연 포스터 아카이브',
      videoDesc: '무대의 시간을 다시 만나는 영상 기록',
      selectedIndex: '03 / SELECTED WORK', featureType: 'SPACE ART PROJECT',
      featureBody: '공연의 감각을 영상 언어로 넓히며, 사운드와 무용, 미디어아트가 하나의 시공간을 이루는 ARA KOREA의 대표 작업입니다.',
      viewProject: 'View the project', connectionsIndex: '04 / CONNECTIONS',
      connectionsTitle: 'Across Culture', latestNews: 'Latest News',
      footerContact: 'CONTACT', footerSocial: 'SOCIAL', backTop: 'Back to top ↑'
    },
    en: {
      title: 'ARA KOREA · Contemporary K-Culture',
      description: 'ARA KOREA connects Korean cultural symbols with contemporary performance, art film, sound, dance and media art.',
      brandTag: 'Contemporary K-Culture',
      navHome: 'Home', navAbout: 'About', navCulture: 'K-Culture', navNews: 'News', navContact: 'Contact', menu: 'MENU',
      lead1: 'Translating Korean heritage into a contemporary sensibility,',
      lead2: 'we document where sound, movement and light converge.',
      ctaExplore: 'Explore K-Culture', ctaStory: 'Our Story',
      figureArchive: 'Performance Archive', figureMedia: 'Sound · Movement · Image', scroll: 'SCROLL TO EXPLORE',
      identityIndex: '01 / IDENTITY',
      statementLine1: 'Connecting the memory of tradition with the present,',
      statementLine2: 'we unfold a new current in contemporary art.',
      statementMobile: 'Connecting the memory of tradition with the present, we unfold a new current in contemporary art.',
      statementBody: 'ARA KOREA interprets the symbols and narratives of Korean culture through performance, art film and media art. Sensibilities born on stage continue through moving image, photography and objects, forming new cultural experiences.',
      cultureIndex: '02 / K-CULTURE', cultureTitle: 'Archive in Motion',
      cultureIntro1: 'From the immediacy of performance to the time of the archive,', cultureIntro2: 'explore the creative world of ARA KOREA.',
      galleryDesc: 'Defining moments shaped through light and movement',
      portfolioDesc: 'Awards, messages and performance poster archive',
      videoDesc: 'Moving-image records that revisit the life of the stage',
      selectedIndex: '03 / SELECTED WORK', featureType: 'SPACE ART PROJECT',
      featureBody: 'This signature ARA KOREA project extends the sensibility of performance into moving image, bringing sound, dance and media art together within one spatial experience.',
      viewProject: 'View the project', connectionsIndex: '04 / CONNECTIONS',
      connectionsTitle: 'Across Culture', latestNews: 'Latest News',
      footerContact: 'CONTACT', footerSocial: 'SOCIAL', backTop: 'Back to top ↑'
    },
    ja: {
      title: 'ARA KOREA · コンテンポラリーKカルチャー',
      description: 'ARA KOREAは、韓国文化の象徴を舞台芸術、アートフィルム、サウンド、舞踊、メディアアートへとつなぎます。',
      brandTag: 'Contemporary K-Culture',
      navHome: 'ホーム', navAbout: '紹介', navCulture: 'Kカルチャー', navNews: 'ニュース', navContact: 'お問い合わせ', menu: 'メニュー',
      lead1: '韓国の象徴を現代の感性へとひらき、',
      lead2: '音、動き、光が出会う瞬間を記録します。',
      ctaExplore: 'Kカルチャーを見る', ctaStory: '私たちの物語',
      figureArchive: 'パフォーマンス・アーカイブ', figureMedia: '音 · 動き · イメージ', scroll: 'スクロールして見る',
      identityIndex: '01 / アイデンティティ',
      statementLine1: '伝統の記憶を現代の感覚へと結び、',
      statementLine2: '同時代芸術の新たな流れをひらきます。',
      statementMobile: '伝統の記憶を現代の感覚へと結び、同時代芸術の新たな流れをひらきます。',
      statementBody: 'ARA KOREAは、韓国文化の象徴と物語を、舞台芸術、アートフィルム、メディアアートの言語で展開します。舞台から生まれた感覚は映像、写真、オブジェへと広がり、新たな文化体験を形づくります。',
      cultureIndex: '02 / Kカルチャー', cultureTitle: '動き続けるアーカイブ',
      cultureIntro1: '舞台の瞬間から記録の時間へ、', cultureIntro2: 'ARA KOREAの創作世界をご覧ください。',
      galleryDesc: '光と動きによって生まれた主要な場面',
      portfolioDesc: '受賞歴、祝辞、舞台ポスターのアーカイブ',
      videoDesc: '舞台の時間を再びたどる映像記録',
      selectedIndex: '03 / 代表作品', featureType: 'スペースアート・プロジェクト',
      featureBody: '舞台の感覚を映像言語へと広げ、音、舞踊、メディアアートが一つの時空間を構成するARA KOREAの代表作品です。',
      viewProject: '作品を見る', connectionsIndex: '04 / つながり',
      connectionsTitle: '文化をつなぐ', latestNews: '最新ニュース',
      footerContact: 'お問い合わせ', footerSocial: 'ソーシャル', backTop: 'ページ上部へ ↑'
    },
    zh: {
      title: 'ARA KOREA · 当代韩国文化',
      description: 'ARA KOREA将韩国文化象征与表演、艺术电影、声音、舞蹈及媒体艺术相连接。',
      brandTag: 'Contemporary K-Culture',
      navHome: '首页', navAbout: '关于', navCulture: '韩国文化', navNews: '动态', navContact: '联系', menu: '菜单',
      lead1: '以当代感知重新诠释韩国文化象征，',
      lead2: '记录声音、动作与光线交汇的瞬间。',
      ctaExplore: '探索韩国文化', ctaStory: '我们的故事',
      figureArchive: '表演档案', figureMedia: '声音 · 动作 · 影像', scroll: '向下探索',
      identityIndex: '01 / 核心理念',
      statementLine1: '连接传统记忆与当代感知，',
      statementLine2: '展开当代艺术的全新脉络。',
      statementMobile: '连接传统记忆与当代感知，展开当代艺术的全新脉络。',
      statementBody: 'ARA KOREA以表演、艺术电影和媒体艺术的语言展开韩国文化的象征与叙事。源自舞台的感知延伸至影像、摄影与艺术物件，形成崭新的文化体验。',
      cultureIndex: '02 / 韩国文化', cultureTitle: '流动的档案',
      cultureIntro1: '从表演发生的瞬间到档案沉淀的时间，', cultureIntro2: '探索ARA KOREA的创作世界。',
      galleryDesc: '由光线与动作共同塑造的代表场景',
      portfolioDesc: '奖项、贺词与演出海报档案',
      videoDesc: '重新走进舞台时间的影像记录',
      selectedIndex: '03 / 代表作品', featureType: '空间艺术项目',
      featureBody: '这一代表作品将表演感知延伸至影像语言，使声音、舞蹈与媒体艺术在同一时空中汇聚。',
      viewProject: '查看作品', connectionsIndex: '04 / 文化连接',
      connectionsTitle: '跨越文化', latestNews: '最新动态',
      footerContact: '联系我们', footerSocial: '社交媒体', backTop: '返回顶部 ↑'
    }
  };

  let pageCopy = {};
  const pageTranslations = document.getElementById('page-translations');
  if (pageTranslations) {
    try {
      pageCopy = JSON.parse(pageTranslations.textContent || '{}');
    } catch (_) {
      pageCopy = {};
    }
  }

  const languageButtons = [...document.querySelectorAll('[data-lang]')];
  const metaDescription = document.querySelector('meta[name="description"]');
  const languageMenu = document.querySelector('[data-language-menu]');
  const languageTrigger = document.querySelector('.home-language-trigger');
  const currentLanguage = document.querySelector('[data-language-current]');

  function closeLanguageMenu() {
    languageMenu?.classList.remove('is-open');
    languageTrigger?.setAttribute('aria-expanded', 'false');
  }

  function renderLanguage(language) {
    const lang = supported.includes(language) ? language : 'ko';
    const dictionary = { ...copy[lang], ...(pageCopy[lang] || {}) };

    document.documentElement.lang = htmlLang[lang];
    document.documentElement.dataset.language = lang;
    document.title = dictionary.title;
    if (metaDescription) metaDescription.content = dictionary.description;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (typeof value === 'string') element.textContent = value;
    });

    languageButtons.forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-checked', String(active));
    });
    if (currentLanguage) currentLanguage.textContent = lang === 'zh' ? 'ZH' : lang.toUpperCase();

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    window.dispatchEvent(new CustomEvent('arakorea:languagechange', { detail: { language: lang } }));
  }

  function changeLanguage(language) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion && typeof document.startViewTransition === 'function') {
      document.startViewTransition(() => renderLanguage(language));
    } else {
      renderLanguage(language);
    }
  }

  let initialLanguage = 'ko';
  try {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (supported.includes(savedLanguage)) initialLanguage = savedLanguage;
  } catch (_) {}
  renderLanguage(initialLanguage);

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      changeLanguage(button.dataset.lang);
      closeLanguageMenu();
    });
  });

  if (languageMenu && languageTrigger) {
    languageTrigger.addEventListener('click', () => {
      const open = languageTrigger.getAttribute('aria-expanded') === 'true';
      languageTrigger.setAttribute('aria-expanded', String(!open));
      languageMenu.classList.toggle('is-open', !open);
    });
    document.addEventListener('click', (event) => {
      if (!languageMenu.contains(event.target)) closeLanguageMenu();
    });
  }

  const header = document.querySelector('[data-home-header]');
  const toggle = document.querySelector('.home-menu-toggle');
  const nav = document.querySelector('.home-nav');

  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('home-menu-open');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      document.body.classList.toggle('home-menu-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        closeLanguageMenu();
      }
    });
  }

  let headerFrame = 0;
  function updateHeader() {
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
    headerFrame = 0;
  }
  updateHeader();
  window.addEventListener('scroll', () => {
    if (!headerFrame) headerFrame = requestAnimationFrame(updateHeader);
  }, { passive: true });

  const revealItems = document.querySelectorAll('.home-reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('home-js-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
