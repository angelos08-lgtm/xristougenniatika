// Φόρτωση layout
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση του περιεχομένου
    const content = document.getElementById('content');
    content.innerHTML = `
      <div id="kids-gifts">

        <!-- Φίλτρα -->
        <div class="age-filters">
          <button data-age="all" class="active">Όλες οι ηλικίες</button>
          <button data-age="3">3+</button>
          <button data-age="6">6+</button>
          <button data-age="10">10+</button>
        </div>

        <!-- Carousel -->
        <div class="carousel">
          <div class="slides">
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρα+1"></div>
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρα+2"></div>
            <div class="slide"><img src="https://placehold.co/800x350?text=Δώρα+3"></div>
          </div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
        </div>

        <!-- Grid Δώρων -->
        <div class="gift-grid">
          <div class="gift-card" data-age="3">
            <div class="icon bounce">🧸</div>
            <h3>Λούτρινα</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Χριστουγεννιάτικα Λούτρινα</h4>
              <p>Τάρανδοι, χιονάνθρωποι, αρκουδάκια...</p>
            </div>
          </div>

          <div class="gift-card" data-age="6">
            <div class="icon bounce">🎨</div>
            <h3>Καλλιτεχνικά</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Δημιουργικά Σετ</h4>
              <p>Χρώματα, πλαστελίνες, ξυλομπογιές...</p>
            </div>
          </div>

          <div class="gift-card" data-age="10">
            <div class="icon bounce">🎮</div>
            <h3>Ηλεκτρονικά</h3>
            <button class="info-btn">Περισσότερα</button>
            <div class="expand-box">
              <h4>Gaming & Gadgets</h4>
              <p>Κονσόλες, mini games, διαδραστικά παιχνίδια.</p>
            </div>
          </div>
        </div>

      </div>
    `;

    // ===== JS Λειτουργίες =====

    // Φίλτρα
    const buttons = document.querySelectorAll(".age-filters button");
    const cards = document.querySelectorAll(".gift-card");
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
