document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});
document.querySelectorAll('.gallery-grid img,.hero-visual img').forEach(img=>{
  img.addEventListener('error',()=>{img.style.display='none';});
});
