// Made with Zdog
// var canvas = document.getElementById("text-canvas");
// var ctx = canvas.getContext("2d");
// ctx.font = "560 60px Helvetica";
// ctx.fillStyle = "white";
// ctx.textAlign = "center";
// ctx.fillText("IPFS", canvas.width/2, canvas.height/1.75); 

const TAU = Zdog.TAU;
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  backgroundImage: "https://blog.oup.com/wp-content/uploads/2017/09/DFbVRFJwzSQ.jpg",
  rotate: { x: -TAU/8},
  dragRotate: true,
  onDragStart: function() {
    isSpinning = true;
  },
});

var rotor = new Zdog.Anchor({
  addTo: illo,
});

new Zdog.Rect({
  addTo: rotor,
  width: 100,
  height: 100,
  translate: { z: 60 },
  stroke: 8,
  fill: true,
  color: '#68d3cc',
  // backface color
  backface: '#4ea09b',
});

rotor.copyGraph({
  rotate: { y: TAU * 1/4 },
});

rotor.copyGraph({
  rotate: { x: TAU * 1/4 },
});

rotor.copyGraph({
  rotate: { x: TAU * 3/4 },
});

rotor.copyGraph({
  rotate: { y: TAU * 2/4 },
});
rotor.copyGraph({
  rotate: { y: TAU * 3/4 },
});

function animate() {
  illo.rotate.y += isSpinning ? 0.01 : 0;
  illo.updateRenderGraph();

var canvas = illo.element
var ctx = canvas.getContext("2d");
ctx.font = "560 60px Helvetica";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("IPFS", canvas.width/2, canvas.height/1.75); 

  // console.log(illo.element)
  requestAnimationFrame( animate );
}

animate();