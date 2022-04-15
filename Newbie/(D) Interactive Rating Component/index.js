let currentRating = 0;
$(".start .rating-no p").click(function() {
    currentRating = $(this).html();
    $(this).addClass("active").siblings().removeClass("active")
    // $(".start .rating-no p").eq(currentRating - 1).addClass("active");
}) 
$(document).ready(() => {

    $(".start button").click(() => {
        $(".start").hide();
        $(".rating").show();
        $("#chosen-rating").text(currentRating);
    })
})