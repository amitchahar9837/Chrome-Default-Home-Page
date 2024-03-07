const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const ampmEl = document.getElementById("ampm");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("message");
updateclock();
function updateclock() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let ampm = "AM";
  let message = "Good Morning";
  ampm = h >= 12 ? "PM" : "AM";
  if (h > 12) {
    h -= 12;
  }
  if (h > 0 && h < 12 && ampm == "AM") {
    message = "Hello Amit, Good Morning";
  } else if (h == 12 && m == 0) {
    message = "Hello Amit, Good Noon";
  } else if ((h >= 12 || h >= 1) && h <= 5 && m > 0 && ampm == "PM") {
    message = "Hello Amit, Good Afternoon";
  } else {
    message = "Hello Amit, Good Evening";
  }
  h < 10 ? (h = "0" + h) : h;
  m < 10 ? (m = "0" + m) : m;
  s < 10 ? (s = "0" + s) : s;
  hourEl.innerHTML = h;
  minutesEl.innerHTML = m;
  secondsEl.innerHTML = s;
  ampmEl.innerHTML = ampm;
  messageEl.innerHTML = message;
  setTimeout(updateclock, 1000);
}

//search
let query = document.querySelector(".query");
let searchBtn = document.querySelector(".searchBtn");
window.addEventListener("keypress", (k) => {
  if (k.key == "Enter") {
    if (query.value != "") {
      search();
    }
  }
});
searchBtn.addEventListener(
  "click",
  (search = () => {
    if (query.value == "") {
      alert("please Input to Search");
    } else {
      let URL = "https://www.google.com/search?q=" + query.value;
      window.open(URL);
      query.value = "";
    }
  })
);



