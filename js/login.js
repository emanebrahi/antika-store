let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submitBtn");


let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");


submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(email.value === " " || password.value === ""){
        alert("please fill data")
    }else{
        if(getEmail && getEmail.trim() === email.value && getPassword && getPassword.trim() ===password.value){
            setTimeout(()=>{
                window.location="index.html"
            },1000)
        }else{
            alert("email or password is wrong")
        }
    }
})