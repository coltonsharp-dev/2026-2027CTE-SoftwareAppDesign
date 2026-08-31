/* ═══════════════════════════════════════════════════════════════════════════
   app.js — this file is DONE FOR YOU.

   Do not edit it for this assignment. You will open it in Unit 03, and by then
   most of it will make sense. Reading it now is fine and encouraged; changing
   it is how the buttons stop working an hour before it is due.

   Everything here does one of four things:
     1. remembers your Theme / Type / Layout choices between visits
     2. lights up the button you picked
     3. fades the cards in as you scroll to them
     4. remembers your Pick One answers
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  var root = document.documentElement;

  /* ── 1 · the three control groups ───────────────────────────────────────
     Each group is a set of buttons that writes one value onto <html>.
     "theme" writes data-theme, and styles.css has a block per theme. */

  ["theme", "font", "layout"].forEach(function (name) {
    var group = document.querySelector('[data-control="' + name + '"]');
    if (!group) return;

    // What did they choose last time? localStorage is the browser's memory —
    // it survives a refresh and a closed tab.
    var saved = localStorage.getItem("tim-" + name);
    if (saved) root.setAttribute("data-" + name, saved);

    function paint() {
      var current = root.getAttribute("data-" + name);
      group.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("is-on", b.dataset.value === current);
      });
    }

    group.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      root.setAttribute("data-" + name, btn.dataset.value);
      localStorage.setItem("tim-" + name, btn.dataset.value);
      paint();
    });

    paint();
  });

  /* ── 2 · the cards fade in as you reach them ────────────────────────────
     IntersectionObserver tells us when an element scrolls into view. We add
     the class .is-in, and styles.css does the actual animating. */

  var cards = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && cards.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);       // only once, not every scroll
      });
    }, { threshold: 0.15 });
    cards.forEach(function (c) { io.observe(c); });

    // Safety net. If the observer never fires — printing, an odd browser, a tab
    // restored in the background — the cards would sit at opacity 0 and the
    // student would think their work had vanished. Content is never allowed to
    // depend on an animation succeeding.
    setTimeout(function () {
      cards.forEach(function (c) { c.classList.add("is-in"); });
    }, 1500);
  } else {
    // Older browser, or the observer is unavailable: show them straight away
    // rather than leaving the page permanently blank. Never hide content
    // behind a feature that might not exist.
    cards.forEach(function (c) { c.classList.add("is-in"); });
  }

  /* ── 3 · the Pick One questions ─────────────────────────────────────────── */

  document.querySelectorAll("[data-picker]").forEach(function (picker) {
    var key = "tim-pick-" + picker.dataset.picker;

    function paint() {
      var chosen = localStorage.getItem(key);
      picker.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("is-picked", b.dataset.pick === chosen);
      });
    }

    picker.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      // Clicking the one you already picked clears it — otherwise there is no
      // way to undo an answer, and a control you cannot undo feels broken.
      var chosen = localStorage.getItem(key);
      if (chosen === btn.dataset.pick) localStorage.removeItem(key);
      else localStorage.setItem(key, btn.dataset.pick);
      paint();
    });

    paint();
  });

})();
