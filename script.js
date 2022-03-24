
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



const submit = document.querySelector('#btnConfirm');

submit.addEventListener('click', (e) => {
  e.preventDefault()
  let messages = []
  const bio = document.getElementById('bio');

  const phone = document.getElementById('phone');

  const email = document.getElementById('email');

  const errorElement = document.getElementById('error');

  console.log(bio.value)
  console.log(phone.value)
  console.log(email.value)

  if(bio.value.length === 0) {
    messages.push('Please fill in your issue')
  } 
  
  if (phone.length <= 9) {
    messages.push('Please enter a phone number')
  }
  if (phone.length >= 20) {
    messages.push('Too many characters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(' & ')
  }
  })

  function takeshot() {
    let div = document.getElementById('photo');
  
    html2canvas(div).then(
      function(canvas) {
        document
        .getElementById('output')
        .appendChild(canvas);
      })
}

 
