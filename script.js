//je sélectionne et je stocke

const btn = document.querySelector(".btn");
// console.log(btn);//l'icone

const switchBox = document.querySelector(".switch");
// console.log(switchBox);// bouton (cercle)

const icone = document.querySelector("i");
// console.log(icone);//container

const fond = document.querySelector(".container");
// console.log(fond);

const titre = document.querySelector("h1");
// console.log(titre)

const container = document.querySelector(".container");
// console.log(container);//le titre

switchBox.addEventListener("click", function(){//action de clic
    // console.log("clique");

    // btn.style.left = "60px";// je déplace le cercle
    
    btn.classList.toggle('btn-change');// se déplace sur la gauche
    icone.classList.toggle('icone-change');// l'icone change
    icone.classList.toggle("fa-sun");// L'icone change
    console.log(icone,"change");

    switchBox.classList.toggle("switch-change");
     console.log(switchBox,"switch-change");
    container.classList.toggle("container-change");// la DIV container change de couleur de fond
    
    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE";
    }else {
        titre.innerText = "DARK MODE";
    }
});

