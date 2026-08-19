const menuButton=document.querySelector('#menu-toggle'),mobileNav=document.querySelector('#mobile-nav'),navBackdrop=document.querySelector('#nav-backdrop');
function closeMenu(){document.body.classList.remove('menu-open');menuButton?.setAttribute('aria-expanded','false')}
function toggleMenu(){const isOpen=document.body.classList.toggle('menu-open');menuButton?.setAttribute('aria-expanded',String(isOpen))}
menuButton?.addEventListener('click',toggleMenu);navBackdrop?.addEventListener('click',closeMenu);mobileNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
