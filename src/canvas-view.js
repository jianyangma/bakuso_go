const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let button;

export function drawIntroScreen() {
  context.fillStyle = "#72D7EE";
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawText(canvas.width / 2, canvas.height / 3, "#dbfaff", "Bakuso Go!");
  drawText(canvas.width / 2, (canvas.height * 2) / 3, "#fffbbc", "Current Car: Mazda Miata 94'", 36);
  drawText(canvas.width / 2, (canvas.height * 3) / 4, "#fffbbc", "Maxspeed: 118 Mph", 36);
  drawText(canvas.width / 2, (canvas.height * 5) / 6, "#dbdbdb", "Best record: 0:15", 24);

  button = document.createElement("button");
  button.textContent = "Change Car";
  button.style.position = "absolute";
  button.style.left = `${canvas.width / 2 - 50}px`;
  button.style.top = `${canvas.height - 25}px`;
  button.addEventListener("click", () => {
    console.log("Button Clicked!");
  });
  document.body.appendChild(button);
}

export function clearIntroScreen() {
  if (button && button.parentNode) {
    button.parentNode.removeChild(button); // Remove the button from the DOM
  }
}

export function drawShape(shape) {
  const { x1, y1, x2, y2, x3, y3, x4, y4, color } = shape;
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.lineTo(x4, y4);
  context.closePath();
  context.fill();
}

function drawText(centerX, centerY, color, text, fontSize = 72) {
  context.save();
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.fillStyle = color;
  context.font = `bold ${fontSize}px Arial`;

  const textWidth = context.measureText(text).width;
  const textHeight = 24;
  let x = centerX - textWidth / 2;
  let y = centerY + textHeight / 2;

  context.strokeText(text, x, y);
  context.fillText(text, x, y);
  context.restore();
}
