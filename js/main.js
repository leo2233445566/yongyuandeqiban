const CONFIG = {
  classInfo: {
    school: 'XX中学',
    name: '初三（7）班',
    year: 2026,
    desc: '这是七班的公开毕业纪念馆。登录班级空间后，可以查看私信、写留言、封存时间胶囊，也可以维护自己的同学资料。',
    stats: [
      { num: 45, label: '位同学' },
      { num: 3, label: '年同窗' },
      { num: 12, label: '位老师' },
      { num: 2026, label: '毕业季' },
    ],
  },
  currentUserId: null,
  users: [
    { id: 'u-zhangsan', name: '张三', role: '七班同学', city: '未来学校待定', motto: '前程似锦，未来可期。' },
    { id: 'u-lisi', name: '李四', role: '七班同学', city: '新的城市', motto: '感谢相遇，后会有期。' },
    { id: 'u-teacher', name: '班主任', role: '班主任', city: '原来的教室', motto: '愿你们永远认真，也永远热爱。' },
  ],
  timeline: [
    { date: '2023.09', title: '第一次成为七班', text: '新教室、新座位、新名字，大家开始把“我们班”说得越来越自然。' },
    { date: '2024.05', title: '第一次大型活动', text: '从报名到排练，从紧张到上场，七班第一次真正拧成一股劲。' },
    { date: '2025.10', title: '并肩复习的日子', text: '每天都很满，但每个人都在一点点靠近自己的目标。' },
    { date: '2026.06', title: '毕业不是散场', text: '我们会去不同的地方，但七班会留在这座纪念馆里。' },
  ],
  photos: [
    { title: '开学第一天', caption: '从陌生到熟悉，七班的故事从这里开始。', category: '日常', src: null },
    { title: '课堂讨论', caption: '认真、热闹，也有一点点停不下来的问题。', category: '课堂', src: null },
    { title: '运动会', caption: '跑道、呐喊、接力棒，还有一起冲过终点的瞬间。', category: '活动', src: null },
    { title: '春游合影', caption: '那天天气很好，大家的笑也很亮。', category: '活动', src: null },
    { title: '自习时光', caption: '安静的教室里，也藏着一起努力的声音。', category: '课堂', src: null },
    { title: '毕业合影', caption: '按下快门的时候，我们都知道这张照片会看很久。', category: '毕业', src: null },
  ],
  classmates: [
    { id: 'u-zhangsan', name: '张三', note: '前程似锦，未来可期。' },
    { id: 'u-lisi', name: '李四', note: '感谢相遇，后会有期。' },
    { id: 'u-wangwu', name: '王五', note: '各自登山，山顶见。' },
    { id: 'u-zhaoliu', name: '赵六', note: '愿我们都有很亮的明天。' },
    { id: 'u-chenchen', name: '陈晨', note: '别忘了七班的笑声。' },
    { id: 'u-linxia', name: '林夏', note: '下一站也要勇敢。' },
  ],
  messages: [
    { name: '七班同学', tag: '给七班', date: '2026.06.09', content: '三年好像很长，又好像只是一节课的时间。谢谢七班，谢谢每一个一起走过的人。' },
    { name: '班主任', tag: '给同学们', date: '2026.06.10', content: '愿你们带着在七班养成的认真、善良和勇气，去奔赴更大的世界。' },
    { name: '未来的我', tag: '给未来的自己', date: '2026.06.12', content: '如果以后遇到很难的事，记得你曾经也和大家一起努力跨过去。' },
  ],
  directMessages: [
    {
      id: 'dm-lisi',
      userId: 'u-lisi',
      messages: [
        { from: 'u-lisi', text: '毕业聚会照片整理好了记得发我。', time: '2026.06.09 21:14' },
        { from: 'u-zhangsan', text: '好，我先放到照片馆那一组。', time: '2026.06.09 21:19' },
      ],
    },
    {
      id: 'dm-teacher',
      userId: 'u-teacher',
      messages: [
        { from: 'u-teacher', text: '网站做得很好，记得保护大家的隐私。', time: '2026.06.10 08:30' },
        { from: 'u-zhangsan', text: '收到，第一版先只用假数据。', time: '2026.06.10 08:42' },
      ],
    },
  ],
  capsules: [
    { id: 'cap-1', ownerId: 'u-zhangsan', recipientId: 'u-zhangsan', recipientName: '一年后的自己', openDate: '2026-01-01', content: '希望你没有忘记现在的目标，也没有忘记身边这些珍贵的人。' },
    { id: 'cap-2', ownerId: 'u-zhangsan', recipientId: 'class-7', recipientName: '三年后的七班', openDate: '2029-06-09', content: '等到再见面的时候，我们一定都有很多新的故事可以讲。' },
    { id: 'cap-3', ownerId: 'u-lisi', recipientId: 'u-zhangsan', recipientName: '张三', openDate: '2030-06-09', content: '如果你看到这封胶囊，说明七班的纪念馆真的保存了很久。' },
  ],
  teacherNotes: [
    { name: '语文老师', text: '愿你们笔下有天地，心里有热爱，眼中有光。' },
    { name: '数学老师', text: '人生没有标准答案，但认真推理、勇敢尝试，总会让你更接近答案。' },
    { name: '英语老师', text: 'Go further, stay kind, and keep learning.' },
  ],
};

