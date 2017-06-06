$(document).ready(function() {
  $('#submit_button').click(function(event){
  event.preventDefault();

  var wordInput = $("input#word").val();
    $("#results").append("Solve the puzzle: " + wordInput);
    $("#form").hide();
    $("h2").hide();

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var sentence = ($('.sentence').val()).split(''); // is an array
      for (var i = 0; i < vowels.length; i++) {   // loop through vowels

      }  // for loop
  });

    //var seperateLetters = wordInput.split();
    // wordInput.forEach(function(wordInput) {
    //   for
    //
    //   if (separateLetter = "a"){
    //     $(separateLetter).replace("-")
    //     alert(wordInput);
    // }
    //
//}
    //function removeVowels(wordInput) {
      //return wordInput.replace(/[aeiou]/gi, '-');
  //  }
//var seperateLetters = wordInput.split("");
    //.replace(/[aeiou]/ig,'-')

    // function removeVowels(str) {


    // for (i = 0; i<seperateLetters.length; i++) {
    //   );
    // }


    // var seperateLetters = wordInput.split("");
    //alert(seperateLetters);






  });
});
