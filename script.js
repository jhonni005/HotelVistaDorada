document.addEventListener('DOMContentLoaded', function () {
  // Inicializar Swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // Lógica para el menú de hamburguesa
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar que el clic se propague al body
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Cerrar el menú al hacer clic en un enlace (en móvil)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });

  // Cambiar el fondo de la barra de navegación al hacer scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Animaciones al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
});
