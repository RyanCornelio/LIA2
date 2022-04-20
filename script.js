// Get the modal
var modal = 
document.getElementById("myModal");

// Get the button that opens the modal
var myBtn = 
document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = 
document.getElementsByClassName(
    "close"
)[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Open Modal
myBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  myFunction()
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function pass(){
  console.log(bio.value)
  console.log(phone.value)
  console.log(email.value)
}

const bioData = document.getElementById('bio', 'email', 'phone');


const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  document.cookie = "allowCookie=true";
  cookieContainer.classList.remove("active");
});

setTimeout(() => {
  const getCookie = document.cookie.includes("allowCookie=true");
  
  if(!getCookie)
  cookieContainer.classList.add("active");
}, 2000);


// Reset form after submit...
/* const btnClear = document.querySelector('btn');
const inputs = document.querySelector('input');

btnClear.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
}); */

function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = '> ' + document.cookie
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}

function showCookieValue() {
  const output = document.getElementById('cookie-value')
  email
  output.textContent = '> ' + cookieValue
}

const icons = document.querySelector(".icons");

function myFunction() {
  console.log('Hejsan')
  icons.classList.add("active-icons");
/*   onclick="setTimeout(myFunction, 3000)"; */
}

