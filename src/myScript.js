var modal = document.getElementById("myModal");

var btn = document.getElementById("btnModal");

// Get the <span> element by clas that closes the modal
var btnSpan = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

btnSpan.onclick = function(){
    modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


