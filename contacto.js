function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); ú
}

// Validación del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtener los valores del formulario
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    if (name && email && message) {
        alert("Gracias, " + name + "! Tu mensaje ha sido enviado correctamente.");
       
        this.reset(); // Limpia el formulario después de enviar
    } else {
        alert("Por favor, completa todos los campos.");
    }
});