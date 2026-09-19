const menu=document.querySelector('.menu');const links=document.querySelector('.nav-links');if(menu)menu.addEventListener('click',()=>links.classList.toggle('open'));document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
if(document.querySelector('.mouse-light')){window.addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',e.clientX+'px');document.documentElement.style.setProperty('--my',e.clientY+'px')},{passive:true});}

const revealObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
