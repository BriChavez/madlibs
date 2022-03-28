$(document).ready(function() {
  console.log("Script executing!")
  $("#formOne").submit(function(event) {
    console.log("Submit form successfully reached.");
    event.preventDefault();

    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    let libs = [person1Input, person2Input, animalInput, exclamationInput, person1Input, verbInput, person1Input, person2Input, nounInput];
    let inserts = ['.person1', '.person2', '.animal', '.exclamation', 'person1', '.verb', '.person1', '.person2', '.noun'];
  
    let counter = 0
    libs.forEach(function(input) {
      $(inserts[counter]).text(input);
      counter += 1;
    });

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();

  });
});
