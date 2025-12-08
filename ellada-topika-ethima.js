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
    requestAnimationFrame(() => {
      const main = document.getElementById('content');

      main.innerHTML = `
      <section id="ethima_gr_section">

        <div id="ethima_gr_hero">
          <h1 id="ethima_gr_title">Χριστουγεννιάτικα Έθιμα της Ελλάδας</h1>
          <p id="ethima_gr_subtitle">Μια μαγική περιήγηση στις τοπικές παραδόσεις των Χριστουγέννων</p>
        </div>

        <div id="ethima_gr_customs_container">

          <!-- ΚΑΡΤΑ ΘΡΑΚΗ -->
          <div class="ethima_gr_card" id="ethima_thraki_card">
            <div class="ethima_gr_card_header">
              <h2 class="ethima_gr_card_title">Θράκη – Καλαντίσματα με Κλαρίνα</h2>
              <span class="ethima_gr_toggle">&#9660;</span>
            </div>
            <div class="ethima_gr_card_body">
              <p>
                Στη Θράκη, τα παιδιά γυρίζουν στα σπίτια με κλαρίνα και παραδοσιακά όργανα. 
                Η μουσική συνοδεύεται από χορούς και ευχές για καλή χρονιά.
              </p>
              <img src="https://www.nextdeal.gr/sites/default/files/styles/article_single_940x565/public/article_images/10fee2da120299ebc9b6a436195e0fbd.jpg?itok=bbclQ1aag" class="ethima_gr_image" data-full="https://www.nextdeal.gr/sites/default/files/styles/article_single_940x565/public/article_images/10fee2da120299ebc9b6a436195e0fbd.jpg?itok=bbclQ1aa">
            </div>
          </div>

          <!-- ΚΑΡΤΑ ΜΑΚΕΔΟΝΙΑ -->
          <div class="ethima_gr_card" id="ethima_macedonia_card">
            <div class="ethima_gr_card_header">
              <h2 class="ethima_gr_card_title">Μακεδονία – Το «Κόλιαντα» & οι Φωτιές</h2>
              <span class="ethima_gr_toggle">&#9660;</span>
            </div>
            <div class="ethima_gr_card_body">
              <p>
                Νεαροί ανάβουν μεγάλες φωτιές τα Χριστούγεννα. Γύρω από τις φωτιές τραγουδούν 
                και μοιράζονται τοπικά γλυκά. Ένα από τα πιο εντυπωσιακά έθιμα της Βόρειας Ελλάδας.
              </p>
              <img src="images/ethima/macedonia.jpg" class="ethima_gr_image" data-full="images/ethima/macedonia.jpg">
            </div>
          </div>

          <!-- ΚΑΡΤΑ ΗΠΕΙΡΟΣ -->
          <div class="ethima_gr_card" id="ethima_epirus_card">
            <div class="ethima_gr_card_header">
              <h2 class="ethima_gr_card_title">Ήπειρος – Κοπή της Βασιλόπιτας</h2>
              <span class="ethima_gr_toggle">&#9660;</span>
            </div>
            <div class="ethima_gr_card_body">
              <p>
                Η παραδοσιακή βασιλόπιτα της Ηπείρου έχει ιδιαίτερη σημασία, 
                με συμβολισμούς που συνδέονται με την οικογένεια και την τύχη.
              </p>
              <img src="images/ethima/epirus.jpg" class="ethima_gr_image" data-full="images/ethima/epirus.jpg">
            </div>
          </div>

          <!-- ΚΑΡΤΑ ΚΡΗΤΗ -->
          <div class="ethima_gr_card" id="ethima_crete_card">
            <div class="ethima_gr_card_header">
              <h2 class="ethima_gr_card_title">Κρήτη – Το Έθιμο της Καμήλας</h2>
              <span class="ethima_gr_toggle">&#9660;</span>
            </div>
            <div class="ethima_gr_card_body">
              <p>
                Παιδιά και νέοι φτιάχνουν αυτοσχέδιες φιγούρες καμήλας και γυρίζουν 
                τις γειτονιές, δημιουργώντας μια μοναδική γιορτινή ατμόσφαιρα.
              </p>
              <img src="images/ethima/crete.jpg" class="ethima_gr_image" data-full="images/ethima/crete.jpg">
            </div>
          </div>

          <!-- ΚΑΡΤΑ ΝΗΣΙΑ -->
          <div class="ethima_gr_card" id="ethima_islands_card">
            <div class="ethima_gr_card_header">
              <h2 class="ethima_gr_card_title">Ελληνικά Νησιά – Στολισμένα Καραβάκια</h2>
              <span class="ethima_gr_toggle">&#9660;</span>
            </div>
            <div class="ethima_gr_card_body">
              <p>
                Στα νησιά του Αιγαίου κυριαρχεί το έθιμο του καραβιού. 
                Οι κάτοικοι φτιάχνουν μικρά ξύλινα καράβια που στολίζονται με φώτα και κορδέλες.
              </p>
              <img src="images/ethima/islands.jpg" class="ethima_gr_image" data-full="images/ethima/islands.jpg">
            </div>
          </div>

        </div>
      </section>

      <!-- LIGHTBOX -->
      <div id="ethima_gr_lightbox">
        <span id="ethima_gr_lightbox_close">&times;</span>
        <img id="ethima_gr_lightbox_img">
      </div>
      `;

      // === JS ΛΕΙΤΟΥΡΓΙΕΣ ===

      // Expand / Collapse
      document.querySelectorAll('.ethima_gr_card').forEach(card => {
        const header = card.querySelector('.ethima_gr_card_header');
        const body = card.querySelector('.ethima_gr_card_body');
        const toggle = card.querySelector('.ethima_gr_toggle');

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
      const lightbox = document.getElementById('ethima_gr_lightbox');
      const lightboxImg = document.getElementById('ethima_gr_lightbox_img');
      const closeBtn = document.getElementById('ethima_gr_lightbox_close');

      document.querySelectorAll('.ethima_gr_image').forEach(img => {
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

