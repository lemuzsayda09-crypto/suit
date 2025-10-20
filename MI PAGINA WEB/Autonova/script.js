// script.js
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav.menu a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);

        sections.forEach(sec => {
          sec.style.display = sec.id === targetId ? "block" : "none";
        });
      });
    });
  });
</script>

// JavaScript Document
<script>
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }

  function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activo'));
    const seleccionada = document.getElementById(id);
    if (seleccionada) {
      seleccionada.classList.add('activo');
    }
    toggleMenu(); // Cierra el menú después de seleccionar
  }
</script>
