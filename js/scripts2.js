$(document).ready(function () { 
  $("#formOne").submit(function(event) {

    const exclamationInput = $("input#exclamation").val().toUpperCase();
    $(".exclamation").text(exclamationInput);
    $("#story").show();
    event.preventDefault();
  });
})