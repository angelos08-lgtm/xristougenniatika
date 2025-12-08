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
      <section id="history_section">

        <div id="history_hero">
          <h1 id="history_title">Ιστορία των Χριστουγέννων</h1>
          <p id="history_subtitle">
            Από τις αρχαίες παραδόσεις μέχρι τις σύγχρονες γιορτές, η ιστορία των Χριστουγέννων σε όλο τον κόσμο
          </p>
        </div>

        <div id="history_container">

          <!-- ΑΡΧΑΙΑ ΧΡΙΣΤΟΥΓΕΝΝΑ -->
          <div class="history_card">
            <div class="history_header">
              <h2>Αρχαίες Ριζες</h2>
              <span class="history_toggle">&#9660;</span>
            </div>
            <div class="history_body">
              <p>
                Οι πρώτες γιορτές του χειμερινού ηλιοστασίου επηρέασαν τα χριστουγεννιάτικα έθιμα. 
                Οι λαοί τίμησαν τη γέννηση του φωτός και την αναγέννηση της φύσης.
              </p>
              <img src="images/history/ancient-christmas.jpg" class="history_img" data-full="images/history/ancient-christmas.jpg">
            </div>
          </div>

          <!-- ΜΕΣΑΙΩΝΙΚΑ ΧΡΙΣΤΟΥΓΕΝΝΑ -->
          <div class="history_card">
            <div class="history_header">
              <h2>Μεσαιωνική Ευρώπη</h2>
              <span class="history_toggle">&#9660;</span>
            </div>
            <div class="history_body">
              <p>
                Στη μεσαιωνική Ευρώπη, οι Χριστούγεννες ήταν συνδεδεμένες με θρησκευτικές τελετές, 
                κάλαντα και στολισμούς εκκλησιών.
              </p>
              <img src="images/history/medieval-christmas.jpg" class="history_img" data-full="images/history/medieval-christmas.jpg">
            </div>
          </div>

          <!-- ΣΥΓΧΡΟΝΕΣ ΧΡΙΣΤΟΥΓΕΝΝΕΣ -->
          <div class="history_card">
            <div class="history_header">
              <h2>Σύγχρονες Γιορτές</h2>
              <span class="history_toggle">&#9660;</span>
            </div>
            <div class="history_body">
              <p>
                Σήμερα τα Χριστούγεννα γιορτάζονται με δώρα, δέντρα, φωτάκια, και καρδιές γεμάτες αγάπη. 
                Η παράδοση συναντά τη σύγχρονη αισθητική.
              </p>
              <img src="images/history/modern-christmas.jpg" class="history_img" data-full="images/history/modern-christmas.jpg">
            </div>
          </div>

        </div>
      </section>

      <!-- LIGHTBOX -->
      <div id="history_lightbox">
        <span id="history_lightbox_close">&times;</span>
        <img id="history_lightbox_img">
      </div>
      `;

      // === JS ΛΕΙΤΟΥΡΓΙΕΣ ===
      document.querySelectorAll('.history_card').forEach(card => {
        const header = card.querySelector('.history_header');
        const body = card.querySelector('.history_body');
        const toggle = card.querySelector('.history_toggle');

        body.style.maxHeight = "0px";

        header.addEventListener('click', () => {
          if(body.style.maxHeight === "0px") {
            body.style.maxHeight = body.scrollHeight + 'px';
            toggle.innerHTML = '&#9650;';
          } else {
            body.style.maxHeight = "0px";
            toggle.innerHTML = '&#9660;';
          }
        });
      });

      // Lightbox
      const lightbox = document.getElementById("history_lightbox");
      const lbImg = document.getElementById("history_lightbox_img");

      document.querySelectorAll(".history_img").forEach(img => {
        img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lbImg.src = img.dataset.full;
        });
      });

      document.getElementById("history_lightbox_close").addEventListener("click", () => {
        lightbox.style.display = "none";
      });

    });
  })
  .catch(err => console.error("Σφάλμα φόρτωσης layout:", err));
