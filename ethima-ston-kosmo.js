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

      <section id="world_customs_section">

        <div id="world_customs_hero">
          <h1 id="world_customs_title">Χριστουγεννιάτικα Έθιμα στον Κόσμο</h1>
          <p id="world_customs_subtitle">Γιορτές, παραδόσεις και μοναδικά τελετουργικά από κάθε γωνιά της Γης</p>
        </div>

        <div id="world_customs_container">

          <!-- ΓΕΡΜΑΝΙΑ -->
          <div class="wc_card">
            <div class="wc_header">
              <h2>Γερμανία – Χριστουγεννιάτικες Αγορές</h2>
              <span class="wc_toggle">&#9660;</span>
            </div>
            <div class="wc_body">
              <p>
                Η Γερμανία φημίζεται για τις εντυπωσιακές Χριστουγεννιάτικες αγορές της
                (Weihnachtsmärkte), όπου οι δρόμοι γεμίζουν με φώτα, μουσικές και ζεστό κρασί.
              </p>
              <img src="images/world/germany-market.jpg" class="wc_img" data-full="images/world/germany-market.jpg">
            </div>
          </div>

          <!-- ΙΑΠΩΝΙΑ -->
          <div class="wc_card">
            <div class="wc_header">
              <h2>Ιαπωνία – Χριστούγεννα με... KFC</h2>
              <span class="wc_toggle">&#9660;</span>
            </div>
            <div class="wc_body">
              <p>
                Στην Ιαπωνία, η Χριστουγεννιάτικη παράδοση περιλαμβάνει… τηγανητό κοτόπουλο!
              </p>
              <img src="images/world/japan-kfc.jpg" class="wc_img" data-full="images/world/japan-kfc.jpg">
            </div>
          </div>

          <!-- ΦΙΛΙΠΠΙΝΕΣ -->
          <div class="wc_card">
            <div class="wc_header">
              <h2>Φιλιππίνες – Τα μεγαλύτερα Χριστούγεννα του κόσμου</h2>
              <span class="wc_toggle">&#9660;</span>
            </div>
            <div class="wc_body">
              <p>
                Οι Φιλιππίνες γιορτάζουν Χριστούγεννα… 4 μήνες!
              </p>
              <img src="images/world/philippines.jpg" class="wc_img" data-full="images/world/philippines.jpg">
            </div>
          </div>

        </div>
      </section>

      <div id="wc_lightbox">
        <span id="wc_lightbox_close">&times;</span>
        <img id="wc_lightbox_img">
      </div>

      `;

      // Expand / Collapse
      document.querySelectorAll('.wc_card').forEach(card => {
        const header = card.querySelector('.wc_header');
        const body = card.querySelector('.wc_body');
        const toggle = card.querySelector('.wc_toggle');

        body.style.maxHeight = "0px";

        header.addEventListener('click', () => {
          if (body.style.maxHeight === "0px") {
            body.style.maxHeight = body.scrollHeight + 'px';
            toggle.innerHTML = '&#9650;';
          } else {
            body.style.maxHeight = "0px";
            toggle.innerHTML = '&#9660;';
          }
        });
      });

      // Lightbox
      const lightbox = document.getElementById("wc_lightbox");
      const lbImg = document.getElementById("wc_lightbox_img");

      document.querySelectorAll(".wc_img").forEach(img => {
        img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lbImg.src = img.dataset.full;
        });
      });

      document.getElementById("wc_lightbox_close").addEventListener("click", () => {
        lightbox.style.display = "none";
      });

    });
  })
  .catch(err => console.error("Σφάλμα φόρτωσης layout:", err));
