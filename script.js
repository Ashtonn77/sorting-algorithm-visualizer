import { insertionSort, bubbleSort} from './algorithms.js'


function generateRandomNumber(max, min) {
  return Math.floor((Math.random() * max) + min);
};

export const container = document.querySelector(".container");

///////////////////////////////////////////////////////

function test1() {
  var newArr = [];
  for (var i = 0; i < 100; i++) {
    var rando = generateRandomNumber(400, 10);
    newArr.push('<div class="bars" style="height:' + rando + 'px;">' + rando + '</div>')
  }
  return newArr.join('');
}

window.addEventListener('load', () => {
  const test = document.querySelector('.container');
  test.innerHTML = test1();
  const blocks = document.querySelectorAll('.bars');
 
  //bubbleSort
  bubbleSortBtn(test);
  //insertionSort
  insertionSortBtn(test);
  //mergeSort
  quickSortBtn(blocks);

})

///////////////////////////////////////////////////
function bubbleSortBtn(test) {
  let btn = document.querySelector('.bubble');
  btn.addEventListener('click', () => { bubbleSort(); })
};
////////////////////////////////////////////////////////  

function insertionSortBtn(test) {
  let btn = document.querySelector('.insertion');
  btn.addEventListener('click', () => { insertionSort(); })
}

//////////////////////////////////////////////////////////////

function quickSortBtn(blocks) {
  let btn = document.querySelector('.quick');
  btn.addEventListener('click', () => { quickSort(blocks); });
};

////////////////////////////////////////////////////////////

export function swap(el1, el2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;

    // Wait for the transition to end!
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 1);
    });
  });
}


////////////////////////////////////////////////////////////////////////

async function pivot(arr, start = 0, end = arr.length + 1, delay = 50) {
  var swapIndex = start;
  var pivot = parseInt(arr[start].childNodes[0].textContent);

  for (var i = start + 1; i < arr.length; i++) {
    arr[i].style.backgroundColor = "#FF4500";
    arr[start].style.backgroundColor = "#FF4500";

    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
      
    if (pivot > parseInt(arr[i].childNodes[0].textContent)) {
      swapIndex++;
      await swap(arr[swapIndex], arr[i]);
    }
    arr[start].style.backgroundColor = "#ffd700";
    arr[swapIndex].style.backgroundColor = "#ffd700";
  } 
  await swap(arr[start], arr[swapIndex]);  
  return swapIndex;  
};

async function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    var pivotIndex = pivot(arr, left, right);
    await quickSort(arr, left, pivotIndex);
    await quickSort(arr, pivotIndex + 1, right);     
  }
 console.log(arr)
}

///////////////////////////////////////////////////////