const state = {
  currentUserId: CONFIG.currentUserId,
  currentSpaceSection: 'home',
  activeThreadId: CONFIG.directMessages[0].id,
  filteredPhotos: CONFIG.photos.slice(),
  currentPhotoIndex: 0,
  toastTimer: null,
};

const sectionMeta = {
  home: ['Class Space', '空间首页'],
  messages: ['Messages', '我的消息'],
  capsules: ['Time Capsule', '时间胶囊'],
  wall: ['Guestbook', '留言墙'],
  photos: ['Photos', '照片馆'],
  people: ['Classmates', '同学录'],
  profile: ['Profile', '我的资料'],
};

document.addEventListener('DOMContentLoaded', () => {
  renderPublicSite();
  initPublicNav();
  initLogin();
  initSpaceNav();
  initLightbox();
  initReveal();
});

function renderPublicSite() {
  const info = CONFIG.classInfo;
  document.getElementById('hero-school').textContent = `${info.school} · ${info.name} · ${info.year}`;
  document.getElementById('hero-desc').textContent = info.desc;
  document.getElementById('public-footer-title').textContent = `${info.name} · ${info.year}`;

  document.getElementById('public-stats').innerHTML = info.stats.map((stat) => `
    <article class="stat-card reveal">
      <div class="stat-number">${escapeHtml(String(stat.num))}</div>
      <div class="stat-label">${escapeHtml(stat.label)}</div>
    </article>
  `).join('');

  document.getElementById('public-timeline').innerHTML = CONFIG.timeline.map((item, index) => `
    <article class="story-card reveal">
      <div class="story-date">${escapeHtml(item.date)}</div>
      <div>
        <h3>${String(index + 1).padStart(2, '0')} · ${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    </article>
  `).join('');

  document.getElementById('featured-gallery').innerHTML = CONFIG.photos.slice(0, 3).map((photo, index) => renderFeaturePhoto(photo, index)).join('');
  document.getElementById('public-classmates').innerHTML = CONFIG.classmates.slice(0, 6).map(renderPublicClassmate).join('');
  document.getElementById('public-message-preview').innerHTML = CONFIG.messages.slice(0, 3).map(renderMessageCard).join('');
  document.getElementById('teacher-list').innerHTML = CONFIG.teacherNotes.map(renderTeacherNote).join('');
}

function renderFeaturePhoto(photo, index) {
  return `<article class="feature-photo reveal" data-index="${index}">
    <button class="photo-visual" type="button" data-photo-index="${index}">${escapeHtml(photo.title.charAt(0))}</button>
    <div class="feature-body">
      <span class="tag">${escapeHtml(photo.category)}</span>
      <h3>${escapeHtml(photo.title)}</h3>
      <p>${escapeHtml(photo.caption)}</p>
    </div>
  </article>`;
}

function renderPublicClassmate(person) {
  return `<article class="classmate-public-card reveal">
    <div class="avatar">${escapeHtml(person.name.charAt(0))}</div>
    <h3>${escapeHtml(person.name)}</h3>
    <p>${escapeHtml(person.note)}</p>
  </article>`;
}

