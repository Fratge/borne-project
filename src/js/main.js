const app = () => {
    let initialPanier = JSON.parse(localStorage.getItem("panierUser")) || [];

    return {
        filmsList: filmsList,
        snacksList: snacksList,
        adulteQuantity: 0, 
        etudiantQuantity: 0, 
        enfantQuantity: 0, 
        snackQuantity: 1,

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

        calculateTotalNoTaxes() {
            let total = 0;
        
            for (const item of this.panierUser) {
                if (item.filmName) {
                    const film = this.filmsList.find(f => f.filmName === item.filmName);
                    if (film) {
                        total += (film.adultePrice * item.adulteQuantity) +
                                 (film.etudiantPrice * item.etudiantQuantity) +
                                 (film.enfantPrice * item.enfantQuantity);
                                    console.log(total)

                    }
                } else if (item.snackName) {
                    total += item.snackPrice * item.snackQuantity;
                }
            }
            return total.toFixed(2);
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

        addToPanierSnack(snack) {
            let snackPrice = snack.largeFormat;
        
            if (snack.largeBool === false) {
                snackPrice = snack.smallFormat;
            }
        
            const existingItemIndex = this.panierUser.findIndex(item => 
                item.snackName === snack.snackName && item.largeBool === snack.largeBool
            );
        
            if (existingItemIndex !== -1) {
                this.panierUser[existingItemIndex].snackQuantity++;
            } else {

                const newItem = {
                    snackName: snack.snackName,
                    largeBool: snack.largeBool,
                    snackPrice: snackPrice,
                    snackQuantity: 1, 
                };
        
                this.panierUser.push(newItem);
            }
        
            this.setPanierUser();
            console.log(this.panierUser);
        },

        getSnackPrice(snack){
            if (snack.largeBool === false) {
                console.log(snack.smallFormat);
                return snack.smallFormat;
            }
            return snack.largeFormat
        },

        decrementSnackQuantity(snack) {
            const existingItemIndex = this.panierUser.findIndex(item => 
                item.snackName === snack.snackName && item.largeBool === snack.largeBool
            );
        
            if (existingItemIndex !== -1) {
                if (this.panierUser[existingItemIndex].snackQuantity > 0) {
                    this.panierUser[existingItemIndex].snackQuantity--;
        
                    if (this.panierUser[existingItemIndex].snackQuantity === 0) {
                        this.panierUser.splice(existingItemIndex, 1);
                    }
                }
            }        
            this.setPanierUser();
        },
        

        incrementSnackQuantity(snack) {
            const existingItemIndex = this.panierUser.findIndex(item => 
                item.snackName === snack.snackName && item.largeBool === snack.largeBool
            );
        
            if (existingItemIndex !== -1) {
                this.panierUser[existingItemIndex].snackQuantity++;
            } else {
                let snackPrice = snack.largeFormat;
                if (snack.largeBool === false) {
                    snackPrice = snack.smallFormat;
                }
        
                const newItem = {
                    snackName: snack.snackName,
                    largeBool: snack.largeBool,
                    snackPrice: snackPrice,
                    snackQuantity: 1, 
                };
        
                this.panierUser.push(newItem);
            }
        
            this.setPanierUser();
        },
        
        incrementFilmQuantity(film, ticketType) {
            const existingItemIndex = this.panierUser.findIndex(item => item.filmName === film.filmName);
        
            if (existingItemIndex !== -1 && ['adulteQuantity', 'etudiantQuantity', 'enfantQuantity'].includes(ticketType)) {
                this.panierUser[existingItemIndex][ticketType]++;
            } else if (existingItemIndex === -1) {
                const newItem = {
                    filmName: film.filmName,
                    adulteQuantity: 0,
                    etudiantQuantity: 0,
                    enfantQuantity: 0,
                };
                newItem[ticketType] = 1;
                this.panierUser.push(newItem);
            }
            
            this.setPanierUser();
        },
        
        
        decrementFilmQuantity(film, ticketType) {
            const existingItemIndex = this.panierUser.findIndex(item => item.filmName === film.filmName);
        
            if (existingItemIndex !== -1 && this.panierUser[existingItemIndex][ticketType] > 0) {
                this.panierUser[existingItemIndex][ticketType]--;
        
                if (this.panierUser[existingItemIndex].adulteQuantity <= 0 &&
                    this.panierUser[existingItemIndex].etudiantQuantity <= 0 &&
                    this.panierUser[existingItemIndex].enfantQuantity <= 0) {
                        this.panierUser.splice(existingItemIndex, 1);
                }
            }
        
            this.setPanierUser();
        },
        
        
        

    }
}
