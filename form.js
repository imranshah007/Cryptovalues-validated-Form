var form = document.querySelector('.form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmpassword = document.getElementById('confirmpassword');


function validate(element) {
   var nameOfUser = element.value;

   if (nameOfUser === "imran shah") {
      var formControl = element.parentElement;
      formControl.className = "form_control success" ;
   } else {
      var formControl = element.parentElement;
      formControl.className = "form_control failure";
       formControl.querySelector("small").innerText = "this is invalid";
      
   }
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
   event.preventDefault(); 
  checkUserName(username);
   checkEmail(email);
   checkPassword(password);
   checkConfPass(conf_password);
}


function checkUserName(element) {
   var nameOfUser = element.value;

   if (nameOfUser === "") {
   
      setError(element, "User name cannot be empty")

   } else {
      onSuccess(element);
   }
}
function setError(element, errorMessage) {
   var formControl = element.parentElement;
   formControl.className = "form_control failure" ;
   formControl.querySelector("small").innerText = errorMessage;
}

function onSuccess(element) {
   var formControl = element.parentElement;
   formControl.className = "form_control success";
}

//email validation
function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
     
      email
   );
}

function checkEmail(element) {
   var userEmail = element.value;

   if (userEmail === "") {
      setError(element, "Email cannot be empty");
    } else if(!isEmail(userEmail)) {
       setError(element, "This is not a valid email");
    } else {
       onSuccess(element);
    }
}
//password validation
function checkPassword(element) {
   var PasswordValue = element.value;

   var PassVal = ["(", "@", "#"];

   for(i = 0; i < PassVal.length; i++) {
      if(!PasswordValue.includes(PassVal[i])) {
         setError(element, "Password must contain (, @, #");
      } else if (PasswordValue === "") {
         setError(element, "Password cannot be empty");
      }
      else {
         onSuccess(element); 
      }
   }   
}

function checkConfPass(element) {
   var PasswordValue = password.value;
   var confirmPasswordValue = element.value;

   if (confirmPasswordValue === "") {
     setError(element, "It cannot be empty");
   } else if(PasswordValue !== confirmPasswordValue) {
      setError(element, "Password does not match");
   } else {
      onSuccess(element);
   }
}
