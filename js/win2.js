$(document).ready(function() {
$( ".compl" ).hide();
  var counter = 0;
  var c = 0;
  var i = setInterval(function() {
    $(".loading-page .counter h1").html(c + "%");
    $(".loading-page .counter hr").css("width", c + "%");
    counter++;
    c++;

    if (counter == 101) {
      clearInterval(i);
      setTimeout(function () {
          
      
$(".loading-page").remove()
$( ".compl" ).show();


}, 1000);

    }
  }, 50);
});
