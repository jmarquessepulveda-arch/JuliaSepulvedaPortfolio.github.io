// main.js – Theme toggle for Julia Sepulveda
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('theme-toggle');
  const current=localStorage.getItem('theme')||'light';
  if(current==='dark')document.documentElement.setAttribute('data-theme','dark');
  btn.addEventListener('click',()=>{
    const theme=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme);
  });
});
