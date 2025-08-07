// Fade-in on scroll
const features = document.querySelectorAll('.feature');

window.addEventListener('scroll', () => {
  features.forEach(feature => {
    const rect = feature.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      feature.classList.add('visible');
    }
  });
});
