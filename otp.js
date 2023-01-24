// OTP generator function
function generateOTP() {
  var characters = "0123456789";
  var OTP = "";
  for (var i = 0; i < 6; i++) {
    OTP += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("otp").innerHTML = OTP;
}

// attach the function to the button
document.getElementById("generate-otp").addEventListener("click", generateOTP);


