var categoryfilter = document.querySelector('#schedule-list');
var mixer = mixitup(categoryfilter, {
  animation: {
    effects: 'fade translateY(50px)',
  },
});

$('.dropdown-content li').click(function () {
  $(this).addClass('selected').siblings().removeClass('selected');
});

function myFunction() {
  document.getElementById('selectClass').classList.toggle('show');
}

window.onclick = function (event) {
  if (!event.target.matches('.select-class-btn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
