$(document).ready(function() {
  function updateTheme() {
    if ($('#myonoffswitch').is(':checked')) {
      $('body').removeClass('dark-mode').addClass('light-mode');
    } else {
      $('body').removeClass('light-mode').addClass('dark-mode');
    }
  }
  updateTheme();
  $('#myonoffswitch').change(function() {
    updateTheme();
  });
});
