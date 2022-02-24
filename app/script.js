


let userInput=document.querySelector('input[type="text"]');
let button=document.querySelector('form button');
let errorMessage=document.getElementById("error-message");
let errorIcon=document.getElementById("error-icon");

function removeErrorMessage() {
  errorIcon.classList.add('hidden');
  errorMessage.classList.add('hidden');
}

function addErrorMessage() {
  errorIcon.classList.remove('hidden');
  errorMessage.classList.remove('hidden');
}

function emailValidation(userEmail) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (userEmail.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}



button.addEventListener('click',function(e){
    e.preventDefault();
    let email=userInput.value;
    let result=emailValidation(email);
if(!result){
  
addErrorMessage();
}else{
  
  removeErrorMessage();

}
    
})
