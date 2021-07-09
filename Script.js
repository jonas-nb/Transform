function minu(){

let entrada = document.querySelector("#entrada").value;
let saida = document.querySelector("#saida");
let textoContainer = document.querySelector("#saida-container");

saida.innerHTML = " "
if(entrada === ''){
    alert("Por favor digitar algum caractere");
} else{
    entrada = entrada.toLowerCase();
    saida.innerHTML = entrada;
    textoContainer.style.border = "rgba(102, 205, 171, 0.568) solid 1px"
    textoContainer.style.overflowY = "scroll"
    
            if (window.matchMedia("(min-width: 768px)").matches) {
        textoContainer.style.height = "320px";
    //   } else if(){

       } else {
        textoContainer.style.height = "220px";
      }
}

}

function maiusculo(){
    
    let entrada = document.querySelector("#entrada").value;
    let saida = document.querySelector("#saida");
    let textoContainer = document.querySelector("#saida-container");
    

    if(entrada === ''){
        alert("Por favor digitar algum caractere");
    } else{
        entrada = entrada.toUpperCase();
        saida.innerHTML = entrada;
        textoContainer.style.border = "rgba(102, 205, 171, 0.568) solid 1px";
        textoContainer.style.overflowY = "scroll";
        if (window.matchMedia("(min-width: 768px)").matches) {
            textoContainer.style.height = "320px";
        } else if(window.matchMedia("(min-width: 992px)").matches){
            textoContainer.style.height = "320px";
        } else if(window.matchMedia("(min-width: 1200px)").matches){
            textoContainer.style.height = "320px";
        } else if(window.matchMedia("(min-width: 1600px)").matches){
            textoContainer.style.height = "300px";
        } 
           else {
            textoContainer.style.height = "220px";
          }
    }
    
    }