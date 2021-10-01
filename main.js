var moon = document.getElementById('moon');
var deasrt = document.getElementById('deasrt');
var piramids = document.getElementById('piramids');
var text = document.getElementById('text');
var btn = document.getElementById('btn');
var stars = document.getElementById('stars');
window.addEventListener('scroll', function () {
  var value = window.scrollY;
  if (value > 720) {
    moon.style.top = 720 + 'px';
    moon.style.left = 720 + 'px';
  }
  else {
    moon.style.top = value + 'px';
    moon.style.left = value + 'px';
  }

});