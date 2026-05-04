/* ================= SELECT ================= */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ================= TERMINAL ================= */
const text = $("#terminal-text");
const btn = $("#enter-btn");

const lines = [
  "Initializing SOC system...",
  "Loading threat detection modules...", // FIXED
  "Connecting...",
  "Access granted.",
  "",
  "Welcome Aaysha Timalsina",
];

let l = 0, c = 0;

function type() {
  if (!text) return;

  if (l < lines.length) {
    if (c < lines[l].length) {
      text.textContent += lines[l][c++];
      setTimeout(type, 25);
    } else {
      text.textContent += "\n";
      l++; c = 0;
      setTimeout(type, 200);
    }
  } else {
    btn.style.display = "inline-block";
  }
}
type();

btn?.addEventListener("click", () => {
  $("#terminal").style.opacity = 0;
  setTimeout(() => $("#terminal").remove(), 500);
});

/* ================= TYPING ================= */
const typing = $(".typing");

if (typing) {
  const words = [
    "SOC Analyst",
    "Digital Forensics",
    "Threat Detection",
    "Cybersecurity"
  ];

  let i = 0, j = 0, del = false;

  function loop() {
    const word = words[i];

    typing.textContent = del
      ? word.substring(0, j--)
      : word.substring(0, j++);

    let speed = del ? 40 : 80;

    if (!del && j === word.length) {
      del = true;
      speed = 1000;
    } else if (del && j === 0) {
      del = false;
      i = (i + 1) % words.length;
    }

    setTimeout(loop, speed);
  }

  loop();
}

/* ================= SCROLL REVEAL ================= */
const sections = $$(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("active");
    }
  });
});

sections.forEach(s => observer.observe(s));

/* ================= NAV ACTIVE ================= */
const navLinks = $$(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) {
      current = sec.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});

/* ================= CURSOR GLOW ================= */
const glow = $(".cursor-glow");

document.addEventListener("mousemove", e => {
  if (glow) {
    glow.style.transform =
      `translate(${e.clientX - 90}px, ${e.clientY - 90}px)`;
  }
});

/* ================= PROGRESS BARS FIX ================= */
const bars = document.querySelectorAll(".bar div");

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute("data-width");
      entry.target.style.width = width;
    }
  });
});

bars.forEach(bar => {
  bar.setAttribute("data-width", bar.style.width);
  bar.style.width = "0";
  barObserver.observe(bar);
});

/* ================= GSAP ANIMATIONS ================= */
gsap.registerPlugin(ScrollTrigger);

/* HERO ANIMATION */
gsap.from(".hero-left h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-left .role", {
  y: 30,
  opacity: 0,
  delay: 0.3
});

gsap.from(".hero-desc", {
  y: 20,
  opacity: 0,
  delay: 0.5
});

gsap.from(".btn-primary, .btn-secondary", {
  scale: 0.9,
  opacity: 0,
  delay: 0.7,
  stagger: 0.2
});

/* RIGHT SIDE CARDS */
gsap.from(".right > *", {
  x: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 70%"
  }
});

/* ABOUT SECTION */
gsap.from(".about-left", {
  x: -80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-left",
    start: "top 75%"
  }
});

gsap.from(".right .stat", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".stats",
    start: "top 80%"
  }
});

/* TERMINAL CARD */
gsap.from(".terminal-card", {
  y: 40,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".terminal-card",
    start: "top 80%"
  }
});

/* ================= PARALLAX ================= */
gsap.to(".cursor-glow", {
  y: 100,
  ease: "none",
  scrollTrigger: {
    scrub: true
  }
});

/* ============== Skills =============== */
/* ================= SKILLS ANIMATION ================= */
gsap.from(".skills-box", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".skills",
    start: "top 70%"
  }
});

/* SKILL BARS ANIMATION */
gsap.utils.toArray(".bar div").forEach(bar => {
  gsap.to(bar, {
    width: bar.style.width,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: bar,
      start: "top 90%"
    }
  });
});

/* ================= CERT ANIMATION ================= */
gsap.from(".cert-card", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".certs",
    start: "top 70%"
  }
});

/* ================= PROJECTS ====================== */
gsap.from(".project-card", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 70%"
  }
});

/* ================= EXPERIENCE ==================== */
gsap.from(".exp-card", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".experience",
    start: "top 70%"
  }
});

/* ================= EDUCATION ====================== */
gsap.from(".edu-card", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".education",
    start: "top 70%"
  }
});

/* ================= CONTACT ======================= */
// Copy email
const email = document.getElementById("email");

email?.addEventListener("click", () => {
  navigator.clipboard.writeText(email.innerText);
  email.innerText = "Copied!";
  setTimeout(() => {
    email.innerText = "aayshatimalsina@gmail.com";
  }, 1500);
});

// Animation
gsap.from(".contact-left", {
  x: -80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%"
  }
});

gsap.from(".contact-right", {
  x: 80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%"
  }
});

/* ================== BLOG ======================= */
gsap.from(".blog-card", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".blog",
    start: "top 70%"
  }
});

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

