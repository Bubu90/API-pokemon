
axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
.then(function (response) {
  console.log(response)
  let pokemon = response.data.results;
  let WrapCard = document.querySelector('#WrapCard');

  pokemon.forEach(element => {
    axios.get(element.url)
    .then(function (response2){
      let data = response2.data; 
      let card = document.createElement('div');
      card.classList.add('p-3','col-12','col-md-2','text-center','justify-content-center','d-flex');
      card.innerHTML = `
      <div class="flip-card rotate-vert-center ">
      <div class="flip-card-inner ">
          <div class="flip-card-front font align-items-center ">
          <div class="card__info img-fluid  ">
          <img src="${data.sprites.front_default}" alt="${data.name}" />
          </div>
          <div class="card2 ">
          <h3 class=" mt-3 text-capitalize ">${data.name}</h3>
          <p>Specie: ${data.types[0].type.name} </p>
          </div>
          </div>
          <div class="flip-card-back align-items-center font "card__info  card2">
          <div class="card__info2 img-fluid ">
          <img src="${data.sprites.front_shiny }"> </img>
                  </div>
          <div class="card2 ">
        
          <p class="mt-5">Altezza: ${data.height} cm</p>
          <p>Peso: ${data.weight} kg</p>
         
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





