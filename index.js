// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let drinks = ['Pepsi', 'Coke', 'Fanta', 'Sprite', '7up', 'Bitter Cola']

let arrLength = (arr) => {
      let len = 0;
      while(arr[len]) {
        len++
      }

      return len
}

console.log(arrLength(drinks))