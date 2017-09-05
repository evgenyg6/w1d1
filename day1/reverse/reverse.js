function reverse(strings)
{
  for(var k = 0; k < strings.length; k++)
  {
    var sorted = "";
    var outArr = strings[k];
    for(var i = outArr.length - 1; i >= 0; i--)
    {
      sorted += outArr[i];
    }
    console.log(sorted);
  }
}

reverse(process.argv.slice(2));