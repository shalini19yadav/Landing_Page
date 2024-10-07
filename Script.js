document.querySelector('.cta').addEventListener('click', () => {
    alert('Button Clicked!');
  });

  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
  };