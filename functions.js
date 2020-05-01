import { insertionSort, bubbleSort} from './algorithms.js';
import { container } from './script.js';

function refresh(){
    location.reload(true)
  };

 export function generateRandomNumber(max, min) {
    return Math.floor((Math.random() * max) + min);
  };
  
  export function generateNewArrayBtn(){
    let btn = document.querySelector('.generate');
    btn.addEventListener('click', refresh)
  }

  export function bubbleSortBtn(test) {
    let btn = document.querySelector('.bubble');
    btn.addEventListener('click', () => { bubbleSort(); })
  };
 
  
  export function insertionSortBtn(test) {
    let btn = document.querySelector('.insertion');
    btn.addEventListener('click', () => { insertionSort(); })
  };

  export function swap(el1, el2) {
    return new Promise(resolve => {
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
  
      const transform1 = style1.getPropertyValue("transform");
      const transform2 = style2.getPropertyValue("transform");
  
      el1.style.transform = transform2;
      el2.style.transform = transform1;  
      
      window.requestAnimationFrame(function () {
        setTimeout(() => {
          container.insertBefore(el2, el1);
          resolve();
        }, 1);
      });
    });
  };

  export function displayBars() {
    var newArr = [];
    for (var i = 0; i < 100; i++) {
      var rando = generateRandomNumber(400, 10);
      newArr.push('<div class="bars" style="height:' + rando + 'px;">' + rando + '</div>')
    }
    return newArr.join('');
  };
  