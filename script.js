// Small interaction: nav toggle and smooth scroll
document.addEventListener('DOMContentLoaded',()=>{
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click',()=>{
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
        if(window.innerWidth <= 700) nav.style.display = '';
      }
    })
  })

  // Simple contact form handler
  const form = document.getElementById('contactForm');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thanks! Message sent (demo).');
    form.reset();
  })
});