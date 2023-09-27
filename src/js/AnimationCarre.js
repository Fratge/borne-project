var Carre1 = document.querySelector(".carre1");
var Carre2 = document.querySelector(".carre2"); 
var Carre3 = document.querySelector(".carre3");
var Carre4 = document.querySelector(".carre4");

// Appliquer l'animation sur chaque carré
animate(Carre1);
animate(Carre2);
animate(Carre3);
animate(Carre4);

// Fonction pour animer un carré
function animate(carre) {
    if(carre === null){
        return;
    }

    // Obtient la position actuelle du carré
    var rect = carre.getBoundingClientRect();
    let baseY = rect.top;
    let baseX = rect.left;
    carre.animate(
        [
            // Démarre à la position actuelle du carré
            {transform:"translateX("+baseX+"px) translateY("+baseY+"px)"},
            
            // Les étapes suivantes déplacent le carré à des positions aléatoires
            {transform:"translateX("+Math.random()*1080/2+"px) translateY("+Math.random()*1920/2+"px)"},
            {transform:"translateX("+Math.random()*1080/2+"px) translateY("+Math.random()*1920/2+"px)"},
            {transform:"translateX("+Math.random()*1080/2+"px) translateY("+Math.random()*1920/2+"px)"},
            {transform:"translateX("+Math.random()*1080/2+"px) translateY("+Math.random()*1920/2+"px)"},

            // Retourne à la position initiale du carré
            {transform:"translateX("+baseX+"px) translateY("+baseY+"px)"},
        ],
        {
            duration : 20000,
            iterations: Infinity,
            easing: "ease-in-out",
        }
    )
}