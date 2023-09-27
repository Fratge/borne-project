const app = () => {

    // Initialisation du panier depuis le local storage ou un tableau vide si inexistant
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

        // Redirige l'utilisateur vers les détails du film choisi
        redirectToFilmDetails(film){
            localStorage.setItem('selectedFilm', JSON.stringify(film));
            window.location.href = 'filmDetails.html';
        },

        // Ajoute le film sélectionné au panier de l'utilisateur
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
        
        // Réinitialise la quantité d'un article spécifique à 0
        resetQuantity(item, quantityType) {
            item[quantityType] = 0;
            this.setPanierUser();
        },

        // Réinitialise l'ensemble du panier
        resetPanier(){
            this.panierUser = []; 
            this.setPanierUser();
        },

        // Sauvegarde le panier actuel de l'utilisateur dans le local storage (suite à un changement)
        setPanierUser() {
            localStorage.setItem("panierUser", JSON.stringify(this.panierUser));
            console.log(this.panierUser)
        },

        // Calcule le total du panier sans taxes
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
        
        // Récupère le prix d'un film spécifique en fonction du type de ticket
        getFilmPrice(filmName, priceType) {
            const film = this.filmsList.find(f => f.filmName === filmName);
            if (film) {
                return film[priceType];
            }
            return 0;
        },

        // Vérifie si le panier est vide
        checkIfPanierVide() {
            for (const item of this.panierUser) {
                if (item.adulteQuantity >= 1 || item.etudiantQuantity >= 1 || item.enfantQuantity >= 1 || item.snackQuantity >= 1) {
                    return false;
                }
            }
            return true;
        },

        // Bascule entre le format large et le format régulier pour un snack (pour le boutton Large & Small)
        background(snack){
            snack.largeBool = !snack.largeBool;
        },

        // Ajoute un snack au panier de l'utilisateur
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

        // Récupère le prix d'un snack spécifique
        getSnackPrice(snack){
            if (snack.largeBool === false) {
                console.log(snack.smallFormat);
                return snack.smallFormat;
            }
            return snack.largeFormat
        },

        // Diminue la quantité d'un snack dans le panier de l'utilisateur
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

        // Augmente la quantité d'un snack dans le panier de l'utilisateur
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
            console.log("After increment:", this.panierUser[existingItemIndex].snackQuantity);

            this.setPanierUser();
        },
        
        // Augmente la quantité d'un type de ticket spécifique pour un film
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
        
        // Diminue la quantité d'un type de ticket spécifique pour un film
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
        
        // Redirige la page d'accueil
        redirectAccueil(){
            window.location.href='./accueil.html'
        }
        

    }
}

const appInstance = app();
