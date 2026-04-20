(function() {
  const gallery = document.querySelector('.woocommerce-product-gallery');
  if (gallery) {
    // WooCommerce sets inline opacity:0 on the gallery until flexslider fires
    // its init event. Flexslider may not run on this static mirror, so clear it.
    gallery.style.opacity = '1';
    const slides = Array.from(gallery.querySelectorAll('.woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image'));
    if (slides.length) {
      // Seed first slide visible if flexslider hasn't initialized (static mirror case).
      if (!slides.some(s => s.classList.contains('flex-active-slide'))) {
        slides[0].classList.add('flex-active-slide');
      }
      // Sync the 1/2 indicator text when flexslider changes slides.
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
    }
  }

  // Convert stock WooCommerce tabs → accordion (<details>/<summary>). Joggers-2
  // already ships a hand-built .pdp-details section, so we skip there.
  const tabs = document.querySelector('.woocommerce-tabs.wc-tabs-wrapper');
  if (tabs && !document.querySelector('.pdp-details')) {
    const titleLinks = Array.from(tabs.querySelectorAll('ul.wc-tabs > li > a'));
    const entries = titleLinks.map(a => {
      const id = (a.getAttribute('href') || '').split('#').pop();
      const panel = id ? tabs.querySelector('#' + CSS.escape(id)) : null;
      return { title: a.textContent.trim(), panel };
    }).filter(e => e.panel);
    if (entries.length) {
      const section = document.createElement('section');
      section.className = 'pdp-details';
      section.setAttribute('aria-label', 'Product details');
      entries.forEach((e, i) => {
        const d = document.createElement('details');
        if (i === 0) d.setAttribute('open', '');
        const s = document.createElement('summary');
        s.textContent = e.title;
        const body = document.createElement('div');
        body.className = 'pdp-details__body';
        while (e.panel.firstChild) body.appendChild(e.panel.firstChild);
        d.appendChild(s);
        d.appendChild(body);
        section.appendChild(d);
      });
      tabs.replaceWith(section);
    }
  }
})();
