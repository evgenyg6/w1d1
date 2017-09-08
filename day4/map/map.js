function map(arrArg, callback){  //arguments are words, function(word) from below
  var arr = [];
  arrArg.forEach(function(element){  //for each element in arrArg
     arr.push(callback(element)); //first, callback function, then push into new array

  })
     return console.log(arr); //must console log to show results

}

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {  //2 parameters: words, function(words)
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
