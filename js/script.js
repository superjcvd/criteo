function flip() {
    $('.card').toggleClass('flipped');
}
function optout_show() {
    $('.survey').css("visibility", "visible");
    $('.card').css("visibility", "hidden");
}
function optout_hide() {
    $('.survey').css("visibility", "hidden");
    $('.card').css("visibility", "visible");
}

//$('.survey').css("visibility", "visible");