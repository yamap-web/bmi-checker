"use strict";

const checkBMI = function () {
  let height = document.getElementById("input_height").value / 100;
  let weight = document.getElementById("input_weight").value;
  let valueBMI = weight / height ** 2;

  const digit = 2;
  document.getElementById("js_bmi").textContent = valueBMI.toFixed(digit);
  // 小数点第2位まで

  alert("さて、結果発表です。ドラムロールをお願いします！");

  if (valueBMI < 18.5) {
    document.getElementById("js_judge").textContent = "やせ型";
  } else if (valueBMI < 25) {
    document.getElementById("js_judge").textContent = "適正体重";
  } else if (valueBMI >= 25) {
    document.getElementById("js_judge").textContent = "肥満";
  }
};

const judge = document.getElementsByClassName("btn-judge");

judge.addEventListener("click", () => {
  checkBMI();
});
