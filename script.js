// ===== PROGRESS BAR (TOP)
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

// ===== THEME TOGGLE FOR DARK MODE
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ===== HEADER =====
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= screenTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active-link");
    }
  });
});

// ===== HAMBURGER MENU =====
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  hamburgerBtn.classList.toggle("active");
});

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  });
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth >= 769) {
    navMenu.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
});

// ===== REVEAL OBSERVER =====
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== PROGRESS BARS =====
const progressBars = document.querySelectorAll(".progress-fill");

const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const value = bar.getAttribute("data-progress");
      bar.style.width = value + "%";
      observer.unobserve(bar);
    }
  });
}, {
  threshold: 0.5
});
progressBars.forEach(bar => progressObserver.observe(bar));

// ===== STATS ANIMATION =====
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCounter = () => {
        const increment = target / 40;
        count += increment;

        if (count < target) {
          counter.textContent = Math.floor(count);
          setTimeout(updateCounter, 40);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
      observer.unobserve(counter);
    }
  });
}, {
  threshold: 0.6
});

counters.forEach(counter => counterObserver.observe(counter));

// ===== HERO TYPING EFFECT =====
const text = "Aspiring Full-Stack Web Developer";
let index = 0;
const speed = 80;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

// ===== HIDDEN PROJECTS
const  viewAllBtn = document.querySelector(".all-works-btn");
const hiddenProjects = document.querySelector(".hidden-projects");

viewAllBtn.addEventListener("click", () => {
  hiddenProjects.classList.toggle("show");

  viewAllBtn.textContent = 
  hiddenProjects.classList.contains("show") 
  ? "Hide Projects"
  : "View All Projects";
});