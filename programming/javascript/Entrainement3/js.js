var rectangle = document.querySelector(".rectangle")

document.addEventListener('mousemove', (event) => {

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    rectangle.style.left = mouseX-100 + "px";//100 pour corriger le tir avec la taille de l'objet en prenant la moitié
    rectangle.style.top = mouseY-100 + "px";

    
})