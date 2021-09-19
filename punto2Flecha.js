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

let nombre= saludar("Profesor Kandu");
console.log(nombre);

function robarPlanos(id,despegarNave){

    return("buenas tardes "+nombre);

}