import './style.css';
const characterContainer = document.getElementById('display_characters'); 




async function getMarvelCharacters(){
    try{
        const response = await fetch('/api/marvel/characters'); 
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`); 
        }
        const data = await response.json();  
        const characters = data.data.results;
        console.log(characters);  
        displayCharacters(characters);   
    }catch(error){
        console.error(error.message); 
    }
}

function displayCharacters(characters){
  const fragment = document.createDocumentFragment(); 

  characters.forEach((character) => {
    const imgElement = document.createElement('img'); 
    const imgContainer = document.createElement('div');
    const imgInformation = document.createElement('div'); 
    const spanElement = document.createElement('span'); 

    
    imgContainer.classList.add('img_container'); 
    imgInformation.classList.add('img_information'); 
    spanElement.classList.add('character_name'); 

    spanElement.textContent = character.name;  

    
    const tumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`; 
    
    imgElement.src = tumbnail; 
    imgElement.alt = character.name; 

    imgInformation.appendChild(spanElement); 
    imgContainer.appendChild(imgElement);
    imgContainer.appendChild(imgInformation); 

    fragment.appendChild(imgContainer);
  });

  characterContainer.appendChild(fragment); 
}
getMarvelCharacters(); 

