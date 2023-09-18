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
            {
                top:baseY+'px',
                left: baseX+'px'
            },
            {
                top:baseY+(Math.random*1920)+'px',
                left:baseX+(Math.random*1080)+'px',
            }
        ],
        {
            duration : 500,
        }
    )
}