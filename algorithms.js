import { container, swap } from './script.js'

export async function insertionSort(delay = 1) {

    if (delay && typeof delay !== "number") {
      alert("Error in argument type...sorry :(");
      return;
    };
  
    let blocks = document.querySelectorAll('.bars');
  
    for (var i = 1; i < blocks.length; i++) {
      var currentValue = parseInt(blocks[i].childNodes[0].textContent)
  
      for (var j = i - 1; j >= 0 && parseInt(blocks[j].childNodes[0].textContent) > currentValue; j--) {
  
        blocks[j].style.backgroundColor = "red";
        blocks[j + 1].style.backgroundColor = "	#00FF00";
  
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        await swap(blocks[j + 1], blocks[j]);
        blocks = document.querySelectorAll(".bars");
      }
      await swap(blocks[j + 1], blocks[i]);
      blocks = document.querySelectorAll(".bars");
      blocks[j + 1].style.backgroundColor = "	#00FF00";
      blocks[i].style.backgroundColor = "#58B7FF";
    }
    blocks[0].style.backgroundColor = "#58B7FF";
    window.insertionSort();  
  };


  export async function bubbleSort(delay = 1) {
    if (delay && typeof delay !== "number") {
      alert("Error in argument type...sorry :(");
      return;
    }
    let blocks = document.querySelectorAll(".bars");
    for (let i = 0; i < blocks.length - 1; i += 1) {
      for (let j = 0; j < blocks.length - i - 1; j += 1) {
        blocks[j].style.backgroundColor = "	#FF4500";
        blocks[j + 1].style.backgroundColor = "#FF4500";
  
        await new Promise(resolve =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
  
        const value1 = parseInt(blocks[j].childNodes[0].textContent);
        const value2 = parseInt(blocks[j + 1].childNodes[0].textContent);
  
        if (value1 > value2) {
          await swap(blocks[j], blocks[j + 1]);
          blocks = document.querySelectorAll(".bars");
        }
  
        blocks[j].style.backgroundColor = "#ffd700";
        blocks[j + 1].style.backgroundColor = "#ffd700";
      }
  
      blocks[blocks.length - i - 1].style.backgroundColor = "#ff0080";
    }
  
    blocks[0].style.backgroundColor = "#ff0080";
  
  };