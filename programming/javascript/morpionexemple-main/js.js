const case0 = document.querySelector('.case0')
const case1 = document.querySelector('.case1')
const case2 = document.querySelector('.case2')
const case3 = document.querySelector('.case3')
const case4 = document.querySelector('.case4')
const case5 = document.querySelector('.case5')
const case6 = document.querySelector('.case6')
const case7 = document.querySelector('.case7')
const case8 = document.querySelector('.case8')

let turnPlayer = 0;

function jeu(turnPlayer){
    let tour=0;
    while(jeuEstFini(tour)!=true){
        case0.addEventListener('click', () => {

            if (case0.style.backgroundImage !== ""){
                afficheur.sendMessage(
            "Case occupée !");
                return
            }

            if (turnPlayer == 0){
                case0.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case0.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            if (verifVictoire()==false)
            {
                tour++
            }
        })
        case1.addEventListener('click', () => {
            if (case1.style.backgroundImage !== ""){
                            afficheur.sendMessage(
            "Case occupée !");
                return
            }
            if (turnPlayer == 0){
                case1.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case1.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            
            if (case0.style.backgroundImage && case1.style.backgroundImage && case2.style.backgroundImage == 'url("images/x.png")'){
                console.log("c'est gagne");
            }
            if (verifVictoire())
            {
                tour++
            }

        })
        case2.addEventListener('click', () => {
            if (case2.style.backgroundImage !== ""){
                            afficheur.sendMessage(
            "Case occupée !");
                return
            }
            if (turnPlayer == 0){
                case2.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case2.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            
                if (case0.style.backgroundImage && case1.style.backgroundImage && case2.style.backgroundImage == 'url("images/x.png")'){
                console.log("c'est gagne");
                
            }
            if (verifVictoire())
            {
                tour++
            }
        })
        case3.addEventListener('click', () => {
            if (case3.style.backgroundImage !== ""){
                            afficheur.sendMessage(
            "Case occupée !");
                return
            }    
            if (turnPlayer == 0){
                case3.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case3.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            if (verifVictoire())
            {
                tour++
            }
        })
        case4.addEventListener('click', () => {
            if (case4.style.backgroundImage !== ""){
                            afficheur.sendMessage(
            "Case occupée !");
                return
            }
            if (turnPlayer == 0){
                case4.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case4.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            if (verifVictoire())
            {
                tour++
            }
        })

        case5.addEventListener('click', () => {
            if (case5.style.backgroundImage !== ""){
                            afficheur.sendMessage(
            "Case occupée !");
                return
            }
            if (turnPlayer == 0){
                case5.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case5.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            if (verifVictoire())
            {
                tour++
            }
        })
        case6.addEventListener('click', () => {
            if (case6.style.backgroundImage !== ""){
                            afficheur.sendMessage(
            "Case occupée !");
                return
            }
            if (turnPlayer == 0){
                case6.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case6.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            if (verifVictoire())
            {
                tour++
            }
        })

        case7.addEventListener('click', () => {
            if (case7.style.backgroundImage !== ""){
                            afficheur.sendMessage(
            "Case occupée !");
                return
            }
            if (turnPlayer == 0){
                case7.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case7.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            if (verifVictoire())
            {
                tour++
            }
        })

        case8.addEventListener('click', () => {
            if (case8.style.backgroundImage !== ""){
                            afficheur.sendMessage(
            "Case occupée !");
                return
            }
            if (turnPlayer == 0){
                case8.style.backgroundImage = "url('images/x.png')";
                turnPlayer = 1
            }
            else {
                case8.style.backgroundImage = "url('images/o.png')";
                turnPlayer = 0     
            }
            if (verifVictoire())
            {
                tour++
            }
        })
    }
}



function verifVictoire(){
    // Condition de victoire
    // Victoire pour les X
        if ((case0.style.backgroundImage === 'url("images/x.png")' &&
            case1.style.backgroundImage === 'url("images/x.png")' &&
            case2.style.backgroundImage) === 'url("images/x.png")')
            {      
            case0.style.backgroundColor = "#9ACD32";
            case1.style.backgroundColor = "#9ACD32";
            case2.style.backgroundColor = "#9ACD32";
            return true;
        }
        if (case3.style.backgroundImage === 'url("images/x.png")' &&
            case4.style.backgroundImage === 'url("images/x.png")' &&
            case5.style.backgroundImage === 'url("images/x.png")')
            {
            case3.style.backgroundColor = "#9ACD32";
            case4.style.backgroundColor = "#9ACD32";
            case5.style.backgroundColor = "#9ACD32";
            return true;            
        }
        if (case6.style.backgroundImage === 'url("images/x.png")' &&
            case7.style.backgroundImage === 'url("images/x.png")' &&
            case8.style.backgroundImage === 'url("images/x.png")')
            {
            case6.style.backgroundColor = "#9ACD32";
            case7.style.backgroundColor = "#9ACD32";
            case8.style.backgroundColor = "#9ACD32";
            return true;            
        }
        if (case0.style.backgroundImage === 'url("images/x.png")' &&
            case3.style.backgroundImage === 'url("images/x.png")' &&
            case6.style.backgroundImage === 'url("images/x.png")')
            {
            case0.style.backgroundColor = "#9ACD32";
            case3.style.backgroundColor = "#9ACD32";
            case6.style.backgroundColor = "#9ACD32";
            return true;            
        }
        if (case1.style.backgroundImage === 'url("images/x.png")' &&
            case4.style.backgroundImage === 'url("images/x.png")' &&
            case7.style.backgroundImage === 'url("images/x.png")')
            {
            case1.style.backgroundColor = "#9ACD32";
            case4.style.backgroundColor = "#9ACD32";
            case7.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case2.style.backgroundImage === 'url("images/x.png")' &&
            case5.style.backgroundImage === 'url("images/x.png")' &&
            case8.style.backgroundImage === 'url("images/x.png")')
            {
            case2.style.backgroundColor = "#9ACD32";
            case5.style.backgroundColor = "#9ACD32";
            case8.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case0.style.backgroundImage === 'url("images/x.png")' &&
            case4.style.backgroundImage === 'url("images/x.png")' &&
            case8.style.backgroundImage === 'url("images/x.png")')
            {
            case0.style.backgroundColor = "#9ACD32";
            case4.style.backgroundColor = "#9ACD32";
            case8.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case2.style.backgroundImage === 'url("images/x.png")' &&
            case4.style.backgroundImage === 'url("images/x.png")' &&
            case6.style.backgroundImage === 'url("images/x.png")')
            {
            case2.style.backgroundColor = "#9ACD32";
            case4.style.backgroundColor = "#9ACD32";
            case6.style.backgroundColor = "#9ACD32";
            return true;
            
        }

        // Victoire pour les O
        if (case0.style.backgroundImage === 'url("images/o.png")' &&
            case1.style.backgroundImage === 'url("images/o.png")' &&
            case2.style.backgroundImage === 'url("images/o.png")')
            {
            case0.style.backgroundColor = "#9ACD32";
            case1.style.backgroundColor = "#9ACD32";
            case2.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case3.style.backgroundImage === 'url("images/o.png")' &&
            case4.style.backgroundImage === 'url("images/o.png")' &&
            case5.style.backgroundImage === 'url("images/o.png")')
            {
            case3.style.backgroundColor = "#9ACD32";
            case4.style.backgroundColor = "#9ACD32";
            case5.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case6.style.backgroundImage === 'url("images/o.png")' &&
            case7.style.backgroundImage === 'url("images/o.png")' &&
            case8.style.backgroundImage === 'url("images/o.png")')
            {
            case6.style.backgroundColor = "#9ACD32";
            case7.style.backgroundColor = "#9ACD32";
            case8.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case0.style.backgroundImage === 'url("images/o.png")' &&
            case3.style.backgroundImage  === 'url("images/o.png")'&&
            case6.style.backgroundImage === 'url("images/o.png")')
            {
            case0.style.backgroundColor = "#9ACD32";
            case3.style.backgroundColor = "#9ACD32";
            case6.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case1.style.backgroundImage === 'url("images/o.png")' &&
            case4.style.backgroundImage === 'url("images/o.png")' &&
            case7.style.backgroundImage === 'url("images/o.png")')
            {
            case1.style.backgroundColor = "#9ACD32";
            case4.style.backgroundColor = "#9ACD32";
            case7.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case2.style.backgroundImage === 'url("images/o.png")' &&
            case5.style.backgroundImage === 'url("images/o.png")' &&
            case8.style.backgroundImage === 'url("images/o.png")')
            {
            case2.style.backgroundColor = "#9ACD32";
            case5.style.backgroundColor = "#9ACD32";
            case8.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case0.style.backgroundImage === 'url("images/o.png")' &&
            case4.style.backgroundImage === 'url("images/o.png")' &&
            case8.style.backgroundImage === 'url("images/o.png")')
            {
            case0.style.backgroundColor = "#9ACD32";
            case4.style.backgroundColor = "#9ACD32";
            case8.style.backgroundColor = "#9ACD32";
            return true;
            
        }
        if (case2.style.backgroundImage === 'url("images/o.png")' &&
            case4.style.backgroundImage === 'url("images/o.png")' &&
            case6.style.backgroundImage === 'url("images/o.png")')
            {
            case2.style.backgroundColor = "#9ACD32";
            case4.style.backgroundColor = "#9ACD32";
            case6.style.backgroundColor = "#9ACD32";
            return true;
            
        }
}


function jeuEstFini(tour){
    if(verifVictoire==true){
        return true;
    }
    else if(verifVictoire!=true && tour>8)
    {
        return true
    }
}

jeu(turnPlayer)


