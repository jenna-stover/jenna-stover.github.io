const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
};

const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies-section");

    movies.forEach((movie) => {
        moviesSection.append(getMovieItem(movie))
    });
};

const getMovieItem = (movie) => {
    let section = document.createElement("section");
    section.classList.add("movie");

    let img = document.createElement("img");
    img.src = movie.img;
    section.append(img);

    let div = document.createElement("div");
    section.append(div);

    let h3 = document.createElement("h3");
    h3.innerText = movie.title;
    div.append(h3);

    let ul = document.createElement("ul");
    div.append(ul);
    ul.append(getLi(`Director: ${movie.director}`));
    ul.append(getLi(`Actors: ${movie.actors}`));
    ul.append(getLi(`Year: ${movie.year}`));
    ul.append(getLi(`Genres: ${movie.genres}`));
    ul.append(getLi(`Description: ${movie.description}`));

    return section;
};

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;

    return li;
};

window.onload = () => showMovies();