var attempt = 3; 

function validate(){
var username = document.querySelector("username").value;
var password = document.querySelector("password").value;
if ( username == "Andy123" && password == "midcountry"){
alert ("Login successfully");
window.location = "index.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.querySelector("username").disabled = true;
document.querySelector("password").disabled = true;
document.querySelector("submit").disabled = true;
return false;
}
}
}