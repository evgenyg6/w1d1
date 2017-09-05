function pigLatin(arr)
{
  for(var k = 0; k < arr.length; k++) //for entire (outside) array
  {
    var sorted = "";
    var outArr = arr[k]; //write all [k] values to new array
    for(var i = 1; i < outArr.length; i++) //sort word itself
    {
      sorted = sorted + outArr[i];
    }
    console.log(sorted + outArr[0] + "ay");
  }
}

pigLatin(process.argv.slice(2));
