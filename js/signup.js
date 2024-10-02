let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submitBtn")

let userName = 
submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(email.value === "" || password.value === "" || firstName.value === ""|| lastName.value ===""){
        alert("please enter all values")
    }else{
        localStorage.setItem("username" ,firstName.value + lastName.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);

        setTimeout(()=>{
                window.location = "login.html"
        },1000)
    }
})
