/* ============================================
   SYSCOS GUTTER SYSTEMS — Interactions
   ============================================ */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Hide sticky mobile call bar when the estimate form is in view
// (keeps it from covering the submit button on the estimate page)
const callBar = document.getElementById('mobileCallBar');
const formWrap = document.querySelector('.estimate-form-wrap');

if (callBar && formWrap && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callBar.classList.add('hidden');
      } else {
        callBar.classList.remove('hidden');
      }
    });
  }, { threshold: 0.25 });

  observer.observe(formWrap);
}