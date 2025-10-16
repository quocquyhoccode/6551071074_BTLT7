$(document).ready(function() {
  $("h3").click(function() {
    $(".box").slideUp();

    if (!$(this).next(".box").is(":visible")) {
      $(this).next(".box").slideDown();
    }
  });
});
