// Φόρτωση του layout
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση του layout JS
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // Εισαγωγή περιεχομένου στο <main id="content">
    requestAnimationFrame(() => {
      const main = document.getElementById('content');
      main.innerHTML = `
<header>
  <h1 id="titlearticle">Χριστουγεννιάτικα Έθιμα στην Ελλάδα</h1>
  <p class="lead">Ανακαλύψτε τα πιο όμορφα και μαγικά χριστουγεννιάτικα έθιμα ανά την Ελλάδα</p>
</header>

<!-- Hero Slider -->
<div class="hero-container">
  <div class="slider" id="heroSlider">
    <div class="slides-wrapper"></div>
    <button class="prev">❮</button>
    <button class="next">❯</button>
    <div class="dots"></div>
  </div>
</div>

<!-- 3 Κουτάκια Χριστουγεννιάτικων Εθίμων -->
<div class="story-boxes">
  <div class="story-box">
    <img src="https://images.unsplash.com/photo-1606229063562-07d72f54f986" alt="Στολισμός Δέντρου">
    <h3>Στολισμός Χριστουγεννιάτικου Δέντρου</h3>
    <p>Παραδοσιακό έθιμο όπου οι οικογένειες στολίζουν δέντρα με φωτάκια και στολίδια.</p>
  </div>
  <div class="story-box">
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Κάλαντα">
    <h3>Κάλαντα</h3>
    <p>Τα παιδιά πηγαίνουν από σπίτι σε σπίτι τραγουδώντας κάλαντα και παίρνοντας λιχουδιές.</p>
  </div>
  <div class="story-box">
    <img src="https://images.unsplash.com/photo-1544935455-c5e7f8aa4826" alt="Παραδοσιακά Γλυκά">
    <h3>Παραδοσιακά Γλυκά</h3>
    <p>Μαγείρεμα μελομακάρονων, κουραμπιέδων και άλλων γλυκών που γεμίζουν τα σπίτια με άρωμα Χριστουγέννων.</p>
  </div>
</div>

<!-- Κείμενο Περιγραφής -->
<section id="customs-info">
  <h2>Παραδοσιακά Χριστουγεννιάτικα Έθιμα</h2>
  <p>Η Ελλάδα είναι γεμάτη μαγικά έθιμα κατά την περίοδο των Χριστουγέννων. Από τα φωτάκια στα δέντρα και τα κάλαντα μέχρι τα παραδοσιακά γλυκά, κάθε γωνιά της χώρας γιορτάζει με χρώμα, χαρά και ζεστασιά.</p>
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
