const textStore = document.querySelector(".textStore")
const cards = document.querySelector(".cards");
var favouritesHtml=""

const showFavourites = () => {
  let store = JSON.parse(localStorage.getItem("characters"));
  var aux
  var aux2

  removeFav = (value) => {
    var save
    for (var i = 0; i < store.length; i++) {
        if(store[i].id === value){
          aux = store[i].id
        }
    }
    if(aux === value){

      let newStore = store.filter(point => point.id !== value)
      save = newStore
      localStorage.setItem("characters", JSON.stringify(save))
      alert("Borrar personaje?")
      location.reload()
    }else{
      alert("error 404")
    }
  }

  favouritesHtml =`<div class='listFav'>`;

    store.forEach(element => {
      aux2 = element.id
        favouritesHtml+=`<div class="cardCharacterFav">
          <h2>${element.name}</h2>
          <a href="./details.html?c=${element.id}" target="_self">
            <img class="imgPosterFav" src=${element.thumbnail.path}.${element.thumbnail.extension} alt="poster"/>
            <button onclick=removeFav(${element.id}) class="buttonRemove">Borrar Favorito</button>
          </a>
        </div>`;
      });

      favouritesHtml+="</div>"

      document.getElementById("listFavourites").innerHTML="";
      document.getElementById("listFavourites").innerHTML=favouritesHtml;
      


}


let store = JSON.parse(localStorage.getItem("characters"));
if(store.length >= 0){
  showFavourites()
}else{
  textStore.innerHTML="No hay ningun personaje agregado a la lista"
}