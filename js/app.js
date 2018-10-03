$("form").submit(function(event){
  event.preventDefault();
});

function removeHidden(){
  //$(".hidden").remove();

  var strList = delimitInput($('#user-text').val());
  var wordCount = getWordCount(strList);
  var avgLength = avgWordLength(strList);
  var uniqueWords = getUniqueWords(strList);

  var textReport = $('.text-report');
  textReport.find('.js-word-count').text(String(wordCount));
  textReport.find('.js-unique-word-count').text(uniqueWords);
  textReport.find('.js-average-word-length').text(avgLength + " characters");
  textReport.removeClass('hidden');
}

function delimitInput(input){
  //var arr = input.split(" ");
  //console.log(arr);
  //return arr;
  //Research regex parsing in JS
  return input.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function getWordCount(arr){
  return arr.length;
}

function getUniqueWords(arr){
  //var dictionary = new Array;
  //dictionary.constructor === arr;
  //return dictionary;

  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique.length;
}

function avgWordLength(arr){
  var avgCount = 0
  var divisor = arr.length;

  for(var i = 0; i < arr.length; i++){
    avgCount = avgCount + arr[i].length;
  }

  return avgCount/divisor;
}
