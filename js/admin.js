/* ==========================================================================
   SAMO Admin Dashboard — Logic (admin.js)
   Manages all content via localStorage key: "samo_content"
   ========================================================================== */

'use strict';

/* ── Default content (mirrors script.js translations) ──────────────────── */
const DEFAULTS = {
  stats: { projects: 50, years: 3, clients: 20, team: 15 },
  hero: {
    en: {
      title: 'We Engineer <span class="gradient-text-emerald">High-Impact</span> <span class="gradient-text-coral">Digital Products</span> — Right The First Time',
      subtitle: 'A boutique software collective crafting mission-critical platforms, web applications, and mobile experiences for ambitious leaders worldwide.',
      cta1: 'Explore Portfolio',
      cta2: 'Book Architecture Call'
    },
    ar: {
      title: 'نهندس منتجات <span class="gradient-text-emerald">رقمية</span> <span class="gradient-text-coral">استثنائية</span> — من المرة الأولى',
      subtitle: 'استوديو برمجي متطور يبني منصات حيوية، تطبيقات ويب وجوال فائقة السرعة والقابلية للتوسع للشركات والطموحين.',
      cta1: 'استكشف أعمالنا',
      cta2: 'احجز استشارة هندسية'
    }
  },
  services: [
    { id: 's1', icon: 'code-2',     en: { title: 'Web Development',  desc: 'Responsive, fast websites and web apps built with modern frameworks.' },
                                     ar: { title: 'تطوير الويب',       desc: 'مواقع وتطبيقات ويب سريعة ومتجاوبة مبنية بأحدث الأطر العمل.' } },
    { id: 's2', icon: 'smartphone', en: { title: 'Mobile Apps',       desc: 'Cross-platform mobile applications that feel native on every device.' },
                                     ar: { title: 'تطبيقات الجوال',    desc: 'تطبيقات جوال عبر المنصات تشعر بأنها أصلية على كل جهاز.' } },
    { id: 's3', icon: 'server',     en: { title: 'Backend & APIs',    desc: 'Robust APIs, microservices, and serverless architecture at any scale.' },
                                     ar: { title: 'الخلفيات وواجهات API', desc: 'واجهات API قوية وخدمات مصغرة وهندسة لامركزية بأي نطاق.' } },
    { id: 's4', icon: 'palette',    en: { title: 'UI/UX Design',      desc: 'Clean interfaces and user experiences backed by research and testing.' },
                                     ar: { title: 'تصميم UI/UX',       desc: 'واجهات نظيفة وتجارب مستخدم مدعومة بالبحث والاختبار.' } },
    { id: 's5', icon: 'lightbulb',  en: { title: 'Consulting',        desc: 'Technical strategy, architecture reviews, and team augmentation.' },
                                     ar: { title: 'الاستشارات',         desc: 'استراتيجية تقنية ومراجعة البنية التحتية وتوسيع الفريق.' } },
    { id: 's6', icon: 'git-branch', en: { title: 'DevOps',            desc: 'CI/CD pipelines, cloud infrastructure, and deployment automation.' },
                                     ar: { title: 'العمليات التقنية',   desc: 'خطوط CI/CD والبنية التحتية السحابية وأتمتة النشر.' } }
  ],
  projects: [
    { id: 'p1', slug: 'elite-royal',       badge: 'Backend Development', color: 'coral',
      en: { title: 'Elite Royal',    problem: 'Pickup, processing, and delivery were coordinated manually across branches, causing delays and little visibility into order status.',
                                     result:  'Automated the full order lifecycle with n8n workflows — scheduling, processing, and courier dispatch — replacing manual coordination.' },
      ar: { title: 'إيليت رويال',   problem: 'كانت عمليات الاستلام والمعالجة والتسليم تُنسق يدويًا بين الفروع، مما تسبب في تأخيرات.',
                                     result:  'أتمتة دورة حياة الطلب بالكامل عبر سير عمل n8n — من الجدولة إلى التجهيز وتوزيع السائقين.' } },
    { id: 'p2', slug: 'sanay3ya-baladna', badge: 'Web Development', color: 'emerald',
      en: { title: 'Sanay3ya Baladna', problem: 'Customers had no reliable way to find and book trusted local craftsmen.',
                                        result:  'Built a full-stack marketplace with verified profiles, instant booking, and real-time chat.' },
      ar: { title: 'صنايعية بلدنا',    problem: 'لم يكن لدى العملاء طريقة موثوقة للعثور على حرفيين محليين وحجزهم.',
                                        result:  'بناء منصة متكاملة مع ملفات موثقة وحجز فوري ومحادثة لحظية.' } },
    { id: 'p3', slug: 'ham-ham',          badge: 'Full Stack', color: 'coral',
      en: { title: 'Ham Ham', problem: 'Orders were handled over the phone, so status updates and coordination across branches always lagged.',
                               result:  'Engineered a real-time ordering system with live order tracking and consistent menu and pricing.' },
      ar: { title: 'هم هم',  problem: 'كانت الطلبات تُدار عبر الهاتف، لذا كانت تحديثات الحالة متأخرة.',
                               result:  'هندسة نظام طلبات لحظي مع تتبع مباشر للطلبات وقوائم وأسعار موحدة.' } },
    { id: 'p4', slug: '4aura',            badge: 'Web Development', color: 'emerald',
      en: { title: '4AURA', problem: 'The practice needed a fast, elegant web presence that non-technical staff could update.',
                             result:  'Delivered a high-performance corporate site powered by a custom CMS for events and media.' },
      ar: { title: 'فور أورا', problem: 'احتاجت الشركة إلى حضور إلكتروني سريع وأنيق يمكن تحديثه دون مساعدة هندسية.',
                                result:  'تسليم موقع مؤسسي عالي الأداء مدعوم بنظام محتوى مخصص.' } },
    { id: 'p5', slug: 'extra-pharma',     badge: 'Backend Development', color: 'coral',
      en: { title: 'Extra Pharma', problem: 'Matching thousands of clinician profiles to facility shifts was slow.',
                                    result:  'Optimized queries to return relevant matches in milliseconds and streamlined shift scheduling.' },
      ar: { title: 'إكسترا فارما', problem: 'كانت مطابقة آلاف ملفات الأطباء مع مناوبات المنشآت بطيئة.',
                                    result:  'تحسين الاستعلامات لتُعيد النتائج المطابقة خلال أجزاء من الثانية.' } }
  ],
  testimonials: [
    { id: 't1', color: 'emerald',
      en: { quote: '"SAMO transformed our outdated platform into a modern, scalable product. The team\'s technical expertise and communication were exceptional."', role: 'CTO, FintechScale' },
      ar: { quote: '"حولت سامو منصتنا القديمة إلى منتج حديث وقابل للتوسع."', role: 'المدير التقني، FintechScale' } },
    { id: 't2', color: 'coral',
      en: { quote: '"Working with SAMO felt like an extension of our own team. They delivered ahead of schedule and the quality exceeded our expectations."', role: 'Founder, CloudMart' },
      ar: { quote: '"العمل مع سامو كان كأنهم امتداد لفريقنا."', role: 'المؤسس، CloudMart' } },
    { id: 't3', color: 'emerald',
      en: { quote: '"They didn\'t just build our app — they helped us think through the product strategy. A rare combination of technical and strategic thinking."', role: 'Product Lead, HealthBridge' },
      ar: { quote: '"لم يبنوا تطبيقنا فقط — بل ساعدونا في التفكير في استراتيجية المنتج."', role: 'قائد المنتج، HealthBridge' } }
  ],
  contact: {
    email: 'info@samo.ws',
    whatsapp: '01553050260',
    linkedin: '#',
    twitter: 'https://x.com/Sam_ui0ux',
    facebook: 'https://www.facebook.com/share/1BYTmd4L1g/',
    instagram: 'https://www.instagram.com/samo.ws',
    tiktok: 'https://www.tiktok.com/@samo.ws',
    behance: '#'
  }
};

