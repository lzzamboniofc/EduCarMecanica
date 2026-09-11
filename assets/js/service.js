const nav=document.querySelector('.fixed-nav');window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>35));
const menu=document.getElementById('navbarMenu');if(menu)document.querySelectorAll('#navbarMenu a').forEach(link=>link.addEventListener('click',()=>{if(window.innerWidth<992&&window.bootstrap)bootstrap.Collapse.getOrCreateInstance(menu,{toggle:false}).hide()}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
