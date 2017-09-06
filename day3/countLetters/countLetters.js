function countLetters(str){
  var frequency = {};

  for(i = 0; i < str.length; i++){
    var character = str[i];
    if(character in frequency){
      frequency[character]++;
    }
    else{
      frequency[character] = 1;
    }
  }

  return frequency;
}

var myArgs = (process.argv.slice(2));
var myInput = myArgs.join("" + 1 +'\n').replace(/\s/g,"");
console.log(countLetters(myInput));