/* ── Storage helpers ────────────────────────────────────────────────────── */
const STORAGE_KEY = 'samo_content';

function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : structuredClone(DEFAULTS);
  } catch { return structuredClone(DEFAULTS); }
}

function saveContent(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/* ── State ──────────────────────────────────────────────────────────────── */
let content = loadContent();

/* ── Toast ──────────────────────────────────────────────────────────────── */
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
let toastTimer;

function showToast(msg, type = 'success') {
  clearTimeout(toastTimer);
  toastMsg.textContent = msg;
  toast.className = `show ${type}`;
  const icon = toast.querySelector('.toast-icon');
  icon.innerHTML = type === 'success'
    ? '<polyline points="20 6 9 17 4 12"></polyline>'
    : '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
  toastTimer = setTimeout(() => { toast.className = ''; }, 3200);
}

/* ── Navigation ─────────────────────────────────────────────────────────── */
function navigate(panelId) {
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.add('active');
  const navItem = document.querySelector(`[data-panel="${panelId}"]`);
  if (navItem) navItem.classList.add('active');
  // Close mobile sidebar
  document.getElementById('adminSidebar').classList.remove('open');
}

document.querySelectorAll('.nav-item[data-panel]').forEach(item => {
  item.addEventListener('click', () => navigate(item.dataset.panel));
});

/* ── Mobile sidebar toggle ──────────────────────────────────────────────── */
const menuToggle = document.getElementById('menuToggle');
const adminSidebar = document.getElementById('adminSidebar');
if (menuToggle) {
  menuToggle.addEventListener('click', () => adminSidebar.classList.toggle('open'));
}

/* ── Modal helpers ──────────────────────────────────────────────────────── */
let activeModal = null;

function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  activeModal = overlay;
}

