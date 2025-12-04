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
        <article id="custom_thraki">
          <h2 id="custom_thraki_title">Θράκη – Καλαντισμοί με Κλαρίνα</h2>
          <p id="custom_thraki_desc">
            Στην Ξάνθη και την Κομοτηνή, τα παιδιά πηγαίνουν από σπίτι σε σπίτι και τραγουδούν τα κάλαντα με παραδοσιακά μουσικά όργανα.
          </p>
        </article>

        <article id="custom_macedonia">
          <h2 id="custom_macedonia_title">Μακεδονία – Το «Κόλιαντα» και οι Φωτιές</h2>
          <p id="custom_macedonia_desc">
            Οι νέοι συγκεντρώνονται γύρω από φωτιές και τραγουδούν τα κάλαντα, ενώ οι γυναίκες φτιάχνουν παραδοσιακά γλυκά.
          </p>
        </article>

        <article id="custom_epirus">
          <h2 id="custom_epirus_title">Ήπειρος – Το Έθιμο της Βασιλόπιτας</h2>
          <p id="custom_epirus_desc">
            Κόβουν τη βασιλόπιτα με ειδικό νόημα για τον τυχερό της χρονιάς.
          </p>
        </article>

        <article id="custom_crete">
          <h2 id="custom_crete_title">Κρήτη – Το Έθιμο της «Καμήλας»</h2>
          <p id="custom_crete_desc">
            Στην Κρήτη, τα παιδιά φτιάχνουν μικρές φιγούρες καμήλας από ξύλο ή ζυμάρι και τα παρουσιάζουν στις γειτονιές.
          </p>
        </article>

        <article id="custom_islands">
          <h2 id="custom_islands_title">Νησιά – Το έθιμο του Αγιοβασιλιάτικου Καραβιού</h2>
          <p id="custom_islands_desc">
            Στα νησιά του Αιγαίου, τα παιδιά φτιάχνουν μικρά καραβάκια που τα στολίζουν και τα αφήνουν στα σπίτια.
          </p>
        </article>
      </div>
    </section>
  `;


    }); // requestAnimationFrame
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));

