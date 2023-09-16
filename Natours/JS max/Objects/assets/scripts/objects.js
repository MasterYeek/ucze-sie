// const movieList = document.getElementById("movie-list");

// movieList.style.backgroundColor = "red";

// const userChosenKeyName = "level";

// let person = {
//   "first name": "Tom",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   [userChosenKeyName]: "...",
//   greet: function () {
//     alert("hi there");
//   },
//   1.5: "hello",
// };
// delete person.age;
// person.isAdmin = true;

// const keyname = "first name";

// console.log(person[keyname]);
// console.log(person[1.5]);
// console.log(person["first name"]);

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    //const { getFormattedTitle } = movie;
    let text = movie.getFormattedTitle() + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle: function () {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
