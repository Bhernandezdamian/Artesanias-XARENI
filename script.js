// Obtener los elementos del DOM
const botonWhatsapp = document.querySelector('.boton-whatsapp');
const botonLlamada = document.querySelector('.boton-llamada');
const botonWhatsappFijo = document.querySelector('.boton-whatsapp-fijo');
const botonLlamadaFija = document.querySelector('.boton-llamada-fija');
const botonCerrar = document.querySelector('.boton-cerrar');
const modal = document.querySelector('.modal');

// Función para mostrar el modal
function mostrarModal() {
  modal.style.display = 'block';
}

// Función para ocultar el modal
function ocultarModal() {
  modal.style.display = 'none';
}

// Eventos para abrir y cerrar el modal
botonWhatsapp.addEventListener('click', mostrarModal);
botonLlamada.addEventListener('click', mostrarModal);
botonCerrar.addEventListener('click', ocultarModal);

// Botón flotante de Whatsapp
botonWhatsappFijo.addEventListener('click', function() {
  window.location.href = 'https://wa.me/1234567890';
});

// Botón flotante de llamada
botonLlamadaFija.addEventListener('click', function() {
  window.location.href = 'tel:+1234567890';
});
