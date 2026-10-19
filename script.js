document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. STICKY HEADER & SHADOW ON SCROLL
     ========================================== */
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ==========================================
     2. MOBILE MENU TOGGLE
     ========================================== */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile drawer when clicking a nav item
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  /* ==========================================
     3. MENU CATEGORY TAB FILTER
     ========================================== */
  const menuTabs = document.querySelectorAll('.menu__tab');
  const menuCards = document.querySelectorAll('.menu__card');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      menuCards.forEach(card => {
        if (card.getAttribute('data-category') === category) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ==========================================
     4. GALLERY LIGHTBOX MODAL
     ========================================== */
  const galleryItems = document.querySelectorAll('.gallery__item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  // Close lightbox on clicking outside the image
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
      }
    });
  }

  /* ==========================================
     5. SCROLL REVEAL ANIMATION (IntersectionObserver)
     ========================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    root: null,
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));
});