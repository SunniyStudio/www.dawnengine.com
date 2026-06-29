// DawnEngine theme behavior — vanilla ES modules, no framework.
// Honors prefers-reduced-motion. See docs/03-design-system.md (3.5).

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// 1) Navbar: transparent -> solid on scroll
function initNavScroll() {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// 2) Mobile drawer
function initDrawer() {
  const toggle = document.querySelector("[data-drawer-open]");
  const drawer = document.querySelector("[data-drawer]");
  const close = document.querySelector("[data-drawer-close]");
  if (!toggle || !drawer) return;

  const setOpen = (open) => {
    drawer.classList.toggle("is-open", open);
    document.body.classList.toggle("no-scroll", open);
    toggle.setAttribute("aria-expanded", String(open));
    if (open) {
      drawer.querySelector("a, button")?.focus();
    } else {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => setOpen(true));
  close?.addEventListener("click", () => setOpen(false));
  drawer.addEventListener("click", (e) => {
    if (e.target.matches("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open"))
      setOpen(false);
  });
}

// 3) Language switcher dropdown
function initLangSwitcher() {
  const btn = document.querySelector("[data-lang-btn]");
  const menu = document.querySelector("[data-lang-menu]");
  if (!btn || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!menu.classList.contains("is-open"));
  });
  document.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

// 4) Scroll reveal
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // stagger 60ms within a batch
          setTimeout(
            () => entry.target.classList.add("is-visible"),
            (i % 6) * 60
          );
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );
  els.forEach((el) => io.observe(el));
}

// 5) Hero video: lazy play, skip on reduced motion / mobile data saver
function initHeroVideo() {
  const video = document.querySelector("[data-hero-video]");
  if (!video) return;
  if (reduceMotion) return; // poster stays
  const src = video.dataset.src;
  if (src && !video.src) {
    // assign children sources if provided via data-* (handled in template)
    video.load();
  }
  const play = () => video.play().catch(() => {});
  if ("requestIdleCallback" in window) {
    requestIdleCallback(play);
  } else {
    setTimeout(play, 200);
  }
}

function init() {
  initNavScroll();
  initDrawer();
  initLangSwitcher();
  initReveal();
  initHeroVideo();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
