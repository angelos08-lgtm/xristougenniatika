document.addEventListener("DOMContentLoaded", () => {

  // --------- Χιονονιφάδες ---------
  const snowContainer = document.getElementById('snow_container');
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

  // --------- Μενού ---------
  const menuButton = document.getElementById('menuButton');
  const sideMenu = document.getElementById('sideMenu');
  const closeMenu = document.getElementById('closeMenu');

  menuButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && e.target !== menuButton) {
      sideMenu.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      sideMenu.classList.remove('open');
    }
  });

  // --------- Submenu ---------
  document.querySelectorAll(".submenu-toggle").forEach(btn => {
    const baseText = btn.textContent.replace(/▼|▲/g, "").trim();
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      if (!submenu) return;
      submenu.classList.toggle("open");
      btn.textContent = baseText + (submenu.classList.contains("open") ? " ▲" : " ▼");
    });
  });

}); // τέλος DOMContentLoaded
