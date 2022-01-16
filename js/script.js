let elResult = document.querySelector(".movies__result");
let elList = document.querySelector(".movies__list");
let elSelect = document.querySelector(".select");
let elFormSearch = document.querySelector(".form-search");

elResult.textContent = films.length;

elSelect.innerHTML = null;


const generateGenres = function (films) {
  const filteredGenres = [];

  films.forEach((film) => {
    film.genres.forEach((genre) => {
      if (!filteredGenres.includes(genre)) {
        filteredGenres.push(genre);
      }
    });
  });

  filteredGenres.forEach((genre) => {
    let newOption = document.createElement("option");

    newOption.value = genre;
    newOption.textContent = genre;

    elSelect.appendChild(newOption);
  });
};

const renderFilms = function (filmsArray, element) {
  filmsArray.forEach((movie) => {
    //CREATE
    let newItem = document.createElement("li");
    let newCard = document.createElement("div");
    let newImg = document.createElement("img");
    let newCardBody = document.createElement("div");
    let newCardTitle = document.createElement("h5");
    let newCardGenres = document.createElement("ul");

    movie.genres.forEach((genre) => {
      let newGenre = document.createElement("li");

      newGenre.textContent = genre;

      newCardGenres.appendChild(newGenre);
    });

    //SET ATTRIBUTE
    newItem.setAttribute("class", "movies__item");
    newCard.setAttribute("class", "card");
    newCard.style.width = "18rem";
    newImg.setAttribute("class", "card-img-top");
    newImg.setAttribute("src", movie.poster);
    newCardBody.setAttribute("class", "card-body");
    newCardTitle.setAttribute("class", "card-title");

    //TEXT CONTENT
    newCardTitle.textContent = movie.title;

    //APPEND
    element.appendChild(newItem);
    newItem.appendChild(newCard);
    newCard.appendChild(newImg);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle);
    newCardBody.appendChild(newCardGenres);
  });
};

// renderFilms(films, elList);
generateGenres(films);

elFormSearch.addEventListener("submit", function (evt) {
  evt.preventDefault();
  elList.innerHTML = null;

  let selectValue = elSelect.value;

  let filteredFilms = [];

  films.forEach((film) => {
    film.genres.forEach((genre) => {
      if (selectValue == genre) {
        filteredFilms.push(film);
      }
    });
  });
  if(selectValue == "All"){
    renderFilms(films, elList);
  } else {
    renderFilms(filteredFilms, elList);
  }
});




//elForm submit
//selectedFilmsArray
//select value
//films.genres.includes(selectedValue)
//selectedFilmsArray.push(Film object)

//renderFilms(selectedFilmsArray)
