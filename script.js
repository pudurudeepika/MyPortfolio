const sections = document.querySelectorAll('.reveal-on-scroll');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add('active');
    }
  });
});
