function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

let button = document.querySelector('.container .left-content button');
let emailInput = document.querySelector('.container .left-content input[type="email"]');
let errorSpan = document.querySelector('.container .left-content .form span');
let messageSpan = document.querySelector('.container .left-content .messageSpan');

button.addEventListener("click",function(){
    let email = emailInput.value;
    if(!validateEmail(email)){
     errorSpan.style.opacity = "1";
     messageSpan.innerText = "Please provide a valid email";
    }
    else{
    errorSpan.style.opacity = "0";
     messageSpan.innerText = "";
    }
});
