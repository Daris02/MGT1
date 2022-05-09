//Getdocumet from index.html
window.addEventListener("DOMContentLoaded", function(){
    console.log("DOM charger");
    
    const buttonE = document.getElementById("bnE");
    const button$ = document.getElementById("bn$");
    const valeur = document.getElementById("valeurR");

    buttonE.addEventListener("click", function(){
        if(valeur.value == 0 || valeur.value < 0){
            alert("Attention: veullier saisir des valeur positif ou non nul, s'il vous plait");
        }
        else{
            let result  = (valeur.value / 4264.).toFixed(2) ;
            alert(valeur.value+" Ariary"+"  vos "+result+" Euro");
    };
});
    button$.addEventListener("click", function(){
        if(valeur.value == 0 || valeur.value < 0){
            alert("Attention, veullier saisir des valeur positif ou non nul, s'il vous plait");
        }
        else{
            let result  = (valeur.value / 4006).toFixed(2) ;
            alert(valeur.value+" Ariary"+"  vos "+result+" $");
        }
    });
});