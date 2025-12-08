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

      <section id="kalanta_gr_section">

        <!-- HERO -->
        <div id="kalanta_gr_hero">
          <h1 id="kalanta_gr_title">Κάλαντα & Παραδόσεις</h1>
          <p id="kalanta_gr_subtitle">
            Από γενιά σε γενιά – η μουσική, οι ευχές και οι γιορτινές συνήθειες της Ελλάδας
          </p>
        </div>

        <!-- CONTAINER -->
        <div id="kalanta_gr_container">

          <!-- ΚΑΛΑΝΤΑ ΧΡΙΣΤΟΥΓΕΝΝΩΝ -->
          <div class="kalanta_gr_card">
            <div class="kalanta_gr_card_header">
              <h2 class="kalanta_gr_card_title">Κάλαντα Χριστουγέννων</h2>
              <span class="kalanta_gr_toggle">&#9660;</span>
            </div>
            <div class="kalanta_gr_card_body">

              <p>
                Τα χριστουγεννιάτικα κάλαντα είναι από τα πιο ζωντανά ελληνικά έθιμα.
                Παιδιά γυρίζουν στις γειτονιές με τρίγωνα και ευχές, σκορπίζοντας 
                γιορτινή διάθεση και χαρά.
              </p>

              <audio controls class="kalanta_gr_audio">
                <source src="audio/kalanta/christougenna.mp3" type="audio/mpeg">
              </audio>

              <img src="images/kalanta/christmas-kalanta.jpg" 
                   class="kalanta_gr_image" 
                   data-full="images/kalanta/christmas-kalanta.jpg">
            </div>
          </div>

          <!-- ΠΡΩΤΟΧΡΟΝΙΑ -->
          <div class="kalanta_gr_card">
            <div class="kalanta_gr_card_header">
              <h2 class="kalanta_gr_card_title">Κάλαντα Πρωτοχρονιάς</h2>
              <span class="kalanta_gr_toggle">&#9660;</span>
            </div>
            <div class="kalanta_gr_card_body">

              <p>
                Την Πρωτοχρονιά, τα κάλαντα έχουν έντονο συμβολισμό: 
                καλή τύχη, υγεία, ευλογία και ευημερία για το νέο έτος.
              </p>

              <audio controls class="kalanta_gr_audio">
                <source src="audio/kalanta/protoxronia.mp3" type="audio/mpeg">
              </audio>

              <img src="images/kalanta/newyear-kalanta.jpg" 
                   class="kalanta_gr_image" 
                   data-full="images/kalanta/newyear-kalanta.jpg">
            </div>
          </div>

          <!-- ΦΩΤΑ -->
          <div class="kalanta_gr_card">
            <div class="kalanta_gr_card_header">
              <h2 class="kalanta_gr_card_title">Κάλαντα Θεοφανείων</h2>
              <span class="kalanta_gr_toggle">&#9660;</span>
            </div>
            <div class="kalanta_gr_card_body">

              <p>
                Την ημέρα των Φώτων, τα κάλαντα συνοδεύονται από αναφορές στον Αγιασμό, 
                στον φωτισμό και τη δύναμη της ευλογίας του νερού.
              </p>

              <audio controls class="kalanta_gr_audio">
                <source src="audio/kalanta/theofania.mp3" type="audio/mpeg">
              </audio>

              <img src="images/kalanta/epiphany-kalanta.jpg" 
                   class="kalanta_gr_image" 
                   data-full="images/kalanta/epiphany-kalanta.jpg">
            </div>
          </div>

          <!-- ΠΑΡΑΔΟΣΕΙΣ -->
          <div class="kalanta_gr_card">
            <div class="kalanta_gr_card_header">
              <h2 class="kalanta_gr_card_title">Παραδοσιακά Έθιμα</h2>
              <span class="kalanta_gr_toggle">&#9660;</span>
            </div>
            <div class="kalanta_gr_card_body">

              <ul id="kalanta_gr_list">
                <li>Το χτύπημα του τριγώνου για καλή τύχη</li>
                <li>Οι ευχές στα σπίτια και στις γειτονιές</li>
                <li>Το φιλοδώρημα ως ευλογία</li>
                <li>Οι στολισμένες πόρτες και φωτεινά μονοπάτια</li>
                <li>Οι παραδοσιακές στολές και φορεσιές</li>
              </ul>

              <img src="images/kalanta/tradition.jpg" 
                   class="kalanta_gr_image" 
                   data-full="images/kalanta/tradition.jpg">
            </div>
          </div>

        </div>

      </section>

      <!-- LIGHTBOX -->
      <div id="kalanta_gr_lightbox">
        <span id="kalanta_gr_lightbox_close">&times;</span>
        <img id="kalanta_gr_lightbox_img">
      </div>

      `;

      // === JS FUNCTIONALITY ===

      // Expand / Collapse
      document.querySelectorAll('.kalanta_gr_card').forEach(card => {
        const header = card.querySelector('.kalanta_gr_card_header');
        const body = card.querySelector('.kalanta_gr_card_body');
        const toggle = card.querySelector('.kalanta_gr_toggle');

        body.style.maxHeight = '0px';

        header.addEventListener('click', () => {
          if (body.style.maxHeight === '0px') {
            body.style.maxHeight = body.scrollHeight + 'px';
            toggle.innerHTML = '&#9650;';
          } else {
            body.style.maxHeight = '0px';
            toggle.innerHTML = '&#9660;';
          }
        });
      });

      // Lightbox
      const lightbox = document.getElementById('kalanta_gr_lightbox');
      const lightboxImg = document.getElementById('kalanta_gr_lightbox_img');
      const closeBtn = document.getElementById('kalanta_gr_lightbox_close');

      document.querySelectorAll('.kalanta_gr_image').forEach(img => {
        img.addEventListener('click', () => {
          lightbox.style.display = 'flex';
          lightboxImg.src = img.dataset.full;
        });
      });

      closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });

    });
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));
