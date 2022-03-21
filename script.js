// Get the modal
var modal = 
document.getElementById("myModal");

// Get the button that opens the modal
var btn = 
document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = 
document.getElementsByClassName(
    "close"
)[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// Open Modal
btn.addEventListener('click', () => {
  modal.style.display = 'block';
});




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  /* Denna kanske inte behövs */
/* import html2canvas from 'html2canvas' */

function screenshot(){
html2canvas(document.querySelector("#capture")).then(canvas => {
  document.body.appendChild(canvas)
});
/* html2canvas(element, options);

html2canvas(document.body).then(function(canvas) {
  document.body.appendChild(canvas);
}); */}


function testResults (form) {
  var TestVar = form.inputbox.value;
  alert ("You typed: " + TestVar);
}