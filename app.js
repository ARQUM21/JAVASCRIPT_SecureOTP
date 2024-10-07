// Generate OTP
var heading = document.getElementById("random");
function generateOTPNumber() {
    var random = Math.floor(1000 + Math.random() * 9000); 
    heading.innerText = random;
}

// Generate Password
var string = "ABCDEF1234567sqwrtyuiopsghjklzxvnm";
var password_h1 = document.getElementById("password");

function generatepassword() {
    var password = ""; // Reset password each time
    for (var i = 0; i < 8; i++) {
        var randomNumber = Math.floor(Math.random() * string.length); 
        password += string.charAt(randomNumber);
    }
    password_h1.innerText = password;
}
