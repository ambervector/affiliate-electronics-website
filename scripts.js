let goToBtn1 = document.getElementById("gtbtnleft");
let goToBtn2 = document.getElementById("gtbtnright");

goToBtn1.style.opacity = 0;
goToBtn2.style.opacity = 0;

let windowY = window.scrollY;
console.log(windowY);

window.addEventListener("scroll", () => {
  let windowY = window.scrollY;
  console.log(windowY);

  if (windowY >= 500) {
    goToBtn1.style.opacity = 1;
    goToBtn2.style.opacity = 1;
  }

  if (windowY < 500 || windowY > 3000) {
    goToBtn1.style.opacity = 0;
    goToBtn2.style.opacity = 0;
  }
});
