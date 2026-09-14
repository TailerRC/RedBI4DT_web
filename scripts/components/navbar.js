function initNavbar() {
  const base = window.location.pathname.includes('/pages/') ? '../' : './';
  
  const logoLink = document.getElementById('logo-link');
  if (logoLink) logoLink.href = base + 'index.html';

  const mainNav = document.getElementById('nav-main');
  if (mainNav) mainNav.href = base + 'index.html';

  const contactNav = document.getElementById('nav-contact');
  if (contactNav) contactNav.href = base + 'pages/contact.html';

  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.navbar-links');
  
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('is-active');
    });
  }

  // Marcar enlace activo según la página actual
  const currentPath = window.location.pathname;
  if (currentPath.includes('contact.html')) {
    if (contactNav) contactNav.classList.add('active');
  } else {
    if (mainNav) mainNav.classList.add('active');
  }

  const ctaBtn = document.getElementById('navbar-cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      alert('¡Acción ejecutada desde la Navbar!');
    });
  }
}
