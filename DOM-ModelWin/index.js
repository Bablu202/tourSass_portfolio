"use strict";
const btnModel = document.querySelectorAll(".show-modal");
const closeEle = document.querySelector(".close-modal");
const modelEle = document.querySelector(".modal");
const overLayEle = document.querySelector(".overlay");

const showUpFun = function () {
  //
  modelEle.classList.remove("hidden");
  overLayEle.classList.remove("hidden");
};
const closeUpFun = function () {
  //
  modelEle.classList.add("hidden");
  overLayEle.classList.add("hidden");
};

for (let i = 0; i < btnModel.length; i++)
  btnModel[i].addEventListener("click", showUpFun);

closeEle.addEventListener("click", closeUpFun);
overLayEle.addEventListener("click", closeUpFun);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modelEle.classList.contains("hidden")) {
    closeUpFun();
  }
});
