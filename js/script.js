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

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loading");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  $('#01').delay(200).fadeIn("slow");
  $('#02').delay(1000).fadeIn("slow");
  $('#03').delay(1500).fadeIn("slow");
  $('#04').delay(2000).fadeIn("slow");
}