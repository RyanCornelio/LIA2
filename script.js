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

/* // When the user clicks the button, open the modal
myBtn.onclick = function() {
    modal.style.display = "block";
} */

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Open Modal
myBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* const submit = document.querySelector('#btnConfirm');

function pass() {
  btnConfirm();
  submit();
} */

/* submit.addEventListener('click', (e) => {
  e.preventDefault()
  let messages = []
  const bio = document.getElementById('bio');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const errorElement = document.getElementById('error'); */
/*   const form = document.querySelector('.user-form'); */

function pass(){
  console.log(bio.value)
  console.log(phone.value)
  console.log(email.value)
}


 /*  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(' & ')
  }
  }) */

  /* function SubForm (){
    $.ajax({
        url: '/Person/Edit/@Model.Id/',
        type: 'post',
        data: $('#myForm').serialize(),
        success: function(){
            alert("worked");
        }
    });
} */

/* var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ryan.cornelio@gmail.com',
    pass: '1291@SIGNAL'
  }
}); */

/* var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending email using Node.js',
  text: 'That was easy!'
}; */

/* transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */
/* const btn = document.getElementById('btn');
btn.addEventListener('click', function (e){
  e.preventDefault()

  const email = document.getElementById('email').value;
  const bio = document.getElementById('bio').value;
  const phone = document.getElementById('phone').value;
  const body = 'bio: ' + bio + '<br/> email: ' + email + '<br/> phone' + phone + '<br/> bio' + bio;
  
   */
  
  /* function sendEmail(){
    console.log(email.value + 'mail adressen'), */

   /*  Email.send({
      Host : "smtp.mailtrap.io",
      Username : "ryan.cornelio@gmail.com",
      Password : "crfhovmpvtmwonhj",
      To : 'ryan.cornelio@gmail.com',
      From : email,
      Subject : phone,
      Body : body
    }).then(
      message => alert(message)
      );
      alert('Thank you for using our service!')
    }) */
  /*   const clearForm = document.getElementById('bio', 'email', 'phone');
    console.log('bio', 'email', 'phone');
    clearForm.value = ''; */
/* } */



/* const myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click', function(e){
  e.preventDefault()
  console.log('hi')
}) */



const bioData = document.getElementById('bio', 'email', 'phone');
/* const emailData = document.getElementById('email'); 
const phoneData = document.getElementById('phone'); */

/* function writeCookie () {
  if(document.email.value ="") {
    alert("Please enter your email...");
    return;
  } 
} */

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if(!localStorage.getItem("cookieBannerDisplayed"))
  cookieContainer.classList.add("active");
}, 2000);