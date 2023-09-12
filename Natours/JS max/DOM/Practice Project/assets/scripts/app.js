//const addMovieModal = document.querySelector("#add-modal");
//const addMovieModal = document.body.children[1];

//same
const addMovieModal = document.getElementById("add-modal");
const addBackdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const addButtonMovie = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};
const deleteMovie = (movieID) => {
  let movieIndex = 0;
  for (const move of movies) {
    if (movies.id === movieID) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const lisRoot = document.getElementById("movie-list");
  lisRoot.childrenp[movieIndex].remove();
};

const renderNewMovieELement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = ` <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}"></div>
  <div class="movie-elemet__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>`;

  newMovieElement.addEventListener("click", deleteMovie.bind(null, id));

  const lisRoot = document.getElementById("movie-list");
  lisRoot.append(newMovieElement);
};
//same
//const startADDMovieButton = document.querySelector("header").lastElementChild;
const startADDMovieButton = document.querySelector("header button");

const togglebackdrop = () => {
  addBackdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  togglebackdrop();
};

const clearMovieInpunts = () => {
  userInputs[0].value = "";
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const cancelAddMovie = () => {
  toggleMovieModal();
  clearMovieInpunts();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5) ");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInpunts();
  renderNewMovieELement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startADDMovieButton.addEventListener("click", toggleMovieModal);
addBackdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
addButtonMovie.addEventListener("click", addMovieHandler);
