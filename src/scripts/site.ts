// Shared client-side behavior for every page.

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function toast(msg: string) {
  const el = document.querySelector<HTMLElement>('.toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  window.setTimeout(() => el.classList.remove('show'), 1800);
}

function toggleTheme() {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
}

async function copyEmail() {
  const email = (window as unknown as { __EMAIL__: string }).__EMAIL__;
  try {
    await navigator.clipboard.writeText(email);
    toast('📋 Email copied');
  } catch {
    window.location.href = `mailto:${email}`;
  }
}

// Theme + menu
document.querySelectorAll('[data-theme-toggle]').forEach((b) => b.addEventListener('click', toggleTheme));
document.querySelectorAll('[data-copy-email]').forEach((b) => b.addEventListener('click', copyEmail));

const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
menuBtn?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach((a) =>
  a.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  }),
);

// Cursor glow (pointer devices only)
if (window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
  window.addEventListener('pointermove', (e) => {
    root.style.setProperty('--mx', `${e.clientX}px`);
    root.style.setProperty('--my', `${e.clientY}px`);
  }, { passive: true });
}

// Scroll progress bar
const bar = document.querySelector<HTMLElement>('.scroll-progress');
function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  bar?.style.setProperty('--progress', String(max > 0 ? window.scrollY / max : 0));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const revealer = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealer.unobserve(e.target);
    }
  }
}, { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealer.observe(el));

// Highlight the nav item for the section in view
const links = new Map<string, HTMLAnchorElement>();
document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((a) => {
  const hash = new URL(a.href).hash;
  if (hash) links.set(hash.slice(1), a);
});
const spy = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const link = links.get(e.target.id);
    if (!link) continue;
    if (e.isIntersecting) {
      links.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    }
  }
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach((_, id) => {
  const s = document.getElementById(id);
  if (s) spy.observe(s);
});

// Generic dialogs: <button data-open-dialog="id"> opens <dialog id="id">
document.querySelectorAll<HTMLElement>('[data-open-dialog]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const d = document.getElementById(btn.dataset.openDialog!) as HTMLDialogElement | null;
    d?.showModal();
  });
});
document.querySelectorAll<HTMLDialogElement>('dialog.modal').forEach((d) => {
  d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
  d.querySelectorAll('[data-close]').forEach((c) => c.addEventListener('click', () => d.close()));
});

// Command palette
const palette = document.querySelector<HTMLDialogElement>('dialog.palette');
if (palette) {
  const input = palette.querySelector('input')!;
  const items = [...palette.querySelectorAll<HTMLLIElement>('li')];
  let sel = 0;

  const visible = () => items.filter((i) => !i.hidden);
  const render = () => {
    const v = visible();
    sel = Math.max(0, Math.min(sel, v.length - 1));
    items.forEach((i) => i.classList.remove('sel'));
    v[sel]?.classList.add('sel');
    v[sel]?.scrollIntoView({ block: 'nearest' });
  };
  const open = () => {
    input.value = '';
    items.forEach((i) => (i.hidden = false));
    sel = 0;
    palette.showModal();
    render();
    input.focus();
  };
  const run = (li?: HTMLLIElement) => {
    if (!li) return;
    const target = li.querySelector<HTMLElement>('a, button');
    palette.close();
    target?.click();
  };

  document.querySelectorAll('[data-open-palette]').forEach((b) => b.addEventListener('click', open));
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      palette.open ? palette.close() : open();
    }
  });
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    items.forEach((i) => (i.hidden = !!q && !i.textContent!.toLowerCase().includes(q)));
    sel = 0;
    render();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { sel++; render(); e.preventDefault(); }
    if (e.key === 'ArrowUp') { sel--; render(); e.preventDefault(); }
    if (e.key === 'Enter') { run(visible()[sel]); e.preventDefault(); }
  });
  palette.addEventListener('click', (e) => { if (e.target === palette) palette.close(); });
  palette.querySelectorAll<HTMLButtonElement>('button[data-action]').forEach((b) =>
    b.addEventListener('click', () => {
      palette.close();
      if (b.dataset.action === 'theme') toggleTheme();
      if (b.dataset.action === 'copy-email') copyEmail();
    }),
  );
}
