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
      <div id="adult-gifts">

        <!-- Φίλτρα -->
        <div class="age-filters">
          <button data-category="all" class="active">Όλα</button>
          <button data-category="tech">Τεχνολογία</button>
          <button data-category="home">Σπίτι & Κουζίνα</button>
          <button data-category="hobby">Χόμπι</button>
        </div>

        <!-- Carousel -->
        <div class="carousel">
          <div class="slides">
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρο+1"></div>
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρο+2"></div>
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρο+3"></div>
          </div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
        </div>

        <!-- Grid Δώρων -->
        <div class="gift-grid">

          <!-- Τεχνολογία -->
          <div class="gift-card" data-category="tech">
            <h3>Smartwatch</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Έξυπνο Ρολόι</h4>
              <p>Μετράει βήματα, καρδιακούς παλμούς και ειδοποιήσεις.</p>
              <div class="expand-images">
                <img src="https://placehold.co/150x150?text=Smartwatch1">
                <img src="https://placehold.co/150x150?text=Smartwatch2">
              </div>
            </div>
          </div>

          <!-- Σπίτι & Κουζίνα -->
          <div class="gift-card" data-category="home">
            <h3>Σετ Καφετιέρας</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Καφετιέρα Espresso</h4>
              <p>Μοντέρνος σχεδιασμός για καφέ όπως σε καφετέρια.</p>
              <div class="expand-images">
                <img src="https://placehold.co/150x150?text=Coffee1">
                <img src="https://placehold.co/150x150?text=Coffee2">
              </div>
            </div>
          </div>

          <!-- Χόμπι -->
          <div class="gift-card" data-category="hobby">
            <h3>Σετ Ζωγραφικής</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Καμβάς & Χρώματα</h4>
              <p>Ιδανικό για χαλάρωση και δημιουργικό χρόνο στο σπίτι.</p>
              <div class="expand-images">
                <img src="https://placehold.co/150x150?text=Paint1">
                <img src="https://placehold.co/150x150?text=Paint2">
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ΤΡΕΝΟ -->
      <div id="train">🚂🎄✨</div>
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
