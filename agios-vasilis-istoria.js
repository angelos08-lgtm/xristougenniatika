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
      <section id="santa_section">

        <div id="santa_hero">
          <h1 id="santa_title">Η Ιστορία του Άγιου Βασίλη</h1>
          <p id="santa_subtitle">
            Από τον Άγιο Νικόλαο στους σύγχρονους Santa Claus – η εξέλιξη του αγαπημένου ήρωα των Χριστουγέννων
          </p>
        </div>

        <div id="santa_container">

          <!-- ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ -->
          <div class="santa_card">
            <div class="santa_header">
              <h2>Άγιος Νικόλαος</h2>
              <span class="santa_toggle">&#9660;</span>
            </div>
            <div class="santa_body">
              <p>
                Ο Άγιος Νικόλαος, επίσκοπος Μύρων, φημιζόταν για την καλοσύνη του και τις δωρεές του στους φτωχούς. 
                Η παράδοση αυτή εξελίχθηκε στον σύγχρονο Άγιο Βασίλη.
              </p>
              <img src="images/santa/nikolaos.jpg" class="santa_img" data-full="images/santa/nikolaos.jpg">
            </div>
          </div>

          <!-- ΣΧΕΔΙΑ ΚΑΙ ΕΙΚΟΝΕΣ -->
          <div class="santa_card">
            <div class="santa_header">
              <h2>Το Σύμβολο του Santa Claus</h2>
              <span class="santa_toggle">&#9660;</span>
            </div>
            <div class="santa_body">
              <p>
                Από τον 19ο αιώνα, ο Santa Claus απεικονίζεται ως γελαστός άντρας με κόκκινο κουστούμι, 
                έλκηθρο και τάρανδους – η εικόνα που αγαπούν παιδιά και ενήλικες.
              </p>
              <img src="images/santa/santa-modern.jpg" class="santa_img" data-full="images/santa/santa-modern.jpg">
            </div>
          </div>

          <!-- ΣΥΓΧΡΟΝΗ ΠΑΡΑΔΟΣΗ -->
          <div class="santa_card">
            <div class="santa_header">
              <h2>Σύγχρονα Έθιμα</h2>
              <span class="santa_toggle">&#9660;</span>
            </div>
            <div class="santa_body">
              <p>
                Σήμερα, ο Άγιος Βασίλης εμφανίζεται σε κάθε σπίτι, εμπορικό κέντρο και καρδιές γεμάτες δώρα και χαρά.
              </p>
              <img src="images/santa/santa-gifts.jpg" class="santa_img" data-full="images/santa/santa-gifts.jpg">
            </div>
          </div>

        </div>
      </section>

      <!-- LIGHTBOX -->
      <div id="santa_lightbox">
        <span id="santa_lightbox_close">&times;</span>
        <img id="santa_lightbox_img">
      </div>
      `;

      // === JS ΛΕΙΤΟΥΡΓΙΕΣ ===
      document.querySelectorAll('.santa_card').forEach(card => {
        const header = card.querySelector('.santa_header');
        const body = card.querySelector('.santa_body');
        const toggle = card.querySelector('.santa_toggle');

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
      const lightbox = document.getElementById("santa_lightbox");
      const lbImg = document.getElementById("santa_lightbox_img");

      document.querySelectorAll(".santa_img").forEach(img => {
        img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lbImg.src = img.dataset.full;
        });
      });

      document.getElementById("santa_lightbox_close").addEventListener("click", () => {
        lightbox.style.display = "none";
      });

    });
  })
  .catch(err => console.error("Σφάλμα φόρτωσης layout:", err));
