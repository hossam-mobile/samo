/* ==========================================================================
   Dashboard content override — reads saved content from localStorage
   set by admin.html and merges it into translations before first render.
   ========================================================================== */
(function applySavedContent() {
  try {
    const raw = localStorage.getItem('samo_content');
    if (!raw) return;
    const saved = JSON.parse(raw);

    // We'll patch translations after the object is declared — see bottom of
    // this IIFE which runs after the const is hoisted via a deferred call.
    window.__samoSavedContent = saved;
  } catch (e) {
    // Silently fail so the site always works
  }
})();

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', experience: 'Experience', contact: 'Contact', cta: 'Start a Project' },
    hero: {
      eyebrow: '<span class="pulse-dot"></span><span class="eyebrow-text">SAMO &bull; Software Engineering Studio</span><span class="eyebrow-badge">v2.0</span>',
      title: 'We Engineer <span class="gradient-text-emerald">High-Impact</span> <span class="gradient-text-coral">Digital Products</span> — Right The First Time',
      subtitle: 'A specialized software development team crafting mobile products and digital experiences with real production experience.',
      cta1: 'Start a Project <i data-lucide="arrow-right"></i>',
      cta2: '<i data-lucide="briefcase"></i> Our Experience',
      pillar1_title: 'E-commerce & Retail',
      pillar2_title: 'Delivery & On-Demand',
      pillar3_title: 'Business Management',
      trust1: 'Marketplaces, ordering systems & inventory',
      trust2: 'Real-time tracking, logistics & dispatch',
      trust3: 'Multi-role apps, workflows & enterprise tools',
      float1_label: 'Specialized Team',
      float1_value: 'Mobile & UI/UX',
      float2_label: 'Production Experience',
      float2_value: 'Real Products, Real Impact',
      tab_arch: 'Architecture',
      tab_stack: 'Tech Stack',
      tab_solutions: 'Domains'
    },
    stats: { years: 'Years Experience', specialists: 'Specialists', domains: 'Domains Experienced', products: 'Products Shipped' },
    about: { title: 'About Us', subtitle: 'We are SAMO — a specialized software development team focused on building high-quality mobile products and digital experiences. Our team combines deep mobile engineering expertise with design thinking to deliver products that work.', mission: 'Our Focus', mission_text: 'Build reliable, well-crafted software that solves real problems — with attention to detail from first pixel to production.', approach: 'Our Approach', approach_text: 'Small team, direct communication, no overhead. We work closely with you from discovery through launch.', team: 'The Team', team_text: 'A Mobile Developer and a UI/UX Designer — each with production experience from real-world products built through other companies and teams.' },
    process: { title: 'How We Work', subtitle: 'A clear, structured process from discovery to launch.', step1_title: 'Discover', step1_text: 'Understand the business, users, requirements, and constraints.', step2_title: 'Design', step2_text: 'Translate requirements into user flows, UX, UI, and prototypes.', step3_title: 'Build', step3_text: 'Develop the product with a maintainable and scalable technical foundation.', step4_title: 'Validate', step4_text: 'Test, review, gather feedback, and iterate before shipping.', step5_title: 'Launch', step5_text: 'Prepare and deliver the product for production.' },
    services: { title: 'Services', subtitle: 'What we can build and the problems we help solve.', discovery_title: 'Product Discovery', discovery_text: 'Define the right product before writing a single line of code. We help clarify goals, users, and scope.', design_title: 'UI/UX Design', design_text: 'Research-backed interfaces and experiences that are intuitive, clean, and aligned with your business goals.', mobile_title: 'Mobile App Development', mobile_text: 'Cross-platform mobile applications built for performance, reliability, and a native feel on every device.', mvp_title: 'MVP Development', mvp_text: 'Go from idea to a working product quickly. We build lean, validated MVPs ready for real users.', backend_title: 'API & Backend Integration', backend_text: 'Robust APIs, third-party integrations, and backend systems that power your product at any scale.', iteration_title: 'Product Iteration & Maintenance', iteration_text: 'Continuous improvement, bug fixes, and feature updates to keep your product evolving with your business.' },
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
    testimonials: { title: 'What Our Clients Say', subtitle: 'Trusted by startups and enterprises alike.', quote1: '"SAMO transformed our outdated platform into a modern, scalable product. The team\'s technical expertise and communication were exceptional."', role1: 'CTO, FintechScale', quote2: '"Working with SAMO felt like an extension of our own team. They delivered ahead of schedule and the quality exceeded our expectations."', role2: 'Founder, CloudMart', quote3: '"They didn\'t just build our app — they helped us think through the product strategy. A rare combination of technical and strategic thinking."', role3: 'Product Lead, HealthBridge' },
    clients: { title: 'Trusted By' },
    cta: { title: 'Have an Idea? Let\'s Build It.', subtitle: 'Tell us about your product and we\'ll map out how we can help — no commitment required.', button: 'Start a Project' },
    contact: { title: 'Let\'s Talk', subtitle: 'Have a product idea or a challenge to solve? We\'d love to hear about it.', name_placeholder: 'Your Name', email_placeholder: 'Your Email', message_placeholder: 'Tell us about your product or challenge...', send: 'Send Message', whatsapp: 'Prefer WhatsApp? Chat with us instantly', success: "Thanks, {name}! We'll get back to you at {email} soon.", error: 'Please fill in all fields.' },
    footer: { tagline: 'A specialized software development team building mobile products and digital experiences with real production experience.', nav_title: 'Navigate', contact_title: 'Contact', rights: 'All rights reserved.' }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', experience: 'خبراتنا', contact: 'اتصل بنا', cta: 'ابدأ مشروعك' },
    hero: {
      eyebrow: '<span class="pulse-dot"></span><span class="eyebrow-text">سامو — استوديو هندسة البرمجيات</span><span class="eyebrow-badge">v2.0</span>',
      title: 'نهندس منتجات <span class="gradient-text-emerald">رقمية</span> <span class="gradient-text-coral">استثنائية</span> — من المرة الأولى',
      subtitle: 'فريق تطوير برمجيات متخصص يبني منتجات جوال وتجارب رقمية بخبرة إنتاج حقيقية.',
      cta1: 'ابدأ مشروعك <i data-lucide="arrow-left"></i>',
      cta2: '<i data-lucide="briefcase"></i> خبراتنا',
      pillar1_title: 'التجارة الإلكترونية والتجزئة',
      pillar2_title: 'التوصيل والخدمات الفورية',
      pillar3_title: 'إدارة الأعمال',
      trust1: 'منصات وأسواق وأنظمة طلب',
      trust2: 'تتبع لحظي ولوجستيات وشحن',
      trust3: 'تطبيقات متعددة الأدوار وأتمتة سير العمل',
      float1_label: 'فريق متخصص',
      float1_value: 'جوال وتجربة مستخدم',
      float2_label: 'خبرة إنتاجية',
      float2_value: 'منتجات حقيقية، تأثير حقيقي',
      tab_arch: 'البنية الهندسية',
      tab_stack: 'مصفوفة التقنيات',
      tab_solutions: 'المجالات'
    },
    stats: { years: 'سنوات خبرة', specialists: 'متخصصون', domains: 'مجالات خبرة', products: 'منتجات مُسلّمة' },
    about: { title: 'من نحن', subtitle: 'نحن سامو — فريق تطوير برمجيات متخصص في بناء منتجات جوال عالية الجودة وتجارب رقمية. يجمع فريقنا بين خبرة عميقة في هندسة التطبيقات الجوال وتفكير التصميم لتقديم منتجات فعّالة.', mission: 'تركيزنا', mission_text: 'بناء برامج موثوقة ومصممة بعناية تحل مشاكل حقيقية — مع الاهتمام بأدق التفاصيل من أول بكسل إلى الإنتاج.', approach: 'منهجيتنا', approach_text: 'فريق صغير، تواصل مباشر، بدون إضافات. نعمل معك عن كثب من الاكتشاف إلى الإطلاق.', team: 'الفريق', team_text: 'مطور جوال ومصمم واجهات مستخدم — كل منهما بخبرة إنتاجية من منتجات حقيقية بُنيت عبر شركات وفرق أخرى.' },
    process: { title: 'كيف نعمل', subtitle: 'عملية واضحة ومنظمة من الاكتشاف إلى الإطلاق.', step1_title: 'الاكتشاف', step1_text: 'فهم العمل والمستخدمين والمتطلبات والقيود.', step2_title: 'التصميم', step2_text: 'تحويل المتطلبات إلى تدفقات مستخدم وتجربة مستخدم وواجهة.', step3_title: 'البناء', step3_text: 'تطوير المنتج ببنية تقنية قابلة للصيانة والتوسع.', step4_title: 'التحقق', step4_text: 'الاختبار والمراجعة وجمع الملاحظات والتحسين قبل التسليم.', step5_title: 'الإطلاق', step5_text: 'إعداد المنتج وتسليمه للإنتاج.' },
    services: { title: 'خدماتنا', subtitle: 'ما يمكننا بناؤه والمشاكل التي نساعد في حلها.', discovery_title: 'اكتشاف المنتج', discovery_text: 'تحديد المنتج الصحيح قبل كتابة أي سطر كود. نساعد في توضيح الأهداف والمستخدمين والنطاق.', design_title: 'تصميم UI/UX', design_text: 'واجهات وتجارب مستخدم مدعومة بالبحث، بديهية ونظيفة ومتوافقة مع أهداف عملك.', mobile_title: 'تطوير تطبيقات الجوال', mobile_text: 'تطبيقات جوال عبر المنصات مبنية للأداء والموثوقية والأحساس الأصلي على كل جهاز.', mvp_title: 'تطوير MVP', mvp_text: 'الانتقال من فكرة إلى منتج يعمل بسرعة. نبني MVPs خفيفة وم验证ة وجاهزة للمستخدمين.', backend_title: 'تكامل API والخلفيات', backend_text: 'واجهات API قوية وتكاملات طرف ثالث وأنظمة خلفية تدعم منتجك بأي نطاق.', iteration_title: 'تحسين المنتج والصيانة', iteration_text: 'تحسين مستمر وإصلاح أخطاء وتحديث ميزات لإبقاء منتجك يتطور مع أعمالك.' },
    experience: {
      title: 'خبراتنا',
      subtitle: 'خبرة تأتي من بناء منتجات حقيقية.',
      intro: 'ساهم فريقنا في منتجات إنتاجية عبر مجالات متعددة. هذه الخبرة اكتُسبت من م engagements مهنية سابقة في شركات وفرق أخرى — وليس من عملنا الحالي مباشرة.',
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
    testimonials: { title: 'ماذا يقول عملاؤنا', subtitle: 'موثوق من قبل الشركات الناشئة والمؤسسات على حد سواء.', quote1: '"حولت سامو منصتنا القديمة إلى منتج حديث وقابل للتوسع. خبرة الفريق التقنية والتواصل كانت استثنائية."', role1: 'المدير التقني، FintechScale', quote2: '"العمل مع سامو كان كأنهم امتداد لفريقنا. سلموا قبل الموعد المحدد والجودة تجاوزت توقعاتنا."', role2: 'المؤسس، CloudMart', quote3: '"لم يبنوا تطبيقنا فقط — بل ساعدونا في التفكير في استراتيجية المنتج. مزيج نادر من التفكير التقني والاستراتيجي."', role3: 'قائد المنتج، HealthBridge' },
    clients: { title: 'موثوق من قبل' },
    cta: { title: 'لديك فكرة؟ لنبنيها معًا.', subtitle: 'أخبرنا عن منتجك وسنحدد كيف يمكننا المساعدة — بدون أي التزام.', button: 'ابدأ مشروعك' },
    contact: { title: 'لنتحدث', subtitle: 'لديك فكرة منتج أو تحدٍّ لحله؟ يسعدنا أن نسمع عنه.', name_placeholder: 'اسمك', email_placeholder: 'بريدك الإلكتروني', message_placeholder: 'أخبرنا عن منتجك أو تحديك...', send: 'إرسال الرسالة', whatsapp: 'تفضل واتساب؟ تحدث معنا فورًا', success: 'شكرًا {name}! سنتواصل معك على {email} قريبًا.', error: 'يرجى ملء جميع الحقول.' },
    footer: { tagline: 'فريق تطوير برمجيات متخصص يبني منتجات جوال وتجارب رقمية بخبرة إنتاج حقيقية.', nav_title: 'تصفح', contact_title: 'اتصل بنا', rights: 'جميع الحقوق محفوظة.' }
  }
};

