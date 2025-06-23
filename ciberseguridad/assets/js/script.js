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