function renderMessageCard(message) {
  return `<article class="message-card reveal">
    <span class="tag">${escapeHtml(message.tag)}</span>
    <h3>${escapeHtml(message.name)}</h3>
    <p>${escapeHtml(message.content)}</p>
  </article>`;
}

function renderTeacherNote(note) {
  return `<article class="teacher-card reveal">
    <span class="tag">${escapeHtml(note.name)}</span>
    <p>${escapeHtml(note.text)}</p>
  </article>`;
}

function initPublicNav() {
  const nav = document.getElementById('public-nav');
  const toggle = document.getElementById('public-nav-toggle');
  const links = document.getElementById('public-links');
  const publicLinks = Array.from(document.querySelectorAll('.public-link'));
  const sections = publicLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  publicLinks.forEach((link) => link.addEventListener('click', () => links.classList.remove('open')));

  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 50);
    let current = sections[0] ? sections[0].id : '';
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 140) current = section.id;
    });
    publicLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  }, { passive: true });

  document.querySelectorAll('[data-photo-index]').forEach((button) => {
    button.addEventListener('click', () => {
      state.filteredPhotos = CONFIG.photos.slice(0, 3);
      openLightbox(Number(button.dataset.photoIndex));
    });
  });
}

function initLogin() {
  document.getElementById('nav-login').addEventListener('click', openLoginModal);
  document.getElementById('hero-login').addEventListener('click', openLoginModal);
  document.getElementById('login-close').addEventListener('click', closeLoginModal);
  document.getElementById('login-modal').addEventListener('click', (event) => {
    if (event.target.id === 'login-modal') closeLoginModal();
  });
  document.getElementById('demo-login-button').addEventListener('click', () => {
    state.currentUserId = 'u-zhangsan';
    closeLoginModal();
    showClassSpace('home');
    showToast('已进入七班空间。');
  });
}

