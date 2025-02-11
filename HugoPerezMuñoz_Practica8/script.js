document.addEventListener('DOMContentLoaded', function() {
  // Menú hamburguesa
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
  
  // Intersection Observer para activar la animación de los elementos al hacer scroll
  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.animate');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
  
  // Manejo del formulario de contacto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (contactForm.checkValidity()) {
        console.log("Formulario enviado:", {
          nombre: contactForm.nombre.value,
          correo: contactForm.correo.value,
          mensaje: contactForm.mensaje.value
        });
        alert("¡Gracias por contactarnos!");
        contactForm.reset();
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
    });
  }
});