function closeModal(id) {
  const overlay = id ? document.getElementById(id) : activeModal;
  if (!overlay) return;
  overlay.classList.remove('open');
  activeModal = null;
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); });
});

/* ── Lang tabs inside modals ────────────────────────────────────────────── */
document.querySelectorAll('.lang-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const modal = tab.closest('.modal');
    modal.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
    modal.querySelectorAll('.lang-pane').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const target = modal.querySelector(`[data-lang="${tab.dataset.lang}"]`);
    if (target) target.classList.add('active');
  });
});

/* ══════════════════════════════════════════════════════════════════════════
   OVERVIEW
   ══════════════════════════════════════════════════════════════════════════ */
function renderOverview() {
  document.getElementById('ov-services').textContent = content.services.length;
  document.getElementById('ov-projects').textContent = content.projects.length;
  document.getElementById('ov-testimonials').textContent = content.testimonials.length;
  document.getElementById('ov-stats-projects').textContent = content.stats.projects + '+';
}

/* ══════════════════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════════════════ */
function loadHeroForm() {
  const h = content.hero;
  document.getElementById('hero-en-title').value    = h.en.title.replace(/<[^>]*>/g, '');
  document.getElementById('hero-en-subtitle').value = h.en.subtitle;
  document.getElementById('hero-en-cta1').value     = h.en.cta1;
  document.getElementById('hero-en-cta2').value     = h.en.cta2;
  document.getElementById('hero-ar-title').value    = h.ar.title.replace(/<[^>]*>/g, '');
  document.getElementById('hero-ar-subtitle').value = h.ar.subtitle;
  document.getElementById('hero-ar-cta1').value     = h.ar.cta1;
  document.getElementById('hero-ar-cta2').value     = h.ar.cta2;
}

document.getElementById('heroForm').addEventListener('submit', e => {
  e.preventDefault();
  content.hero.en.title    = document.getElementById('hero-en-title').value;
  content.hero.en.subtitle = document.getElementById('hero-en-subtitle').value;
  content.hero.en.cta1     = document.getElementById('hero-en-cta1').value;
  content.hero.en.cta2     = document.getElementById('hero-en-cta2').value;
  content.hero.ar.title    = document.getElementById('hero-ar-title').value;
  content.hero.ar.subtitle = document.getElementById('hero-ar-subtitle').value;
  content.hero.ar.cta1     = document.getElementById('hero-ar-cta1').value;
  content.hero.ar.cta2     = document.getElementById('hero-ar-cta2').value;
  saveContent(content);
  showToast('Hero section saved!');
});

/* ══════════════════════════════════════════════════════════════════════════
   STATS
   ══════════════════════════════════════════════════════════════════════════ */
function loadStatsForm() {
  document.getElementById('stat-projects').value = content.stats.projects;
  document.getElementById('stat-years').value    = content.stats.years;
  document.getElementById('stat-clients').value  = content.stats.clients;
  document.getElementById('stat-team').value     = content.stats.team;
}

