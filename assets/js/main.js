document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const residence = document.getElementById('residence').value;
  const email = document.getElementById('email').value;

  if (!name || !phone || !residence) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
      alert('Por favor, ingresa un número de teléfono válido de 10 dígitos.');
      return;
  }

  alert('Formulario enviado con éxito. Nos contactaremos a la brevedad.');
  setTimeout(function() {
    window.location.href = "./index.html";
}, 1500);
});


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}