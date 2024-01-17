function searchMovie() {
    const apiKey = '8eb88ec8';
    const apiUrl = 'https://www.omdbapi.com/';
    const searchInput = document.getElementById('searchInput').value;
    const movieDetailsContainer = document.getElementById('movieDetails');

    // Clear previous search results
    movieDetailsContainer.innerHTML = '';

    // Make a request to the OMDb API
    fetch(`${apiUrl}?apikey=${apiKey}&t=${encodeURIComponent(searchInput)}`)
        .then(response => response.json())
        .then(data => {
            // Display movie details
            displayMovieDetails(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movieDetails');

    if (movie.Response === 'True') {
        const title = `<h2>${movie.Title}</h2>`;
        const year = `<p>Year: ${movie.Year}</p>`;
        const genre = `<p>Genre: ${movie.Genre}</p>`;
        const plot = `<p>Plot: ${movie.Plot}</p>`;
        const poster = movie.Poster !== 'N/A' ? `<img src="${movie.Poster}" alt="${movie.Title} Poster">` : '';
        movieDetailsContainer.append(title)
        movieDetailsContainer.innerHTML = year + genre + plot + poster;
    } else {
        movieDetailsContainer.innerHTML = `<p>No movie found with that title</p>`;
    }
}
