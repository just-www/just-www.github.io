window.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    if (intro) {
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.style.transition = 'opacity 1.5s ease';
        intro.style.opacity = 1;
      }, 300);
    }
  });
  