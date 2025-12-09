document.addEventListener("DOMContentLoaded", () => {

  // ----------- Επιλογή στοιχείων ----------- //
  const menuButton = document.getElementById('menuButton');
  const sideMenu = document.getElementById('sideMenu');
  const closeMenu = document.getElementById('closeMenu');
  const content = document.getElementById('content');
  const navLinks = document.querySelectorAll('.nav-link');

  // ----------- Άνοιγμα / Κλείσιμο μενού ----------- //
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      sideMenu.classList.add('open');
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      sideMenu.classList.remove('open');
    });
  }

  // Κλείσιμο μενού όταν πατάς έξω
  document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && e.target !== menuButton) {
      sideMenu.classList.remove('open');
    }
  });

  // Κλείσιμο μενού με το πλήκτρο Esc
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      sideMenu.classList.remove('open');
    }
  });

  // ----------- Submenu ----------- //
  document.querySelectorAll(".submenu-toggle").forEach(btn => {
    const baseText = btn.textContent.replace(/▼|▲/g, "").trim();

    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      if (!submenu) return;

      submenu.classList.toggle("open");
      btn.textContent = baseText + (submenu.classList.contains("open") ? " ▲" : " ▼");
    });
  });


  // ----------- ΝΙΦΑΔΕΣ ----------- //
  const snowContainer = document.getElementById('snow_container');

  if (snowContainer) {
    const numberOfFlakes = 50;

    const types = [
      { symbol: '❄', className: 'flake-snow' },
      { symbol: '★', className: 'flake-star' },
      { symbol: '☃', className: 'flake-snowman' },
      { symbol: '<img src="images/santa.png" style="width:20px;">', className: 'flake-santa' }
    ];

    for (let i = 0; i < numberOfFlakes; i++) {
      const flake = document.createElement('div');
      flake.classList.add('snowflake');

      const randomType = types[Math.floor(Math.random() * types.length)];
      flake.innerHTML = randomType.symbol;
      flake.classList.add(randomType.className);

      flake.style.left = Math.random() * 100 + 'vw';
      flake.style.fontSize = 10 + Math.random() * 20 + 'px';
      flake.style.animationDuration = 5 + Math.random() * 10 + 's';
      flake.style.opacity = 0.5 + Math.random() * 0.5;

      snowContainer.appendChild(flake);
    }
  }

});
