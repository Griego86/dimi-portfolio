const $mainNav = $('#main-nav');
const hamburgerMenu = document.getElementById('hamburger-menu')

$mainNav.hide();

if (window.innerWidth > 700) {
  $mainNav.show();
}

hamburgerMenu.addEventListener('click', function(){
  $mainNav.slideToggle();
})

$(function(){

  window.sr = ScrollReveal();

  {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});