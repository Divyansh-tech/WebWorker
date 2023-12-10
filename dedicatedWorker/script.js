const worker = new Worker("./worker.js");
const sumBtn = document.querySelector("#sumBtn");
const bgBtn = document.querySelector("#bgBtn");

sumBtn.addEventListener("click", () => {
  worker.postMessage("hello, worker!");
});

worker.onmessage = function (mes) {
  alert(`the final sum is: ${mes.data}`);
};

bgBtn.addEventListener("click", (event) => {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
});
