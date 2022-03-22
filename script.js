

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
  document.modal.appendChild(canvas)
});
}
/* html2canvas(element, options);

html2canvas(document.body).then(function(canvas) {
  document.body.appendChild(canvas);
}); */


const submit = document.querySelector('#btnConfirm');


submit.addEventListener('click', (e) => {
  e.preventDefault()
  let messages = []
  const bio = document.getElementById('bio').value;
  console.log(bio);
  const phone = document.getElementById('phone').value;
  console.log(phone);
  const email = document.getElementById('email').value;
  console.log(email);
  const errorElement = document.getElementById('error');

  if(bio.value === '' || bio.value == null) {
    messages.push('Bio is required')
  }
  
  if (phone.length <= 9) {
    messages.push('Please enter 10 numbers...')
  }
  if (phone.length >= 20) {
    messages.push('Too many characters...')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  console.log(e)
  })