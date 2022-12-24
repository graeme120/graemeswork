var portrait = document.getElementById('portrait');
var clearButton = document.getElementById('clearButton');

portrait.addEventListener("click", function() {
  clearButton.classList.add("fadein");
  clearButton.style.opacity = '1';
  console.log('it workeed?');
})
