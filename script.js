var myDraggable = Draggable.create(".drag",{
    type: 'x',
    bounds: ".container",
  });
  
  function mapToRange(value) {
    const min = 0.831;
    const max = 0.995;
  
    if (value <= min) {
        return 0;
    } else if (value >= max) {
        return 1;
    } else {
        const step = (max - min) / 9; // 10 parts
        return Math.round((value - min) / step) / 9;
    }
  }
  
  function checkOverlap() {
    var div1 = document.querySelector(".cir");
    var div2 = document.querySelector(".drag");
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();
    if (
      rect1.left < rect2.right
    ) {
    document.querySelector("#video1").style.opacity= mapToRange(rect1.left/rect2.right);
    document.querySelector(".drag").style.backgroundColor= "#F76B1C";
  }
  else{
    document.querySelector("#video1").style.opacity= mapToRange(rect1.left/rect2.right);
    document.querySelector(".drag").style.backgroundColor= "transparent";
    }
  }
  window.addEventListener('mousemove', checkOverlap);
  
  window.addEventListener('touchmove', checkOverlap);