document.getElementById('statsForm').addEventListener('submit', e => {
  e.preventDefault();
  content.stats.projects = parseInt(document.getElementById('stat-projects').value) || 0;
  content.stats.years    = parseInt(document.getElementById('stat-years').value) || 0;
  content.stats.clients  = parseInt(document.getElementById('stat-clients').value) || 0;
  content.stats.team     = parseInt(document.getElementById('stat-team').value) || 0;
  saveContent(content);
  renderOverview();
  showToast('Stats saved!');
});

/* ══════════════════════════════════════════════════════════════════════════
   SERVICES
   ══════════════════════════════════════════════════════════════════════════ */
let editingServiceId = null;

function renderServices() {
  const list = document.getElementById('servicesList');
  list.innerHTML = '';
  if (!content.services.length) {
    list.innerHTML = '<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/></svg><p>No services yet</p></div>';
    return;
  }
  content.services.forEach((svc, i) => {
    const row = document.createElement('div');
    row.className = 'item-row';
    row.innerHTML = `
      <div class="item-row-icon ${i % 2 === 0 ? 'emerald' : 'coral'}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
        </svg>
      </div>
      <div class="item-row-body">
        <div class="item-row-title">${svc.en.title}</div>
        <div class="item-row-sub">${svc.ar.title}</div>
      </div>
      <div class="item-row-actions">
        <button class="btn btn-ghost btn-icon btn-sm" title="Edit" onclick="openServiceModal('${svc.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn btn-danger btn-icon btn-sm" title="Delete" onclick="deleteService('${svc.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
        </button>
      </div>`;
    list.appendChild(row);
  });
}

function openServiceModal(id) {
  editingServiceId = id || null;
  const modal = document.getElementById('serviceModal');
  modal.querySelector('.modal-title').textContent = id ? 'Edit Service' : 'Add Service';

  // Reset lang tabs
  modal.querySelectorAll('.lang-tab').forEach((t, i) => t.classList.toggle('active', i === 0));
  modal.querySelectorAll('.lang-pane').forEach((p, i) => p.classList.toggle('active', i === 0));

  if (id) {
    const svc = content.services.find(s => s.id === id);
    if (!svc) return;
    document.getElementById('svc-en-title').value = svc.en.title;
    document.getElementById('svc-en-desc').value  = svc.en.desc;
    document.getElementById('svc-ar-title').value = svc.ar.title;
    document.getElementById('svc-ar-desc').value  = svc.ar.desc;
    document.getElementById('svc-icon').value     = svc.icon || '';
  } else {
    document.getElementById('svcForm').reset();
  }
  openModal('serviceModal');
}

document.getElementById('svcForm').addEventListener('submit', e => {
  e.preventDefault();
  const entry = {
    id:   editingServiceId || ('s' + Date.now()),
    icon: document.getElementById('svc-icon').value.trim() || 'star',
    en: { title: document.getElementById('svc-en-title').value, desc: document.getElementById('svc-en-desc').value },
    ar: { title: document.getElementById('svc-ar-title').value, desc: document.getElementById('svc-ar-desc').value }
  };
  if (editingServiceId) {
    const idx = content.services.findIndex(s => s.id === editingServiceId);
    if (idx !== -1) content.services[idx] = entry;
  } else {
    content.services.push(entry);
  }
  saveContent(content);
  renderServices();
  renderOverview();
  closeModal('serviceModal');
  showToast(editingServiceId ? 'Service updated!' : 'Service added!');
});

function deleteService(id) {
  if (!confirm('Delete this service?')) return;
  content.services = content.services.filter(s => s.id !== id);
  saveContent(content);
  renderServices();
  renderOverview();
  showToast('Service deleted.', 'error');
}

/* ══════════════════════════════════════════════════════════════════════════
   PROJECTS
   ══════════════════════════════════════════════════════════════════════════ */
let editingProjectId = null;

function renderProjects() {
  const list = document.getElementById('projectsList');
  list.innerHTML = '';
  if (!content.projects.length) {
    list.innerHTML = '<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8L6 7h12l-2-4z"/></svg><p>No projects yet</p></div>';
    return;
  }
  content.projects.forEach((proj) => {
    const row = document.createElement('div');
    row.className = 'item-row';
    row.innerHTML = `
      <div class="item-row-icon ${proj.color || 'emerald'}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8L6 7h12l-2-4z"/></svg>
      </div>
      <div class="item-row-body">
        <div class="item-row-title">${proj.en.title} <span class="badge badge-neutral" style="margin-left:6px">${proj.badge}</span></div>
        <div class="item-row-sub">${proj.ar.title} · /${proj.slug}</div>
      </div>
      <div class="item-row-actions">
        <button class="btn btn-ghost btn-icon btn-sm" title="Edit" onclick="openProjectModal('${proj.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn btn-danger btn-icon btn-sm" title="Delete" onclick="deleteProject('${proj.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
        </button>
      </div>`;
    list.appendChild(row);
  });
}

