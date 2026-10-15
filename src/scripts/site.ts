// Shared client-side behavior for every page.

// Copy email: swap the button label briefly instead of showing a popup
document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((btn) => {
  const label = btn.textContent;
  btn.addEventListener('click', async () => {
    const email = (window as unknown as { __EMAIL__: string }).__EMAIL__;
    try {
      await navigator.clipboard.writeText(email);
      btn.textContent = '✅ Copied!';
      window.setTimeout(() => (btn.textContent = label), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
});

// Mobile menu
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
    if (link && e.isIntersecting) {
      links.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    }
  }
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach((_, id) => {
  const s = document.getElementById(id);
  if (s) spy.observe(s);
});
