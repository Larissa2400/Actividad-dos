//FOR
/* Estructura
for (inicializacion; condicion; atualizacion){
    bucle
}
    let i = 0;
    i = i + i;
    i += i;

    i++
    i--
    */
   
   
    // TIPOS DE FOR
    //FOR
for (let i=0; i < 10; i++){
    //aqui va un bucle
    console.log(i);
}
let lista = [1, 4, 6, 8, 10, 15, 18]
for (let i = 0; i < lista.length /*longitud de la cadena*/; i++){
    console.log(lista[i]);
}
    //FOR...OF
for (let valor of lista){
    console.log(valor)
}
    //FOREACH
lista.forEach (valor => /*Esta es una Arrow function*/{
    console.log(valor);
})
    //FOR...IN
let persona = {
    nombre = "Larissa",
    apellido = "Soto",
    edad = 20,
    isDeveloper = true
}
console.log(persona.nombre)

let prop = "edad";
console.log(persona[prop])

for (let propiedad in personba){
    console.log(propiedad);
    console.log(persona[propiedad])

}