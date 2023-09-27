const chargement = document.querySelector(".chargement");
const boutonCarte = document.getElementById('boutonCarte');
const paiementContainer = document.getElementById('paiementContainer');

boutonCarte.addEventListener('click', function() {
    hidePaiementAndShowChargement();
});

if (window.innerWidth > 1024) {
    paiementContainer.addEventListener('click', function() {
        hidePaiementAndShowChargement();
    });
}
// Fonction permettant de cacher les container et afficher le containre de chargment (car le chargement est sur la même page)
function hidePaiementAndShowChargement() {
    paiementContainer.classList.add('hidden');
    chargement.classList.remove("hidden");
    if (!chargement.classList.contains("hidden")) {
        let t = setTimeout(function() {
            window.location.href = "./Merci.html";
            appInstance.resetPanier();
            clearTimeout(t);
        }, 3000);
    }
}
