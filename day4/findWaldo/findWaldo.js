// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(arr, index){
    if (arr === "Waldo") {
      found(arr, index);   // execute callback

    }
  })
}

function actionWhenFound(arr, index) {

  console.log("Found him at index " , index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
