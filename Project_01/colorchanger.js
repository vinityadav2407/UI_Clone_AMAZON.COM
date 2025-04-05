const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id == "grey") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id == "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id == "purple") {
      body.style.backgroundColor = "purple";
    }
  });
});
