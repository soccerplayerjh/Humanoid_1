const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const glow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Subtle parallax for the hero robot
const robot = document.querySelector('.hero-visual');
window.addEventListener('scroll', () => {
  if (!robot) return;
  const y = window.scrollY * 0.08;
  robot.style.marginTop = `${y}px`;
});

// Hover tilt
document.querySelectorAll('.arch-card, .road-card.featured').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
