/* ==========================================================================
   Dashboard content override — reads saved content from localStorage
   set by admin.html and merges it into translations before first render.
   ========================================================================== */
(function applySavedContent() {
  try {
    const raw = localStorage.getItem('samo_content');
    if (!raw) return;
    const saved = JSON.parse(raw);
    window.__samoSavedContent = saved;
  } catch (e) {}
})();

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', experience: 'Experience', contact: 'Contact', cta: 'Book a Call' },
    hero: {
      eyebrow: 'SAMO &bull; Software Development Studio',
      title: 'We Turn Ideas Into <span class="gradient-text-emerald">Software That Works</span>',
      subtitle: 'A small, focused team helping businesses and founders design, build, and launch digital products — with the experience to get it right.',
      cta1: 'Book a Free 30-Min Consultation <i data-lucide="arrow-right"></i>',
      cta2: '<i data-lucide="briefcase"></i> Our Experience'
    },
    why_samo: {
      title: 'Why SAMO',
      subtitle: 'What makes us different from a typical agency or freelance setup.',
      card1_title: 'Focused Team',
      card1_text: 'Not a 100-person agency. A small, dedicated team that actually builds your product — no hand-offs, no middlemen.',
      card2_title: 'Product Thinking',
      card2_text: 'We don\'t just code what you ask for. We ask the right questions, challenge assumptions, and help you build the right thing.',
      card3_title: 'Real-World Experience',
      card3_text: 'Our team has shipped production products across multiple industries through previous roles at other companies.',
      card4_title: 'End-to-End Capability',
      card4_text: 'From first conversation to deployed product — strategy, design, development, and launch, all from one team.'
    },
    stats: { years: 'Years Experience', specialists: 'Specialists', domains: 'Domains Experienced', products: 'Products Shipped' },
    about: {
      title: 'About Us',
      lead: 'SAMO is a software development studio founded by two specialists who believe great products come from small teams that care.',
      paragraph1: 'We\'re a Mobile Developer and a UI/UX Designer. Between us, we\'ve contributed to production products across e-commerce, delivery, healthcare, education, and business management — through roles at other companies and teams.',
      paragraph2: 'We started SAMO to work directly with businesses and founders who need a reliable technical partner — someone who asks the right questions, builds with care, and delivers something that actually works.',
      mission: 'Our Focus',
      mission_text: 'Build reliable, well-crafted software that solves real problems — with attention to detail from first pixel to production.',
      approach: 'Our Approach',
      approach_text: 'Small team, direct communication, no overhead. We work closely with you from discovery through launch.'
    },
    process: {
      title: 'How We Work',
      subtitle: 'A clear, structured process from discovery to launch — designed to keep you involved and confident at every step.',
      step1_title: 'Discover',
      step1_text: 'We learn your business, your users, and the problem you\'re solving — so we build the right thing.',
      step2_title: 'Design',
      step2_text: 'We create user flows, wireframes, and visual designs — so you see exactly what you\'re getting before we build it.',
      step3_title: 'Build',
      step3_text: 'We develop your product with clean, maintainable code — built on proven architectures, not quick hacks.',
      step4_title: 'Validate',
      step4_text: 'We test thoroughly, gather your feedback, and iterate — so the product is ready for real users.',
      step5_title: 'Launch',
      step5_text: 'We prepare and deploy your product for production — and stick around to make sure it runs smoothly.'
    },
    services: {
      title: 'Services',
      subtitle: 'How we can help you and the problems we solve.',
      discovery_title: 'Product Discovery',
      discovery_text: 'Define the right product before writing a single line of code. We help clarify goals, users, and scope.',
      design_title: 'UI/UX Design',
      design_text: 'Research-backed interfaces and experiences that are intuitive, clean, and aligned with your business goals.',
      mobile_title: 'Mobile App Development',
      mobile_text: 'Cross-platform mobile applications built for performance, reliability, and a native feel on every device.',
      mvp_title: 'MVP Development',
      mvp_text: 'Go from idea to a working product quickly. We build lean, validated MVPs ready for real users.',
      backend_title: 'API & Backend Integration',
      backend_text: 'Robust APIs, third-party integrations, and backend systems that power your product at any scale.',
      iteration_title: 'Product Iteration & Maintenance',
      iteration_text: 'Continuous improvement, bug fixes, and feature updates to keep your product evolving with your business.'
    },
    what_we_bring: {
      title: 'What We Bring',
      subtitle: 'The combined capabilities you get when working with SAMO.',
      card1_title: 'Product Thinking',
      card1_text: 'We help you define what to build, for whom, and why — before writing a single line of code.',
      card2_title: 'Engineering Expertise',
      card2_text: 'Clean, maintainable code built on proven architectures — not quick hacks that break later.',
      card3_title: 'UX & Design',
      card3_text: 'Interfaces that look professional and feel intuitive — designed by someone who understands both users and business.',
      card4_title: 'Real-World Experience',
      card4_text: 'We\'ve seen what works and what doesn\'t — from shipping products in healthcare, e-commerce, delivery, and more.',
      card5_title: 'End-to-End Delivery',
      card5_text: 'From first conversation to deployed product — no need to coordinate between designers, developers, and DevOps.'
    },
    experience: {
      title: 'Our Experience',
      subtitle: 'Experience that comes from building real products.',
      intro: 'Our team has contributed to production products across multiple domains. This experience was gained through previous professional engagements at other companies and teams — not through our current business directly.',
      domain1_title: 'E-commerce & Marketplaces',
      domain1_text: 'Online stores, multi-vendor platforms, and product catalog systems.',
      domain2_title: 'Delivery & On-Demand',
      domain2_text: 'Real-time ordering, dispatch systems, and live tracking applications.',
      domain3_title: 'Business Management',
      domain3_text: 'Multi-role applications, internal tools, and workflow automation.',
      domain4_title: 'Education',
      domain4_text: 'Learning platforms, course management, and student-facing applications.',
      domain5_title: 'Healthcare',
      domain5_text: 'Clinical scheduling, patient management, and healthcare workflows.',
      domain6_title: 'Complex Mobile Workflows',
      domain6_text: 'Multi-step processes, role-based access, and offline-capable mobile apps.',
      note: 'Some of the products our team has contributed to are subject to client confidentiality, contractual agreements, and company policies. For that reason, we don\'t publicly display those projects or their materials. We\'re happy to discuss relevant experience privately when appropriate.'
    },
    cta: {
      title: 'Have an Idea? Let\'s Talk.',
      subtitle: 'Book a free 30-minute consultation. Tell us about your product and we\'ll map out how we can help — no commitment required.',
      button: 'Book a Free Consultation'
    },
    technology: {
      title: 'Technology',
      subtitle: 'The tools and technologies we work with to build your product.',
      frontend_title: 'Frontend',
      backend_title: 'Backend',
      cloud_title: 'Cloud & DevOps',
      design_title: 'Design'
    },
    final_cta: {
      title: 'Ready to Build?',
      subtitle: 'Whether you have a fully defined product or just a rough idea — we\'re here to help you figure out the next step.',
      cta1: 'Book a Free Consultation',
      cta2: 'Explore Our Services'
    },
    contact: {
      title: 'Let\'s Talk',
      subtitle: 'Have a product idea or a challenge to solve? We\'d love to hear about it.',
      name_placeholder: 'Your Name',
      email_placeholder: 'Your Email',
      message_placeholder: 'Tell us about your project...',
      send: 'Send Message',
      whatsapp: 'Prefer WhatsApp? Chat with us instantly',
      success: 'Thanks, {name}! We\'ll get back to you at {email} soon.',
      error: 'Please fill in all fields.'
    },
    footer: {
      tagline: 'A software development studio helping businesses design, build, and launch digital products.',
      nav_title: 'Navigate',
      contact_title: 'Contact',
      rights: 'All rights reserved.'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', experience: 'خبراتنا', contact: 'اتصل بنا', cta: 'احجز مكالمة' },
    hero: {
      eyebrow: 'سامو — استوديو تطوير البرمجيات',
      title: 'نحول الأفكار إلى <span class="gradient-text-emerald">برمجيات تعمل</span>',
      subtitle: 'فريق صغير ومركّز يساعد الشركات ورواد الأعمال على تصميم وبناء وإطلاق المنتجات الرقمية — مع الخبرة لإتقانها.',
      cta1: 'احجز استشارة مجانية 30 دقيقة <i data-lucide="arrow-left"></i>',
      cta2: '<i data-lucide="briefcase"></i> خبراتنا'
    },
    why_samo: {
      title: 'لماذا سامو',
      subtitle: 'ما الذي يميزنا عن الوكالة أو العمل الحر التقليدي.',
      card1_title: 'فريق مركّز',
      card1_text: 'ليس وكالة من 100 شخص. فريق صغير ومتخصص يبني فعلياً منتجك — بدون تفويض أو وسطاء.',
      card2_title: 'تفكير منتجي',
      card2_text: 'لا نكتفٍ بكتابة الكود كما تطلب. نطرح الأسئلة الصحيحة ونتحدى الافتراضات ونساعدك في بناء الشيء الصحيح.',
      card3_title: 'خبرة واقعية',
      card3_text: 'فريقنا أطلق منتجات إنتاجية عبر صناعات متعددة من خلال أدوار سابقة في شركات أخرى.',
      card4_title: 'قدرة شاملة',
      card4_text: 'من أول محادثة إلى منتج مُنشر — استراتيجية وتصميم وتطوير وإطلاق، كله من فريق واحد.'
    },
    stats: { years: 'سنوات خبرة', specialists: 'متخصصون', domains: 'مجالات خبرة', products: 'منتجات مُسلّمة' },
    about: {
      title: 'من نحن',
      lead: 'سامو استوديو تطوير برمجيات أسّسه متخصصان يؤمنان بأن المنتجات العظمى تأتي من فرق صغيرة تهتم.',
      paragraph1: 'نحن مطور جوال ومصمم واجهات مستخدم. معاً، ساهمنا في منتجات إنتاجية في التجارة الإلكترونية والتوصيل والرعاية الصحية والتعليم وإدارة الأعمال — من خلال أدوار في شركات وفرق أخرى.',
      paragraph2: 'أطلقنا سامو للعمل مباشرة مع الشركات ورواد الأعمال الذين يحتاجون شريكاً تقنياً موثوقاً — شخصاً يطرح الأسئلة الصحيحة ويبني بعناية ويسلم شيئاً فعلاً يعمل.',
      mission: 'تركيزنا',
      mission_text: 'بناء برامج موثوقة ومصممة بعناية تحل مشاكل حقيقية — مع الاهتمام بأدق التفاصيل من أول بكسل إلى الإنتاج.',
      approach: 'منهجيتنا',
      approach_text: 'فريق صغير، تواصل مباشر، بدون إضافات. نعمل معك عن كثب من الاكتشاف إلى الإطلاق.'
    },
    process: {
      title: 'كيف نعمل',
      subtitle: 'عملية واضحة ومنظمة من الاكتشاف إلى الإطلاق — مصممة لإبقائك مشاركاً وواثقاً في كل خطوة.',
      step1_title: 'الاكتشاف',
      step1_text: 'نفهم عملك ومستخدمين والمشكلة التي تحلها — لنبني الشيء الصحيح.',
      step2_title: 'التصميم',
      step2_text: 'ننشئ تدفقات المستخدم والإطارات والتصاميم البصرية — لترى بالضبط ما ستحصل عليه قبل أن نبنيه.',
      step3_title: 'البناء',
      step3_text: 'نطور منتجك بكود نظيف وقابل للصيانة — مبني على بنى مُجربة، ليست حلولاً سريعة.',
      step4_title: 'التحقق',
      step4_text: 'نختبر باستمرار ونجمع ملاحظاتك ونُحسّن — ليكون المنتج جاهزاً للمستخدمين الفعليين.',
      step5_title: 'الإطلاق',
      step5_text: 'نُعد منتجك وننشره للإنتاج — ونبقى للتأكد من أنه يعمل بسلاسة.'
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'كيف يمكننا مساعدتك والمشاكل التي نحلها.',
      discovery_title: 'اكتشاف المنتج',
      discovery_text: 'حدد المنتج الصحيح قبل كتابة أي سطر كود. نساعد في توضيح الأهداف والمستخدمين والنطاق.',
      design_title: 'تصميم واجهات المستخدم',
      design_text: 'واجهات وتجارب مستخدم مدعومة بالبحث — بديهية ونظيفة ومتوافقة مع أهداف عملك.',
      mobile_title: 'تطوير تطبيقات الجوال',
      mobile_text: 'تطبيقات جوال عبر المنصات مبنية للأداء والموثوقية والأحساس الأصلي على كل جهاز.',
      mvp_title: 'تطوير المنتج الأولي',
      mvp_text: 'انتقل من فكرة إلى منتج يعمل بسرعة. نبني MVPs خفيفة ومحقّقة وجاهزة للمستخدمين.',
      backend_title: 'تكامل API والخوادم',
      backend_text: 'واجهات API قوية وتكاملات طرف ثالث وأنظمة خلفية تدعم منتجك بأي نطاق.',
      iteration_title: 'تحسين المنتج والصيانة',
      iteration_text: 'تحسين مستمر وإصلاح أخطاء وتحديث ميزات لإبقاء منتجك يتطور مع أعمالك.'
    },
    what_we_bring: {
      title: 'ما نقدمه',
      subtitle: 'القدرات المجمّعة التي تحصل عليها عند العمل مع سامو.',
      card1_title: 'تفكير منتجي',
      card1_text: 'نساعدك في تحديد ماذا تبنى ولماذا ولمن — قبل كتابة أي سطر كود.',
      card2_title: 'خبرة هندسية',
      card2_text: 'كود نظيف وقابل للصيانة مبني على بنى مُجربة — ليست حلولاً سريعة تتحطم لاحقاً.',
      card3_title: 'تصميم وتجربة المستخدم',
      card3_text: 'واجهات تبدو احترافية وتشعر بالسهولة — مصممة من شخص يفهم المستخدمين والعمل معاً.',
      card4_title: 'خبرة واقعية',
      card4_text: 'رأينا ما يعمل وما لا يعمل — من تسليم منتجات في الرعاية الصحية والتجارة الإلكترونية والتوصيل والمزيد.',
      card5_title: 'تسليم شامل',
      card5_text: 'من أول محادثة إلى منتج مُنشر — لا حاجة للتنسيق بين المصممين والمطورين و DevOps.'
    },
    experience: {
      title: 'خبراتنا',
      subtitle: 'خبرة تأتي من بناء منتجات حقيقية.',
      intro: 'ساهم فريقنا في منتجات إنتاجية عبر مجالات متعددة. هذه الخبرة اكتُسبت من التزامات مهنية سابقة في شركات وفرق أخرى — وليس من عملنا الحالي مباشرة.',
      domain1_title: 'التجارة الإلكترونية والأسواق',
      domain1_text: 'متاجر إلكترونية ومنصات متعددة البائعين وأنظمة كتالوج المنتجات.',
      domain2_title: 'التوصيل والخدمات الفورية',
      domain2_text: 'طلب لحظي وأنظمة توزيع وتتبع مباشر.',
      domain3_title: 'إدارة الأعمال',
      domain3_text: 'تطبيقات متعددة الأدوار وأدوات داخلية وأتمتة سير العمل.',
      domain4_title: 'التعليم',
      domain4_text: 'منصات تعلم وإدارة دورات وتطبيقات للطلاب.',
      domain5_title: 'الرعاية الصحية',
      domain5_text: 'جدولة سريرية وإدارة المرضى وسير عمل الرعاية الصحية.',
      domain6_title: 'تدفقات جوال معقدة',
      domain6_text: 'عمليات متعددة الخطوات ووصول قائم على الأدوار وتطبيقات جوال قادرة على العمل بدون إنترنت.',
      note: 'بعض المنتجات التي ساهم فيها فريقنا تخضع لسرية العملاء والاتفاقيات التعاقدية وسياسات الشركات. لهذا السبب، لا نعرض تلك المشاريع أو موادها علنًا. يسعدنا مناقشة الخبرة ذات الصلة بشكل خاص عندما يكون ذلك مناسبًا.'
    },
    cta: {
      title: 'لديك فكرة؟ لنتحدث.',
      subtitle: 'احجز استشارة مجانية لمدة 30 دقيقة. أخبرنا عن منتجك وسنحدد كيف يمكننا المساعدة — بدون أي التزام.',
      button: 'احجز استشارة مجانية'
    },
    technology: {
      title: 'التقنيات',
      subtitle: 'الأدوات والتقنيات التي نعمل بها لبناء منتجك.',
      frontend_title: 'الواجهة الأمامية',
      backend_title: 'الخوادم',
      cloud_title: 'السحابة والبنية التحتية',
      design_title: 'التصميم'
    },
    final_cta: {
      title: 'جاهز للبناء؟',
      subtitle: 'سواء كان لديك منتج مُعرّف بالكامل أو فكرة مبدئية — نحن هنا لمساعدتك في تحديد الخطوة التالية.',
      cta1: 'احجز استشارة مجانية',
      cta2: 'استكشف خدماتنا'
    },
    contact: {
      title: 'لنتحدث',
      subtitle: 'لديك فكرة منتج أو تحدٍّ لحله؟ يسعدنا أن نسمع عنه.',
      name_placeholder: 'اسمك',
      email_placeholder: 'بريدك الإلكتروني',
      message_placeholder: 'أخبرنا عن مشروعك...',
      send: 'إرسال الرسالة',
      whatsapp: 'تفضل واتساب؟ تحدث معنا فوراً',
      success: 'شكراً {name}! سنتواصل معك على {email} قريباً.',
      error: 'يرجى ملء جميع الحقول.'
    },
    footer: {
      tagline: 'استوديو تطوير برمجيات يساعد الشركات على تصميم وبناء وإطلاق المنتجات الرقمية.',
      nav_title: 'تصفح',
      contact_title: 'اتصل بنا',
      rights: 'جميع الحقوق محفوظة.'
    }
  }
};

