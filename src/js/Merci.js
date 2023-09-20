let t = setTimeout(function(){
    window.location.href = "./index.html";
    clearTimeout(t);
},3000);