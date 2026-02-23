// Room01 landing page JS (final)
// - mobile nav
// - reveal on scroll
// - footer year

(function(){
  const $ = (sel, root=document) => root.querySelector(sel);

  // year
  const years = document.querySelectorAll(".js-year");
  years.forEach((el) => (el.textContent = String(new Date().getFullYear())));
  // mobile nav
  const toggle = $(".nav-toggle");
  const links = $("#navlinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // reveal
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }
})();