/* ── Merge saved dashboard content into translations ─────────────────── */
(function mergeSavedContent() {
  const saved = window.__samoSavedContent;
  if (!saved) return;

  if (saved.hero) {
    ['en', 'ar'].forEach(lang => {
      if (!saved.hero[lang]) return;
      const h = saved.hero[lang];
      if (h.title)    translations[lang].hero.title    = h.title;
      if (h.subtitle) translations[lang].hero.subtitle = h.subtitle;
      if (h.cta1)     translations[lang].hero.cta1     = h.cta1 + ' <i data-lucide="arrow-right"></i>';
      if (h.cta2)     translations[lang].hero.cta2     = '<i data-lucide="calendar"></i> ' + h.cta2;
    });
  }

  if (saved.stats) {
    const s = saved.stats;
    document.addEventListener('DOMContentLoaded', () => {
      const allStats = document.querySelectorAll('.stat-number[data-count]');
      const vals = [s.years, s.specialists, s.domains, s.products];
      allStats.forEach((stat, i) => {
        if (vals[i] !== undefined) {
          stat.dataset.count = vals[i];
          stat.textContent = vals[i] + '+';
        }
      });
    });
  }

  if (saved.services && saved.services.length) {
    saved.services.forEach((svc, i) => {
      const key = ['discovery', 'design', 'mobile', 'mvp', 'backend', 'iteration'][i];
      if (!key) return;
      if (svc.en) {
        translations.en.services[key + '_title'] = svc.en.title;
        translations.en.services[key + '_text']  = svc.en.desc;
      }
      if (svc.ar) {
        translations.ar.services[key + '_title'] = svc.ar.title;
        translations.ar.services[key + '_text']  = svc.ar.desc;
      }
    });
  }

  if (saved.contact) {
    const c = saved.contact;
    document.addEventListener('DOMContentLoaded', () => {
      if (c.email) {
        document.querySelectorAll('a[href^="mailto:"]').forEach(a => { a.href = 'mailto:' + c.email; a.textContent = c.email; });
      }
      if (c.whatsapp) {
        const waMsg = encodeURIComponent("Hi SAMO! I'd like to discuss a project.");
        const waUrl = `https://wa.me/${c.whatsapp}?text=${waMsg}`;
        document.querySelectorAll('a[href*="wa.me"]').forEach(a => { a.href = waUrl; });
      }
      const socials = { linkedin: 'a[aria-label="LinkedIn"]', twitter: 'a[aria-label="X / Twitter"]',
                        facebook: 'a[aria-label="Facebook"]', instagram: 'a[aria-label="Instagram"]',
                        tiktok: 'a[aria-label="TikTok"]', behance: '.social-behance' };
      Object.entries(socials).forEach(([key, sel]) => {
        if (c[key]) document.querySelectorAll(sel).forEach(a => { a.href = c[key]; });
      });
    });
  }
})();

