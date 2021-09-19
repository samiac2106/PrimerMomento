// 2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de acceso a las naves de guerra los cuáles reposan en la base de datos central, para ello debe programar una función 
// que permita recibir la palabra clave de cada nave y separar imprimiendo solo el nombre del piloto asignado a cada nave. Tenga en cuenta que el formato de todos los datos es el siguiente:
// • ARQ2555: Sara Bel-Sun


// function obtenerNombre(codigoNave){

//     return(codigoNave.split(":"));
// }

// console.log(obtenerNombre("ARQ255:Sandra")[1]);

//--------------------------------------------------------------------------------------
let obtenerNombre=codigoNave=>codigoNave.split(":");
 
console.log(`El nombre del piloto asignado es:${obtenerNombre("ARQ255:Sandra")[1]}`);
 

 

 