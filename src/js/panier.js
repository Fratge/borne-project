const panier = () => {
    return{
        panierUser: JSON.parse(localStorage.getItem("panierUser")) || [],
        selectedFilm: JSON.parse(localStorage.getItem('selectedFilm')),


        addToPanier(){
            this.panierUser.push(this.selectedFilm.price);
            console.log(this.selectedFilm.price);
            console.log(this.panierUser)
        },
        
        setPanierUser(){
            localStorage.setItem("panierUser", JSON.stringify(this.panierUser));
        },
        
        // deleteFromPanier(){
        //     this.panierUser = this.panierUser.filter( pa => task.id != taskToDelete.id);
        //     this.setTasksList();
        // }
    }
}