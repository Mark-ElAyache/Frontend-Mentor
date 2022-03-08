function warningLabel() {
    let inputWarning = document.getElementById("input-warning");
    let textWarning = document.getElementsByClassName("text-warning")[0];
    let inputBox = document.querySelector("input");

    inputWarning.classList.add("invalid-email");
    textWarning.classList.add("invalid-email");
    inputBox.classList.add("invalid-email-box")
}
