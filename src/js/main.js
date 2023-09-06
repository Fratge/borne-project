const app = () => {
    return {
        filmsList: filmsList,
        snacksList: snacksList,

        redirectToFilmDetails(film){
            localStorage.setItem('selectedFilm', JSON.stringify(film));
            window.location.href = 'filmDetails.html';
        }
    }
}
