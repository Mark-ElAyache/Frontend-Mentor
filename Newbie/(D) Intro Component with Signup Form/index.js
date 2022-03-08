function adjustBackgroundHeight() {
    $(".background-img, .red-hue").css("height", $("body").height());
}
$(document).ready(adjustBackgroundHeight)
$(window).resize(adjustBackgroundHeight)

$("input").keyup((e) => {
    let element = $("input[name=" + e.target.name + "]");
    if (element.is(":invalid")) {
        element.addClass('border-error');
        element.siblings().addClass("display-error");
    } else {
        element.removeClass("border-error");
        element.siblings().removeClass("display-error");
    }
});

$("input").bind("invalid", (e) => {
  let element = $("input[name=" + e.target.name + "]");
  element.addClass("border-error");
  element.siblings().addClass("display-error");
});