//

const inputName = document.getElementById("NameInput");
const inputFirstname = document.getElementById("FirstNameInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword= document.getElementById("ValidatePasswordInput");
const btnRegister = document.getElementById("btnRegister");
const checkEmploye = document.getElementById("EmployesChecked");
const checkVeto = document.getElementById("VetChecked");

inputName.addEventListener("keyup", validateForm);
inputFirstname.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);
checkEmploye.addEventListener("click", validateForm);
checkVeto.addEventListener("click", validateForm);

function validateForm() {
    const nameOk = validateRequired(inputName);
    const firstnameOk = validateRequired(inputFirstname);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const confirmPwdOk = validateConfirmationPassword(inputPassword, inputValidatePassword);
    const checkRole = checkEmploye.checked || checkVeto.checked;

    if(nameOk && firstnameOk && mailOk && passwordOk && confirmPwdOk && checkRole){
        btnRegister.disabled = false;
    }
    else{
        btnRegister.disabled = true;
    }
}

function validateRequired (input) {
    if (input.value != "") {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateMail(input){
    // regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


function validatePassword(input){
    //regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}