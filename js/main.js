// js/main.js
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('mobileNavBtn');
  var menu = document.getElementById('mobileNav');
  if (!btn || !menu) return;
  btn.addEventListener('click', function(){
    menu.classList.toggle('open');
  });
});

