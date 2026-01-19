// CELL // Coordination Under Constraint - Minimal JavaScript
// Only essential interactivity - no frameworks, no bloat

(function() {
  'use strict';

  // Carousel functionality
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (carousel && track && prevBtn && nextBtn) {
    const slides = track.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function getSlideWidth() {
      const slide = slides[0];
      if (!slide) return 0;
      const style = window.getComputedStyle(slide);
      const width = slide.offsetWidth;
      const marginRight = parseInt(style.marginRight) || 0;
      const gap = 16; // 1rem gap
      return width + gap;
    }

    function scrollToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      track.scrollTo({
        left: getSlideWidth() * index,
        behavior: 'smooth'
      });
    }

    prevBtn.addEventListener('click', function() {
      scrollToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function() {
      scrollToSlide(currentIndex + 1);
    });

    // Update current index on manual scroll
    let scrollTimeout;
    track.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        const slideWidth = getSlideWidth();
        if (slideWidth > 0) {
          currentIndex = Math.round(track.scrollLeft / slideWidth);
        }
      }, 100);
    });

    // Keyboard navigation
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        scrollToSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        scrollToSlide(currentIndex + 1);
      }
    });
  }

  // Smooth scroll for anchor links (if any are added)
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

  // Prefetch images on idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(function() {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(function(img) {
        if (img.dataset.src) {
          const preload = new Image();
          preload.src = img.dataset.src;
        }
      });
    });
  }

})();
