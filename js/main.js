// Año automático en el footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Inicializar EmailJS
(function () {
  emailjs.init("T3uI5DNwG8tk9Ja6e");
})();

// Envío del formulario
window.addEventListener("load", function () {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_mutzebs", "template_42bx5ag", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    })
      .then(function () {
        document.getElementById("status").innerHTML = `
          <div class="alert alert-success" role="alert">
            ✅ Mensaje enviado con éxito
          </div>
        `;
        form.reset();
      }, function () {
        document.getElementById("status").innerHTML = `
          <div class="alert alert-danger" role="alert">
            ❌ Error al enviar el mensaje. Intenta nuevamente.
          </div>
        `;
      });
  });
});

// Bootstrap modal fixes
$('#contactModal').on('shown.bs.modal', function () {
  $('#name').trigger('focus');
});

$('#contactModal').on('hide.bs.modal', function () {
  if (document.activeElement) {
    document.activeElement.blur();
  }

  // Limpia el mensaje al cerrar el modal
  const status = document.getElementById("status");
  if (status) {
    status.innerHTML = "";
  }
});