/* ── Merge saved dashboard content into translations ─────────────────── */
(function mergeSavedContent() {
  const saved = window.__samoSavedContent;
  if (!saved) return;

  // Hero
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

  // Stats
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

  // Services (EN + AR text)
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

  // Testimonials
  if (saved.testimonials && saved.testimonials.length) {
    saved.testimonials.forEach((t, i) => {
      const n = i + 1;
      if (t.en) {
        translations.en.testimonials['quote' + n] = t.en.quote;
        translations.en.testimonials['role'  + n] = t.en.role;
      }
      if (t.ar) {
        translations.ar.testimonials['quote' + n] = t.ar.quote;
        translations.ar.testimonials['role'  + n] = t.ar.role;
      }
    });
  }

  // Contact email / whatsapp links
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
      // Social links
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
    keys.forEach(k => val = val[k]);
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const keys = el.dataset.i18nHtml.split('.');
    let val = t;
    keys.forEach(k => val = val[k]);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const keys = el.dataset.i18nPlaceholder.split('.');
    let val = t;
    keys.forEach(k => val = val[k]);
    if (val !== undefined) el.placeholder = val;
  });

  document.getElementById('langText').textContent = lang === 'en' ? 'AR' : 'EN';
  document.title = lang === 'en' ? 'SAMO - Software Development Team' : 'سامو - فريق تطوير البرمجيات';
  
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

      // Active nav link scrollspy
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
   Hero Showcase Interactive Controls (Tabs, Spotlight & 3D Glass Physics)
   ========================================================================== */

// Showcase Tab Switching
document.querySelectorAll('.showcase-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.dataset.tab;
    document.querySelectorAll('.showcase-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.showcase-pane').forEach(p => p.classList.remove('active'));
    
    tab.classList.add('active');
    const pane = document.getElementById(`pane-${targetTab}`);
    if (pane) {
      pane.classList.add('active');
    }
  });
});

// Mouse Spotlight Movement in Hero Section
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

// 3D Tilt Physics on Hero Showcase Window Frame
const showcaseWindow = document.getElementById('heroShowcase');
if (showcaseWindow && window.innerWidth > 991) {
  const showcaseWrapper = showcaseWindow.closest('.hero-showcase-wrapper');
  if (showcaseWrapper) {
    showcaseWrapper.addEventListener('mousemove', (e) => {
      const rect = showcaseWindow.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / (rect.height / 2)) * -5;
      const tiltY = (x / (rect.width / 2)) * 5;
      showcaseWindow.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    showcaseWrapper.addEventListener('mouseleave', () => {
      showcaseWindow.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
}


