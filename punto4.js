// //QUI-GON JINN está encargado de revisar n sables de luz y contabilizar la cantidad de energía de 
// sables que tienen negativa en Joules. Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de 
// sables defectuosos con energía negativa fue de 2 
// sables.
 
sumatoria=0;
energia=[2,4,-8,5,-6]

      function contabilizar() {
        for (let i = 0; i < energia.length; i++) {
          if (energia[i]<0) {
            sumatoria++;
          }
        }
        return (`Los numeros ingresados fueron:${energia}, de los cuales ${sumatoria} son negativos`); 
       
      }
 console.log(contabilizar());

 //--------------------------------------------------------------------------
 
 sumatoria=0;

let contabilizar=energia=>{
  for (let i = 0; i < energia.length; i++) {
    
    if (energia[i]<0) {
      sumatoria++;
    }
  }
  return (`Los numeros ingresados fueron:${energia}, de los cuales ${sumatoria} son negativos`); 
 
} 
console.log(contabilizar([2,-3,5,-1,-6]));

 
 
 

