// Bulb ON/OFF
let bulb = document.querySelector(".bulb");

let btn = document.querySelector(".btn");
let isON = true;
btn.addEventListener("click", function () {
  /** ----------Method 1 -----------*/
  if (isON === true) {
    btn.innerText = "OFF";
    bulb.classList.add("bulb-on"); /** best approach */
    // bulb.style.backgroundColor = "yellow";
    isON = false;
  } else {
    btn.innerText = "ON";
    bulb.classList.remove("bulb-on"); /**best approach */
    // bulb.style.backgroundColor = "white";
    isON = true;
  }
});
