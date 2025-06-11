let i=0;
while(i<=10){
    console.log(i);
    i++;
}

let total=0;
i=1
while(i<=100){
    total=total+i;
    i++;
}
console.log("Le total des nombres de 1 à 100 est " + total)

choix=prompt("Devinez le chiffre entre 1 et 10")
while(choix !=5){
    if(choix<1 || choix>10){
        choix=prompt("Erreur, veuillez saisir un chiffre entre 1 et 10")
    }
    else{
    choix=prompt("Ce n'est pas la bonne réponse réessayez")
    }
}

reponse=prompt("Etes vous humain ? Repondez en minuscule seulement svp")

while(reponse!="oui" && reponse!="non")
{
    console.log(reponse)
    reponse=prompt("Erreur, oui ou non seulement sont valables en réponses")
}


pair=prompt("Saisisez le nombre dont vous voulez tout les pairs jusque là")

i=0;
while (i<pair)
{
    if(i%2==0){
        console.log(i)
    }
    i++;
}

console.log("Voilà c'était tout les pairs jusque ", pair)



let jour=8

switch(jour){
    case 1:
        console.log("Spaghetti Bolognaise");
        break;
    case 2:
        console.log("Poulet rôti");
        break;
    case 3:
        console.log("Poisson pané");
        break;
    case 4:
        console.log("Salade composée");
        break;
    case 5:
        console.log("Pizza Margerita")
        break;
    default:
        console.log("C'est fermé aujourd'hui")
        break;
}