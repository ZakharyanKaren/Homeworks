const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const output = document.querySelector(".output");

const startBtn = document.querySelector(".start-btn");
const stopPlayBtn = document.querySelector(".stop-play-btn");
const resetBtn = document.querySelector(".reset-btn");

let isPaused = false;
let timerId;

startBtn.onclick = () => {
  let h = hours.value;
  let m = minutes.value;
  let s = seconds.value;

  if (
    hours.value !== "" ||
    minutes.value !== "" ||
    (seconds.value !== "" && timerId)
  ) {
    clearInterval(timerId);
  }

  if (s !== "" || m !== "" || h !== "") {
    if (s < 10) {
      s > 0 ? (s = `0${s}`) : (s = `00`);
    }
    if (m < 10) {
      m > 0 ? (m = `0${m}`) : (m = `00`);
    }
    if (h < 10) {
      h > 0 ? (h = `0${h}`) : (h = `00`);
    }

    output.innerText = `${h} : ${m} : ${s}`;

    timerId = setInterval(() => {
      s = +s;
      m = +m;
      h = +h;

      if (s === 0 && m === 0 && h === 0) {
        output.innerText = `00 : 00 : 00`;
        clearInterval(timerId);
      }

      if (!isPaused) {
        s--;
        if (s < 0) {
          if (m > 0) {
            m--;
            s = 59;
          } else if (h > 0) {
            h--;
            m = 59;
            s = 59;
          }
        }

        if (s < 10) {
          s > 0 ? (s = `0${s}`) : (s = `00`);
        }
        if (m < 10) {
          m > 0 ? (m = `0${m}`) : (m = `00`);
        }
        if (h < 10) {
          h > 0 ? (h = `0${h}`) : (h = `00`);
        }

        output.innerText = `${h} : ${m} : ${s}`;
      }
    }, 1000);

    hours.value = "";
    minutes.value = "";
    seconds.value = "";
  }
};

resetBtn.onclick = () => {
  output.innerText = "";
  clearInterval(timerId);
};

stopPlayBtn.onclick = () => {
  if (isPaused) {
    stopPlayBtn.innerText = "Stop";
    stopPlayBtn.style.backgroundColor = "rgb(0, 162, 255)";

    isPaused = !isPaused;
  } else {
    stopPlayBtn.innerText = "Play";
    stopPlayBtn.style.backgroundColor = "rgb(123, 221, 42)";
    isPaused = !isPaused;
  }
};
