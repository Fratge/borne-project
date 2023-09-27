
// Redirection sur la page d'accueil après 3s et reset du panier afin que le prochaine utilisateur puisse commencer sa commande
let t = setTimeout(function(){
    window.location.href = "./index.html";
    appInstance.resetPanier();
    clearTimeout(t);
},3000);