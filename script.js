// *************************typing animation ***********************//

var typed = new Typed(".typing", {
  strings: [
    "HTML5",
    "CSS3",
    "Bootstrap5",
    "JavaScript",
    "React",
    "WordPress",
    "PHP",
    "MySQL",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// document.getElementById('myForm').addEventListener('submit', function(event) {
//     var username = document.getElementById('username');
//     var password = document.getElementById('password');

//     if (username.value.trim() === '') {
//       username.setAttribute('required', 'true');
//       event.preventDefault();
//       return false;
//     }

//     if (password.value.trim() === '') {
//       password.setAttribute('required', 'true');
//       event.preventDefault();
//       return false;
//     }
//   });

document.getElementById("send_msg").addEventListener("click", function (event) {
  var username = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var msg = document.getElementById("msg");
 
  if (username.value.trim() === "") {
    username.setAttribute("required", "true");
    event.preventDefault();
    alert("Enter Your Name");
    return false;

  }

  if (email.value.trim() === "") {
    email.setAttribute("required", "true");
    event.preventDefault();
    alert("Enter Your Email");
    return false;
  }

  if (subject.value.trim() === "") {
    subject.setAttribute("required", "true");
    event.preventDefault();
    alert("Enter Subject of the Message");
    return false;
  }
  if (msg.value.trim() === "") {
    msg.setAttribute("required", "true");
    event.preventDefault();
    alert("Enter Your Message");
    return false;
  }

alert("Your message sent successfully");
document.getElementById("send_msg").style.backgroundColor = "green";
document.getElementById("send_msg").innerHTML = "Message Sent";
});
