// Menu mobile toggle
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

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = button.classList.contains('open');

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

// Intersection Observer per fade-in leggero
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
}

// Log di inizializzazione
console.log('Sito matrimonio caricato ✓');
