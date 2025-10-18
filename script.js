document.addEventListener('DOMContentLoaded', () => {
  console.log('RenderRift Vision portfolio loaded successfully.');
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting RenderRift Vision! We will get back to you soon.');
    form.reset();
  });
});
