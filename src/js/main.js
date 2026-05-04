// Typewriter
new Typewriter('#typewriteText', { loop: true, delay: 60, deleteSpeed: 40 })
  .typeString('Software Engineer')
  .pauseFor(1600)
  .deleteAll()
  .typeString('DevOps Engineer')
  .pauseFor(1600)
  .deleteAll()
  .typeString('Sys Admin')
  .pauseFor(1600)
  .deleteAll()
  .typeString('CTF Player')
  .pauseFor(1600)
  .deleteAll()
  .typeString('Happy Geek')
  .pauseFor(1600)
  .deleteAll()
  .start();

// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.tl-card, .project-card, .skill-card, .edu-item, .about-card, .freelance-card').forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});
