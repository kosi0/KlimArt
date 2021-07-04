const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');


let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu()
{
  if(!showMenu){
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item =>  item.classList.add('open'));
    
    showMenu = true;
    
  }
  else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item =>  item.classList.remove('open'));

    showMenu = false;
  }
}

var previousScrollTop;
var isScrolling;

function hasScrolled() {
  
  var scrollTop = window.scrollY;
  
  if (scrollTop > 32){
    nav.classList.add('menu-nav-scroll');
    menuBtn.classList.add('menu-btn-scroll');
  } else {
    nav.classList.remove('menu-nav-scroll');
    menuBtn.classList.remove('menu-btn-scroll');
  }
    
  //previousScrollTop = scrollTop;
  
}

document.addEventListener('scroll', function() {
  isScrolling = true;
}, false);

setInterval(function() {
  if (isScrolling) {
    hasScrolled();
    isScrolling = false;
  }
}, 100);

