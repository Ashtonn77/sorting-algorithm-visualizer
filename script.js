import { bubbleSortBtn, insertionSortBtn, /*quickSortBtn,*/ displayBars } from './functions.js';
import { generateNewArrayBtn } from './functions.js';

export const container = document.querySelector(".container");

window.addEventListener('load', () => {
  const test = document.querySelector('.container');
  test.innerHTML = displayBars();
  const blocks = document.querySelectorAll('.bars');
  
  generateNewArrayBtn();
 
  bubbleSortBtn(test);

  insertionSortBtn(test);
 
  //quickSortBtn(blocks);

});

/*async function pivot(arr, start = 0, end = arr.length + 1, delay = 50) {
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
}*/



