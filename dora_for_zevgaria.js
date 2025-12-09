// Φόρτωση του layout
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση layout_script.js
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // Φόρτωση περιεχομένου
    const content = document.getElementById('content');
    content.innerHTML = `
      <div id="couples-gifts">

        <!-- Φίλτρα -->
        <div class="age-filters">
          <button data-category="all" class="active">Όλα</button>
          <button data-category="romantic">Ρομαντικά</button>
          <button data-category="experience">Εμπειρίες</button>
          <button data-category="home">Σπίτι & Διακόσμηση</button>
        </div>

        <!-- Carousel -->
        <div class="carousel">
          <div class="slides">
            <div class="slide"><img src="https://placehold.co/800x350?text=Ζευγάρι+Δώρο+1"></div>
            <div class="slide"><img src="https://placehold.co/800x350?text=Ζευγάρι+Δώρο+2"></div>
            <div class="slide"><img src="https://placehold.co/800x350?text=Ζευγάρι+Δώρο+3"></div>
          </div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
        </div>

        <!-- Grid Δώρων -->
        <div class="gift-grid">

          <!-- Ρομαντικά -->
          <div class="gift-card" data-category="romantic">
            <h3>Σετ Ρομαντικού Δείπνου</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Δείπνο για δύο</h4>
              <p>Όμορφα αρωματικά κεριά, κρασί και ρομαντική ατμόσφαιρα.</p>
              <div class="expand-images">
                <img src="https://placehold.co/150x150?text=Dinner1">
                <img src="https://placehold.co/150x150?text=Dinner2">
              </div>
            </div>
          </div>

          <!-- Εμπειρίες -->
          <div class="gift-card" data-category="experience">
            <h3>Σπα για Δύο</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Χαλάρωση & Ευεξία</h4>
              <p>Μασάζ, σάουνα και πολυτελής εμπειρία για ζευγάρια.</p>
              <div class="expand-images">
                <img src="https://placehold.co/150x150?text=Spa1">
                <img src="https://placehold.co/150x150?text=Spa2">
              </div>
            </div>
          </div>

          <!-- Σπίτι & Διακόσμηση -->
          <div class="gift-card" data-category="home">
            <h3>Διακοσμητικά & Κεριά</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Χριστουγεννιάτικη Ατμόσφαιρα</h4>
              <p>Κεριά, φαναράκια και μικρά διακοσμητικά για το σπίτι.</p>
              <div class="expand-images">
                <img src="https://placehold.co/150x150?text=Candle1">
                <img src="https://placehold.co/150x150?text=Candle2">
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ΤΡΕΝΟ -->
      <div id="train">🚂❤️✨</div>
    `;

    // ===== JS Λειτουργίες =====

    // Φίλτρα κατηγοριών
    const buttons = document.querySelectorAll(".age-filters button");
    const cards = document.querySelectorAll(".gift-card");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;
        cards.forEach(card => {
          card.style.display = (category === "all" || card.dataset.category === category) ? "block" : "none";
        });
      });
    });

    // Expandable boxes
    document.querySelectorAll(".info-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const box = btn.closest(".gift-card").querySelector(".expand-box");
        document.querySelectorAll(".expand-box.visible").forEach(open => {
          if (open !== box) open.classList.remove("visible");
        });
        box.classList.toggle("visible");
      });
    });

    // Carousel
    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length;
    let index = 0;
    document.querySelector(".next").addEventListener("click", () => {
      index = (index + 1) % slideCount;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });
    document.querySelector(".prev").addEventListener("click", () => {
      index = (index - 1 + slideCount) % slideCount;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });

  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));