function openLoginModal() {
  document.getElementById('login-modal').classList.add('open');
  document.getElementById('login-modal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
}

function closeLoginModal() {
  document.getElementById('login-modal').classList.remove('open');
  document.getElementById('login-modal').setAttribute('aria-hidden', 'true');
  if (!document.getElementById('lightbox').classList.contains('open')) document.body.classList.remove('locked');
}

function showPublicSite() {
  state.currentUserId = null;
  document.getElementById('class-space').hidden = true;
  document.getElementById('public-site').hidden = false;
  document.body.classList.remove('locked');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showClassSpace(section) {
  document.getElementById('public-site').hidden = true;
  document.getElementById('class-space').hidden = false;
  renderSpaceShell();
  renderClassSpace(section || 'home');
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function initSpaceNav() {
  document.getElementById('space-nav').addEventListener('click', (event) => {
    const button = event.target.closest('[data-section]');
    if (!button) return;
    renderClassSpace(button.dataset.section);
    document.querySelector('.space-sidebar').classList.remove('open');
  });
  document.getElementById('space-menu-toggle').addEventListener('click', () => {
    document.querySelector('.space-sidebar').classList.toggle('open');
  });
  document.getElementById('logout-button').addEventListener('click', () => {
    showPublicSite();
    showToast('已退出班级空间。');
  });
}

function renderSpaceShell() {
  const user = getCurrentUser();
  document.getElementById('space-user-role').textContent = user.role;
  document.getElementById('space-user').innerHTML = `<div class="avatar">${escapeHtml(user.name.charAt(0))}</div><strong>${escapeHtml(user.name)}</strong>`;
}

function renderClassSpace(section) {
  state.currentSpaceSection = section;
  const [kicker, title] = sectionMeta[section] || sectionMeta.home;
  document.getElementById('space-kicker').textContent = kicker;
  document.getElementById('space-title').textContent = title;
  document.querySelectorAll('.space-nav-item').forEach((item) => item.classList.toggle('active', item.dataset.section === section));

  const renderers = {
    home: renderDashboard,
    messages: renderMessagesPanel,
    capsules: renderCapsulesPanel,
    wall: renderWallPanel,
    photos: renderPhotosPanel,
    people: renderPeoplePanel,
    profile: renderProfilePanel,
  };
  document.getElementById('space-content').innerHTML = renderers[section] ? renderers[section]() : renderDashboard();
  bindSpaceInteractions(section);
}

function renderDashboard() {
  const userCapsules = getUserCapsules();
  const lockedCapsules = userCapsules.filter((capsule) => !isCapsuleOpen(capsule.openDate)).length;
  return `
    <div class="dashboard-grid">
      <article class="space-card"><strong>${CONFIG.directMessages.length}</strong><p>私信会话</p></article>
      <article class="space-card"><strong>${lockedCapsules}</strong><p>待开启胶囊</p></article>
      <article class="space-card"><strong>${CONFIG.messages.length}</strong><p>留言墙纸条</p></article>
      <article class="space-card"><strong>${CONFIG.photos.length}</strong><p>照片馆瞬间</p></article>
    </div>
    <div class="space-grid-2">
      <section class="panel">
        <h3>今日纪念提示</h3>
        <p>毕业后的第一个夏天，适合把照片、留言和给未来的话慢慢整理好。</p>
        <div class="panel-list">${CONFIG.timeline.slice(-2).map((item) => `<article class="wall-card"><span class="tag">${escapeHtml(item.date)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join('')}</div>
      </section>
      <section class="panel">
        <h3>最新留言</h3>
        <div class="panel-list">${CONFIG.messages.slice(0, 3).map(renderWallCard).join('')}</div>
      </section>
    </div>`;
}

function renderMessagesPanel() {
  const active = CONFIG.directMessages.find((thread) => thread.id === state.activeThreadId) || CONFIG.directMessages[0];
  if (active) state.activeThreadId = active.id;
  return `<div class="message-layout">
    <div class="thread-list">${CONFIG.directMessages.map((thread) => renderThread(thread, active.id)).join('')}</div>
    <section class="conversation">${active ? renderConversation(active) : '<div class="empty">暂时没有私信。</div>'}</section>
  </div>`;
}

function renderThread(thread, activeId) {
  const user = getUser(thread.userId);
  const last = thread.messages[thread.messages.length - 1];
  return `<button class="message-thread${thread.id === activeId ? ' active' : ''}" type="button" data-thread="${escapeAttribute(thread.id)}">
    <h3>${escapeHtml(user.name)}</h3>
    <p>${escapeHtml(last ? last.text : '暂无消息')}</p>
  </button>`;
}

function renderConversation(thread) {
  const user = getUser(thread.userId);
  return `<div class="conversation-head"><h3>和 ${escapeHtml(user.name)} 的对话</h3><p>${escapeHtml(user.role)}</p></div>
    <div class="message-stream">${thread.messages.map((message) => `<div class="bubble${message.from === state.currentUserId ? ' mine' : ''}">${escapeHtml(message.text)}<span>${escapeHtml(message.time)}</span></div>`).join('')}</div>
    <form class="reply-form" id="reply-form"><input type="text" placeholder="写一条私信"><button class="mini-btn" type="submit">发送</button></form>`;
}

function renderCapsulesPanel() {
  return `<div class="space-grid-2">
    <section class="panel">
      <h3>我的时间胶囊</h3>
      <div class="capsule-grid">${getUserCapsules().map(renderCapsuleCard).join('')}</div>
    </section>
    <form class="form-panel" id="capsule-form" novalidate>
      <h3>新建时间胶囊</h3>
      <label>写给谁<input name="recipientName" type="text" placeholder="例如：未来的七班" required></label>
      <label>开启日期<input name="openDate" type="date" required></label>
      <label>内容<textarea name="content" placeholder="写给未来的一段话" required></textarea></label>
      <p class="form-error" id="capsule-error"></p>
      <button class="primary-btn full" type="submit">封存</button>
    </form>
  </div>`;
}

function renderCapsuleCard(capsule) {
  const open = isCapsuleOpen(capsule.openDate);
  return `<article class="capsule-card">
    <span class="capsule-state${open ? ' open' : ''}">${open ? '可打开' : '已封存'}</span>
    <h3>${escapeHtml(capsule.recipientName)}</h3>
    <p>${escapeHtml(open ? capsule.content : `封存至 ${formatDate(capsule.openDate)} 后可打开`)}</p>
  </article>`;
}

function renderWallPanel() {
  return `<div class="space-grid-2">
    <section class="panel">
      <h3>留言墙</h3>
      <div class="wall-grid">${CONFIG.messages.map(renderWallCard).join('')}</div>
    </section>
    <form class="form-panel" id="wall-form" novalidate>
      <h3>写一张纸条</h3>
      <label>昵称<input name="name" type="text" value="${escapeAttribute(getCurrentUser().name)}" required></label>
      <label>留言对象<select name="tag"><option value="给七班">给七班</option><option value="给老师">给老师</option><option value="给未来的自己">给未来的自己</option></select></label>
      <label>留言<textarea name="content" placeholder="写下想说的话" required></textarea></label>
      <p class="form-error" id="wall-error"></p>
      <button class="primary-btn full" type="submit">发布到留言墙</button>
    </form>
  </div>`;
}

function renderWallCard(message) {
  return `<article class="wall-card"><span class="tag">${escapeHtml(message.tag)}</span><h3>${escapeHtml(message.name)}</h3><p>${escapeHtml(message.content)}</p></article>`;
}

function renderPhotosPanel() {
  return `<div class="photo-grid">${CONFIG.photos.map((photo, index) => `<button class="photo-card" type="button" data-space-photo="${index}"><div class="photo-visual">${escapeHtml(photo.title.charAt(0))}</div><div class="photo-card-body"><span class="tag">${escapeHtml(photo.category)}</span><h3>${escapeHtml(photo.title)}</h3><p>${escapeHtml(photo.caption)}</p></div></button>`).join('')}</div>`;
}

function renderPeoplePanel() {
  return `<input class="search-input" id="people-search" type="search" placeholder="搜索同学姓名"><div class="people-grid" id="people-grid">${CONFIG.classmates.map(renderPersonCard).join('')}</div>`;
}

function renderPersonCard(person) {
  return `<article class="person-card"><div class="avatar">${escapeHtml(person.name.charAt(0))}</div><h3>${escapeHtml(person.name)}</h3><p>${escapeHtml(person.note)}</p></article>`;
}

function renderProfilePanel() {
  const user = getCurrentUser();
  return `<div class="profile-layout">
    <section class="profile-card"><div class="big-avatar">${escapeHtml(user.name.charAt(0))}</div><h3>${escapeHtml(user.name)}</h3><p>${escapeHtml(user.motto)}</p><p><strong>身份：</strong>${escapeHtml(user.role)}</p><p><strong>下一站：</strong>${escapeHtml(user.city)}</p></section>
    <form class="form-panel" id="profile-form">
      <h3>编辑资料</h3>
      <label>姓名<input name="name" value="${escapeAttribute(user.name)}" required></label>
      <label>下一站<input name="city" value="${escapeAttribute(user.city)}" required></label>
      <label>毕业寄语<textarea name="motto" required>${escapeHtml(user.motto)}</textarea></label>
      <p class="form-error" id="profile-error"></p>
      <button class="primary-btn full" type="submit">保存到当前页面</button>
    </form>
  </div>`;
}

function bindSpaceInteractions(section) {
  if (section === 'messages') bindMessages();
  if (section === 'capsules') bindCapsules();
  if (section === 'wall') bindWall();
  if (section === 'photos') bindSpacePhotos();
  if (section === 'people') bindPeopleSearch();
  if (section === 'profile') bindProfile();
}

function bindMessages() {
  document.querySelectorAll('[data-thread]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeThreadId = button.dataset.thread;
      renderClassSpace('messages');
    });
  });
  const form = document.getElementById('reply-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    const text = input.value.trim();
    if (!text) return;
    const thread = CONFIG.directMessages.find((item) => item.id === state.activeThreadId);
    thread.messages.push({ from: state.currentUserId, text, time: formatDateTime(new Date()) });
    renderClassSpace('messages');
    showToast('私信已发送到当前页面。');
  });
}

function bindCapsules() {
  document.getElementById('capsule-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const capsule = {
      id: `cap-${Date.now()}`,
      ownerId: state.currentUserId,
      recipientId: 'class-7',
      recipientName: String(data.get('recipientName') || '').trim(),
      openDate: String(data.get('openDate') || '').trim(),
      content: String(data.get('content') || '').trim(),
    };
    if (!capsule.recipientName || !capsule.openDate || !capsule.content) {
      document.getElementById('capsule-error').textContent = '请把信息填写完整。';
      return;
    }
    CONFIG.capsules.unshift(capsule);
    renderClassSpace('capsules');
    showToast('时间胶囊已封存到当前页面。');
  });
}

function bindWall() {
  document.getElementById('wall-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = {
      name: String(data.get('name') || '').trim(),
      tag: String(data.get('tag') || '').trim(),
      content: String(data.get('content') || '').trim(),
      date: formatDate(new Date().toISOString().slice(0, 10)),
    };
    if (!message.name || !message.tag || !message.content) {
      document.getElementById('wall-error').textContent = '请把留言填写完整。';
      return;
    }
    CONFIG.messages.unshift(message);
    renderClassSpace('wall');
    showToast('留言已发布到当前页面。');
  });
}

function bindSpacePhotos() {
  document.querySelectorAll('[data-space-photo]').forEach((button) => {
    button.addEventListener('click', () => {
      state.filteredPhotos = CONFIG.photos.slice();
      openLightbox(Number(button.dataset.spacePhoto));
    });
  });
}

function bindPeopleSearch() {
  const input = document.getElementById('people-search');
  input.addEventListener('input', () => {
    const keyword = input.value.trim().toLowerCase();
    const list = CONFIG.classmates.filter((person) => person.name.toLowerCase().includes(keyword));
    document.getElementById('people-grid').innerHTML = list.length ? list.map(renderPersonCard).join('') : '<div class="empty">没有找到这位同学。</div>';
  });
}

function bindProfile() {
  document.getElementById('profile-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = getCurrentUser();
    const name = String(data.get('name') || '').trim();
    const city = String(data.get('city') || '').trim();
    const motto = String(data.get('motto') || '').trim();
    if (!name || !city || !motto) {
      document.getElementById('profile-error').textContent = '请把资料填写完整。';
      return;
    }
    user.name = name;
    user.city = city;
    user.motto = motto;
    renderSpaceShell();
    renderClassSpace('profile');
    showToast('资料已保存到当前页面。');
  });
}

function initLightbox() {
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => moveLightbox(-1));
  document.getElementById('lightbox-next').addEventListener('click', () => moveLightbox(1));
  document.getElementById('lightbox').addEventListener('click', (event) => {
    if (event.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLoginModal();
      closeLightbox();
      document.querySelector('.space-sidebar')?.classList.remove('open');
    }
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
  if (!document.getElementById('login-modal').classList.contains('open')) document.body.classList.remove('locked');
}

function moveLightbox(step) {
  if (state.filteredPhotos.length === 0) return;
  state.currentPhotoIndex = (state.currentPhotoIndex + step + state.filteredPhotos.length) % state.filteredPhotos.length;
  updateLightbox();
}

function updateLightbox() {
  const photo = state.filteredPhotos[state.currentPhotoIndex];
  document.getElementById('lightbox-frame').textContent = photo.title.charAt(0);
  document.getElementById('lightbox-caption').textContent = `${photo.title} · ${photo.caption}`;
}

let revealObserver = null;
function initReveal() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));
}

function getCurrentUser() {
  return getUser(state.currentUserId);
}

function getUser(id) {
  return CONFIG.users.find((user) => user.id === id) || CONFIG.users[0];
}

function getUserCapsules() {
  return CONFIG.capsules.filter((capsule) => capsule.ownerId === state.currentUserId || capsule.recipientId === state.currentUserId);
}

function isCapsuleOpen(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(`${dateString}T00:00:00`) <= today;
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  return `${date.getFullYear()}.${pad2(date.getMonth() + 1)}.${pad2(date.getDate())}`;
}

function formatDateTime(date) {
  return `${date.getFullYear()}.${pad2(date.getMonth() + 1)}.${pad2(date.getDate())} ${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

function pad2(value) {
  return String(value).padStart(2, '0');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
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
