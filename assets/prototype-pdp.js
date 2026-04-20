(function() {
  const gallery = document.querySelector('.woocommerce-product-gallery');
  if (!gallery) return;
  // WooCommerce sets inline opacity:0 on the gallery until flexslider fires
  // its init event. Flexslider may not run on this static mirror, so clear it.
  gallery.style.opacity = '1';
  const slides = Array.from(gallery.querySelectorAll('.woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image'));
  if (!slides.length) return;

  // Seed first slide visible if flexslider hasn't initialized (static mirror case).
  if (!slides.some(s => s.classList.contains('flex-active-slide'))) {
    slides[0].classList.add('flex-active-slide');
  }

  // Watch flex-active-slide changes (driven by Mercantile's flexslider) and
  // sync the 1/2 indicator text. CSS handles slide visibility via .flex-active-slide.
  const indicator = document.querySelector('.mercantile-slider-indicator');
  function updateIndicator() {
    const activeIdx = slides.findIndex(s => s.classList.contains('flex-active-slide'));
    if (indicator && activeIdx >= 0) {
      indicator.textContent = (activeIdx + 1) + '/' + slides.length;
    }
  }
  updateIndicator();
  const obs = new MutationObserver(updateIndicator);
  slides.forEach(s => obs.observe(s, { attributes: true, attributeFilter: ['class'] }));

})();
