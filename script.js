const photos = ["1395594593533.jpg", "1395594594102.jpg", "43915336.JPG", "43924141.JPG", "43925418.JPG", "43926698.JPG", "43927978.JPG", "43929242.JPG", "43930510.JPG", "43931803.JPG", "43933063.JPG", "43934307.JPG", "43936838.JPG", "43938057.JPG", "43939266.JPG", "43940540.JPG", "44142032.JPG", "44636495.JPG", "44637630.JPG", "44638891.JPG", "44640146.JPG", "44641422.JPG", "44642692.JPG", "44643965.JPG", "58008482.JPG", "65098139.JPG", "IMG_20160313_133606.jpg", "IMG_20160313_133608.jpg", "IMG_20160313_133619.jpg", "IMG_20160328_084031.jpg", "IMG_20160328_084444.jpg", "IMG_20160328_084447.jpg"];

const hero = document.querySelector('.hero-visual img');
hero.src = 'images/' + encodeURIComponent(photos[0]);
hero.alt = 'Sri Moogambigai metal sculpture';

const gallery = document.getElementById('gallery-grid');
gallery.innerHTML = '';

photos.forEach((photo, index) => {
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const caption = document.createElement('figcaption');

  img.src = 'images/' + encodeURIComponent(photo);
  img.alt = 'Metal sculpture ' + (index + 1);
  img.loading = 'lazy';
  img.onerror = () => figure.remove();

  caption.textContent = String(index + 1).padStart(2, '0') + ' — SRI MOOGAMBIGAI COLLECTION';
  figure.append(img, caption);
  gallery.appendChild(figure);
});
