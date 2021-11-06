// DOM SELECTORS
const primaryHeader = document.getElementById("primary-header");
const heroSection = document.getElementById("hero");

// STICKY / COLOR CHANGING NAVIGATION ON SCROLL
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      primaryHeader.style.backgroundColor = "hsl(200, 100%, 62%)";
      primaryHeader.style.boxShadow = "0px 2px 20px rgba(0, 0, 0, 0.5)";
    } else if (ent.isIntersecting) {
      primaryHeader.style.backgroundColor = "transparent";
      primaryHeader.style.boxShadow = "none";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);
