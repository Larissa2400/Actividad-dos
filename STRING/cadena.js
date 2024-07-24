//STRING
let srt_1 = "Hola, soy un texto con comillas";
let srt_2 = 'Hola, soy un texto con comillas simples';
let srt_3 = "Comillas dentro de comillas \"ejemplo\"";
let srt_4 = 'Comillas dentro de comillas "ejemplo"';
let srt_5 = "Comillas dentro de comillas 'ejemplo'";

console.log(srt_1);
console.log(srt_2);
console.log(srt_3);
console.log(srt_4);
console.log(srt_5);

//Comillas invertidas (backticks) ``
let srt_6 = `Comillas invertidas backtricks`;
console.log(srt_6);

let nombre = "Larissa";
let welcome = `Hola, ${nombre}, esto es una variable dentro del valor de otra variable`
console.log(welcome);

//Plantilla HTML
let plantilla=`
<html> 
    <h3> Pagina web de ${nombre} </h3>
    <p> Un párrafo </p>
<html>
`
console.log(plantilla);