// =======================
// MENU MOBILE TOGGLE
// =======================
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Chiudi menu quando clicchi su un link
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
  });
});

// =======================
// FAQ ACCORDION
// =======================
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // Chiudi tutti gli altri
    document.querySelectorAll('.faq-question.open').forEach(openBtn => {
      if (openBtn !== button) {
        openBtn.classList.remove('open');
        openBtn.nextElementSibling.classList.remove('open');
      }
    });

    // Toggle il corrente
    button.classList.toggle('open');
    answer.classList.toggle('open');
  });
});

// =======================
// SEZIONI FADE-IN
// =======================
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
}

// =======================
// HERO PARALLAX LEGGERO
// =======================
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    hero.style.transform = `translateY(${window.scrollY * 0.05}px)`;
  });
}

// =======================
// LOG DI INIZIALIZZAZIONE
// =======================
console.log('Sito matrimonio – JS caricato ✓');
