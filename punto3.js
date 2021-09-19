// 3. PROBLEMA: La luna de Endor pierde temperatura día a día, // para ello hay que hacer un monitoreo constante, Cree una función de flecha que permita calcular la temperatura media de 
// la luna a partir de la temperatura máxima y mínima de cada día

// function calcularTemperaturaMaxima(temperatura1,temperatura2,temperatura3,temperatura4){

//     return(Math.max(temperatura1,temperatura2,temperatura3,temperatura4))

// }

// function calcularTemperaturaMinima(temperatura1,temperatura2,temperatura3,temperatura4){

//    return(Math.min(temperatura1,temperatura2,temperatura3,temperatura4))

// }

// let temperaturaMaxima=calcularTemperaturaMaxima(-5,-200,-30,10);
// let temperaturaMinima=calcularTemperaturaMinima(-5,-200,-30,10);

// console.log(`El promedio de temperatura es: ${(temperaturaMaxima+temperaturaMinima)/2}°C`);


//------------------------------------------------------------------------------------------
let calcularTemperaturaMaxima=(temperatura1,temperatura2,temperatura3,temperatura4)=>`(Math.max(temperatura1,temperatura2,temperatura3,temperatura4))`

let calcularTemperaturaMinima=(temperatura1,temperatura2,temperatura3,temperatura4)=>`(Math.min(temperatura1,temperatura2,temperatura3,temperatura4))`

let temperaturaMaxima=calcularTemperaturaMaxima(5,-200,-30,10);
let temperaturaMinima=calcularTemperaturaMinima(5,-200,-30,10);

console.log(`El promedio de temperatura es: ${(temperaturaMaxima+temperaturaMinima)/2}°C`);

 