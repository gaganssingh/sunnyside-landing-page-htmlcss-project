// DOM SELECTORS
const primaryHeader = document.getElementById("primary-header");
const heroSection = document.getElementById("hero");

// STICKY / COLOR CHANGING NAVIGATION ON SCROLL
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      primaryHeader.style.backgroundColor = "hsl(212, 27%, 19%)";
      primaryHeader.style.backgroundColor = "hsl(200, 100%, 62%)";
    } else if (ent.isIntersecting) {
      primaryHeader.style.backgroundColor = "transparent";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);
