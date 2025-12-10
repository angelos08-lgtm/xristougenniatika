// Φόρτωση του layout
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση layout_script.js
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

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
            <div class="slide"><img src="https://www.haritidis.gr/blog/wp-content/uploads/2018/12/Christmas-gifts-for-kids.jpg"></div>
            <div class="slide"><img src="https://i0.wp.com/citycampus.gr/wp-content/uploads/2020/12/Style-My-Day-%CE%A7%CF%81%CE%B9%CF%83%CF%84%CE%BF%CF%8D%CE%B3%CE%B5%CE%BD%CE%BD%CE%B1...-%CE%99%CE%B4%CE%AD%CE%B5%CF%82-%CE%B3%CE%B9%CE%B1-%CE%B4%CF%8E%CF%81%CE%B1-%CE%B3%CE%B9%CE%B1-%CE%B3%CF%85%CE%BD%CE%B1%CE%AF%CE%BA%CE%B5%CF%82-%CE%BA%CE%B9-%CE%AC%CE%BD%CE%B4%CF%81%CE%B5%CF%82-1.jpg?fit=605%2C410&ssl=1"></div>
            <div class="slide"><img src="https://invelopkids.gr/wp-content/uploads/2022/11/xmas-gifts.png"></div>
          </div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
        </div>

        <!-- Grid Δώρων -->
        <div class="gift-grid">
       <!-- ΛΟΥΤΡΙΝΑ -->
    <div class="gift-card" data-age="3">
      <div class="icon bounce">🧸</div>
      <h3>Λούτρινα</h3>
      <button class="info-btn">Περισσότερα</button>

      <div class="expand-box">
        <h4>Χριστουγεννιάτικα Λούτρινα</h4>
        <p>Τάρανδοι, χιονάνθρωποι, αρκουδάκια και πολλά ακόμα!</p>
        <div class="expand-images">
          <img src="https://placehold.co/150x150?text=Reindeer">
          <img src="https://placehold.co/150x150?text=Snowman">
          <img src="https://placehold.co/150x150?text=Teddy">
        </div>
      </div>
    </div>

    <!-- ΚΑΛΛΙΤΕΧΝΙΚΑ -->
    <div class="gift-card" data-age="6">
      <div class="icon bounce">🎨</div>
      <h3>Καλλιτεχνικά</h3>
      <button class="info-btn">Περισσότερα</button>

      <div class="expand-box">
        <h4>Δημιουργικά Σετ</h4>
        <p>Χρώματα, πλαστελίνες, χάντρες, ξυλομπογιές.</p>
        <div class="expand-images">
          <img src="https://placehold.co/150x150?text=Paint">
          <img src="https://placehold.co/150x150?text=Clay">
          <img src="https://placehold.co/150x150?text=Crafts">
        </div>
      </div>
    </div>

    <!-- ΗΛΕΚΤΡΟΝΙΚΑ -->
    <div class="gift-card" data-age="10">
      <div class="icon bounce">🎮</div>
      <h3>Ηλεκτρονικά Παιχνίδια</h3>
      <button class="info-btn">Περισσότερα</button>

      <div class="expand-box">
        <h4>Gaming & Gadgets</h4>
        <p>Κονσόλες, mini games, διαδραστικά παιχνίδια.</p>
        <div class="expand-images">
          <img src="https://placehold.co/150x150?text=Console">
          <img src="https://placehold.co/150x150?text=Controller">
          <img src="https://placehold.co/150x150?text=Headset">
        </div>
      </div>
    </div>

    <!-- ΠΑΖΛ -->
    <div class="gift-card" data-age="6">
      <div class="icon bounce">🧩</div>
      <h3>Παζλ & Γρίφοι</h3>
      <button class="info-btn">Περισσότερα</button>

      <div class="expand-box">
        <h4>Εκπαιδευτικά Παζλ</h4>
        <p>Βελτιώνουν λογική, παρατήρηση και συγκέντρωση.</p>
        <div class="expand-images">
          <img src="https://placehold.co/150x150?text=Puzzle1">
          <img src="https://placehold.co/150x150?text=Puzzle2">
          <img src="https://placehold.co/150x150?text=Puzzle3">
        </div>
      </div>
    </div>

  </div>

</div>
      <!-- ΤΡΕΝΟ -->
<div id="train">🚂💨💨💨</div><br>
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





