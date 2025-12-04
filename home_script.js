// -------------------- Φόρτωση layout -------------------- //
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    // Βάζουμε το layout στο div#layout1
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση layout JS
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // -------------------- Περιεχόμενο home -------------------- //
    const main = document.getElementById('content');
    main.innerHTML = `
      <!-- Κύριο SLIDER -->
      <div class="slider poke-slider" id="mainSlider">
        <div class="slides-wrapper"></div>
        <button class="prev">❮</button>
        <button class="next">❯</button>
        <div class="dots"></div>
      </div>

      <!-- STORIES -->
      <div class="story-block" data-target="extra1">
        <h3>Χριστουγεννιάτικα Βιβλία</h3>
        <p>Οι ρίζες της χριστουγεννιάτικης λογοτεχνίας εντοπίζονται ήδη από τον 17ο αιώνα, όταν οι Ευρωπαίοι συγγραφείς άρχισαν να μιλούν για τα έθιμα και τις χειμωνιάτικες γιορτές....</p>
      </div>
      <div id="extra1" class="story-extra">
  <p>Οι ρίζες της χριστουγεννιάτικης λογοτεχνίας εντοπίζονται ήδη από τον 17ο αιώνα, όταν οι Ευρωπαίοι συγγραφείς άρχισαν να μιλούν για τα έθιμα και τις χειμωνιάτικες γιορτές. 
    Ωστόσο, το πρώτο πραγματικά διάσημο και καθοριστικό χριστουγεννιάτικο βιβλίο θεωρείται το «A Christmas Carol» του Charles Dickens, που εκδόθηκε το 1843.
    Το βιβλίο όχι μόνο καθιέρωσε το είδος, αλλά και διαμόρφωσε όλη την εικόνα των “μοντέρνων” Χριστουγέννων: το πνεύμα της καλοσύνης, της γενναιοδωρίας, της οικογενειακής θαλπωρής και της αλλαγής καρδιάς.
    Η επιτυχία του Dickens ήταν τόσο τεράστια, ώστε μέσα σε λίγες δεκαετίες τα χριστουγεννιάτικα διηγήματα, νουβέλες και παιδικά βιβλία έγιναν παράδοση. 
    Από τις κλασικές ιστορίες του 19ου αιώνα έως τα σύγχρονα παραμύθια, η χριστουγεννιάτικη λογοτεχνία συνεχίζει να αναβιώνει το μήνυμα της ζεστασιάς και της αγάπης που συνοδεύει τις γιορτές. </p>

        <!-- SLIDER Κουραμπιέδες -->
        <div class="story-slider" id="slider-kourampiedes">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>

      <div class="story-block" data-target="extra2">
        <h3>Η ιστορία των χριστουγεννιάτικων στολιδιών</h3>
        <p>Αν και κάθε λαός είχε τα δικά του χειμερινά στολίδια, η παράδοση του χριστουγεννιάτικου στολισμού ξεκίνησε στη Γερμανία τον 16ο αιώνα, όταν τα πρώτα έλατα διακοσμήθηκαν με φρούτα, καρύδια και κεράκια....</p>
      </div>
      <div id="extra2" class="story-extra">
          <p>Τον 19ο αιώνα, η πόλη Lauscha στη Γερμανία άρχισε να παράγει τα πρώτα γυάλινα στολίδια, φυσώντας γυαλί στο χέρι, και γρήγορα έγιναν μόδα σε όλη την Ευρώπη.
Με την εξάπλωση της βιομηχανίας, τα στολίδια απέκτησαν δεκάδες υλικά – ξύλο, μέταλλο, ύφασμα, χαρτί – και έγιναν σύμβολο οικογενειακής δημιουργίας.
Σήμερα, κάθε στολίδι κουβαλά ένα μικρό κομμάτι μνήμης από Χριστούγεννα περασμένων χρόνων.</p>

        <!-- SLIDER Μελομακάρονα -->
        <div class="story-slider" id="slider-melomakarona">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>

      <div class="story-block" data-target="extra3">
        <h3>Η παράδοση των χριστουγεννιάτικων χειροτεχνιών</h3>
        <p>Πριν την εποχή των έτοιμων στολιδιών, οι περισσότερες οικογένειες έφτιαχναν χειροποίητες κατασκευές για το δέντρο και το σπίτι:...</p>
      </div>
      <div id="extra3" class="story-extra">
        <p>χαρτοκοπτικές γιρλάντες, λουλουδάκια από ύφασμα, στεφάνια από κλαδιά και κορδέλες.
Στον 20ο αιώνα, τα σχολεία άρχισαν να καθιερώνουν τις χριστουγεννιάτικες χειροτεχνίες ως δραστηριότητες δημιουργικότητας και συνεργασίας.
Σήμερα, η τάση επανέρχεται δυναμικά με DIY projects, ανακυκλώσιμα υλικά και minimal φυσική διακόσμηση.
Οι χειροτεχνίες δεν στολίζουν απλώς ένα σπίτι — ενώνουν ανθρώπους γύρω από το πνεύμα της δημιουργίας.</p>

        <!-- SLIDER Δίπλες -->
        <div class="story-slider" id="slider-diples">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>






/*Καινούρια (θέλει διόρθωσεις*/



      <div class="story-block" data-target="extra1">
        <h3>Χριστουγεννιάτικα Βιβλία</h3>
        <p>Οι ρίζες της χριστουγεννιάτικης λογοτεχνίας εντοπίζονται ήδη από τον 17ο αιώνα, όταν οι Ευρωπαίοι συγγραφείς άρχισαν να μιλούν για τα έθιμα και τις χειμωνιάτικες γιορτές....</p>
      </div>
      <div id="extra1" class="story-extra">
  <p>Οι ρίζες της χριστουγεννιάτικης λογοτεχνίας εντοπίζονται ήδη από τον 17ο αιώνα, όταν οι Ευρωπαίοι συγγραφείς άρχισαν να μιλούν για τα έθιμα και τις χειμωνιάτικες γιορτές. 
    Ωστόσο, το πρώτο πραγματικά διάσημο και καθοριστικό χριστουγεννιάτικο βιβλίο θεωρείται το «A Christmas Carol» του Charles Dickens, που εκδόθηκε το 1843.
    Το βιβλίο όχι μόνο καθιέρωσε το είδος, αλλά και διαμόρφωσε όλη την εικόνα των “μοντέρνων” Χριστουγέννων: το πνεύμα της καλοσύνης, της γενναιοδωρίας, της οικογενειακής θαλπωρής και της αλλαγής καρδιάς.
    Η επιτυχία του Dickens ήταν τόσο τεράστια, ώστε μέσα σε λίγες δεκαετίες τα χριστουγεννιάτικα διηγήματα, νουβέλες και παιδικά βιβλία έγιναν παράδοση. 
    Από τις κλασικές ιστορίες του 19ου αιώνα έως τα σύγχρονα παραμύθια, η χριστουγεννιάτικη λογοτεχνία συνεχίζει να αναβιώνει το μήνυμα της ζεστασιάς και της αγάπης που συνοδεύει τις γιορτές. </p>

        <!-- SLIDER Κουραμπιέδες -->
        <div class="story-slider" id="slider-kourampiedes">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>

      <div class="story-block" data-target="extra2">
        <h3>Η ιστορία των χριστουγεννιάτικων στολιδιών</h3>
        <p>Αν και κάθε λαός είχε τα δικά του χειμερινά στολίδια, η παράδοση του χριστουγεννιάτικου στολισμού ξεκίνησε στη Γερμανία τον 16ο αιώνα, όταν τα πρώτα έλατα διακοσμήθηκαν με φρούτα, καρύδια και κεράκια....</p>
      </div>
      <div id="extra2" class="story-extra">
          <p>Τον 19ο αιώνα, η πόλη Lauscha στη Γερμανία άρχισε να παράγει τα πρώτα γυάλινα στολίδια, φυσώντας γυαλί στο χέρι, και γρήγορα έγιναν μόδα σε όλη την Ευρώπη.
Με την εξάπλωση της βιομηχανίας, τα στολίδια απέκτησαν δεκάδες υλικά – ξύλο, μέταλλο, ύφασμα, χαρτί – και έγιναν σύμβολο οικογενειακής δημιουργίας.
Σήμερα, κάθε στολίδι κουβαλά ένα μικρό κομμάτι μνήμης από Χριστούγεννα περασμένων χρόνων.</p>

        <!-- SLIDER Μελομακάρονα -->
        <div class="story-slider" id="slider-melomakarona">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>

      <div class="story-block" data-target="extra3">
        <h3>Η παράδοση των χριστουγεννιάτικων χειροτεχνιών</h3>
        <p>Πριν την εποχή των έτοιμων στολιδιών, οι περισσότερες οικογένειες έφτιαχναν χειροποίητες κατασκευές για το δέντρο και το σπίτι:...</p>
      </div>
      <div id="extra3" class="story-extra">
        <p>χαρτοκοπτικές γιρλάντες, λουλουδάκια από ύφασμα, στεφάνια από κλαδιά και κορδέλες.
Στον 20ο αιώνα, τα σχολεία άρχισαν να καθιερώνουν τις χριστουγεννιάτικες χειροτεχνίες ως δραστηριότητες δημιουργικότητας και συνεργασίας.
Σήμερα, η τάση επανέρχεται δυναμικά με DIY projects, ανακυκλώσιμα υλικά και minimal φυσική διακόσμηση.
Οι χειροτεχνίες δεν στολίζουν απλώς ένα σπίτι — ενώνουν ανθρώπους γύρω από το πνεύμα της δημιουργίας.</p>

        <!-- SLIDER Δίπλες -->
        <div class="story-slider" id="slider-diples">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>









      
    `;

    // Αρχικοποίηση STORIES
    initStoryBlocks();

    // Αρχικοποίηση SLIDERS
    initAllSliders();
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));

