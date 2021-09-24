//Han solo y Chewbacca deben infiltrarse en el planeta yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte, como distractor el imperio ha creado planos falsos y se tiene el dato de que el número de serie de estos planos falsos comienza por encima del número 10; es decir todos los planos falsos tienen números de serie consecutivos comenzando desde el #11. SOLO si se obtiene un plano verdadero Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen consola avisando que han despegado. Configure la rutina necesaria para despegar la nave 

let robarPlanos=(id,despegarNave)=>{
    if(id>0 && id <=10){
        console.log(`Accedimos a el plano ${id}`)
        despegarNave(null);
    }else{
        console.log(`Accedimos a un plano falso`)
        despegarNave("error");
    }
}
robarPlanos(15,error=>{

    if(error){
        console.log("Devolvete papá...")
    }else{
        console.log("Arrancando la nave...")
    }    
})

//----------------------------------------------------------

function robarPlanos(id,despegarNave){
    if(id>0 && id <=10){
        console.log(`Accedimos a el plano ${id}`)
        despegarNave(null);
    }else{
        console.log(`Accedimos a un plano falso`)
        despegarNave("error");
    }
}

robarPlanos(9,error=>{

    if(error){
        console.log("Devolvete papá...")
    }else{
        console.log("Arrancando la nave...")
    }    
})

 