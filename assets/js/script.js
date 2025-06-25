$(document).ready(function(){
  $("#welcome-message").hide().fadeIn(1500);
});

$(".list-group-item a").hover(function(){
  $(this).css("color", "#0d6efd");
}, function(){
  $(this).css("color", "");
});

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.fade-in');

  const mostrar = () => {
    elementos.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', mostrar);
  mostrar();
});

const mensaje = "Amenazas Cibernéticas Comunes";
const consola = document.getElementById("consola");

let i = 0;
let borrando = false;

function efectoConsola() {
  if (!borrando && i <= mensaje.length) {
    consola.textContent = mensaje.substring(0, i) + "█";
    i++;
    setTimeout(efectoConsola, 100);
  } else if (borrando && i >= 0) {
    consola.textContent = mensaje.substring(0, i) + "█";
    i--;
    setTimeout(efectoConsola, 100);
  }

  if (i > mensaje.length) {
    borrando = true;
    setTimeout(efectoConsola, 1000); // pausa antes de borrar
  }

  if (borrando && i === 0) {
    borrando = false;
    setTimeout(efectoConsola, 500); // pausa antes de volver a escribir
  }
}

window.addEventListener("load", efectoConsola);

// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const contactoForm = document.getElementById("contactoForm");
  if (contactoForm) {
    contactoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !mensaje) {
        alert("Por favor, completá todos los campos.");
        return;
      }

      if (!email.includes("@")) {
        alert("Ingresá un correo electrónico válido.");
        return;
      }

      alert("¡Gracias por contactarnos, " + nombre + "!");
      this.reset();
    });
  }

  // Test de seguridad
  const testForm = document.getElementById("testForm");
  if (testForm) {
    testForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const r1 = document.getElementById("q1").value;
      const r2 = document.getElementById("q2").value;
      let score = 0;

      if (r1 === "c") score++;
      if (r2 === "b") score++;

      const resultado = document.getElementById("resultadoTest");
      resultado.classList.remove("text-success", "text-warning", "text-danger");

      if (score === 2) {
        resultado.textContent = "✅ ¡Excelente! Tenés buenos hábitos de seguridad.";
        resultado.classList.add("text-success");
      } else if (score === 1) {
        resultado.textContent = "⚠️ Bien, pero podés mejorar.";
        resultado.classList.add("text-warning");
      } else {
        resultado.textContent = "❌ Cuidado, revisá tus prácticas de seguridad.";
        resultado.classList.add("text-danger");
      }
    });
  }
});