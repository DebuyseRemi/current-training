let mot="test";
let lettre =" ";
let fail=0;
let tabResultat=[];
let present=false;
let x;
let victoire=0;
let tabEssai=[];

function preparatif(){
    fail=0;
    x=mot.length
     for(let j=0;j<x;j++){
        tabResultat[j]=" _ "
    }
}

preparatif()
console.log(tabResultat)

function saisie(){
 present=false;
 lettre = document.getElementById("lettre").value;
 while(lettre.length != 1 ){
    lettre=prompt("Erreur veuillez ressaisir la lettre svp")
 } 
 for(i=0;i<=x;i++){
    if(mot[i]==lettre){
        tabResultat[i]=lettre;
        present=true;
        victoire++
        if(victoire==x)
        {
            console.log("Bravo le mot était bien "+mot)
        }
    }
 }
if(present == false){
    tabEssai[fail]=lettre+" ";
    fail++;
}
console.log(tabResultat)
console.log("Il y a eu "+fail+" échecs")
console.log(tabEssai)
}


function jouer(){
if(fail<9 && victoire<x){
saisie()
}
else
{
    console.log("Le jeu est terminé")
}
}