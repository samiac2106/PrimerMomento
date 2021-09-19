

let saludar=nombre=>"buenas tardes "+nombre;

let nombre= saludar("Profesor Kandu");
console.log(nombre);

//---------------------------------------------------------------

function sumar(numero1, numero2) {

    return (numero1 + numero2);
}

let sumar = (numero1, numero2) => numero1 + numero2

console.log(`El resultado de la suma es ${sumar(5, 5)}`);

//------------------------------------------------------------------------ 

function calcular(cadena){
    return(cadena.split("-"));
}
console.log(calcular("Javier-Ramirez"));

//-------------------------------------------------------------------

//funcion que convierta pesos en dolares

//tradicional// flecha

let convertir=(cantidadPesos)=>cantidadPesos/4000
console.log(convertir(4000));

//-------------------------------------------------------------

