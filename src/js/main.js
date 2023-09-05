const app = () => {
    return {
        filmsList: filmsList,
        snacksList: snacksList,

        redirectFilmDetails(film){
            const filmDetailsUrl = '/filmDetails?id=' + film.id; 
            window.location.href = filmDetailsUrl;
        }
    }
}