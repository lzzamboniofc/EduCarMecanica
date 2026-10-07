import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import '../css/style.css';
import '../css/signs.css';
import * as bootstrap from 'bootstrap';

const nav = document.querySelector('.fixed-nav');
window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY > 35));

const menu = document.getElementById('navbarMenu');
if (menu) {
  document.querySelectorAll('#navbarMenu a').forEach(link => link.addEventListener('click', () => {
    if (window.innerWidth < 992) bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
