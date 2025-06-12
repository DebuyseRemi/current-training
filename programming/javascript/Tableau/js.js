const nombres = [1, 5, 12, 8, 130, 44];

nombres.forEach(function(nombre){
    console.log("Le nombre est : " + nombre);

})

const grandsNombres=nombres.filter(function(nombre){
    return nombre>10;
})

console.log(grandsNombres);


const nombresDoubles = nombres.map(function(nombre){
    return nombre * 2;
})

console.log(nombresDoubles);