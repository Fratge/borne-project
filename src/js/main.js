const app = () => {
    let initialPanier = JSON.parse(localStorage.getItem("panierUser")) || [];

    return {
        filmsList: filmsList,
        snacksList: snacksList,
        quantity: 1, 

        redirectToFilmDetails(film){
            localStorage.setItem('selectedFilm', JSON.stringify(film));
            window.location.href = 'filmDetails.html';
        },

        panierUser: initialPanier,
        selectedFilm: JSON.parse(localStorage.getItem('selectedFilm')),

        addToPanier() {
            const newItem = {
                filmName: this.selectedFilm.filmName,
                price: this.selectedFilm.price * this.quantity + ' €',
                quantity: this.quantity,
            };
        
            const existingItemIndex = this.panierUser.findIndex(item => item.filmName === newItem.filmName);
        
            if (existingItemIndex !== -1) {
                this.panierUser[existingItemIndex].quantity += newItem.quantity;
                this.panierUser[existingItemIndex].price = this.selectedFilm.price * this.panierUser[existingItemIndex].quantity + ' €';
            } else {
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
            for (const item of this.panierUser) {
                const price = parseFloat(item.price);
                if (!isNaN(price)) {
                    total += price;
                }
            }
            return total.toFixed(2);
        },

        isMany(item){
            const filmName = item.filmName;
            const count = this.panierUser.filter(item => item.filmName === filmName).length;
            return count;
        }
    }
}
