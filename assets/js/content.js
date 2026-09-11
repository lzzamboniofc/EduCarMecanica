/* Conteúdo real a ser preenchido após receber fotos e avaliações autorizadas. */
window.educCarContent = {
  gallery: [],
  reviews: []
};

document.addEventListener('DOMContentLoaded', () => {
  const data = window.educCarContent;
  const gallerySection = document.getElementById('galeria');
  const galleryGrid = document.getElementById('galleryGrid');
  const filters = document.getElementById('galleryFilters');
  if (gallerySection && galleryGrid && filters && data.gallery.length) {
    gallerySection.hidden = false;
    const categories = ['Todos', ...new Set(data.gallery.map(item => item.category))];
    const draw = category => {
      galleryGrid.innerHTML = data.gallery.filter(item => category === 'Todos' || item.category === category).map(item => `<article class="gallery-item"><img src="${item.image}" alt="${item.alt}"><div><small>${item.category}</small><h3>${item.title}</h3></div></article>`).join('');
    };
    categories.forEach((category, index) => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = category; button.className = index ? '' : 'active';
      button.addEventListener('click', () => { filters.querySelectorAll('button').forEach(item => item.classList.remove('active')); button.classList.add('active'); draw(category); }); filters.appendChild(button);
    }); draw('Todos');
  }
  const reviewsSection = document.getElementById('avaliacoes');
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (reviewsSection && reviewsGrid && data.reviews.length) {
    reviewsSection.hidden = false;
    reviewsGrid.innerHTML = data.reviews.map(review => `<article class="review-card"><div class="stars" aria-label="${review.rating} de 5 estrelas">${'★'.repeat(review.rating)}</div><p>“${review.text}”</p><strong>${review.name}</strong><small>${review.service}</small></article>`).join('');
  }
});
