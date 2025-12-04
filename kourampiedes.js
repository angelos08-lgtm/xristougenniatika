// Φόρτωση του layout
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση του layout JS
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // Εισαγωγή περιεχομένου και slider JS
    requestAnimationFrame(() => {
      const main = document.getElementById('content');
      main.innerHTML = `
<header>
  <h1 id="titlearticle">Μαγικά Παιδικά Χριστούγεννα</h1>
  <p class="lead">Ιστορίες, παιχνίδια και γλυκές αναμνήσεις για τα παιδιά</p>
</header>

<!-- Hero Slider με κείμενο δίπλα -->
<div class="hero-container">
  <div class="slider" id="heroSlider">
    <div class="slides-wrapper"></div>
    <button class="prev">❮</button>
    <button class="next">❯</button>
    <div class="dots"></div>
  </div>

<!-- 3 Κουτάκια Ιστοριών -->
<div class="story-boxes">
  <div class="story-box">
    <img src="https://images.unsplash.com/photo-1606229063562-07d72f54f986" alt="Το Μικρό Έλατο">
    <h3>Το Μικρό Έλατο</h3>
    <p>Ένα μικρό έλατο θέλει να στολίσει τον κόσμο με φως και χαρά.</p>
  </div>
  <div class="story-box">
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Η Περιπέτεια του Άγιου Βασίλη">
    <h3>Η Περιπέτεια του Άγιου Βασίλη</h3>
    <p>Ακολούθησε τον Άγιο Βασίλη στο μαγικό του ταξίδι.</p>
  </div>
  <div class="story-box">
    <img src="https://images.unsplash.com/photo-1544935455-c5e7f8aa4826" alt="Οι Μικροί Κουραμπιέδες">
    <h3>Οι Μικροί Κουραμπιέδες</h3>
    <p>Γλυκιά ιστορία για μικρά χεράκια που αγαπούν τη μαγειρική.</p>
  </div>
</div>

<!-- DIY / Δραστηριότητες -->
<section id="diy">
  <h2>Δραστηριότητες & Χειροτεχνίες</h2>
  <ul>
    <li>Φτιάξε το δικό σου στολίδι από χαρτί και κορδέλες.</li>
    <li>Ζωγράφισε την αγαπημένη σου χριστουγεννιάτικη σκηνή.</li>
    <li>Μαγείρεψε μελομακάρονα ή κουραμπιέδες με τους γονείς σου.</li>
  </ul>
</section>

<!-- Σύντομες ιστορίες -->
<section id="stories">
  <h2>Μικρές Χριστουγεννιάτικες Ιστορίες</h2>
  <div class="story">
    <h3>Η νύχτα των αστεριών</h3>
    <p>Ένα παιδί κοιτάζει τα αστέρια και φαντάζεται τον κόσμο γεμάτο φως και χαρά.</p>
  </div>
  <div class="story">
    <h3>Το δώρο της καρδιάς</h3>
    <p>Μια ιστορία για ένα δώρο που δεν κοστίζει χρήματα αλλά κάνει μεγάλη χαρά.</p>
  </div>
</section>
      `;

      // ===========================
      // Hero Slider JS
      // ===========================
      const sliderImages = [
        "https://images.unsplash.com/photo-1606229063562-07d72f54f986",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1544935455-c5e7f8aa4826"
      ];

      const slider = document.getElementById('heroSlider');
      const wrapper = slider.querySelector('.slides-wrapper');
      const dotsContainer = slider.querySelector('.dots');
      const prevBtn = slider.querySelector('.prev');
      const nextBtn = slider.querySelector('.next');

      let current = 0;
      const slides = [];
      const dots = [];
      let autoplayInterval = null;
      const AUTOPLAY_DELAY = 4000;

      sliderImages.forEach((src, idx) => {
        const img = document.createElement('img');
        img.src = src;
        if (idx === 0) img.classList.add('active');
        wrapper.appendChild(img);
        slides.push(img);

        const dot = document.createElement('button');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(idx));
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });

      function setActive(idx) {
        slides[current].classList.remove('active');
        slides[idx].classList.add('active');
        dots[current].classList.remove('active');
        dots[idx].classList.add('active');
        current = idx;
      }

      function nextSlide() { setActive((current + 1) % slides.length); }
      function prevSlide() { setActive((current - 1 + slides.length) % slides.length); }
      function goTo(idx) { setActive(idx); restartAutoplay(); }

      function startAutoplay() { stopAutoplay(); autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY); }
      function stopAutoplay() { if (autoplayInterval) clearInterval(autoplayInterval); }
      function restartAutoplay() { stopAutoplay(); startAutoplay(); }

      nextBtn.addEventListener('click', () => { nextSlide(); restartAutoplay(); });
      prevBtn.addEventListener('click', () => { prevSlide(); restartAutoplay(); });

      slider.addEventListener('mouseenter', stopAutoplay);
      slider.addEventListener('mouseleave', startAutoplay);

      startAutoplay();
    }); // requestAnimationFrame
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));

