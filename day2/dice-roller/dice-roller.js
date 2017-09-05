function diceRoller(diceCount)
{
  var results = [];
  if(diceCount > 0)
  {
    for(i = 1; i <= diceCount; i++ ) //start at first die, not 0
    {
      var roll = Math.floor(Math.random()*6); //create random int between 0-6
      results.push(" " + roll);
    }
      console.log("Rolled " + diceCount + " dice: " + results);
  }
  else
    console.log("Enter a number of dice to roll");
}

diceRoller(process.argv.slice(2));