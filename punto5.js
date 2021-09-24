// Watto paga a su personal de ventas un salario de 3500000 mensuales, más una comisión de 1500000 por cada licencia de software vendida menos el 5% de deducciones por impuestos. Codifica un programa que calcule e imprima el salario mensual de un vendedor dado.

      function pagar (salario,comision,nroLicencias){
      if(nroLicencias>0)
      {

        return(`El salario mensual de un vendedor es $${((salario+comision)-(salario+comision)*0.05)*nroLicencias}`);
      }
      return(`El salario mensual de un vendedor es $${salario}`);
  } 
 
  console.log(pagar(3500000,1500000,0))
    
//---------------------------------------------------------------------------------
let pagar=(salario,comision,nroLicencias)=>{
  if(nroLicencias>0)
  {

    return(`El salario mensual de un vendedor es $${((salario+comision)-(salario+comision)*0.05)*nroLicencias}`);
  }
  return(`El salario mensual de un vendedor es $${salario}`);
}

  console.log(pagar(3500000,1500000,3))
