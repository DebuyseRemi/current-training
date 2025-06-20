fetch("https://trouve-mot.fr/api/random")
 .then((response) => response.json())
 .then((words) => console.log(words.name))


let mot=prompt("Saisir le mot à faire deviner svp")//Récupération du mot
mot=mot.toLowerCase();//Conversion du mot en petit caractère pour éviter des problèmes à chercher la première lettre en majuscule
let lettre =" ";
let fail=0;
let tabResultat=[];
let present=false;
let x;
let victoire=0;
let tabEssai=[''];
let perdant=document.getElementById('perdu');
let pendu=document.getElementById('mot');
let result=document.getElementById('result');
let compteur=0


/**Cette fonction a pour but d'initialiser le pendu avec le mot saisie et affichera le nombre de lettre recherché avec le même nombre de "_"
 * @param {fail} number fail sera le nombre de proposition de lettre raté
 * @param {x} number est la taille de mon mot a recherché
 * @param {tabResultat} string Est ce qui sera affiché pour l'utilisateur pendant sa recherche du mot, ici ce sera seulement des "_" mais plus tard des lettres du mot si l'utilisateur en devine
 */
function preparatif(){
    fail=0;
    x=mot.length
     for(let j=0;j<x;j++){
        tabResultat[j]=" _ "
        pendu.innerText+=tabResultat[j]
    }
}

preparatif()


/**
 * La fonction saisie() est ce qui se passe une fois la lettre choisie.
 * Dans un premier temps il y a tout un processus qui doit vérifier si :
 * -1 La lettre a déjà était saisie, d'où la boucle for
 * -2 La lettre ne fait pas plus de un élèment donc permettant d'être certains qu'on a un seul charactère
 * -3 On vérifie si le charactère est identique en Majuscule et minuscule et si c'est le cas cela signifie que c'est un charactère spécial et non pas une lettre 
 * 
 * Après cela on vérifie les élèments du mots un par un avec une boucle et on compare avec la lettre pour voir si sa présence est confirmée ou non
 * Si non confirmée on incrémente les échecs
 * 
 * @param {present} boolean Important de le remettre en false en début de boucle pour être certains qu'on ne va pas répéter par accident avec une lettre présente qui ne l'est pas
 * @param {lettre} string Ce qui contient la saisie de l'utilisateur et doit être vérifier avant d'être tester pour voir si il est contenu dans le mot
 * @param {mot} string Contient le mot recherché qui fut initialisé au début
 * @param {victoire} number Compteur qui permet de voir le nombre de lettre trouvé et sera nécessaire pour vérifier si il faudra relancer la boucle ou non une fois le mot trouvé
 * @param {compteur} number Un compteur de tour qui permet d'être utilisé pour aller stocker dans tabEssai les lettres proposés pour éviter des doublons en jouant
 * 
 * Pour finir il y a  le switch qui en fonction du nombre d'essais raté (donc la valeur de fail) affichera petit à petit un dessin de pendu jusqu'à fin du jeu
 * 
 * 
*/
function saisie(){
 present=false;
 lettre = document.getElementById("lettre").value;
for(i=0;i<=tabEssai.length;i++){
    while((tabEssai[i]==lettre) || (lettre.length != 1) || (lettre.toUpperCase() == lettre.toLowerCase())){
        lettre=prompt("Erreur, veuillez ressaisir la lettre svp");
        i=0;
    }
}
 for(i=0;i<=x;i++){
    if(mot[i]==lettre){
        tabResultat[i]=lettre;
        present=true;
        victoire++
    }
 }
if(present == false){
    fail++;
}
compteur++;
tabEssai[compteur]=lettre;
perdant.innerText+=" "+lettre;
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

/**
 * Fonction qui permet de lancer la partie et se termine si trop d'échecs ou si le mot est trouvé
 */

function jouer(){
if(fail<9 && victoire<x){
saisie()
}
else
{
    result.innerText="Le jeu est terminé !";
}
}