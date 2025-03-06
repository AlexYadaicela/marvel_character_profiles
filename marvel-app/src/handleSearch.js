

export async function setUpSearchBar(keyword){
    const searchResults = document.getElementById('search_results');  
    try{
        const response = await fetch(`/api/marvel/search?name=${keyword}`);
        if(!response.ok){
            throw new Error(`Response status:${response.status} `); 
        }
        const res = await response.json(); 
        const characters = res.data.results;  

        const fragment = document.createDocumentFragment(); 
        const ulElement = document.createElement('ul'); 

        if(characters.length >= 1){
            characters.forEach((character) => {
                const liElement = document.createElement('li'); 
                liElement.textContent = character.name;  
    
                ulElement.appendChild(liElement); 
            });
        }else{
            const liElement = document.createElement('li'); 
            liElement.textContent = 'No results found'; 
            ulElement.appendChild(liElement); 
        }

        fragment.appendChild(ulElement); 
        searchResults.appendChild(fragment); 

    }catch(error){
        console.error(error.message); 
    }
}