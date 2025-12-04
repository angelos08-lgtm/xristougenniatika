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
    <section id="christmas_section">
      <h1 id="christmas_title">Χριστουγεννιάτικα Έθιμα της Ελλάδας</h1>
      <p id="christmas_intro">
        Τα Χριστούγεννα στην Ελλάδα συνοδεύονται από πλήθος παραδόσεων και τοπικών εθίμων που διαφέρουν από περιοχή σε περιοχή. 
        Από τη Βόρεια Ελλάδα μέχρι τα νησιά, κάθε τόπος γιορτάζει με τον δικό του μοναδικό τρόπο.
      </p>

      <div id="christmas_customs">

        <div class="custom_card" id="custom_thraki">
          <div class="custom_header" id="custom_thraki_header">
            <h2 id="custom_thraki_title">Θράκη – Καλαντισμοί με Κλαρίνα</h2>
            <span class="toggle_btn" id="toggle_thraki">&#9660;</span>
          </div>
          <div class="custom_body" id="custom_thraki_body">
            <p id="custom_thraki_desc">
              Στην Ξάνθη και την Κομοτηνή, τα παιδιά πηγαίνουν από σπίτι σε σπίτι και τραγουδούν τα κάλαντα με παραδοσιακά μουσικά όργανα.
            </p>
          </div>
        </div>

        <div class="custom_card" id="custom_macedonia">
          <div class="custom_header" id="custom_macedonia_header">
            <h2 id="custom_macedonia_title">Μακεδονία – Το «Κόλιαντα» και οι Φωτιές</h2>
            <span class="toggle_btn" id="toggle_macedonia">&#9660;</span>
          </div>
          <div class="custom_body" id="custom_macedonia_body">
            <p id="custom_macedonia_desc">
              Οι νέοι συγκεντρώνονται γύρω από φωτιές και τραγουδούν τα κάλαντα, ενώ οι γυναίκες φτιάχνουν παραδοσιακά γλυκά.
            </p>
          </div>
        </div>

        <div class="custom_card" id="custom_epirus">
          <div class="custom_header" id="custom_epirus_header">
            <h2 id="custom_epirus_title">Ήπειρος – Το Έθιμο της Βασιλόπιτας</h2>
            <span class="toggle_btn" id="toggle_epirus">&#9660;</span>
          </div>
          <div class="custom_body" id="custom_epirus_body">
            <p id="custom_epirus_desc">
              Κόβουν τη βασιλόπιτα με ειδικό νόημα για τον τυχερό της χρονιάς.
            </p>
          </div>
        </div>

        <div class="custom_card" id="custom_crete">
          <div class="custom_header" id="custom_crete_header">
            <h2 id="custom_crete_title">Κρήτη – Το Έθιμο της «Καμήλας»</h2>
            <span class="toggle_btn" id="toggle_crete">&#9660;</span>
          </div>
          <div class="custom_body" id="custom_crete_body">
            <p id="custom_crete_desc">
              Στην Κρήτη, τα παιδιά φτιάχνουν μικρές φιγούρες καμήλας από ξύλο ή ζυμάρι και τα παρουσιάζουν στις γειτονιές.
            </p>
          </div>
        </div>

        <div class="custom_card" id="custom_islands">
          <div class="custom_header" id="custom_islands_header">
            <h2 id="custom_islands_title">Νησιά – Το έθιμο του Αγιοβασιλιάτικου Καραβιού</h2>
            <span class="toggle_btn" id="toggle_islands">&#9660;</span>
          </div>
          <div class="custom_body" id="custom_islands_body">
            <p id="custom_islands_desc">
              Στα νησιά του Αιγαίου, τα παιδιά φτιάχνουν μικρά καραβάκια που τα στολίζουν και τα αφήνουν στα σπίτια.
            </p>
          </div>
        </div>

      </div>
    </section>
  `;

  // JS για collapse/expand των καρτών
  const cards = document.querySelectorAll('.custom_card');

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

});


    }); // requestAnimationFrame
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));


