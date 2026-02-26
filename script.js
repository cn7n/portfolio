const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const links = nav.querySelectorAll("a");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const revealEls = document.querySelectorAll("section, .card, .timeline-item, .project");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

const sectionEls = document.querySelectorAll("main section");

const setActive = () => {
  let current = "";
  sectionEls.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", setActive);
setActive();
