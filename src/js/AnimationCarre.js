var Carre1 = document.querySelector(".carre1");
var Carre2 = document.querySelector(".carre2"); 
var Carre3 = document.querySelector(".carre3");

animate(Carre1);

function animate(carre) {
    if(carre === null){
        return;
    }
    var rect = carre.getBoundingClientRect();
    let baseY = rect.top;
    console.log(baseY);
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
            duration : 9000,
            iterations: Infinity,
      
        }
    )
}