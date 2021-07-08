
let toggler = document.getElementsByClassName("dir");
let i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("dir-down");
  });
}

function pasteFileName (evt) {
  fileChosen = evt.target.labels[0].innerText
}

let opener = document.querySelector("#f1")

opener.addEventListener("click", pasteFileName)