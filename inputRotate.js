var mawaru = new function() {

  var speed = 0;
  var bird = document.getElementsByClassName("Icon--bird").item()

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
      bird.style.webkitAnimationDuration = Math.abs(rotate) + "s";
      bird.style.webkitAnimationDirection = "normal";
      bird.style.webkitAnimationTimingFunction = "linear";
      bird.style.webkitAnimationIterationCount = "infinite";
      bird.style.webkitAnimationName = "rotate" + ((rotate < 0) ? "L" : "R");
    }, 10);
  }

  function nop() {
    bird.style.webkitAnimationName = "";
  }

console.log("←or→ to rotate the blue bird");
}