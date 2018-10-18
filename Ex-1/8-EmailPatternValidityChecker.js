

var email= "ash--2768@gmail.com";

function valid_mail(mail){
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(pattern.test(email)){
    alert("Valid email");
  }
  else{
    alert("Invalid email");
  }
}

valid_mail(email);