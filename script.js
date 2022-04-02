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

function pass() {
  btnConfirm();
  submit();
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  let messages = []
  const bio = document.getElementById('bio');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const errorElement = document.getElementById('error');
/*   const form = document.querySelector('.user-form'); */

  console.log(bio.value)
  console.log(phone.value)
  console.log(email.value)


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(' & ')
  }
  })

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


function sendEmail(){
  Email.send({
    Host : "smtp.mailtrap.io",
    Username : "<Mailtrap username>",
    Password : "<Mailtrap password>",
    To : 'recipient@example.com',
    From : "sender@example.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
  }).then(
    message => alert(message)
  );
}