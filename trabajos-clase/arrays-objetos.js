//Qué son? como se definen?

//listas, array o vectores son igual
// EJEMPLO DE COMO SE DEFINEN
const datos = [1, "Hola", true, undefined, null]; //(CUALQUIER DATO PRIMITIVO)
const datos2 = new Array (1, "Hola", true, undefined, null);
const datos3 = new Array (3)
datos3 [1] = "Hola Mundo";
const datos4 = [datos, datos2, datos3]; 

//EJEMPLO DE IMPRESIÓN
console.log(datos);
console.log(datos2);
console.log(datos3); 
console.log(datos4); 

//OBJETOS
const alumno /*<-- OBJETO */ = { //EJEMPLOS DE ATRIBUTOS
    nombre: "Pedro",
    edad: 15,
    isBlack: false,
    amistades: ["confi1", "confi2", "confi3"]
    const ing = {
        matricula: 1232100509,
        carrera: "Sistemas"
    }
}

//IMPRIMIR OBJETO
console.log(alumno);

//IMRPIMIR MÁS ESPECIFICO
console.log(alumno.nombre);