// -------------------- STORIES FUNCTION -------------------- //
function initStoryBlocks() {
  document.querySelectorAll(".story-block").forEach(block => {
    block.addEventListener("click", () => {
      const targetId = block.getAttribute("data-target");
      const extra = document.getElementById(targetId);
      if (!extra) return;

      extra.classList.toggle("open");
    });
  });
}

// -------------------- Γενική συνάρτηση για slider -------------------- //
function initSliderById(sliderId, images) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const wrapper = slider.querySelector('.slides-wrapper');
  const dotsContainer = slider.querySelector('.dots');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  let current = 0;
  const slides = [];
  const dots = [];
  let autoplayInterval = null;
  const AUTOPLAY_DELAY = 3500;

  // Δημιουργία εικόνων & dots
  images.forEach((src, idx) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Slide ${idx+1}`;
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

  // Buttons
  nextBtn.addEventListener('click', () => { nextSlide(); restartAutoplay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); restartAutoplay(); });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let startX = 0;
  let isDragging = false;
  slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; isDragging = true; stopAutoplay(); });
  slider.addEventListener('touchend', e => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;
    if (deltaX > 50) prevSlide();
    else if (deltaX < -50) nextSlide();
    isDragging = false;
    startAutoplay();
  });

  startAutoplay();
}

// -------------------- Αρχικοποίηση όλων των sliders -------------------- //
function initAllSliders() {
  // Κύριο slider
  initSliderById('mainSlider', [
    "https://dimitriosmakriniotis.gr/wp-content/uploads/2022/11/ARS06487-scaled.jpeg",
    "https://www.gastronomos.gr/wp-content/uploads/2023/12/melomakarona-stani-gastronomos-610x762.jpg?v=1702468541",
    "https://akispetretzikis.com/photos/180489/diples-7-10-24-site.jpg"
  ]);

  // Sliders γλυκών
  initSliderById('slider-kourampiedes', [
    "https://www.gastronomos.gr/wp-content/uploads/2024/11/kourambiedes-mpenakh-gastronomos-610x762.jpg?v=1733145046",
    "εικόνα2_κουραμπιέ.jpg",
    "εικόνα3_κουραμπιέ.jpg"
  ]);

  initSliderById('slider-melomakarona', [
    "εικόνα1_μελομακάρονο.jpg",
    "εικόνα2_μελομακάρονο.jpg",
    "εικόνα3_μελομακάρονο.jpg"
  ]);

  initSliderById('slider-diples', [
    "εικόνα1_δίπλα.jpg",
    "εικόνα2_δίπλα.jpg",
    "εικόνα3_δίπλα.jpg"
  ]);
}


