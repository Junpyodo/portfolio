(function () {
  const D = window.PORTFOLIO || {};
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.textContent = html;   // 텍스트로만 삽입 (HTML 주입 방지)
    return n;
  };
  const link = (text, url, cls) => {
    if (!url) return el("span", cls, text);
    const a = el("a", cls, text);
    a.href = url; a.target = "_blank"; a.rel = "noopener";
    return a;
  };
  const has = (a) => Array.isArray(a) && a.length > 0;

  // --- site ---
  const site = D.site || {};
  document.title = site.title || "Portfolio";
  $("#brand-title").textContent = site.title || "";
  $("#brand-emoji").textContent = site.emoji || "";
  if (site.emoji) {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${site.emoji}</text></svg>`;
    const ic = document.createElement("link");
    ic.rel = "icon"; ic.href = "data:image/svg+xml," + encodeURIComponent(svg);
    document.head.appendChild(ic);
  }
  $("#footer").textContent = site.footer || "";

  // --- hero ---
  const p = D.profile || {};
  const hero = $("#hero");
  hero.append(el("h1", null, p.name || ""));
  if (p.role) hero.append(el("p", "role", p.role));
  if (p.tagline) hero.append(el("p", "tagline", p.tagline));
  const meta = el("div", "meta");
  if (p.location) meta.append(el("span", null, "📍 " + p.location));
  if (p.email) { const a = el("a", null, "✉️ " + p.email); a.href = "mailto:" + p.email; meta.append(a); }
  if (meta.children.length) hero.append(meta);
  const links = (p.links || []).filter((l) => l.url);
  if (links.length) {
    const box = el("div", "links");
    links.forEach((l) => box.append(link(l.label, l.url, "pill")));
    hero.append(box);
  }

  // --- sections ---
  const root = $("#sections");
  const nav = $("#nav");
  const addSection = (id, title, content) => {
    const s = el("section", "block"); s.id = id;
    s.append(el("h2", null, title), content);
    root.append(s);
    const a = el("a", null, title); a.href = "#" + id; nav.append(a);
  };
  const chips = (arr) => {
    const c = el("div", "chips");
    (arr || []).forEach((t) => c.append(el("span", "chip", t)));
    return c;
  };

  // About
  if (has(D.about)) {
    const w = el("div", "about");
    D.about.forEach((t) => w.append(el("p", null, t)));
    addSection("about", "About", w);
  }

  // Skills
  if (has(D.skills)) {
    const g = el("div", "skill-grid");
    D.skills.forEach((s) => {
      const box = el("div");
      box.append(el("h3", null, s.group), chips(s.items));
      g.append(box);
    });
    addSection("skills", "Skills", g);
  }

  // Cards
  const cards = (D.cards || []).filter((c) => has(c.entries));
  if (cards.length) {
    const g = el("div", "card-grid");
    cards.forEach((c) => {
      const card = el("div", "card");
      card.append(el("h3", null, c.title));
      c.entries.forEach((e) => {
        const row = el("div", "entry");
        const head = el("div");
        head.append(el("span", "name", e.name || ""));
        if (e.org) head.append(el("span", "org", "  ·  " + e.org));
        if (e.period) head.append(el("span", "period", e.period));
        row.append(head);
        if (e.sub) row.append(el("p", "sub", e.sub));
        if (e.note) row.append(el("p", "sub", e.note));
        card.append(row);
      });
      g.append(card);
    });
    const s = el("section", "block"); s.id = "profile-cards"; s.append(g); root.append(s);
  }

  // Papers
  if (has(D.papers)) {
    const w = el("div");
    D.papers.forEach((pp) => {
      const a = el("article", "paper");
      const h = el("h3"); h.append(link(pp.title, pp.url));
      if (pp.year) h.append(el("span", "year", pp.year));
      a.append(h);
      if (pp.meta) a.append(el("div", "meta", pp.meta));
      if (pp.summary) a.append(el("p", null, pp.summary));
      w.append(a);
    });
    addSection("papers", "Paper", w);
  }

  // Carousel
  const carousel = (images, caption) => {
    const wrap = el("div");
    const c = el("div", "carousel");
    let i = 0;
    const slides = images.map((src, k) => {
      const im = el("img", "slide" + (k === 0 ? " on" : ""));
      im.src = src; im.alt = caption || "프로젝트 이미지 " + (k + 1); im.loading = "lazy";
      c.append(im); return im;
    });
    if (slides.length > 1) {
      const prev = el("button", "prev", "‹"), next = el("button", "next", "›");
      prev.setAttribute("aria-label", "이전 이미지"); next.setAttribute("aria-label", "다음 이미지");
      const count = el("span", "count", `1 / ${slides.length}`);
      const go = (d) => {
        slides[i].classList.remove("on");
        i = (i + d + slides.length) % slides.length;
        slides[i].classList.add("on");
        count.textContent = `${i + 1} / ${slides.length}`;
      };
      prev.onclick = () => go(-1); next.onclick = () => go(1);
      c.append(prev, next, count);
    }
    wrap.append(c);
    if (caption) wrap.append(el("p", "caption", caption));
    return wrap;
  };

  // Projects
  const groups = (D.projects || []).filter((g) => has(g.items));
  if (groups.length) {
    const w = el("div");
    groups.forEach((g) => {
      if (g.group) w.append(el("div", "group-title", g.group));
      g.items.forEach((pr) => {
        const a = el("article", "project");
        const h = el("h3"); h.append(link(pr.name, pr.url));
        if (pr.period) h.append(el("span", "period", pr.period));
        a.append(h);
        if (pr.role) a.append(el("div", "role", pr.role));
        if (pr.summary) a.append(el("p", null, pr.summary));
        if (has(pr.images)) a.append(carousel(pr.images, pr.caption));
        if (has(pr.tags)) a.append(chips(pr.tags));
        w.append(a);
      });
    });
    addSection("projects", "Projects", w);
  }
})();
