var numbersInWords = function(number) {
  var splitNumber = number.toString().split("");
  var units = {1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine", 0:""};
  var tens = {1:"ten", 2:"twenty", 3:"thirty", 4:"fourty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety", 0:""};
  var teens = {1:"eleven", 2:"twelve", 3:"thirteen", 4:"fourteen", 5:"fifteen", 6:"sixteen", 7:"seventeen", 8:"eightteen", 9:"nineteen", 0:""};
  var suffix = {1:"thousand", 2:"million", 3:"billion", 4:"trillion"}

  var numberPosition = "units";
  var wordResivouir = [];
  var wordsInserted = 0;
  var count = 0;
  var suffixToInsert = 1;

  if (number === 0) {
    return "zero"
  }

  for (var i = splitNumber.length-1; i > -1; i--) {

    if (numberPosition === "units") {
      wordResivouir.push(units[parseInt(splitNumber[i])]);
      numberPosition = "tens";
      wordsInserted++;

    } else if (numberPosition === "tens") {
      if (parseInt(splitNumber[i]) > 1) {
        wordResivouir.push(tens[parseInt(splitNumber[i])]);
        wordsInserted++;
      } else if (parseInt(splitNumber[i]) === 1 && parseInt(splitNumber[i+1]) === 0) {
        wordResivouir.push(tens[parseInt(splitNumber[i])]);
        wordsInserted++;
      } else if (parseInt(splitNumber[i]) === 1 && parseInt(splitNumber[i+1]) > 0) {
        wordResivouir.pop();
        wordResivouir.push(teens[parseInt(splitNumber[i +1])]);
        wordsInserted++;
    };

    numberPosition = "hundreds";

    } else if (numberPosition === "hundreds") {

      wordResivouir.push("hundred")
      wordResivouir.push(units[parseInt(splitNumber[i])]);
      numberPosition = "units";
      wordsInserted++;
    };

    count++
    if (count % 3 === 0 && i > 0) {
      wordResivouir.push(suffix[suffixToInsert]);
      count = 0
      suffixToInsert++
    };
  };



  for (i = 0; i < wordResivouir.length; i++) {
    if (wordResivouir[i] === "hundred" && wordResivouir[i-1] === "" && wordResivouir[i+1] === "") {
      wordResivouir[i] = "";
    }
  }

  for (i = 0; i < wordResivouir.length; i++) {
    if (wordResivouir[i] === "thousand" && wordResivouir[i+1] === "" && wordResivouir[i+2] === "") {
      wordResivouir[i] = "";
    }
  }

  console.log(wordResivouir);

  for (var i = wordResivouir.length; i > -1; i--) {
    if (wordResivouir[i] === "") {
      wordResivouir.splice(i,1)
    };
  };


  var result = wordResivouir.reverse().join(" ").trim();
  return result;
};
