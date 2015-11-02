var mawaru = new function() {

  var speed = 0;
  var bird = document.getElementsByClassName("Icon--bird")[0];

  document.addEventListener('keydown', function(event) {
      if(event.keyCode == 37) { speed -= 1; }
      else if(event.keyCode == 39) { speed += 1; }

      if(10 < speed) { speed = 10; }
      else if(speed < -10) { speed = -10; }

      if(speed == 0) {
        updateRotate(0);
      }
      else {
        updateRotate(2/speed);
      }

  });

  function updateRotate(rotate) {
    nop();

    setTimeout( function() {
      bird.style.animationDuration = Math.abs(rotate) + "s";
      bird.style.animationDirection = "normal";
      bird.style.animationTimingFunction = "linear";
      bird.style.animationIterationCount = "infinite";
      bird.style.animationName = "rotate" + ((rotate < 0) ? "L" : "R");
    }, 10);
  }

  function nop() {
    bird.style.animationName = "";
  }

console.log("←or→ to rotate the blue bird");
}