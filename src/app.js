const InsertionSort = require("./Sort");

window.onload = () => {
  const InsertionSort = require("./Sort");

  require("./index.css");

  window.addEventListener("load", () => {
    const visualArray = [el5, el1, el4, el3, el2];

    const el1 = document.getElementsById("r1");
    const el2 = document.getElementsById("r2");
    const el3 = document.getElementsById("r3");
    const el4 = document.getElementsById("r4");
    const el5 = document.getElementsById("r5");

    let insertionSort = new InsertionSort();
    let sortingVisual = insertionSort(visualArray);

    window.setInterval(insertionSort(visualArray), 2000);
  });

  function sort() {}

  const arrayButton = document.createElement("button");
  arrayButton.className = "button";
  arrayButton.innerText = "Let's sort this out";
  arrayButton.addEventListener("click", () => {});
  document.body.prepend(arrayButton);
};
