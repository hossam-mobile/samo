const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', work: 'Work', contact: 'Contact' },
    hero: { eyebrow: 'Independent expertise, now one team', title: 'We Build <span class="highlight">Digital</span> Products — Right The First Time', subtitle: 'Our engineers have shipped real projects in healthcare, real estate, food & retail — individually, for years. Now we\'re building together.', cta1: 'See Our Work', cta2: 'Book a Free Consultation', trust1: 'Booking systems for clinics', trust2: 'Lead platforms for real-estate', trust3: 'Ordering systems for food & retail brands' },
    stats: { projects: 'Projects Delivered', years: 'Years Experience', clients: 'Happy Clients', team: 'Team Members' },
    about: { title: 'About Us', subtitle: 'We are SAMO — a tight-knit software development team that turns ideas into reliable, scalable products. From startups to established businesses, we partner with you through the entire journey.', mission: 'Mission', mission_text: 'Deliver high-quality software that solves real problems, on time and without the fluff.', approach: 'Approach', approach_text: 'Agile, transparent, and focused. Small team means fewer meetings and more shipping.', team: 'Team', team_text: 'Designers, front-end & back-end developers who actually enjoy working together.' },
    process: { title: 'How We Work', subtitle: 'A streamlined process from idea to launch.', step1_title: 'Discovery', step1_text: 'We learn about your goals, users, and technical requirements through deep research.', step2_title: 'Design', step2_text: 'We craft intuitive interfaces and seamless user experiences backed by testing.', step3_title: 'Development', step3_text: 'We build with modern stacks, clean code, and continuous integration from day one.', step4_title: 'Launch', step4_text: 'We deploy, monitor, and support — ensuring a smooth go-live and beyond.' },
    services: { title: 'Services', subtitle: 'Everything you need to bring your product to life.', web_title: 'Web Development', web_text: 'Responsive, fast websites and web apps built with modern frameworks.', mobile_title: 'Mobile Apps', mobile_text: 'Cross-platform mobile applications that feel native on every device.', backend_title: 'Backend & APIs', backend_text: 'Robust APIs, microservices, and serverless architecture at any scale.', design_title: 'UI/UX Design', design_text: 'Clean interfaces and user experiences backed by research and testing.', consulting_title: 'Consulting', consulting_text: 'Technical strategy, architecture reviews, and team augmentation.', devops_title: 'DevOps', devops_text: 'CI/CD pipelines, cloud infrastructure, and deployment automation.' },
    work: {
      title: 'Our Work',
      subtitle: 'Real projects, real results.',
      project1_badge1: 'Featured Spotlight',
      project1_badge2: 'Backend Development',
      project1_title: 'Elite Royal - On-Demand Home Services Platform',
      project1_desc: 'Engineered the backend architecture for an on-demand laundry & cleaning services platform. Implemented comprehensive workflow automation for pickup, active processing, and delivery cycles leveraging n8n orchestration.',
      project2_badge: 'Web Development',
      project2_title: 'Sanay3ya Baladna - صنايعية بلدنا',
      project2_desc: 'Sanay3ya Baladna is a modern full-stack marketplace for local craftsmen and home service providers, simplifying service booking and communication.',
      project3_badge: 'Full Stack',
      project3_title: 'Ham Ham Restaurant Ordering',
      project3_desc: 'Engineered backend systems for a restaurant ordering platform supporting real-time order tracking, menu management, and multi-branch operations.',
      project4_badge: 'Web Development',
      project4_title: '4AURA',
      project4_desc: 'Developed backend for a corporate landing page focused on protocol and event management, delivering high performance and seamless integrations.',
      project5_badge: 'Backend Development',
      project5_title: 'Extra Pharma - Healthcare Staffing',
      project5_desc: 'Designed robust backend architecture for a healthcare staffing platform, reducing database query latency and improving clinician scheduling efficiency.',
      explore: 'Explore Project'
    },
    testimonials: { title: 'What Our Clients Say', subtitle: 'Trusted by startups and enterprises alike.', quote1: '"SAMO transformed our outdated platform into a modern, scalable product. The team\'s technical expertise and communication were exceptional."', role1: 'CTO, FintechScale', quote2: '"Working with SAMO felt like an extension of our own team. They delivered ahead of schedule and the quality exceeded our expectations."', role2: 'Founder, CloudMart', quote3: '"They didn\'t just build our app — they helped us think through the product strategy. A rare combination of technical and strategic thinking."', role3: 'Product Lead, HealthBridge' },
    clients: { title: 'Trusted By' },
    cta: { title: 'Not Sure Where to Start?', subtitle: 'Tell us about your project and we\'ll map out a plan — no commitment required.', button: 'Get a Free 30-Min Consultation' },
    contact: { title: 'Get In Touch', subtitle: 'Have a project? Let\'s talk about it.', name_placeholder: 'Your Name', email_placeholder: 'Your Email', message_placeholder: 'Tell us about your project...', send: 'Send Message', whatsapp: 'Prefer WhatsApp? Chat with us instantly', success: "Thanks, {name}! We'll get back to you at {email} soon.", error: 'Please fill in all fields.' },
    footer: { tagline: 'A software development team that turns ideas into reliable, scalable products.', nav_title: 'Navigate', contact_title: 'Contact', rights: 'All rights reserved.' }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', work: 'أعمالنا', contact: 'اتصل بنا' },
    hero: { eyebrow: 'خبرة مستقلة، الآن فريق واحد', title: 'نبني منتجات <span class="highlight">رقمية</span> — بشكل صحيح من أول مرة', subtitle: 'مهندسونا قدّموا مشاريع حقيقية في الرعاية الصحية والعقارات والغذاء والتجزئة — بشكل فردي لسنوات. الآن نبني معًا.', cta1: 'شاهد أعمالنا', cta2: 'احجز استشارة مجانية', trust1: 'أنظمة حجز للعيادات', trust2: 'منصات عملاء للعقارات', trust3: 'أنظمة طلب للعلامات الغذائية والتجزئة' },
    stats: { projects: 'مشروعًا تم تسليمه', years: 'سنوات خبرة', clients: 'عميلاً سعيدًا', team: 'عضوًا في الفريق' },
    about: { title: 'من نحن', subtitle: 'نحن سامو — فريق تطوير برمجيات متماسك يحول الأفكار إلى منتجات موثوقة وقابلة للتوسع. من الشركات الناشئة إلى المؤسسات القائمة، نشاركك رحلتك بالكامل.', mission: 'الرسالة', mission_text: 'تقديم برامج عالية الجودة تحل مشاكل حقيقية، في الوقت المحدد وبدون تعقيد.', approach: 'النهج', approach_text: 'مرن وشفاف ومركز. الفريق الصغير يعني اجتماعات أقل وإنجاز أكثر.', team: 'الفريق', team_text: 'مصممون ومطورو واجهات أمامية وخلفية يستمتعون حقًا بالعمل معًا.' },
    process: { title: 'كيف نعمل', subtitle: 'عملية مبسطة من الفكرة إلى الإطلاق.', step1_title: 'الاكتشاف', step1_text: 'نتعرف على أهدافك ومستخدميك ومتطلباتك التقنية من خلال بحث معمق.', step2_title: 'التصميم', step2_text: 'نصمم واجهات بديهية وتجارب مستخدم سلسة مدعومة بالاختبارات.', step3_title: 'التطوير', step3_text: 'نبني باستخدام أحدث التقنيات وكود نظيف وتكامل مستمر من اليوم الأول.', step4_title: 'الإطلاق', step4_text: 'ننشر ونتابع وندعم — لضمان إطلاق سلس وما بعده.' },
    services: { title: 'خدماتنا', subtitle: 'كل ما تحتاجه لتحويل منتجك إلى واقع.', web_title: 'تطوير الويب', web_text: 'مواقع وتطبيقات ويب سريعة ومتجاوبة مبنية بأحدث الأطر العمل.', mobile_title: 'تطبيقات الجوال', mobile_text: 'تطبيقات جوال عبر المنصات تشعر بأنها أصلية على كل جهاز.', backend_title: 'الخلفيات وواجهات API', backend_text: 'واجهات API قوية وخدمات مصغرة وهندسة لامركزية بأي نطاق.', design_title: 'تصميم UI/UX', design_text: 'واجهات نظيفة وتجارب مستخدم مدعومة بالبحث والاختبار.', consulting_title: 'الاستشارات', consulting_text: 'استراتيجية تقنية ومراجعة البنية التحتية وتوسيع الفريق.', devops_title: 'العمليات التقنية', devops_text: 'خطوط CI/CD والبنية التحتية السحابية وأتمتة النشر.' },
    work: {
      title: 'أعمالنا',
      subtitle: 'مشاريع حقيقية، نتائج حقيقية.',
      project1_badge1: 'تسليط الضوء',
      project1_badge2: 'تطوير الأنظمة الخلفية',
      project1_title: 'إيليت رويال - منصة الخدمات المنزلية عند الطلب',
      project1_desc: 'تم تصميم وهندسة البنية التحتية الخلفية لمنصة خدمات الغسيل والتنظيف عند الطلب. تنفيذ أتمتة كاملة لتدفق العمل لعمليات الاستلام، المعالجة النشطة، ودورات التسليم باستخدام n8n.',
      project2_badge: 'تطوير الويب',
      project2_title: 'صنايعية بلدنا - Sanay3ya Baladna',
      project2_desc: 'منصة متكاملة حديثة لربط الحرفيين المحليين ومقدمي الخدمات المنزلية، وتسهيل حجز الخدمات والتواصل المباشر.',
      project3_badge: 'تطوير متكامل',
      project3_title: 'هم هم - منصة طلبات المطاعم',
      project3_desc: 'تطوير الأنظمة الخلفية لمنصة طلبات مطاعم تدعم تتبع الطلبات في الوقت الفعلي، إدارة القوائم، والعمليات متعددة الفروع.',
      project4_badge: 'تطوير الويب',
      project4_title: '4AURA',
      project4_desc: 'تطوير النظام الخلفي لصفحة هبوط مؤسسية تركز على إدارة البروتوكولات والفعاليات، مع تقديم أداء عالٍ وتكامل سلس.',
      project5_badge: 'تطوير الأنظمة الخلفية',
      project5_title: 'إكسترا فارما - توظيف الرعاية الصحية',
      project5_desc: 'تصميم بنية تحتية خلفية قوية لمنصة توظيف الرعاية الصحية، مما قلل من زمن استجابة الاستعلامات وحسن كفاءة جدولة الأطباء.',
      explore: 'استكشف المشروع'
    },
    testimonials: { title: 'ماذا يقول عملاؤنا', subtitle: 'موثوق من قبل الشركات الناشئة والمؤسسات على حد سواء.', quote1: '"حولت سامو منصتنا القديمة إلى منتج حديث وقابل للتوسع. خبرة الفريق التقنية والتواصل كانت استثنائية."', role1: 'المدير التقني، FintechScale', quote2: '"العمل مع سامو كان كأنهم امتداد لفريقنا. سلموا قبل الموعد المحدد والجودة تجاوزت توقعاتنا."', role2: 'المؤسس، CloudMart', quote3: '"لم يبنوا تطبيقنا فقط — بل ساعدونا في التفكير في استراتيجية المنتج. مزيج نادر من التفكير التقني والاستراتيجي."', role3: 'قائد المنتج، HealthBridge' },
    clients: { title: 'موثوق من قبل' },
    cta: { title: 'لست متأكدًا من أين تبدأ؟', subtitle: 'أخبرنا عن مشروعك وسنضع خطة — بدون أي التزام.', button: 'احصل على استشارة مجانية لمدة ٣٠ دقيقة' },
    contact: { title: 'تواصل معنا', subtitle: 'لديك مشروع؟ دعنا نتحدث عنه.', name_placeholder: 'اسمك', email_placeholder: 'بريدك الإلكتروني', message_placeholder: 'أخبرنا عن مشروعك...', send: 'إرسال الرسالة', whatsapp: 'تفضل واتساب؟ تحدث معنا فورًا', success: 'شكرًا {name}! سنتواصل معك على {email} قريبًا.', error: 'يرجى ملء جميع الحقول.' },
    footer: { tagline: 'فريق تطوير برمجيات يحول الأفكار إلى منتجات موثوقة وقابلة للتوسع.', nav_title: 'تصفح', contact_title: 'اتصل بنا', rights: 'جميع الحقوق محفوظة.' }
  }
};

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

document.querySelectorAll('.nav-links a').forEach(link => {
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
