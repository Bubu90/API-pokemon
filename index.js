
axios.get('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
.then(function (response) {
  let pokemon = response.data.results;
  let WrapCard = document.querySelector('#WrapCard');
  
  pokemon.forEach(element => {
    axios.get(element.url)
    .then(function (response2){
      let data = response2.data; 
      console.log(data)
      let card = document.createElement('div');
      card.classList.add('p-3','col-12','col-md-2','text-center','justify-content-center','d-flex');
      card.innerHTML = `
     
      
      <div class="flip-card">
      <div class="flip-card-inner">
          <div class="flip-card-front font align-items-center ">
          <div class="card__info img-fluid ">
          <img src="${data.sprites.front_default}" alt="${data.name}" />
          </div>
          <div class="card2">
          <h3 class="text-capitalize">${data.name}</h3>
          <p>Altezza: ${data.height} cm</p>
          <p>Peso: ${data.weight} kg</p>
          <p>Specie: ${data.types[0].type.name} cm</p>
          </div>
          </div>
          <div class="flip-card-back align-items-center font">
          <h3 class="text-capitalize">${data.name}</h3>
          ${data.abilities[0] ? `<p>Abilità: ${data.abilities[0].ability.name}</p>` : ''}
          ${data.abilities[1] ? `<p>Abilità: ${data.abilities[1].ability.name}</p>` : ''}
          ${data.abilities[2] ? `<p>Abilità: ${data.abilities[2].ability.name}</p>` : ''}
          ${data.abilities[3] ? `<p>Abilità: ${data.abilities[2].ability.name}</p>` : ''}
          <div class="card__info2 img-fluid ">
          <img src="${data.sprites.front_shiny }"> </img>
                  </div>
          </div>
      </div>
  </div>
      
      
     
      
      
      
      
      
      `;
      WrapCard.appendChild(card);
     


    });
  });
  
 
})
.catch(function (error) {
  console.error(error);
});





