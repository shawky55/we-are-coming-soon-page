function emailValidation(userEmail) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (userEmail.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}


let userInput=document.querySelector('input[type="text"]');
let button=document.querySelector('form button');
let errorMessage=document.getElementById("error-message");
let errorIcon=document.getElementById("error-icon")


button.addEventListener('click',function(e){
    e.preventDefault();
   let email=userInput.value;
   let result=emailValidation(email);
if(!result){
errorIcon.classList.remove("hidden");
errorMessage.classList.remove("hidden")
}else{
    console.log(email)
}
    
})