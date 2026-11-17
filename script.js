document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery-grid');

  if (gallery) {
    const photos = Array.from({ length: 10 }, (_, i) =>
      `important-images-web/photo-${String(i + 1).padStart(2, '0')}.jpg`
    );

    photos.forEach((src, i) => {
      const figure = document.createElement('figure');
      figure.className = i === 0 ? 'gallery-main' : '';

      const img = document.createElement('img');
      img.src = src;
      img.alt = `Sri Moogambigai traditional metal sculpture ${i + 1}`;
      img.loading = 'lazy';

      figure.appendChild(img);
      gallery.appendChild(figure);
    });

    const link = document.createElement('a');
    link.className = 'button gallery-more';
    link.href = 'gallery.html';
    link.textContent = 'VIEW FULL GALLERY ↗';
    gallery.after(link);
  }

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
