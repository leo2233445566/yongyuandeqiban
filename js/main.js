const CONFIG = {
  class: {
    school: 'XX中学',
    name: '初三（7）班',
    year: 2026,
    desc: '三年时光，我们一起走过。\n从陌生到熟悉，从懵懂到成长，\n每一刻都值得被温柔地记住。',
    stats: [
      { num: 45, label: '位同学' },
      { num: 3, label: '年时光' },
      { num: 12, label: '位老师' },
      { num: 1, label: '个七班' },
    ],
  },
  timeline: [
    { date: '2023.09', title: '第一次成为七班', text: '新教室、新座位、新名字，大家开始把“我们班”说得越来越自然。' },
    { date: '2024.05', title: '第一次并肩上场', text: '运动会、活动课、班级展示，那些掌声和笑声慢慢把我们拧成一股劲。' },
    { date: '2025.10', title: '一起迎接重要的日子', text: '复习资料越堆越高，但也有同桌递来的草稿纸、老师写满一黑板的重点。' },
    { date: '2026.06', title: '毕业不是散场', text: '我们会去不同的学校和城市，但七班会一直留在这个纪念馆里。' },
  ],
  photos: [
    { title: '开学第一天', caption: '从陌生到熟悉，七班的故事从这里开始。', category: '日常', src: null },
    { title: '课堂讨论', caption: '认真、热闹，也有一点停不下来的问题。', category: '课堂', src: null },
    { title: '运动会', caption: '跑道、呐喊、接力棒，还有一起冲过终点的瞬间。', category: '活动', src: null },
    { title: '春游合影', caption: '那天天气很好，大家的笑也很亮。', category: '活动', src: null },
    { title: '自习时光', caption: '安静的教室里，也藏着一起努力的声音。', category: '课堂', src: null },
    { title: '毕业合影', caption: '按下快门的时候，我们都知道这张照片会看很久。', category: '毕业', src: null },
  ],
  classmates: [
    { name: '张三', note: '前程似锦，未来可期。' },
    { name: '李四', note: '感谢相遇，后会有期。' },
    { name: '王五', note: '各自登山，山顶见。' },
    { name: '赵六', note: '愿我们都有很亮的明天。' },
    { name: '陈晨', note: '别忘了七班的笑声。' },
    { name: '林夏', note: '下一站也要勇敢。' },
    { name: '周予', note: '把今天收藏，把未来打开。' },
    { name: '许安', note: '祝我们都成为想成为的人。' },
  ],
  notes: [
    { name: '七班同学', tag: '给七班', date: '2026.06.09', content: '三年好像很长，又好像只是一节课的时间。谢谢七班，谢谢每一个一起走过的人。' },
    { name: '班主任', tag: '给同学们', date: '2026.06.10', content: '愿你们带着在七班养成的认真、善良和勇气，去奔赴更大的世界。' },
    { name: '未来的我', tag: '给未来', date: '2026.06.12', content: '如果以后遇到很难的事，记得你曾经也和大家一起努力跨过去。' },
  ],
  teachers: [
    { role: '语文老师', text: '愿你们笔下有天地，心里有热爱，眼中有光。' },
    { role: '数学老师', text: '人生没有标准答案，但认真推理、勇敢尝试，总会让你更接近答案。' },
    { role: '英语老师', text: 'Go further, stay kind, and keep learning.' },
  ],
};

const state = {
  currentPhotoIndex: 0,
};

document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  initNav();
  initLightbox();
  initReveal();
});

function renderPage() {
  const info = CONFIG.class;
  document.getElementById('nav-year').textContent = info.year;
  document.getElementById('hero-card-year').textContent = info.year;
  document.getElementById('hero-school').textContent = info.school;
  document.getElementById('hero-class').textContent = info.name;
  document.getElementById('hero-desc').textContent = info.desc;
  document.getElementById('footer-title').textContent = `${info.name} · ${info.year}`;

  document.getElementById('hero-stats').innerHTML = info.stats.map((item) => `
    <div class="hero-stat">
      <div class="hero-stat-num">${escapeHtml(item.num)}</div>
      <div class="hero-stat-label">${escapeHtml(item.label)}</div>
    </div>
  `).join('');

  document.getElementById('timeline').innerHTML = CONFIG.timeline.map((item, index) => `
    <article class="timeline-card fade-in">
      <div class="timeline-date">${escapeHtml(item.date)}</div>
      <div>
        <h3>${String(index + 1).padStart(2, '0')} · ${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    </article>
  `).join('');

  document.getElementById('gallery-grid').innerHTML = CONFIG.photos.map((photo, index) => `
    <button class="gallery-item fade-in" type="button" data-photo-index="${index}">
      ${photo.src ? `<img src="${escapeAttribute(photo.src)}" alt="${escapeAttribute(photo.title)}" loading="lazy">` : ''}
      <div class="photo-visual">${escapeHtml(photo.title.charAt(0))}</div>
      <div class="gallery-caption">
        <span>${escapeHtml(photo.category)}</span>
        <h3>${escapeHtml(photo.title)}</h3>
        <p>${escapeHtml(photo.caption)}</p>
      </div>
    </button>
  `).join('');

  document.getElementById('classmates-grid').innerHTML = CONFIG.classmates.map((person) => `
    <article class="classmate-card fade-in">
      <div class="classmate-avatar">${escapeHtml(person.name.charAt(0))}</div>
      <h3>${escapeHtml(person.name)}</h3>
      <p>${escapeHtml(person.note)}</p>
    </article>
  `).join('');

  document.getElementById('notes-grid').innerHTML = CONFIG.notes.map((note) => `
    <article class="note-card fade-in">
      <span class="note-tag">${escapeHtml(note.tag)}</span>
      <h3>${escapeHtml(note.name)}</h3>
      <p>${escapeHtml(note.content)}</p>
      <span class="note-date">${escapeHtml(note.date)}</span>
    </article>
  `).join('');

  document.getElementById('teachers-grid').innerHTML = CONFIG.teachers.map((teacher) => `
    <article class="teacher-card fade-in">
      <span class="teacher-role">${escapeHtml(teacher.role)}</span>
      <p>${escapeHtml(teacher.text)}</p>
    </article>
  `).join('');
}

function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 12);

    let current = sections[0] ? sections[0].id : '';
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 120) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

function initLightbox() {
  document.querySelectorAll('[data-photo-index]').forEach((button) => {
    button.addEventListener('click', () => openLightbox(Number(button.dataset.photoIndex)));
  });

  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => movePhoto(-1));
  document.getElementById('lb-next').addEventListener('click', () => movePhoto(1));
  document.getElementById('lightbox').addEventListener('click', (event) => {
    if (event.target.id === 'lightbox') closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') movePhoto(-1);
    if (event.key === 'ArrowRight') movePhoto(1);
  });
}

function openLightbox(index) {
  state.currentPhotoIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('locked');
}

function movePhoto(step) {
  state.currentPhotoIndex = (state.currentPhotoIndex + step + CONFIG.photos.length) % CONFIG.photos.length;
  updateLightbox();
}

function updateLightbox() {
  const photo = CONFIG.photos[state.currentPhotoIndex];
  const frame = document.getElementById('lb-photo');
  frame.innerHTML = photo.src
    ? `<img src="${escapeAttribute(photo.src)}" alt="${escapeAttribute(photo.title)}">`
    : escapeHtml(photo.title.charAt(0));
  document.getElementById('lb-caption').textContent = `${photo.title} · ${photo.caption}`;
}

function initReveal() {
  const items = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach((item) => observer.observe(item));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
