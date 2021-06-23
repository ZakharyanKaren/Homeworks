// document.body.onload = function mouseTracker(event) {
//   console.log(window.event.clientX);
// };
let x, y;

function isLoad() {
  setInterval(() => {
    window.onmousemove = (event) => {
      x = event.clientX;
      y = event.clientY;
    };

    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class='dot' style='left: ${x}px; top: ${y}px;'></div>`
    );
  }, 100);
}
