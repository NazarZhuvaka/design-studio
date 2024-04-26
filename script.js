const tabHeaders = document.querySelectorAll("[data-tab]");

const contentBoxes = document.querySelectorAll("[data-tab-content]");

tabHeaders.forEach(function (item) {
  item.addEventListener("click", function () {
    const contentBox = document.querySelector("#" + this.dataset.tab);

    contentBoxes.forEach(function (item) {
      item.classList.add("hiden");
    });

    contentBox.classList.remove("hiden");
  });
});
