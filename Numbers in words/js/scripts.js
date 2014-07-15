var numbersInWords = function(number) {
  var splitNumber = number.toString().split("");
  var units = {1:"one?", 2:"two?", 3:"three?", 4:"four?", 5:"five?", 6:"six?", 7:"seven?", 8:"eight?", 9:"nine?", 0:""};
  var tens = {1:"ten?", 2:"twenty?", 3:"thirty?", 4:"fourty?", 5:"fifty?", 6:"sixty?", 7:"seventy?", 8:"eighty?", 9:"ninety?", 0:""};
  var teens = {1:"eleven?", 2:"twelve?", 3:"thirteen?", 4:"fourteen?", 5:"fifteen?", 6:"sixteen?", 7:"seventeen?", 8:"eightteen?", 9:"nineteen?", 0:""};


  var numberPosition = "units";
  var wordResivouir = [];

  for (var i = splitNumber.length-1; i > -1; i--) {
    if (numberPosition === "units") {
    wordResivouir = wordResivouir + units[parseInt(splitNumber[i])];
    numberPosition = "tens";

    } else if (numberPosition === "tens") {

      if (parseInt(splitNumber[i]) > 1) {
        wordResivouir = wordResivouir + tens[parseInt(splitNumber[i])];
      } else if (parseInt(splitNumber[i]) === 1 && parseInt(splitNumber[i+1]) === 0) {
        wordResivouir = wordResivouir + tens[parseInt(splitNumber[i])];
      } else if (parseInt(splitNumber[i]) === 1 && parseInt(splitNumber[i+1]) > 0) {
        console.log(wordResivouir)
        wordResivouir = wordResivouir.slice(wordResivouir.length) + teens[parseInt(splitNumber[i +1])];
        console.log(wordResivouir)
    };

    numberPosition = "hundreds";

    } else if (numberPosition === "hundreds") {
      wordResivouir = wordResivouir + units[parseInt(splitNumber[i])];
      numberPosition = "units";

    };

  };
  wordResivouir = wordResivouir.split("?").reverse().join(" ").trim()
return wordResivouir

};
