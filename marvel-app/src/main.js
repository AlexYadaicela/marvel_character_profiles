import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
async function getMarvelCharacters(){
    try{
        const response = await fetch('/api/marvel/characters'); 
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`); 
        }
        const characters = await response.json();  
        console.log(characters.data.results); 
    }catch(error){
        console.error(error.message); 
    }
}
getMarvelCharacters(); 
setupCounter(document.querySelector('#counter'))
