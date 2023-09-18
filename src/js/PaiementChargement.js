boutons = document.querySelector(".boutons");
chargement = document.querySelector(".chargement");

boutons.addEventListener("click",function(){
    boutons.classList.add("hidden");
    chargement.classList.remove("hidden");
    if(!chargement.classList.contains("hidden")){
        let t = setTimeout(function(){
            window.location.href = "../Merci.html";
            clearTimeout(t);
        },3000);
    }

});

