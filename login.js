let form = document.querySelector("form");
const submit=(e)=>{
    let errorContainer = document.querySelector(".error-container");
    e.preventDefault();
    if(userlogin.password === form.elements.password.value && userlogin.email === form.elements.email.value){
        localStorage.setItem("email", form.elements.email.value);
        localStorage.setItem("password", form.elements.password.value);
        window.location.href = "./index.html";
    }else{
        form.elements.email.value = "";
        form.elements.password.value = "";
        errorContainer.style.display="flex";
    }
}
form.addEventListener("submit",submit)



