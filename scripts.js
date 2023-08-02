let goToBtn1 = document.getElementById("gtbtnleft");
let goToBtn2 = document.getElementById("gtbtnright");

const makeInvisible = (element) => {
  element.style.opacity = 0;
};

const makeVisible = (element) => {
  element.style.opacity = 1;
};

makeInvisible(goToBtn1);
makeInvisible(goToBtn2);

let windowY = window.scrollY;
console.log(windowY);

window.addEventListener("scroll", () => {
  let windowY = window.scrollY;
  console.log(windowY);

  if (windowY >= 500) {
    makeVisible(goToBtn1);
    makeVisible(goToBtn2);
  }

  if (windowY < 500 || windowY > 3000) {
    makeInvisible(goToBtn1);
    makeInvisible(goToBtn2);
  }
});
