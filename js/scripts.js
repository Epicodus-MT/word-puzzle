$(document).ready(function() {
  $('#submit_button').click(function(event){
  event.preventDefault();

  var wordInput = $("input#word").val().toLowerCase();
  var letterArray = wordInput.split('');
  // var emptyWordArray = [];
    $("#results").append("Solve the puzzle: " + wordInput);
    $("#form").hide();
    $("h2").hide();

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < vowels.length; i++) {   // loop through vowels
      for (var j = 0; j < letterArray.length; j++) {
        if (vowels[i] === letterArray[j]) {
          console.log(letterArray[j]);
          wordInput = wordInput.replace(letterArray[j], '-');
        }
      }
    }
  console.log(wordInput);


  });
});
