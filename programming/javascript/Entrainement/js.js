let age = 21;
const majeur=18;

console.log(age>majeur);

let add = 5;
let addit = 3;
let totalAdd= add + addit;

console.log(add + addit);

let sou = 10;
let sous = 7;
let totalSous = sou - sous;

console.log(totalSous);

let mul=4;
let multi=6;
let totalMul = mul * multi;

console.log(totalMul);

let text = "Bonjour";

text = text + " je m'appel Rémi";

console.log(text);

let prenom="John";
let nom=" Doe";

console.log(prenom + nom)

let sujet= "Le chat";
let verbe=" mange ";
let objet="la souris";

console.log(sujet + verbe + objet);

// Définition d'une fonction
function saluer(string) {
    return("Bonjour, "+ string);
}

// Appel de la fonction
console.log (saluer("Alice !"));

function multiplication(number1,number2) {
    return(number1*number2);
}

console.log(multiplication(7,8));

let tableau = [1, 2, 3, 4, 5];

console.log(tableau);

let tableau2=[];

tableau2.push(10,20,30);

console.log(tableau2);

tableau2.shift();

console.log(tableau2);

let personne = {
	 nom: 'Alice',
	 age: 25,
	 ville: 'Paris' 
	};

console.log(personne);

let compte = {
	 titulaire: 'John Doe',
	 solde: 1000,
	};

console.log(compte);

compte.solde = compte.solde+500;

console.log(compte);

// Définition d'une fonction
function test(age) {
    if(age<18){
        return("Mineur")
    }
    else{
    return("Majeur");
    }
}

console.log(test(17));

console.log(test(18));

function pair(){
    for(i=1;i<21;i++)
    {
        if(i%2==0)
        {
            console.log(i)
        }
    }
}

pair();

function devinette(saisie){
    i=66;
    while(i!= saisie){
        console.log("Ah ah ah, ce n'est pas ", saisie, ", il faut réessayer")
        saisie=prompt();
    }
    console.log("Bravo");
}


function devinetteV2(){
let numbers=1;
while(numbers!=9)
{
    numbers++;
    console.log("Ce n'est pas bon")
}
return numbers;
}

console.log("Bravo c'est bien ",devinetteV2());


let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}


console.log(data.name);
console.log(data.ppu);
console.log(data.topping);
console.log(data.batters.batter[3]);
console.log(data.topping[6]);
console.log(data.topping[0])

console.log(data.batters.batter[0].type, " est l'id ",data.batters.batter[0].id)
console.log(data.name, " a pour type ", data.topping[6].type);

devinette(prompt("Saisir un chiffre entre 1 et 100 svp"));

/*
function nombre(mois){
    while(mois<1 || mois>12){
        console.log("Erreur, saisissez un mois valide svp");
        mois=prompt();
    }
        if(mois <8)
        {
            if( mois%2 == 1){
                return "30 jours";
            }
            else{
                if(mois == 2){
                    return "29 jours en bisextille ou 28 jours sinon";
                }
                else{
                    return "31 jours";
                }
            }
        }
        else{
            if( mois%2 == 0){
                return "31 jours";
            }
            else{
                    return "30 jours";
                }
        }
    }

console.log( "Il y a autant de jours dans ce mois :", nombre(prompt("Saisir un numéro de mois svp")));*/

let mois = prompt("Saisir un numéro de mois svp");

   while(mois<1 || mois>12){
        console.log("Erreur, saisissez un mois valide svp");
        mois=prompt();
    }


let annee
    function nombre(mois){
    switch(mois){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            return " 31 jours";
        case "4":
        case "6":
        case "9":
        case "11":
            return " 30 jours";
        case "2":
            annee=prompt("Saisir l'année svp")
            if((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)){
            return "29 jours car bissextile";
            }
            else{
            return "28 jours";
            }
    }
}

let resultat = nombre(mois);
console.log( "Il y a autant de jours dans ce mois :"+ resultat);



function sumOfEvenNumbers(tab)
{
    let total=0;
    for(i=0;i<tab.length;i++)
    {
        if(tab[i]%2==0){
            total=total+tab[i];
        }
    }
    return total;

}

const numbers0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvenNumbers(numbers0)); // Résultat attendu : 30 (2 + 4 + 6 + 8 + 10)


function mergeArrays(tab,tab2){
    let tabTot=[];
     for(i=0;i<tab.length;i++)
    {
        tabTot[i]=tab[i];
    }
    for(i=0;i+tab.length<tab.length+tab2.length;i++)
    {
        tabTot[i+tab.length]=tab2[i];
    }
    return tabTot;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // Résultat attendu : [1, 2, 3, 4, 5, 6]


function removeDuplicates(tab){
    let newTab = [...new Set(tab)];
    return newTab;
}

const fruits = ['Apple', 'Banana', 'Apple', 'Orange', 'Banana', 'Apple'];
console.log(removeDuplicates(fruits)); // Résultat attendu : ['Apple', 'Banana', 'Orange']


function containsElement(tab, e){
    for(i=0;i<tab.length;i++)
    {
        if(tab[i]==e)
        {
            return true
        }
    }
    return false
}


const numbers = [1, 2, 3, 4, 5];
console.log(containsElement(numbers, 3)); // Résultat attendu : true
console.log(containsElement(numbers, 6)); // Résultat attendu : false


function countOccurrences(tab,e){
    let o=0;
    for(i=0;i<tab.length;i++)
    {
        if(tab[i]==e)
        {
            o++;
        }
    }
    return o;
}

const numbers2 = [1, 2, 2, 3, 4, 2, 5, 2];
console.log(countOccurrences(numbers2, 2)); // Résultat attendu : 4


let bouton = document.getElementById("monBouton");
let pTexte = document.getElementById('texte')

bouton.addEventListener("click",function(){
    pTexte.innerText+='Hello, world';}
)

let boutonCouleur = document.getElementById("maCouleur");

boutonCouleur.addEventListener("click",function(){
    document.getElementById('texte').style.color="red";})



var ul = document.getElementById("maListe");
var li = document.createElement("li");
var texte = document.createTextNode("Nouvel élément");
let boutonLigne = document.getElementById("maLigne")


boutonLigne.addEventListener("click",function(){
li.appendChild(texte);
ul.appendChild(li); })



function moinsLigne()
{
    var ul = document.getElementById('moinsListe');
    ul.removeChild(ul.firstElementChild);
}

function showId(clicked_id)
    {
        console.log(clicked_id);
    }
