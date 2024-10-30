const verifLogin=()=>{
    if (localStorage.getItem("email")) {
        window.location.href = "./index.html";
    }
}

verifLogin();