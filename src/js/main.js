const app = () => {
    let initialPanier = JSON.parse(localStorage.getItem("panierUser")) || [];

    return {
        filmsList: filmsList,
        snacksList: snacksList,
        adulteQuantity: 0, 
        etudiantQuantity: 0, 
        enfantQuantity: 0, 

        redirectToFilmDetails(film){
            localStorage.setItem('selectedFilm', JSON.stringify(film));
            window.location.href = 'filmDetails.html';
        },

        panierUser: initialPanier,
        selectedFilm: JSON.parse(localStorage.getItem('selectedFilm')),

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
        

        removeFromPanier(item) {
            this.panierUser.splice(item, 1);
            this.setPanierUser();
        },

        setPanierUser() {
            localStorage.setItem("panierUser", JSON.stringify(this.panierUser));
            console.log(this.panierUser)
        },

        calculateTotal() {
            let total = 0;
        
            // Parcourir le panier de l'utilisateur
            for (const item of this.panierUser) {
                const film = this.filmsList.find(f => f.filmName === item.filmName);
        
                if (film) {
                    // Ajouter le prix du film multiplié par la quantité adulteQuantity
                    total += (film.adultePrice * item.adulteQuantity) +
                             (film.etudiantPrice * item.etudiantQuantity) +
                             (film.enfantPrice * item.enfantQuantity);
                }
            }
            return total.toFixed(2) + ' €';
        },
        

        isMany(item){
            const filmName = item.filmName;
            const count = this.panierUser.filter(item => item.filmName === filmName).length;
            return count;
        }
    }
}
