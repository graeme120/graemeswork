var mirror = document.getElementById('mirror');
var count = 0;
var elements = document.querySelectorAll('a');

mirror.addEventListener("click", () => {
    count++;
    
    

    switch (count) {
      case 0:
          break;
      case 1:
          addGreen();
          break;
      case 2:
          addPink();
          break;
      case 3:
          addBlack();
          break;
      case 4:
          addBlue();
          break;
    }

    console.log(count);     

    if (count >= 4){
      count = 0;
    }
     
});

elements.forEach(element => element.addEventListener('mouseout', function() {
  this.style.color = '#000000';
  this.style.textDecoration = 'none';
}));

elements.forEach(element => element.addEventListener('mouseover', function() {
  this.style.color = '#0000FF';
}));



function addBlue() {
  elements.forEach(element => element.addEventListener('mouseover', function() {
    element.style.color = '#0000FF';
    element.style.textDecoration = 'none';
  }));
}

function addGreen() {
  elements.forEach(element => element.addEventListener('mouseover', function() {
    element.style.color = '#FF7DCF';
    element.style.textDecoration = 'none';
  }));
}

function addPink() {
  elements.forEach(element => element.addEventListener('mouseover', function() {
    element.style.color = '#660000';
    element.style.textDecoration = 'none';
  }));
}

function addBlack() {
  elements.forEach(element => element.addEventListener('mouseover', function() {
    element.style.textDecoration = 'underline';
  }))
  elements.forEach(element => element.addEventListener('mouseout', function() {
    element.style.textDecoration = 'none';
  }))
  elements.forEach(element => element.addEventListener('mouseover', function() {
    element.style.color = '#000000';
  }));
}
    

