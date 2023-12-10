let string = "";
let screen = document.querySelector(".text");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelectorAll(".clear");
let cut = document.querySelector(".cut");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      screen.value = string;
    } else if (e.target.innerHTML == "%") {
      e.target.innerHTML = "*100";
      let per = string + "%";
      string = string + e.target.innerHTML;
      screen.value = per;
      e.target.innerHTML = "%";
    } else {
      string = string + e.target.innerHTML;
      screen.value = string;
    }
  });
});

clear.forEach((btn) => {
  btn.addEventListener("click", () => {
    string = "";
    screen.value = string;
  });
});

cut.addEventListener("click", () => {
  string = string.toString().slice(0, -1);
  screen.value = string;
});
