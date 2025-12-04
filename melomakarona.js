fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση του layout JS
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // Εισαγωγή περιεχομένου στο <main id="content">
    const main = document.getElementById('content');
    main.innerHTML = `
      <section id="christmas_section">
        <h1 id="christmas_title">Χριστουγεννιάτικα Έθιμα της Ελλάδας</h1>
        <p id="christmas_intro">
          Τα Χριστούγεννα στην Ελλάδα συνοδεύονται από πλήθος παραδόσεων και τοπικών εθίμων που διαφέρουν από περιοχή σε περιοχή.
          Από τη Βόρεια Ελλάδα μέχρι τα νησιά, κάθε τόπος γιορτάζει με τον δικό του μοναδικό τρόπο.
        </p>

        <div id="christmas_customs">
          <!-- επαναλαμβανόμενες κάρτες -->
          <div class="custom_card" id="custom_thraki">
            <div class="custom_header">
              <h2>Θράκη – Καλαντισμοί με Κλαρίνα</h2>
              <span class="toggle_btn">&#9660;</span>
            </div>
            <div class="custom_body">
              <p>Στην Ξάνθη και την Κομοτηνή, τα παιδιά πηγαίνουν από σπίτι σε σπίτι και τραγουδούν τα κάλαντα με παραδοσιακά μουσικά όργανα.</p>
            </div>
          </div>

          <div class="custom_card" id="custom_macedonia">
            <div class="custom_header">
              <h2>Μακεδονία – Το «Κόλιαντα» και οι Φωτιές</h2>
              <span class="toggle_btn">&#9660;</span>
            </div>
            <div class="custom_body">
              <p>Οι νέοι συγκεντρώνονται γύρω από φωτιές και τραγουδούν τα κάλαντα, ενώ οι γυναίκες φτιάχνουν παραδοσιακά γλυκά.</p>
            </div>
          </div>

          <!-- υπόλοιπες κάρτες... -->
        </div>
      </section>
    `;

    // JS για collapse/expand
    const cards = main.querySelectorAll('.custom_card');

    cards.forEach(card => {
      const header = card.querySelector('.custom_header');
      const body = card.querySelector('.custom_body');
      const toggle = card.querySelector('.toggle_btn');

      // Αρχικά κρύβουμε το σώμα
      body.style.maxHeight = '0px';
      body.style.overflow = 'hidden';
      body.style.transition = 'max-height 0.5s ease, padding 0.5s ease';

      header.addEventListener('click', () => {
        if(body.style.maxHeight === '0px'){
          body.style.maxHeight = body.scrollHeight + 20 + 'px';
          body.style.padding = '10px 0';
          toggle.innerHTML = '&#9650;';
        } else {
          body.style.maxHeight = '0px';
          body.style.padding = '0';
          toggle.innerHTML = '&#9660;';
        }
      });
    });

  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));
