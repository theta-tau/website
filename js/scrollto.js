$(document).ready(function() {
  $("#campus").click(function() {
    $('html, body').animate({
        scrollTop: $("#campus-content").offset().top
    }, 500);
  });
  $("#local").click(function() {
    $('html, body').animate({
        scrollTop: $("#local-content").offset().top
    }, 500);
  });
  $("#national").click(function() {
    $('html, body').animate({
        scrollTop: $("#national-content").offset().top
    }, 500);
  });
});