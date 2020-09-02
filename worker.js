/**
  worker is in it's own global scope therefore we can call onmessage and postMessage anywhere in it.
*/

// worker listener to get data from main file as e.data
onmessage = function(e) {
  runLoop(e.data);  
}

function runLoop(number) {
  let i = 0;
  let array = []
  while(i < number) {
    i++;
    array.push(i)
  }
  postMessage(array);
}


