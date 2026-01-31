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

// ===== PAGE LOAD ANIMATION =====
window.addEventListener("load", () => {
  document.body.classList.remove("preload");

  const sections = document.querySelectorAll(".page-enter");

  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("page-enter-active");
    }, index * 120);
  });
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

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

// ===== HIRE ME BUTTON ACTIVATION =====
document.addEventListener("DOMContentLoaded", () => {
  const hireMeBtn = document.querySelector(".hire-me-btn");
  const ctaInner = document.querySelector(".cta-inner");

  if (hireMeBtn && ctaInner) {
    hireMeBtn.addEventListener("click", () => {
      ctaInner.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});

// ===== PRICE BUTTON ACTION (WITH MESSAGE PREFILL) =====
const pricingButtons = document.querySelectorAll(".price-card .btn");
const selectedPlanInput = document.getElementById("selectedPlan");
const contactSection = document.getElementById("contact");
const messageField = document.querySelector("textarea[name='message']");

pricingButtons.forEach(button => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;

      if (plan === "Custom Web App") {
       contactModal?.classList.add("show");
       return;
      }

    if (selectedPlanInput && plan) {
      selectedPlanInput.value = plan;
    }

    // Auto-fill msg
    if (messageField && plan) {
      if (plan === "Starter Website") {
        messageField.value = 
          "Hi Abraham, I'm interested in the Starter Website package. I need a simple, responsive landing page.";
      }

      if (plan === "Business Website") {
        messageField.value = 
          "Hi Abraham, I'm interested in the Business Website package. I need a multi-page website for my business.";
      }
    }

    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

  
// ===== CONTACT MODAL =====
const quickContactBtn = document.querySelector(".quick-contact-btn");
const contactModal = document.getElementById("contactModal");
const closeModalBtn = document.querySelector(".close-modal");

if (quickContactBtn && contactModal) {
  quickContactBtn.addEventListener("click", () => {
    contactModal.classList.add("show");
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    contactModal.classList.remove("show");
  });
}

contactModal?.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove("show");
  }
});

// ===== EMAILJS FORM SUBMIT =====
(function () {
  emailjs.init("0jcX39JydDUietKbl")
})();

// ===== CTA FORM SUBMIT =====
 const  contactForm = document.getElementById("contactForm");
 const statusMessage = document.querySelector(".form-status");
 const submitBtn = document.querySelector(".cta-btn");

 if (contactForm && submitBtn && statusMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.classList.add("loading");
    submitBtn.textContent = "Sending...";
    statusMessage.textContent = "";
    statusMessage.className = "form-status";

    emailjs.sendForm(
      "service_o4dx2em",
      "template_xkyo4ee",
      contactForm
    )
    .then(() => {
      statusMessage.textContent = "Message sent successfully! I'll get back to you soon.";
      statusMessage.className = "form-status";
      void statusMessage.offsetWidth;
      statusMessage.classList.add("success");

      contactForm.reset();
    })
    .catch((error) => {
      statusMessage.textContent = "Something went wrong. Please try again.";
      statusMessage.className = "form-status";
      void statusMessage.offsetWidth;
      statusMessage.classList.add("error");
    })
    .finally(() => {
      submitBtn.classList.remove("loading");
      submitBtn.textContent = "Send Message";
    });
  });
 }

