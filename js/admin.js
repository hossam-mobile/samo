/* ==========================================================================
   SAMO Admin Dashboard — Logic (admin.js)
   Manages all content via localStorage key: "samo_content"
   ========================================================================== */

'use strict';

/* ── Default content (mirrors script.js translations) ──────────────────── */
const DEFAULTS = {
  stats: { years: 3, specialists: 2, domains: 5, products: 10 },
  hero: {
    en: {
      title: 'We Engineer High-Impact Digital Products — Right The First Time',
      subtitle: 'A specialized software development team crafting mobile products and digital experiences with real production experience.',
      cta1: 'Start a Project',
      cta2: 'Our Experience'
    },
    ar: {
      title: 'نهندس منتجات رقمية استثنائية — من المرة الأولى',
      subtitle: 'فريق تطوير برمجيات متخصص يبني منتجات جوال وتجارب رقمية بخبرة إنتاج حقيقية.',
      cta1: 'ابدأ مشروعك',
      cta2: 'خبراتنا'
    }
  },
  services: [
    { id: 's1', icon: 'search',     en: { title: 'Product Discovery', desc: 'Define the right product before writing a single line of code. We help clarify goals, users, and scope.' },
                                     ar: { title: 'اكتشاف المنتج',     desc: 'تحديد المنتج الصحيح قبل كتابة أي سطر كود. نساعد في توضيح الأهداف والمستخدمين والنطاق.' } },
    { id: 's2', icon: 'palette',    en: { title: 'UI/UX Design',       desc: 'Research-backed interfaces and experiences that are intuitive, clean, and aligned with your business goals.' },
                                     ar: { title: 'تصميم UI/UX',        desc: 'واجهات وتجارب مستخدم مدعومة بالبحث، بديهية ونظيفة ومتوافقة مع أهداف عملك.' } },
    { id: 's3', icon: 'smartphone', en: { title: 'Mobile App Development', desc: 'Cross-platform mobile applications built for performance, reliability, and a native feel on every device.' },
                                     ar: { title: 'تطوير تطبيقات الجوال', desc: 'تطبيقات جوال عبر المنصات مبنية للأداء والموثوقية والأحساس الأصلي على كل جهاز.' } },
    { id: 's4', icon: 'rocket',     en: { title: 'MVP Development',    desc: 'Go from idea to a working product quickly. We build lean, validated MVPs ready for real users.' },
                                     ar: { title: 'تطوير MVP',          desc: 'الانتقال من فكرة إلى منتج يعمل بسرعة. نبني MVPs خفيفة وم验证ة وجاهزة للمستخدمين.' } },
    { id: 's5', icon: 'server',     en: { title: 'API & Backend Integration', desc: 'Robust APIs, third-party integrations, and backend systems that power your product at any scale.' },
                                     ar: { title: 'تكامل API والخلفيات', desc: 'واجهات API قوية وتكاملات طرف ثالث وأنظمة خلفية تدعم منتجك بأي نطاق.' } },
    { id: 's6', icon: 'refresh-cw', en: { title: 'Product Iteration & Maintenance', desc: 'Continuous improvement, bug fixes, and feature updates to keep your product evolving with your business.' },
                                     ar: { title: 'تحسين المنتج والصيانة', desc: 'تحسين مستمر وإصلاح أخطاء وتحديث ميزات لإبقاء منتجك يتطور مع أعمالك.' } }
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
  document.getElementById('ov-testimonials').textContent = content.testimonials.length;
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
  document.getElementById('stat-years').value      = content.stats.years;
  document.getElementById('stat-specialists').value = content.stats.specialists;
  document.getElementById('stat-domains').value     = content.stats.domains;
  document.getElementById('stat-products').value    = content.stats.products;
}

document.getElementById('statsForm').addEventListener('submit', e => {
  e.preventDefault();
  content.stats.years      = parseInt(document.getElementById('stat-years').value) || 0;
  content.stats.specialists = parseInt(document.getElementById('stat-specialists').value) || 0;
  content.stats.domains     = parseInt(document.getElementById('stat-domains').value) || 0;
  content.stats.products    = parseInt(document.getElementById('stat-products').value) || 0;
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
  renderTestimonials();
  loadContactForm();
}

initAll();
navigate('panel-overview');
