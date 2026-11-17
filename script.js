document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll(
    '.hero-copy, .intro-section, .craft-heading, .craft-list, .gallery-heading, .contact-section'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => {
    item.classList.add('reveal');
    observer.observe(item);
  });
});
