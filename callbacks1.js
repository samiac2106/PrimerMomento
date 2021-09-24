//Yoda el maestro jedi, necesita asignar a sus aprendices Padawans 2 actividades dependiendo de la edad deellos:  Manejo de la fuerza: Si el aprendiz es menor de 15 años,  Manejo del sable de luz: Si el aprendiz es mayor de 15 años, Inicialmente, se debe programar una función que asocie los datos de: {nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez este objeto sea reado se debe llamar a una función secundaria que clasifique y muestre en consola la actividad asignada al Padawan

function aprendices(edad,actividades){
    if(edad<15){
        console.log(`Aprendiz: Clark, Planeta: Crypton, Estatura: 1.73`)
        actividades(null);
    }else{
        console.log(`Aprendiz: Marvin, Planeta: K-9, Estatura: 1.50`)
        actividades("actividad");
    }
}

aprendices(18,function(actividad){

    if(actividad){
        console.log("Actividad asignada: Manejo del sable de luz")
    }else{
        console.log("Actividad asignada: Manejo de la fuerza")
    }    
})

//---------------------------------------------------------------------------

let aprendices=(edad,actividades)=>{
    if(edad<15){
        console.log(`Aprendiz: Clark, Planeta: Crypton, Estatura: 1.73`)
        actividades(null);
    }else{
        console.log(`Aprendiz: Marvin, Planeta: K-9, Estatura: 1.50`)
        actividades("actividad");
    }
}

aprendices(14,mayor=>{

    if(mayor){
        console.log("Actividad asignada: Manejo del sable de luz")
    }else{
        console.log("Actividad asignada: Manejo de la fuerza")
    }    
})