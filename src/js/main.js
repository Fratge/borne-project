const app = () => {
    let initialPanier = JSON.parse(localStorage.getItem("panierUser")) || [];

    return {
        filmsList: filmsList,
        snacksList: snacksList,
        adulteQuantity: 0, 
        etudiantQuantity: 0, 
        enfantQuantity: 0, 
        
        panierUser: initialPanier,
        selectedFilm: JSON.parse(localStorage.getItem('selectedFilm')),


        redirectToFilmDetails(film){
            localStorage.setItem('selectedFilm', JSON.stringify(film));
            window.location.href = 'filmDetails.html';
        },


        addToPanier() {
            const existingItemIndex = this.panierUser.findIndex(item => item.filmName === this.selectedFilm.filmName);
        
            if (existingItemIndex !== -1) {
                this.panierUser[existingItemIndex].adulteQuantity += this.adulteQuantity;
                this.panierUser[existingItemIndex].etudiantQuantity += this.etudiantQuantity;
                this.panierUser[existingItemIndex].enfantQuantity += this.enfantQuantity;
            } else {
                const newItem = {
                    filmName: this.selectedFilm.filmName,
                    adulteQuantity: this.adulteQuantity,
                    etudiantQuantity: this.etudiantQuantity,
                    enfantQuantity: this.enfantQuantity,
                };
                this.panierUser.push(newItem);
            }
        
            this.setPanierUser();
        },
        

        resetQuantity(item, quantityType) {
            item[quantityType] = 0;
            this.setPanierUser();
        },

        setPanierUser() {
            localStorage.setItem("panierUser", JSON.stringify(this.panierUser));
            console.log(this.panierUser)
        },

        calculateTotal() {
            let total = 0;
        
            for (const item of this.panierUser) {
                const film = this.filmsList.find(f => f.filmName === item.filmName);
        
                if (film) {
                    total += (film.adultePrice * item.adulteQuantity) +
                             (film.etudiantPrice * item.etudiantQuantity) +
                             (film.enfantPrice * item.enfantQuantity);
                }
            }
            return total.toFixed(2) + ' €';
        },

        getFilmPrice(filmName, priceType) {
            const film = this.filmsList.find(f => f.filmName === filmName);
            if (film) {
                return film[priceType];
            }
            return 0;
        },

        background(snack){
            snack.largeBool = !snack.largeBool;
        },


    }
}
