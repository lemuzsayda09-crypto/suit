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