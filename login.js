let form = document.querySelector("form");
const submit=(e)=>{
    e.preventDefault();
    let errorContainer = document.querySelector(".error-container");
    if(userlogin.password === form.elements.password.value && userlogin.email === form.elements.email.value){
        localStorage.setItem("email", form.elements.email.value);
        localStorage.setItem("password", form.elements.password.value);
        localStorage.setItem("cart",JSON.stringify([]));
        localStorage.setItem("quantity","0");
        window.location.href = "./index.html";
    }else{
        form.elements.email.value = "";
        form.elements.password.value = "";
        errorContainer.style.display="flex";
    }
}
form.addEventListener("submit",submit)



