// ========================================
// Swipe Red Pill - JavaScript
// ========================================

// Matrix Background Animation
(function initMatrix() {
  const canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resize();
  window.addEventListener('resize', resize);
  
  const chars = '01';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);
  
  function draw() {
    // Fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Green text
    ctx.fillStyle = 'rgba(34, 197, 94, 0.15)';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      
      ctx.fillText(char, x, y);
      
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 50);
})();

// Mobile Menu Toggle
(function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuBtn?.querySelector('.menu-icon');
  const closeIcon = menuBtn?.querySelector('.close-icon');
  
  if (!menuBtn || !mobileMenu) return;
  
  menuBtn.addEventListener('click', function() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
    }
  });
  
  // Close menu when clicking links
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    });
  });
})();

// FAQ Accordion
(function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    
    question?.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');
      
      // Close all
      faqItems.forEach(function(i) {
        i.classList.remove('open');
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });
      
      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

// Testimonials Carousel
(function initTestimonials() {
  const carousel = document.getElementById('testimonials-carousel');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');
  
  if (!carousel) return;
  
  const scrollAmount = 300;
  
  scrollLeftBtn?.addEventListener('click', function() {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
  
  scrollRightBtn?.addEventListener('click', function() {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
})();

// Smooth scroll for anchor links
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
})();
