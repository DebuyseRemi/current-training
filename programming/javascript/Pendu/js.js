let mot=prompt("Saisir le mot à faire deviner svp")
mot=mot.toLowerCase();
let lettre =" ";
let fail=0;
let tabResultat=[];
let present=false;
let x;
let victoire=0;
let tabEssai=[];
let perdant=document.getElementById('perdu');
let pendu=document.getElementById('mot');
let result=document.getElementById('result');


function preparatif(){
    fail=0;
    x=mot.length
     for(let j=0;j<x;j++){
        tabResultat[j]=" _ "
        pendu.innerText+=tabResultat[j]
    }
}

preparatif()
console.log(tabResultat)


function saisie(){
 present=false;
 lettre = document.getElementById("lettre").value;
 while((lettre.length != 1) || (lettre.toUpperCase() == lettre.toLowerCase()) ){
    lettre=prompt("Erreur veuillez ressaisir la lettre svp")
 } 
 for(i=0;i<=x;i++){
    if(mot[i]==lettre){
        tabResultat[i]=lettre;
        present=true;
        victoire++
    }
 }
if(present == false){
    tabEssai[fail]=lettre+" ";
    perdant.innerText+=" "+tabEssai[fail];
    fail++;
}
console.log(tabResultat);
console.log("Il y a eu "+fail+" échecs");
console.log(tabEssai);
pendu.textContent = "On recherche le mot suivant :"
for(let j=0;j<x;j++){
        pendu.innerText+=tabResultat[j]
    }
    switch (fail){
        case 1:
        document.getElementById('myImage').src='./Pendu/Pendu1.png';
        break;
        case 2:
        document.getElementById('myImage').src='./Pendu/Pendu2.png';
        break;
        case 3:
        document.getElementById('myImage').src='./Pendu/Pendu3.png';
        break;
        case 4:
        document.getElementById('myImage').src='./Pendu/Pendu4.png';
        break;
        case 5:
        document.getElementById('myImage').src='./Pendu/Pendu5.png';
        break;
        case 6:
        document.getElementById('myImage').src='./Pendu/Pendu6.png';
        break;
        case 7:
        document.getElementById('myImage').src='./Pendu/Pendu7.png';
        break;
        case 8:
        document.getElementById('myImage').src='./Pendu/Pendu8.png';
        break;
        case 9:
        document.getElementById('myImage').src='./Pendu/Pendu9.png';
        result.innerText="Le jeu est terminé et le mot était : " + mot;
        break;

    }
}


function jouer(){
if(fail<9 && victoire<x){
saisie()
}
else
{
    result.innerText="Le jeu est terminé !";
    console.log("Le jeu est terminé");
}
}