var Carre1 = document.querySelector(".carre1");
var Carre2 = document.querySelector(".carre2"); 
var Carre3 = document.querySelector(".carre3");
var Carre4 = document.querySelector(".carre4");

animate(Carre1);
animate(Carre2);
animate(Carre3);
animate(Carre4);

function animate(carre) {
    if(carre === null){
        return;
    }
    var rect = carre.getBoundingClientRect();
    let baseY = rect.top;
    let baseX = rect.left;
    carre.animate(
        [
            {transform:"translateX("+baseX+"px) translateY("+baseY+"px)"},
            {transform:"translateX("+Math.random()*1080/2+"px) translateY("+Math.random()*1920/2+"px)"},
            {transform:"translateX("+Math.random()*1080/2+"px) translateY("+Math.random()*1920/2+"px)"},
            {transform:"translateX("+Math.random()*1080/2+"px) translateY("+Math.random()*1920/2+"px)"},
            {transform:"translateX("+Math.random()*1080/2+"px) translateY("+Math.random()*1920/2+"px)"},
            {transform:"translateX("+baseX+"px) translateY("+baseY+"px)"},
        ],
        {
            duration : 20000,
            iterations: Infinity,
            easing: "ease-in-out",
        }
    )
}