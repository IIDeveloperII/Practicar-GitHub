function calculadora(){
    let num1=parseInt(prompt("Ingrese el primer valor"));
    let num2=parseInt(prompt("Ingrese el segundo valor"));
   if (opc==1){res=num1+num2}
    else if (opc==2){res=num1-num2  }
     else if (opc==3){res=num1*num2}
      else if (opc==4){res=num1/num2}
alert("El resultado es:  "+res);
}
let opc=parseInt(prompt("Ingrese la operacion a realizar\n 1. SUMA\n 2. RESTA\n 3. MULTIPLICACION\n 4. DIVISION"));
calculadora();













