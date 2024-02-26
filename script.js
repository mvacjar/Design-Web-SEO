let popup = document.querySelector(".popup-container");

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    popup.style.display = "block";
  }, 1000);
});

document.querySelector("#close").addEventListener("click", function () {
  popup.style.display = "none";
});

document.querySelector("#subscribe").addEventListener("click", function () {
  popup.style.display = "none";
});
