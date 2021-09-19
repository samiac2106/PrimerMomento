let nombre= saludar("Profesor Kandu");
console.log(nombre);
//cuando es tradicional la puedo llamar antes o despues, pero cuando es flecha se llama de ultimo 


function saludar(nombre){

    return("buenas tardes "+nombre);

}

//---------------------------------------------------------

let Saludar=nombre => "Buenas tardes: " +nombre;
let nombre= Saludar("Sandra");
console.log(nombre);
 