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


// menu

function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("html").classList.toggle("_overflow");
}

//time
window.onload = function() {
    window.setInterval(function(){
        var date = new Date();


        var years = date.getFullYear();
        

        var clock = years;

        document.getElementById("year-clock").innerHTML = clock; 
    }
    );
}
