function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.pageYOffset;

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - sectionHeight / 3) {
          section.classList.add('visible');
      } else {
          section.classList.remove('visible');
      }
  });
});