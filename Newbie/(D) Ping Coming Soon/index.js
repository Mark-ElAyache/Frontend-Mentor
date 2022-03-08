function invalidEmail() {
    let inputBox = document.querySelector("input");
    let errorMessage = document.getElementsByClassName("error")[0];

    errorMessage.classList.add("display-item");
    inputBox.classList.add("border-error");
}