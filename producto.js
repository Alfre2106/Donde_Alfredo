function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); ú
}



document.addEventListener("DOMContentLoaded", function () {
    const productosSection = document.querySelector(".productos-section");
    const productosItems = document.querySelectorAll(".producto-item");
  
    function handleScroll() {
      const sectionPosition = productosSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (sectionPosition < screenPosition) {
        productosSection.classList.add("visible");
  
        // Mostrar cada producto con un retraso
        productosItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 100); // 100 ms de retraso entre cada producto
        });
  
        window.removeEventListener("scroll", handleScroll);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });


  // Agregar interactividad a los productos
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
        // Zoom en la imagen al pasar el mouse
        const image = product.querySelector('img');
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
  
        // Mostrar alerta al hacer clic en el producto
        product.addEventListener('click', () => {
            const name = product.querySelector('h3').innerText;
            const price = product.querySelector('h5').innerText;
            alert(`Seleccionaste el producto: ${name}\nPrecio: ${price}`);
        });
    });
  });