const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', work: 'Work', contact: 'Contact' },
    breadcrumb: { home: 'Home', work: 'Work' },
    hero: { live: 'Visit Live Site', github: 'View Source', behance: 'Behance' },
    meta: { l1: 'Months', l2: 'Team Members', l3: 'Modules Delivered', l4: 'Uptime' },
    overview: { title: 'About The Project' },
    info: { title: 'Project Info', client: 'Client', industry: 'Industry', year: 'Year', role: 'Our Role', platform: 'Platform', location: 'Location' },
    features: { title: 'Key Features', subtitle: 'Everything built to keep the operation running smoothly end-to-end.' },
    stack: { title: 'Tech Stack', subtitle: 'Tools and technologies that power the platform.' },
    process: { title: 'From Idea To Launch', subtitle: 'How we delivered the project.' },
    next: { eyebrow: 'Next Project', cta: 'Explore Project' },
    footer: { tagline: 'A software development team that turns ideas into reliable, scalable products.', nav_title: 'Navigate', contact_title: 'Contact', rights: 'All rights reserved.' }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', services: 'خدماتنا', work: 'أعمالنا', contact: 'اتصل بنا' },
    breadcrumb: { home: 'الرئيسية', work: 'أعمالنا' },
    hero: { live: 'زيارة الموقع', github: 'عرض الكود', behance: 'بي هانس' },
    meta: { l1: 'أشهر', l2: 'أعضاء الفريق', l3: 'وحدة تم تسليمها', l4: 'نسبة التشغيل' },
    overview: { title: 'عن المشروع' },
    info: { title: 'معلومات المشروع', client: 'العميل', industry: 'المجال', year: 'السنة', role: 'دورنا', platform: 'المنصة', location: 'الموقع' },
    features: { title: 'المميزات الرئيسية', subtitle: 'كل ما تم بناؤه لإبقاء العمليات تعمل بسلاسة من البداية إلى النهاية.' },
    stack: { title: 'التقنيات المستخدمة', subtitle: 'أدوات وتقنيات تدعم المنصة.' },
    process: { title: 'من الفكرة إلى الإطلاق', subtitle: 'كيف سلّمنا المشروع.' },
    next: { eyebrow: 'المشروع التالي', cta: 'استكشف المشروع' },
    footer: { tagline: 'فريق تطوير برمجيات يحول الأفكار إلى منتجات موثوقة وقابلة للتوسع.', nav_title: 'تصفح', contact_title: 'اتصل بنا', rights: 'جميع الحقوق محفوظة.' }
  }
};

const PROJECTS = {
  'elite-royal': {
    badge: { en: 'Featured Project', ar: 'مشروع مميز' },
    name: { en: 'Elite Royal', ar: 'إيليت رويال' },
    subtitle: {
      en: 'On-demand laundry & home services platform with fully automated order lifecycle management, real-time tracking, and seamless multi-channel delivery.',
      ar: 'منصة خدمات الغسيل والتنظيف عند الطلب مع إدارة مؤتمتة بالكامل لدورة حياة الطلب، وتتبع لحظي، وتسليم سلس عبر قنوات متعددة.'
    },
    badges: [
      { en: 'Backend Development', ar: 'تطوير الأنظمة الخلفية' },
      { en: '2025', ar: '2025' },
      { en: 'Riyadh, KSA', ar: 'الرياض، السعودية' }
    ],
    meta: { v1: '8', v2: '5', v3: '12', v4: '99.9%' },
    overview: {
      p1: {
        en: 'Elite Royal is an on-demand laundry and cleaning services platform that connects customers with professional pickup, processing, and delivery across Riyadh. SAMO engineered the complete backend architecture that powers the entire order lifecycle.',
        ar: 'إيليت رويال منصة لخدمات الغسيل والتنظيف عند الطلب تربط العملاء باستلام ومعالجة وتسليم احترافي في جميع أنحاء الرياض. صمّم فريق سامو البنية التحتية الخلفية الكاملة التي تدير دورة حياة الطلب بأكملها.'
      },
      p2: {
        en: 'The platform automates every stage — from scheduling a pickup through an interactive calendar, to routing orders through processing, quality checks, and real-time delivery updates. Customers always know exactly where their garments are.',
        ar: 'تقوم المنصة بأتمتة كل مرحلة — من جدولة الاستلام عبر تقويم تفاعلي، إلى توجيه الطلبات خلال المعالجة وفحوصات الجودة وتحديثات التسليم اللحظية. يعرف العملاء دائمًا مكان ملابسهم بالضبط.'
      },
      p3: {
        en: 'Using n8n orchestration, we wired together payment providers, SMS & push notifications, branch management, and courier dispatch into one reliable system that scales with demand.',
        ar: 'باستخدام أدوات أتمتة n8n، ربطنا مزودي الدفع ورسائل SMS والإشعارات الفورية وإدارة الفروع وتوزيع السائقين في نظام واحد موثوق يتوسع مع الطلب.'
      }
    },
    info: {
      client: { en: 'Elite Royal Co.', ar: 'شركة إيليت رويال' },
      industry: { en: 'Home Services', ar: 'الخدمات المنزلية' },
      year: { en: '2025', ar: '2025' },
      role: { en: 'Backend Architecture & Development', ar: 'البنية التحتية والتطوير الخلفي' },
      platform: { en: 'Web, Mobile, Admin Dashboard', ar: 'ويب، جوال، لوحة تحكم' },
      location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، السعودية' }
    },
    features: {
      t1: { en: 'Smart Scheduling', ar: 'جدولة ذكية' },
      x1: { en: 'Flexible pickup & delivery slots with automatic capacity management per branch.', ar: 'مواعيد استلام وتسليم مرنة مع إدارة تلقائية للسعة لكل فرع.' },
      t2: { en: 'Automated Workflows', ar: 'أتمتة سير العمل' },
      x2: { en: 'n8n-powered automation for processing, quality checks, and courier dispatch.', ar: 'أتمتة مدعومة بـ n8n للمعالجة وفحوصات الجودة وتوزيع السائقين.' },
      t3: { en: 'Real-time Notifications', ar: 'إشعارات لحظية' },
      x3: { en: 'SMS and push updates at every step, keeping customers informed instantly.', ar: 'تحديثات عبر SMS والإشعارات الفورية في كل خطوة لإبقاء العملاء على اطلاع.' },
      t4: { en: 'Secure Payments', ar: 'مدفوعات آمنة' },
      x4: { en: 'Multi-gateway checkout with online payment and cash-on-delivery options.', ar: 'دفع عبر بوابات متعددة مع خيارات الدفع الإلكتروني والدفع عند الاستلام.' },
      t5: { en: 'Live Tracking', ar: 'تتبع مباشر' },
      x5: { en: 'Real-time order location and status updates from pickup to doorstep.', ar: 'موقع الطلب وحالته في الوقت الفعلي من الاستلام حتى باب المنزل.' },
      t6: { en: 'Operations Dashboard', ar: 'لوحة تحكم العمليات' },
      x6: { en: 'A powerful admin panel for branches, staff, pricing, and daily reporting.', ar: 'لوحة إدارة قوية للفروع والموظفين والأسعار والتقارير اليومية.' }
    },
    stack: ['Laravel', 'PHP 8', 'n8n', 'Node.js', 'MySQL', 'Redis', 'REST API', 'AWS S3', 'Firebase Push'],
    process: {
      t1: { en: 'Discovery', ar: 'الاكتشاف' },
      x1: { en: 'Workshops with stakeholders to map order flows, pricing rules, and branch operations.', ar: 'ورش عمل مع أصحاب المصلحة لرسم تدفقات الطلبات وقواعد التسعير وعمليات الفروع.' },
      t2: { en: 'Architecture', ar: 'الهندسة' },
      x2: { en: 'Database design and API contracts defined before a single feature was built.', ar: 'تصميم قاعدة البيانات واتفاقيات API قبل بناء أي ميزة.' },
      t3: { en: 'Development', ar: 'التطوير' },
      x3: { en: 'Iterative sprints with continuous testing, code reviews, and staging deployments.', ar: 'دورات تكرارية مع اختبار مستمر ومراجعات كود ونشر تجريبي.' },
      t4: { en: 'Launch & Support', ar: 'الإطلاق والدعم' },
      x4: { en: 'Production deployment, monitoring, and ongoing support after go-live.', ar: 'النشر في الإنتاج والمراقبة والدعم المستمر بعد الإطلاق.' }
    },
    next: { slug: 'sanay3ya-baladna', title: { en: 'Sanay3ya Baladna', ar: 'صنايعية بلدنا' }, text: { en: 'A marketplace connecting customers with trusted local craftsmen and home service providers.', ar: 'منصة تربط العملاء بحرفيين محليين موثوقين ومقدمي خدمات منزلية.' } }
  },

  'sanay3ya-baladna': {
    badge: { en: 'Full-Stack Build', ar: 'بناء متكامل' },
    name: { en: 'Sanay3ya Baladna', ar: 'صنايعية بلدنا' },
    subtitle: {
      en: 'A modern full-stack marketplace connecting customers with verified local craftsmen and home service providers, simplifying booking, quotes, and communication.',
      ar: 'منصة متكاملة حديثة تربط العملاء بحرفيين محليين موثوقين ومقدمي خدمات منزلية، مع تسهيل الحجز وعروض الأسعار والتواصل.'
    },
    badges: [
      { en: 'Web Development', ar: 'تطوير الويب' },
      { en: '2024', ar: '2024' },
      { en: 'Egypt', ar: 'مصر' }
    ],
    meta: { v1: '6', v2: '4', v3: '10', v4: '99.8%' },
    overview: {
      p1: {
        en: 'Sanay3ya Baladna is a marketplace that matches customers with trusted local craftsmen — from electricians and plumbers to painters and technicians. SAMO designed and built the full stack that powers discovery, booking, and communication.',
        ar: 'صنايعية بلدنا منصة تصل العملاء بحرفيين محليين موثوقين — من كهربائيين وسباكين إلى دهانين وفنيين. صمّم سامو وبنى النظام المتكامل الذي يدير الاكتشاف والحجز والتواصل.'
      },
      p2: {
        en: 'Customers browse verified profiles, request quotes, and book services in a few taps. Craftsmen manage their availability, respond to requests, and build their reputation through a transparent review system.',
        ar: 'يتصفح العملاء ملفات موثقة، ويطلبون عروض أسعار، ويحجزون الخدمات ببضع نقرات. يدير الحرفيون مواعيدهم، ويردون على الطلبات، ويبنون سمعتهم عبر نظام تقييمات شفاف.'
      },
      p3: {
        en: 'Real-time chat, searchable service categories, and a moderation panel keep the platform safe, fast, and easy to use for everyone.',
        ar: 'محادثة لحظية وفئات خدمات قابلة للبحث ولوحة مراجعة تُبقي المنصة آمنة وسريعة وسهلة الاستخدام للجميع.'
      }
    },
    info: {
      client: { en: 'Sanay3ya Baladna Co.', ar: 'شركة صنايعية بلدنا' },
      industry: { en: 'Home Services Marketplace', ar: 'منصة خدمات منزلية' },
      year: { en: '2024', ar: '2024' },
      role: { en: 'Full-Stack Development', ar: 'تطوير متكامل' },
      platform: { en: 'Web, Mobile', ar: 'ويب، جوال' },
      location: { en: 'Egypt', ar: 'مصر' }
    },
    features: {
      t1: { en: 'Verified Profiles', ar: 'ملفات موثقة' },
      x1: { en: 'Identity checks and skill badges for every craftsman before going live.', ar: 'التحقق من الهوية وشارات المهارات لكل حرفي قبل النشر.' },
      t2: { en: 'Service Booking', ar: 'حجز الخدمات' },
      x2: { en: 'End-to-end booking flow with quotes, scheduling, and confirmations.', ar: 'تدفق حجز متكامل مع عروض الأسعار والجدولة والتأكيدات.' },
      t3: { en: 'Real-time Chat', ar: 'محادثة لحظية' },
      x3: { en: 'Direct messaging between customers and craftsmen with instant delivery.', ar: 'مراسلة مباشرة بين العملاء والحرفيين مع إرسال فوري.' },
      t4: { en: 'Reviews & Ratings', ar: 'تقييمات ومراجعات' },
      x4: { en: 'Transparent rating system that builds trust and improves service quality.', ar: 'نظام تقييمات شفاف يبني الثقة ويحسن جودة الخدمة.' },
      t5: { en: 'Search & Filters', ar: 'بحث وفلترة' },
      x5: { en: 'Fast search across categories, locations, and availability.', ar: 'بحث سريع عبر الفئات والمواقع والتوفر.' },
      t6: { en: 'Admin Moderation', ar: 'إشراف إداري' },
      x6: { en: 'Dashboard to review listings, manage disputes, and monitor activity.', ar: 'لوحة لمراجعة القوائم وإدارة النزاعات ومراقبة النشاط.' }
    },
    stack: ['Laravel', 'Next.js', 'REST API', 'MySQL', 'Redis', 'Pusher'],
    process: {
      t1: { en: 'Discovery', ar: 'الاكتشاف' },
      x1: { en: 'Research on craftsmen needs, customer journeys, and pricing models.', ar: 'بحث حول احتياجات الحرفيين ورحلة العميل ونماذج التسعير.' },
      t2: { en: 'Design', ar: 'التصميم' },
      x2: { en: 'UX flows for booking, chat, and profile management prototyped and tested.', ar: 'نماذج وتجارب لواجهات الحجز والمحادثة وإدارة الملفات.' },
      t3: { en: 'Development', ar: 'التطوير' },
      x3: { en: 'Modular build with API-first approach and weekly releases.', ar: 'بناء وحدات بنهج API أولاً وإصدارات أسبوعية.' },
      t4: { en: 'Launch', ar: 'الإطلاق' },
      x4: { en: 'Soft launch with a pilot city, then scaled to nationwide operation.', ar: 'إطلاق تجريبي في مدينة رائدة ثم توسع لاحقًا على مستوى الدولة.' }
    },
    next: { slug: 'ham-ham', title: { en: 'Ham Ham Restaurant', ar: 'مطعم هم هم' }, text: { en: 'A restaurant ordering platform with real-time order tracking and multi-branch operations.', ar: 'منصة طلبات مطاعم مع تتبع لحظي للطلبات وعمليات متعددة الفروع.' } }
  },

  'ham-ham': {
    badge: { en: 'Full-Stack Build', ar: 'بناء متكامل' },
    name: { en: 'Ham Ham Restaurant', ar: 'مطعم هم هم' },
    subtitle: {
      en: 'A restaurant ordering platform supporting real-time order tracking, menu management, and multi-branch operations for a fast-growing brand.',
      ar: 'منصة طلبات مطاعم تدعم تتبع الطلبات في الوقت الفعلي وإدارة القوائم والعمليات متعددة الفروع لعلامة غذائية متنامية.'
    },
    badges: [
      { en: 'Full Stack', ar: 'تطوير متكامل' },
      { en: '2024', ar: '2024' },
      { en: 'KSA', ar: 'السعودية' }
    ],
    meta: { v1: '5', v2: '3', v3: '8', v4: '99.9%' },
    overview: {
      p1: {
        en: 'Ham Ham is an ordering platform that lets customers browse menus, place orders, and track them in real time. SAMO engineered the backend systems that keep every order moving smoothly across all branches.',
        ar: 'هم هم منصة طلبات تتيح للعملاء تصفح القوائم وتقديم الطلبات وتتبعها لحظيًا. صمّم سامو الأنظمة الخلفية التي تُبقي كل طلب يسير بسلاسة عبر جميع الفروع.'
      },
      p2: {
        en: 'Order status flows through kitchen, preparation, and delivery in real time. Staff see updates instantly, while customers follow along from their devices without touching a phone.',
        ar: 'تتنقل حالة الطلب عبر المطبخ والتحضير والتوصيل في الوقت الفعلي. يرى الموظفون التحديثات فورًا بينما يتابع العملاء من أجهزتهم دون الاتصال بالهاتف.'
      },
      p3: {
        en: 'A central menu and pricing system keeps every branch consistent, with branch-level controls for availability and specials.',
        ar: 'نظام مركزي للقوائم والأسعار يبقي كل الفروع متسقة، مع تحكم لكل فرع في التوفر والعروض الخاصة.'
      }
    },
    info: {
      client: { en: 'Ham Ham Restaurants', ar: 'مطاعم هم هم' },
      industry: { en: 'Food & Beverage', ar: 'الغذاء والمشروبات' },
      year: { en: '2024', ar: '2024' },
      role: { en: 'Full-Stack Development', ar: 'تطوير متكامل' },
      platform: { en: 'Web, Mobile', ar: 'ويب، جوال' },
      location: { en: 'Saudi Arabia', ar: 'السعودية' }
    },
    features: {
      t1: { en: 'Order Tracking', ar: 'تتبع الطلبات' },
      x1: { en: 'Live order status across every stage from placement to delivery.', ar: 'حالة الطلب الحية في كل مرحلة من التقديم حتى التوصيل.' },
      t2: { en: 'Menu Management', ar: 'إدارة القوائم' },
      x2: { en: 'Central menu with categories, modifiers, and dynamic pricing.', ar: 'قائمة مركزية مع الفئات والخيارات والتسعير الديناميكي.' },
      t3: { en: 'Multi-branch Support', ar: 'دعم متعدد الفروع' },
      x3: { en: 'Branch-level configuration for inventory, hours, and service areas.', ar: 'إعدادات لكل فرع للمخزون وساعات العمل ومناطق الخدمة.' },
      t4: { en: 'Online Payments', ar: 'مدفوعات إلكترونية' },
      x4: { en: 'Integrated checkout with cards, wallets, and cash on delivery.', ar: 'دفع متكامل بالبطاقات والمحافظ والدفع عند الاستلام.' },
      t5: { en: 'Kitchen Display', ar: 'شاشة المطبخ' },
      x5: { en: 'Order queue optimized for fast, accurate food preparation.', ar: 'طابور طلبات مُحسَّن لتحضير طعام سريع ودقيق.' },
      t6: { en: 'Loyalty & Promos', ar: 'ولاء وعروض' },
      x6: { en: 'Points, coupons, and flash offers to keep customers coming back.', ar: 'نقاط وقسائم وعروض خاطفة تُبقي العملاء يعودون.' }
    },
    stack: ['Laravel', 'Node.js', 'Redis', 'MySQL', 'WebSockets'],
    process: {
      t1: { en: 'Discovery', ar: 'الاكتشاف' },
      x1: { en: 'Mapping order workflows, kitchen operations, and delivery constraints.', ar: 'رسم تدفقات الطلب وعمليات المطبخ وقيود التوصيل.' },
      t2: { en: 'Architecture', ar: 'الهندسة' },
      x2: { en: 'Event-driven design for real-time order propagation.', ar: 'تصميم قائم على الأحداث لبث الطلبات لحظيًا.' },
      t3: { en: 'Development', ar: 'التطوير' },
      x3: { en: 'Backend APIs, staff dashboard, and customer mobile experience.', ar: 'واجهات برمجية خلفية ولوحة موظفين وتجربة جوال للعملاء.' },
      t4: { en: 'Launch', ar: 'الإطلاق' },
      x4: { en: 'Staged rollout branch by branch with on-site training.', ar: 'إطلاق تدريجي فرعًا بفرع مع تدريب في الموقع.' }
    },
    next: { slug: '4aura', title: { en: '4AURA', ar: 'فور أورا' }, text: { en: 'A corporate landing page focused on protocol and event management.', ar: 'صفحة هبوط مؤسسية تركز على إدارة البروتوكولات والفعاليات.' } }
  },

  '4aura': {
    badge: { en: 'Web Development', ar: 'تطوير الويب' },
    name: { en: '4AURA', ar: 'فور أورا' },
    subtitle: {
      en: 'A corporate landing page for protocol and event management, delivering high performance, clean architecture, and seamless integrations.',
      ar: 'صفحة هبوط مؤسسية لإدارة البروتوكولات والفعاليات، بأداء عالٍ وهندسة نظيفة وتكامل سلس.'
    },
    badges: [
      { en: 'Web Development', ar: 'تطوير الويب' },
      { en: '2024', ar: '2024' },
      { en: 'KSA', ar: 'السعودية' }
    ],
    meta: { v1: '3', v2: '2', v3: '5', v4: '99.9%' },
    overview: {
      p1: {
        en: '4AURA is the digital face of a premium protocol and events practice. SAMO developed a fast, elegant corporate site backed by a flexible content system.',
        ar: 'فور أورا هي الواجهة الرقمية لشركة متخصصة في البروتوكول والفعاليات. طوّر سامو موقعًا مؤسسيًا سريعًا وأنيقًا مدعومًا بنظام محتوى مرن.'
      },
      p2: {
        en: 'The site showcases services, case studies, and thought leadership through carefully crafted pages — all served at exceptional speed with a clean, modern aesthetic.',
        ar: 'يعرض الموقع الخدمات ودراسات الحالة والمحتوى الفكري عبر صفحات مصممة بعناية — كلها تُقدَّم بسرعة استثنائية وجماليات حديثة نظيفة.'
      },
      p3: {
        en: 'A custom backend manages content, events, and media, while seamless integrations keep the entire experience effortless to maintain.',
        ar: 'نظام خلفي مخصص يدير المحتوى والفعاليات والوسائط، بينما تحافظ التكاملات السلسة على سهولة صيانة التجربة بالكامل.'
      }
    },
    info: {
      client: { en: '4AURA', ar: 'فور أورا' },
      industry: { en: 'Corporate / Events', ar: 'مؤسسات / فعاليات' },
      year: { en: '2024', ar: '2024' },
      role: { en: 'Backend Development', ar: 'تطوير الأنظمة الخلفية' },
      platform: { en: 'Web', ar: 'ويب' },
      location: { en: 'Saudi Arabia', ar: 'السعودية' }
    },
    features: {
      t1: { en: 'Event Management', ar: 'إدارة الفعاليات' },
      x1: { en: 'Structured content for events, protocols, and programs.', ar: 'محتوى منظم للفعاليات والبروتوكولات والبرامج.' },
      t2: { en: 'Protocol Workflows', ar: 'سير عمل البروتوكول' },
      x2: { en: 'Clear presentation of procedures, etiquette, and standards.', ar: 'عرض واضح للإجراءات والبروتوكولات والمعايير.' },
      t3: { en: 'High Performance', ar: 'أداء عالٍ' },
      x3: { en: 'Optimized delivery for fast loads on any connection.', ar: 'تقديم مُحسَّن لتحميل سريع على أي اتصال.' },
      t4: { en: 'CMS Integration', ar: 'تكامل نظام المحتوى' },
      x4: { en: 'Non-technical teams can update pages, media, and listings.', ar: 'تحديث الصفحات والوسائط والقوائم دون خبرة تقنية.' },
      t5: { en: 'Analytics', ar: 'التحليلات' },
      x5: { en: 'Privacy-friendly usage insights across the site.', ar: 'رؤى استخدام تحترم الخصوصية عبر الموقع.' },
      t6: { en: 'Security Hardening', ar: 'تقوية الأمان' },
      x6: { en: 'Best-practice protection against common web threats.', ar: 'حماية وفق أفضل الممارسات ضد التهديدات الشائعة.' }
    },
    stack: ['Laravel', 'Next.js', 'REST API', 'MySQL'],
    process: {
      t1: { en: 'Discovery', ar: 'الاكتشاف' },
      x1: { en: 'Brand review and content structure workshops.', ar: 'مراجعة الهوية وورش عمل لهيكلة المحتوى.' },
      t2: { en: 'Design', ar: 'التصميم' },
      x2: { en: 'Elegant templates aligned with the premium brand.', ar: 'قوالب أنيقة تواكب الهوية الراقية.' },
      t3: { en: 'Development', ar: 'التطوير' },
      x3: { en: 'Fast front-end with a lightweight custom backend.', ar: 'واجهة سريعة مع نظام خلفي خفيف مخصص.' },
      t4: { en: 'Launch', ar: 'الإطلاق' },
      x4: { en: 'Deployment, performance tuning, and handover training.', ar: 'النشر وضبط الأداء وتدريب على التسليم.' }
    },
    next: { slug: 'extra-pharma', title: { en: 'Extra Pharma', ar: 'إكسترا فارما' }, text: { en: 'A healthcare staffing platform with optimized scheduling and query performance.', ar: 'منصة توظيف للرعاية الصحية مع جدولة وأداء استعلامات مُحسَّن.' } }
  },

  'extra-pharma': {
    badge: { en: 'Backend Focus', ar: 'تركيز خلفي' },
    name: { en: 'Extra Pharma', ar: 'إكسترا فارما' },
    subtitle: {
      en: 'A healthcare staffing platform connecting clinicians with facilities, engineered for fast queries, efficient scheduling, and reliable operations.',
      ar: 'منصة توظيف في الرعاية الصحية تصل بين الأطباء والمنشآت، مهندسة لاستعلامات سريعة وجدولة فعالة وتشغيل موثوق.'
    },
    badges: [
      { en: 'Backend Development', ar: 'تطوير الأنظمة الخلفية' },
      { en: '2023', ar: '2023' },
      { en: 'Germany', ar: 'ألمانيا' }
    ],
    meta: { v1: '7', v2: '4', v3: '9', v4: '99.95%' },
    overview: {
      p1: {
        en: 'Extra Pharma matches clinicians with healthcare facilities that need their expertise. SAMO designed a robust backend that keeps thousands of profiles, shifts, and matching queries running at speed.',
        ar: 'إكسترا فارما تصل الأطباء بالمنشآت الصحية التي تحتاج خبرتهم. صمّم سامو نظامًا خلفيًا قويًا يبقي آلاف الملفات والمناوبات واستعلامات المطابقة تعمل بسرعة.'
      },
      p2: {
        en: 'A smart matching engine considers specialty, location, availability, and preferences to suggest the best opportunities — then guides both sides through scheduling and confirmation.',
        ar: 'محرك مطابقة ذكي يراعي التخصص والموقع والتوفر والتفضيلات لاقتراح أفضل الفرص — ثم يوجه الطرفين عبر الجدولة والتأكيد.'
      },
      p3: {
        en: 'Database optimizations cut query latency dramatically, while a reliable notification system keeps clinicians and facilities in sync around the clock.',
        ar: 'تحسينات قاعدة البيانات خفضت زمن الاستعلامات بشكل كبير، بينما يبقي نظام إشعارات موثوق الأطباء والمنشآت منسقين على مدار الساعة.'
      }
    },
    info: {
      client: { en: 'Extra Pharma GmbH', ar: 'إكسترا فارما' },
      industry: { en: 'Healthcare', ar: 'الرعاية الصحية' },
      year: { en: '2023', ar: '2023' },
      role: { en: 'Backend Architecture', ar: 'هندسة الأنظمة الخلفية' },
      platform: { en: 'Web, Mobile', ar: 'ويب، جوال' },
      location: { en: 'Germany', ar: 'ألمانيا' }
    },
    features: {
      t1: { en: 'Clinician Profiles', ar: 'ملفات الأطباء' },
      x1: { en: 'Rich profiles covering qualifications, specialties, and availability.', ar: 'ملفات شاملة للمؤهلات والتخصصات والتوفر.' },
      t2: { en: 'Shift Scheduling', ar: 'جدولة المناوبات' },
      x2: { en: 'Efficient shift planning and real-time calendar updates.', ar: 'تخطيط فعال للمناوبات وتحديثات تقويم لحظية.' },
      t3: { en: 'Search Optimization', ar: 'تحسين البحث' },
      x3: { en: 'Indexed queries that return relevant matches in milliseconds.', ar: 'استعلامات مفهرسة تعيد نتائج مطابقة خلال أجزاء من الثانية.' },
      t4: { en: 'Matching Engine', ar: 'محرك المطابقة' },
      x4: { en: 'Smart suggestions based on skills, location, and preferences.', ar: 'اقتراحات ذكية بناءً على المهارات والموقع والتفضيلات.' },
      t5: { en: 'Notification System', ar: 'نظام الإشعارات' },
      x5: { en: 'Email and in-app alerts for new opportunities and confirmations.', ar: 'تنبيهات عبر البريد وداخل التطبيق للفرص والتأكيدات الجديدة.' },
      t6: { en: 'Reporting', ar: 'التقارير' },
      x6: { en: 'Dashboards tracking placements, utilization, and performance.', ar: 'لوحات تتبع التوظيف والاستفادة والأداء.' }
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Elasticsearch'],
    process: {
      t1: { en: 'Discovery', ar: 'الاكتشاف' },
      x1: { en: 'Deep dive into clinician workflows and facility needs.', ar: 'دراسة معمقة لسير عمل الأطباء واحتياجات المنشآت.' },
      t2: { en: 'Architecture', ar: 'الهندسة' },
      x2: { en: 'Schema and query design tuned for large datasets.', ar: 'تصميم مخطط واستعلامات محسّنة للبيانات الضخمة.' },
      t3: { en: 'Development', ar: 'التطوير' },
      x3: { en: 'Backend build with continuous performance benchmarking.', ar: 'بناء خلفي مع قياس أداء مستمر.' },
      t4: { en: 'Launch', ar: 'الإطلاق' },
      x4: { en: 'Migration, monitoring, and optimization in production.', ar: 'ترحيل ومراقبة وتحسين في بيئة الإنتاج.' }
    },
    next: { slug: 'elite-royal', title: { en: 'Elite Royal', ar: 'إيليت رويال' }, text: { en: 'An on-demand laundry platform with fully automated order lifecycle management.', ar: 'منصة غسيل عند الطلب مع إدارة مؤتمتة لدورة حياة الطلب.' } }
  }
};

let currentLang = 'en';
let currentProject = 'elite-royal';

function getSlug() {
  const p = new URLSearchParams(window.location.search).get('project');
  return PROJECTS[p] ? p : 'elite-royal';
}

function renderProject(lang) {
  const p = PROJECTS[currentProject];

  document.getElementById('breadcrumbCurrent').textContent = p.name[lang];
  document.getElementById('heroBadge').textContent = p.badge[lang];
  document.getElementById('projectTitle').textContent = p.name[lang];
  document.getElementById('projectSubtitle').textContent = p.subtitle[lang];
  document.getElementById('mockTitle').textContent = p.name[lang];

  document.getElementById('heroBadges').innerHTML = p.badges
    .map(b => `<span class="project-hero-badge">${b[lang]}</span>`)
    .join('');

  ['v1', 'v2', 'v3', 'v4'].forEach(k => {
    document.querySelector(`[data-meta="${k}"]`).textContent = p.meta[k];
  });

  ['l1', 'l2', 'l3', 'l4'].forEach(k => {
    document.querySelector(`[data-meta="${k}"]`).textContent = translations[lang].meta[k];
  });

  ['p1', 'p2', 'p3'].forEach(k => {
    document.querySelector(`[data-overview="${k}"]`).textContent = p.overview[k][lang];
  });

  Object.entries(p.info).forEach(([k, v]) => {
    document.querySelector(`[data-info="${k}"]`).textContent = v[lang];
  });

  for (let i = 1; i <= 6; i++) {
    document.querySelector(`[data-f="t${i}"]`).textContent = p.features[`t${i}`][lang];
    document.querySelector(`[data-f="x${i}"]`).textContent = p.features[`x${i}`][lang];
  }

  for (let i = 1; i <= 4; i++) {
    document.querySelector(`[data-step="t${i}"]`).textContent = p.process[`t${i}`][lang];
    document.querySelector(`[data-step="x${i}"]`).textContent = p.process[`x${i}`][lang];
  }

  document.getElementById('stackTags').innerHTML = p.stack
    .map(s => `<span class="stack-tag">${s}</span>`)
    .join('');

  document.getElementById('nextTitle').textContent = p.next.title[lang];
  document.getElementById('nextText').textContent = p.next.text[lang];
  document.getElementById('nextLink').href = `project-details.html?project=${p.next.slug}`;

  document.title = lang === 'en'
    ? `${p.name.en} - Project Details | SAMO`
    : `${p.name.ar} - تفاصيل المشروع | سامو`;
}

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

  document.getElementById('langText').textContent = lang === 'en' ? 'AR' : 'EN';
  renderProject(lang);
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

      navbar.classList.toggle('scrolled', scrollTop > 80);
      whatsappFloat.classList.toggle('visible', scrollTop > window.innerHeight * 0.4);
      ticking = false;
    });
    ticking = true;
  }
});

currentProject = getSlug();
applyLanguage('en');

AOS.init({ duration: 600, once: true, offset: 60 });

document.querySelectorAll('[data-aos]').forEach(el => {
  const delay = el.dataset.aosDelay;
  if (delay) el.style.transitionDelay = delay + 'ms';
});

lucide.createIcons();
