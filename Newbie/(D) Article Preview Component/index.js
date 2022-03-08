let shareDiv = document.getElementById("share");
let shareButton = document.getElementsByClassName("share-button")[0];
let objectSVG = shareButton.children[0];
let shareableLinks = document.getElementsByClassName("shareable-links")[0];
let profileInfo = document.getElementsByClassName("user")[0];

function shareableButton() {
    const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
    );
    shareButton.classList.toggle("share-button-active");
    shareableLinks.classList.toggle("display-none");
    objectSVG.classList.toggle("object-active");

    if (vw < 800) {
        profileInfo.classList.toggle("display-none");
        shareDiv.classList.toggle("share-mobile-active");
    }

}
function adjustViewport() {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (!shareableLinks.classList.contains("display-none")) {
        if (vw < 800) {
            profileInfo.classList.add("display-none");
            shareDiv.classList.add("share-mobile-active");
        } else if (vw >= 800) {
            profileInfo.classList.remove("display-none");
            shareDiv.classList.remove("share-mobile-active");
        }
    }
}
window.addEventListener("resize", adjustViewport);