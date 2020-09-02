let worker;
/**
  Inside main file postMessage and onmessage needs to be on worker object itself.
*/
function handler(){
  let number = document.getElementById('input').value;
  // create a new worker;
  worker = new Worker('worker.js');
  // send data to worker from main script
  worker.postMessage(parseInt(number))

  worker.onmessage = function(e) {
    paintDOM(e.data);
  }
}



function paintDOM(numbers) {
  const ul = document.createElement('ul');
  document.body.appendChild(ul)
  const fragment = document.createDocumentFragment();
  numbers.forEach(number => {
    const li = document.createElement('li');
    li.innerHTML = number;
    fragment.appendChild(li);
  })
  ul.appendChild(fragment);
}

document.getElementById("prime-number").addEventListener('click', handler)