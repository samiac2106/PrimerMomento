// 1. PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices Padawan a calcular la distancia a la que cualquiera de los planetas de la ruta N-14 pertenecientes a la ruta comercial de la federación intergaláctica, se encuentra del 
// planeta NABOO.


function calcularDistancia(coordenadax1,coordenadax2,coordenaday1,coordenaday2){
   
    return(`La distancia del planeta Yavin4 a Naboo es de:  ${Math.sqrt(Math.pow(coordenadax2-coordenadax1,2) + Math.pow(coordenaday2-coordenaday1,2))} UA`);
}
console.log(calcularDistancia(0,70,0,-70));
let distancia=calcularDistancia();


//------------------------------------------------------------------------------------

let calcularDistancia=(coordenadax1,coordenadax2,coordenaday1,coordenaday2)=>`La distancia del planeta Yavin4 a Naboo es de:  ${Math.sqrt(Math.pow(coordenadax2-coordenadax1,2) + Math.pow(coordenaday2-coordenaday1,2))} UA`;
 
console.log(calcularDistancia(0,70,0,-70));
 