function openProjectModal(id) {
  editingProjectId = id || null;
  const modal = document.getElementById('projectModal');
  modal.querySelector('.modal-title').textContent = id ? 'Edit Project' : 'Add Project';

  modal.querySelectorAll('.lang-tab').forEach((t, i) => t.classList.toggle('active', i === 0));
  modal.querySelectorAll('.lang-pane').forEach((p, i) => p.classList.toggle('active', i === 0));

  if (id) {
    const proj = content.projects.find(p => p.id === id);
    if (!proj) return;
    document.getElementById('proj-en-title').value   = proj.en.title;
    document.getElementById('proj-en-problem').value = proj.en.problem;
    document.getElementById('proj-en-result').value  = proj.en.result;
    document.getElementById('proj-ar-title').value   = proj.ar.title;
    document.getElementById('proj-ar-problem').value = proj.ar.problem;
    document.getElementById('proj-ar-result').value  = proj.ar.result;
    document.getElementById('proj-badge').value  = proj.badge;
    document.getElementById('proj-slug').value   = proj.slug;
    document.getElementById('proj-color').value  = proj.color || 'emerald';
  } else {
    document.getElementById('projForm').reset();
  }
  openModal('projectModal');
}

document.getElementById('projForm').addEventListener('submit', e => {
  e.preventDefault();
  const entry = {
    id:    editingProjectId || ('p' + Date.now()),
    slug:  document.getElementById('proj-slug').value.trim() || 'project',
    badge: document.getElementById('proj-badge').value.trim(),
    color: document.getElementById('proj-color').value,
    en: {
      title:   document.getElementById('proj-en-title').value,
      problem: document.getElementById('proj-en-problem').value,
      result:  document.getElementById('proj-en-result').value
    },
    ar: {
      title:   document.getElementById('proj-ar-title').value,
      problem: document.getElementById('proj-ar-problem').value,
      result:  document.getElementById('proj-ar-result').value
    }
  };
  if (editingProjectId) {
    const idx = content.projects.findIndex(p => p.id === editingProjectId);
    if (idx !== -1) content.projects[idx] = entry;
  } else {
    content.projects.push(entry);
  }
  saveContent(content);
  renderProjects();
  renderOverview();
  closeModal('projectModal');
  showToast(editingProjectId ? 'Project updated!' : 'Project added!');
});

function deleteProject(id) {
  if (!confirm('Delete this project?')) return;
  content.projects = content.projects.filter(p => p.id !== id);
  saveContent(content);
  renderProjects();
  renderOverview();
  showToast('Project deleted.', 'error');
}

/* ══════════════════════════════════════════════════════════════════════════
   TESTIMONIALS
   ══════════════════════════════════════════════════════════════════════════ */
let editingTestimonialId = null;

function renderTestimonials() {
  const list = document.getElementById('testimonialsList');
  list.innerHTML = '';
  if (!content.testimonials.length) {
    list.innerHTML = '<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><p>No testimonials yet</p></div>';
    return;
  }
  content.testimonials.forEach(t => {
    const row = document.createElement('div');
    row.className = 'item-row';
    const preview = t.en.quote.slice(0, 70).replace(/^[""]/, '') + '…';
    row.innerHTML = `
      <div class="item-row-icon ${t.color || 'emerald'}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </div>
      <div class="item-row-body">
        <div class="item-row-title">${t.en.role}</div>
        <div class="item-row-sub">${preview}</div>
      </div>
      <div class="item-row-actions">
        <button class="btn btn-ghost btn-icon btn-sm" title="Edit" onclick="openTestimonialModal('${t.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn btn-danger btn-icon btn-sm" title="Delete" onclick="deleteTestimonial('${t.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
        </button>
      </div>`;
    list.appendChild(row);
  });
}

