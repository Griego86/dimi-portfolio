const $mainNav = $('#main-nav');
const hamburgerMenu = document.getElementById('hamburger-menu')

$mainNav.hide();

if (window.innerWidth > 700) {
  $mainNav.show();
}

hamburgerMenu.addEventListener('click', function(){
  $mainNav.slideToggle();
})