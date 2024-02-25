window.addEventListener("load", function () {
  const textInput = document.getElementById("textInput");
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

  // const text = "Hello Good Morning Yangxi";
  // const textX = canvas.width / 2;
  // const textY = canvas.height / 2;
  context.fillStyle = "yellow";
  context.strokeStyle = "white";
  context.font = "100px Helvetica";
  const lineHeight = 100; // space of each line, equals to font size
  context.textAlign = "center"; // position relative to axis
  context.textBaseline = "middle";
  // context.fillText(`${text}`, textX, textY); // Text x,y is axis
  // context.strokeText(`${text}`, textX, textY);

  const maxTextWidth = canvas.width * 0.8;

  // warpText break text line
  function wrapText(text) {
    let words = text.split(" "); // array contains each word
    let linesArray = []; // array contains each line
    let lineCounter = 0; // how many lines
    let line = "";

    for (let i = 0; i < words.length; i++) {
      // 看再加一个词的话,line有没有超过长度
      let testLine = line + words[i] + " ";
      if (context.measureText(testLine).width > maxTextWidth) {
        // 如果超了 line清空并加上新的词, 新的词转到下一行
        line = words[i] + " ";
        lineCounter++;
      } else {
        // 没超过，line = testLine（即加上新词）
        line = testLine;
      }
      // 把line放进linesArrays
      linesArray[lineCounter] = line;
    }
    // 文字块的高度
    let textBlockHeight = lineHeight * lineCounter;
    let textY = canvas.height / 2 - textBlockHeight / 2;

    // 每一行都要画在不同的地方
    linesArray.forEach((element, i) => {
      context.fillText(element, canvas.width / 2, textY + i * lineHeight);
    });
  }

  textInput.addEventListener("keyup", function (text) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    wrapText(text.target.value);
  });
});
