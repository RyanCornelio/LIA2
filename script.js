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
  setTimeout(changeColor, 2000)
  setTimeout(change2, 4000)
  setTimeout(change3, 2000)
  setTimeout(change4, 7000)
  setTimeout(change5, 1000)
});

function changeColor(){
  console.log('Hello color');
  const icon1 = document.getElementById('icon1');
/*   icon1.classList.remove('grey777'); */
  icon1.classList.add('green');
}
function change2(){
  console.log('Hello color');
  const icon2 = document.getElementById('icon2');
/*   icon2.classList.remove('grey777'); */
  icon2.classList.add('green');
}
function change3(){
  console.log('Hello color');
  const icon3 = document.getElementById('icon3');
/*   icon3.classList.remove('grey777'); */
  icon3.classList.add('green');
}
function change4(){
  console.log('Hello color');
  const icon4 = document.getElementById('icon4');
/*   icon4.classL4st.remove('grey777'); */
  icon4.classList.add('green');
}
function change5(){
  console.log('Hello color');
  const icon5 = document.getElementById('icon5');
/*   icon5.classList.remove('grey777'); */
  icon5.classList.add('green');
}
/* element = document.querySelector(selectors); */

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


/* changeColor.addEventListener('click', changeColor);

function changeColor() {
  setTimeout(changeColor, 2000)
  {btnhov2.style.color = orange;}
} */


const btnClear = document.querySelector('#btn');
let inputs = document.querySelectorAll('.input');

btnClear.addEventListener('click', () => {
  console.log('tjena')
  setTimeout( ()=> inputs.forEach(input => input.value = ''), 2000 )   
})
