const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Here, you will need to call the API to check the credentials in BDD
    
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //You will have to recover the real token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //place this token as a cookie
        //for tests change admin to employee or veterinarian
        setCookie(RoleCookieName, "admin", 7);

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}