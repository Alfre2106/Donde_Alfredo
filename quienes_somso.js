function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); ú
}



document.addEventListener("DOMContentLoaded", function () {
    const quienesSomosSection = document.querySelector(".quienes-somos-section");
  
    function handleScroll() {
      const sectionPosition = quienesSomosSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (sectionPosition < screenPosition) {
        quienesSomosSection.classList.add("visible");
        window.removeEventListener("scroll", handleScroll);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });