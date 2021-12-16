var bars = document.getElementById('hamburger');
var cross = document.getElementById('cross');
var navigation = document.getElementById('mobile-navigation');

var openCloseNav = function openCloseNav() {
  navigation.classList.toggle('expand');
  bars.classList.toggle('active');
};

bars.addEventListener('click', openCloseNav);
