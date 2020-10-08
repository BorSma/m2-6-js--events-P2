let ballon = document.getElementById('balloon');

let fontGrow = 20;

window.addEventListener('keydown', () => {
    if (event.key === "ArrowUp"){
    fontGrow *= 1.1;
    ballon.style.fontSize = `${fontGrow}px`;
      }
})

window.addEventListener('keyup', () => {
  if (event.key === "ArrowDown"){
    fontGrow *= 0.9;
    ballon.style.fontSize = `${fontGrow}px`;
  }
})
