// var myDraggable = Draggable.create(".drag",{
//     type: 'x',
//     bounds: ".container",
// });

// function checkOverlap() {
//     var div1 = document.querySelector(".cir");
//     var div2 = document.querySelector(".drag");
//     var rect1 = div1.getBoundingClientRect();
//     var rect2 = div2.getBoundingClientRect();
//     if (
//       rect1.left < rect2.right
//     ) {
//     document.querySelector("#video1").style.opacity= 0;
//     document.querySelector(".drag").style.backgroundColor= "#F76B1C";
//     console.log('Divs are overlapping!');
// }
// else{
//     document.querySelector("#video1").style.opacity= 1;
//     document.querySelector(".drag").style.backgroundColor= "transparent";
//     }
//   }
// window.addEventListener('mousemove', checkOverlap);

// window.addEventListener('touchmove', checkOverlap);


var myDraggable = Draggable.create(".drag",{
    type: 'x',
    bounds: ".container",
  });
  
  function checkOverlap() {
    var div1 = document.querySelector(".cir");
    var div2 = document.querySelector(".drag");
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();
    if (
      rect1.left < rect2.right
    ) {
    document.querySelector("#video1").style.opacity= 0;
    document.querySelector(".drag").style.backgroundColor= "#F76B1C";
    console.log('Divs are overlapping!');
  }
  else{
    document.querySelector("#video1").style.opacity= 1;
    document.querySelector(".drag").style.backgroundColor= "transparent";
    }
  }
  window.addEventListener('mousemove', checkOverlap);
  
  window.addEventListener('touchmove', checkOverlap);