let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  const html = document.documentElement;

  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.dataset.i18n.split('.');
    let val = t;
    keys.forEach(k => val = val && val[k]);
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const keys = el.dataset.i18nHtml.split('.');
    let val = t;
    keys.forEach(k => val = val && val[k]);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const keys = el.dataset.i18nPlaceholder.split('.');
    let val = t;
    keys.forEach(k => val = val && val[k]);
    if (val !== undefined) el.placeholder = val;
  });

  document.getElementById('langText').textContent = lang === 'en' ? 'AR' : 'EN';
  document.title = lang === 'en' ? 'SAMO - Software Development Studio' : 'سامو - استوديو تطوير البرمجيات';

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'ar' : 'en');
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      const parent = btn.closest('.nav-dropdown');
      parent.classList.toggle('active');
    }
  });
});

document.querySelectorAll('.dropdown-item, .nav-links a:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const t = translations[currentLang].contact;

  formMessage.classList.remove('visible', 'success', 'error');

  if (!name || !email || !message) {
    formMessage.textContent = t.error;
    formMessage.classList.add('error', 'visible');
    return;
  }

  formMessage.textContent = t.success.replace('{name}', name).replace('{email}', email);
  formMessage.classList.add('success', 'visible');
  form.reset();
});

const progressBar = document.getElementById('progressBar');
const navbar = document.getElementById('navbar');
const whatsappFloat = document.getElementById('whatsappFloat');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';

      if (scrollTop > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });

      whatsappFloat.classList.toggle('visible', scrollTop > window.innerHeight * 0.4);
      ticking = false;
    });
    ticking = true;
  }
});

function animateCountUp() {
  const stats = document.querySelectorAll('.stat-number[data-count]');
  if (!stats.length) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        stats.forEach(stat => {
          const target = parseInt(stat.dataset.count);
          if (isNaN(target)) return;
          const suffix = '+';
          const duration = 1500;
          const startTime = performance.now();

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            stat.textContent = current + suffix;
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              stat.textContent = target + suffix;
              stat.classList.add('counted');
            }
          }
          requestAnimationFrame(update);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats');
  if (statsSection) observer.observe(statsSection);
}

AOS.init({ duration: 600, once: true, offset: 60 });
animateCountUp();

document.querySelectorAll('[data-aos]').forEach(el => {
  const delay = el.dataset.aosDelay;
  if (delay) el.style.transitionDelay = delay + 'ms';
});

lucide.createIcons();

/* ==========================================================================
   Hero Spotlight Effect
   ========================================================================== */
const heroSection = document.getElementById('home');
const heroSpotlight = document.getElementById('heroSpotlight');
if (heroSection && heroSpotlight) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroSpotlight.style.setProperty('--mouse-x', `${x}px`);
    heroSpotlight.style.setProperty('--mouse-y', `${y}px`);
  });
}
