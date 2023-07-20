const movieList = document.getElementById('movieList');
const favList = document.getElementById('favList');

const movies = [
    'The Matrix 4',
    'The Batman',
    'Doctor Strange in the Multiverse of Madness',
    'Thor: Love and Thunder',
    'Black Panther 2',
    'Black Widow',
    'Jurassic World: Dominion',
    'Star Trek 4',
    'Ted', 
    'Ted 2',
    'The Mummy'
]

let favourites = []

const addToFavourites = (movie) => {
    // Function that adds a movie to the favourites array
    // If the movie is already in the favourites array, it should not be added again
    // If the movie is not in the favourites array, it should be added
    // Once the movie is added the movie should be removed from the movies array
    // and rendered to the DOM. 
    // The favourites array should also be rendered to the DOM
    const movieName = movie.target.parentNode.querySelector('.item').innerHTML;
    movie.target.parentNode.remove();
    let flag=0;
    let count = 0;
    favourites.forEach(element=>{movieName===element?flag=1:count++});
    if(flag===0 || count===favourites.length){

        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        const item = document.createElement('span');
        item.classList.add('item');
        item.innerHTML = movieName;
        const button = document.createElement('button');
        button.innerHTML = 'Remove from Favourites';

        listItem.appendChild(item);
        listItem.appendChild(button);
        favList.appendChild(listItem);
        favourites.push(movieName);

        console.log(favourites);

        button.addEventListener('click',removeFromFavourites);
    }
}

const removeFromFavourites = (movie) => {
    // Function that removes a movie from the favourites array
    // If the movie is not in the favourites array, it should not be removed
    // If the movie is in the favourites array, it should be removed
    // Once the movie is removed the movie should be added to the movies array
    // and rendered to the DOM.
    // The favourites array should also be rendered to the DOM
    const movieName = movie.target.parentNode.querySelector('.item').innerHTML;
    addMovie(movieName);
    favourites = favourites.filter(element=>element!=movieName);
    movie.target.parentNode.remove();
    console.log(favourites);
}

const addMovie = (movie)=>{
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    const item = document.createElement('span');
    item.classList.add('item');
    item.innerHTML = movie;
    const button = document.createElement('button');
    button.innerHTML = 'Add to Favourites';

    listItem.appendChild(item);
    listItem.appendChild(button);
    movieList.appendChild(listItem);

    button.addEventListener('click',addToFavourites)
}

const addAllMoviesAndFav = (event)=>{
    movies.forEach(element => {
        addMovie(element);
    });
}

document.addEventListener('DOMContentLoaded',addAllMoviesAndFav);