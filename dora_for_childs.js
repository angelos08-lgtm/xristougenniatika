// Φόρτωση του layout
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση layout_script.js
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // Περιεχόμενο της σελίδας
    const main = document.getElementById('content');

    main.innerHTML = `
      <div id="kids-gifts">

        <!-- ΦΙΛΤΡΑ -->
        <div class="age-filters">
          <button data-age="all" class="active">Όλες οι ηλικίες</button>
          <button data-age="3">3+</button>
          <button data-age="6">6+</button>
          <button data-age="10">10+</button>
        </div>

        <!-- CAROUSEL -->
        <div class="carousel">
          <div class="slides">
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρα+για+Παιδιά+1"></div>
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρα+για+Παιδιά+2"></div>
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρα+για+Παιδιά+3"></div>
          </div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
        </div>

        <!-- GRID -->
        <div class="gift-grid">
          <!-- Οι κάρτες παραμένουν όπως τις έχεις -->
        </div>
      </div>

      <!-- ΤΡΕΝΟ -->
      <div id="train">🚂💨💨💨</div>
    `;

    // ----------- JS Λειτουργίες (χωρίς DOMContentLoaded) -----------

    /* ===== ΦΙΛΤΡΑ ===== */
    const buttons = main.querySelectorAll(".age-filters button");
    const cards = main.querySelectorAll(".gift-card");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const age = btn.dataset.age;

        cards.forEach(card => {
          card.style.display = (age === "all" || card.dataset.age === age) ? "block" : "none";
        });
      });
    });

    /* ===== EXPANDABLE BOXES ===== */
    main.querySelectorAll(".info-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".gift-card");
        const box = card.querySelector(".expand-box");

        main.querySelectorAll(".expand-box.visible").forEach(open => {
          if (open !== box) open.classList.remove("visible");
        });

        box.classList.toggle("visible");
      });
    });

    /* ===== CAROUSEL ===== */
    const slides = main.querySelector(".slides");
    const slideCount = main.querySelectorAll(".slide").length;
    let index = 0;

    // Επόμενο slide
    main.querySelector(".next").addEventListener("click", () => {
      index = (index + 1) % slideCount;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });

    // Προηγούμενο slide
    main.querySelector(".prev").addEventListener("click", () => {
      index = (index - 1 + slideCount) % slideCount;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });
  });
