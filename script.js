// document.querySelector(".btn").addEventListener("click",function(){
//   document.querySelector(".calc-text")+=
// })
let calcText = document.querySelector(".calc-text").value;
let nums = document.querySelectorAll(".btn-number");
let commands = document.querySelectorAll(".btn-amal");
let numsArr = [];
let commandsArr = [];
commandsArr.push("*");
commandsArr.push("/");
for (let i = 0; i < nums.length; i++) {
  numsArr.push(nums[i].textContent);
}
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    if (calcText == "" && nums[i].textContent == "0") {
      calcText += "";
    } else {
      calcText += nums[i].textContent;
    }
    document.querySelector(".calc-text").value = calcText;
  });
}

for (let i = 0; i < commands.length; i++) {
  commandsArr.push(commands[i].textContent);
}

for (let i = 0; i < commands.length; i++) {
  commands[i].addEventListener("click", function () {
    if (calcText == "" || commandsArr.includes(calcText.slice(-1))) {
      calcText += "";
    } else if (commands[i].textContent == "+/-") {
      calcText = calcText.split("");
      calcText.unshift("(");
      calcText.push(")*-1");
      calcText = calcText.join("");
    } else if (commands[i].textContent == "÷") {
      calcText += "/";
    } else if (commands[i].textContent == "%") {
      calcText += "*0.01*";
    } else if (commands[i].textContent == "x") {
      calcText += "*";
    } else if (commands[i].textContent == "-") {
      calcText += "-";
    } else if (commands[i].textContent == "+") {
      calcText += "+";
    }
    document.querySelector(".calc-text").value = calcText;
  });
}
document.querySelector(".btn-ac").addEventListener("click", function () {
  calcText = "";
  document.querySelector(".calc-text").value = calcText;
});
document.querySelector(".btn-symbol").addEventListener("click", function () {
  if (calcText == "") {
    calcText += "0.";
  } else if (
    numsArr.includes(calcText.slice(-1)) &&
    calcText.slice(-1) !== "."
  ) {
    calcText += ".";
  }
  document.querySelector(".calc-text").value = calcText;
});

setInterval(function () {
  document.querySelector(".value").textContent = eval(calcText);
}, 100);

document.querySelector(".btn-tenglik").addEventListener("click", function () {
  let value = document.querySelector(".value").textContent;
  document.querySelector(".calc-text").value = value;
  calcText = value;
});
