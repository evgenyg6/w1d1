var countdownGenerator = function (x) {

var time = x;
  return function(){

 if (time > 0) {
    console.log("T-minus" + time);
  }
  if (time === 0) {
    console.log("Blast Off!");
  }
  if (time < 0) {
    console.log("Rockets already gone, bub!");
  }
  time -= 1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!