function openTestimonialModal(id) {
  editingTestimonialId = id || null;
  const modal = document.getElementById('testimonialModal');
  modal.querySelector('.modal-title').textContent = id ? 'Edit Testimonial' : 'Add Testimonial';

  modal.querySelectorAll('.lang-tab').forEach((t, i) => t.classList.toggle('active', i === 0));
  modal.querySelectorAll('.lang-pane').forEach((p, i) => p.classList.toggle('active', i === 0));

  if (id) {
    const t = content.testimonials.find(x => x.id === id);
    if (!t) return;
    document.getElementById('testi-en-quote').value = t.en.quote;
    document.getElementById('testi-en-role').value  = t.en.role;
    document.getElementById('testi-ar-quote').value = t.ar.quote;
    document.getElementById('testi-ar-role').value  = t.ar.role;
    document.getElementById('testi-color').value    = t.color || 'emerald';
  } else {
    document.getElementById('testiForm').reset();
  }
  openModal('testimonialModal');
}

document.getElementById('testiForm').addEventListener('submit', e => {
  e.preventDefault();
  const entry = {
    id:    editingTestimonialId || ('t' + Date.now()),
    color: document.getElementById('testi-color').value,
    en: { quote: document.getElementById('testi-en-quote').value, role: document.getElementById('testi-en-role').value },
    ar: { quote: document.getElementById('testi-ar-quote').value, role: document.getElementById('testi-ar-role').value }
  };
  if (editingTestimonialId) {
    const idx = content.testimonials.findIndex(t => t.id === editingTestimonialId);
    if (idx !== -1) content.testimonials[idx] = entry;
  } else {
    content.testimonials.push(entry);
  }
  saveContent(content);
  renderTestimonials();
  renderOverview();
  closeModal('testimonialModal');
  showToast(editingTestimonialId ? 'Testimonial updated!' : 'Testimonial added!');
});

function deleteTestimonial(id) {
  if (!confirm('Delete this testimonial?')) return;
  content.testimonials = content.testimonials.filter(t => t.id !== id);
  saveContent(content);
  renderTestimonials();
  renderOverview();
  showToast('Testimonial deleted.', 'error');
}

/* ══════════════════════════════════════════════════════════════════════════
   CONTACT
   ══════════════════════════════════════════════════════════════════════════ */
function loadContactForm() {
  const c = content.contact;
  document.getElementById('contact-email').value     = c.email     || '';
  document.getElementById('contact-whatsapp').value  = c.whatsapp  || '';
  document.getElementById('contact-linkedin').value  = c.linkedin  || '';
  document.getElementById('contact-twitter').value   = c.twitter   || '';
  document.getElementById('contact-facebook').value  = c.facebook  || '';
  document.getElementById('contact-instagram').value = c.instagram || '';
  document.getElementById('contact-tiktok').value    = c.tiktok    || '';
  document.getElementById('contact-behance').value   = c.behance   || '';
}

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  content.contact = {
    email:     document.getElementById('contact-email').value.trim(),
    whatsapp:  document.getElementById('contact-whatsapp').value.trim(),
    linkedin:  document.getElementById('contact-linkedin').value.trim(),
    twitter:   document.getElementById('contact-twitter').value.trim(),
    facebook:  document.getElementById('contact-facebook').value.trim(),
    instagram: document.getElementById('contact-instagram').value.trim(),
    tiktok:    document.getElementById('contact-tiktok').value.trim(),
    behance:   document.getElementById('contact-behance').value.trim()
  };
  saveContent(content);
  showToast('Contact info saved!');
});

/* ══════════════════════════════════════════════════════════════════════════
   TOOLBAR — Export & Reset
   ══════════════════════════════════════════════════════════════════════════ */
document.getElementById('btnExport').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'samo_content.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Content exported!');
});

document.getElementById('btnReset').addEventListener('click', () => {
  if (!confirm('Reset ALL content to defaults? This cannot be undone.')) return;
  localStorage.removeItem(STORAGE_KEY);
  content = structuredClone(DEFAULTS);
  initAll();
  showToast('Reset to defaults.', 'error');
});

document.getElementById('btnViewSite').addEventListener('click', () => {
  window.open('index.html', '_blank');
});

/* ══════════════════════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════════════════════ */
function initAll() {
  renderOverview();
  loadHeroForm();
  loadStatsForm();
  renderServices();
  renderProjects();
  renderTestimonials();
  loadContactForm();
}

initAll();
navigate('panel-overview');
