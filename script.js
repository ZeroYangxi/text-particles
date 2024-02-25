window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.lineWidth = 3;
  context.strokeStyle = "red";
  context.beginPath();
  context.moveTo(canvas.width / 2, 0); // starting coordinate (x, y)
  context.lineTo(canvas.width / 2, canvas.height); // ending cooridnate
  context.stroke();

  context.strokeStyle = "green";
  context.beginPath();
  context.moveTo(0, canvas.height / 2); // starting coordinate (x, y)
  context.lineTo(canvas.width, canvas.height / 2); // ending cooridnate
  context.stroke();

  const text = "Hello";
  const textX = canvas.width / 2;
  const textY = canvas.height / 2;
  context.fillStyle = "yellow";
  context.strokeStyle = "white";
  context.font = "100px Helvetica";
  context.textAlign = "center"; // position relative to axis
  context.fillText(`${text}`, textX, textY); // Text x,y is axis
  context.strokeText(`${text}`, textX, textY);
});
