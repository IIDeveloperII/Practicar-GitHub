let opc=parseInt(prompt("Ingrese la operacion a realizar\n 1. SUMA\n 2. RESTA\n 3. MULTIPLICACION\n 4. DIVISION"));
if (opc==1) {
    alert("OPERACION SUMA\n\n Click en aceptar para continuar");
    let num1=parseInt(prompt("Ingrese el primer numero"));
    let num2=parseInt(prompt("Ingrese el segundo numero"));
    let res=num1+num2;
    alert("El resultado es:  "+res);
}
else if (opc==2){
     alert("OPERACION RESTA\n\n Click en aceptar para continuar");
    let num1=parseInt(prompt("Ingrese el primer numero"));
    let num2=parseInt(prompt("Ingrese el segundo numero"));
    let res=num1-num2;
    alert("El resultado es:  "+res); 
}
else if (opc==3){
     alert("OPERACION MULTIPLICACION\n\n Click en aceptar para continuar");
    let num1=parseInt(prompt("Ingrese el primer numero"));
    let num2=parseInt(prompt("Ingrese el segundo numero"));
    let res=num1*num2;
    alert("El resultado es:  "+res); 
}
else if (opc==4){
     alert("OPERACION DIVISION\n\n Click en aceptar para continuar");
    let num1=parseInt(prompt("Ingrese el primer numero"));
    let num2=parseInt(prompt("Ingrese el segundo numero"));
    let res=num1*num2;
    alert("El resultado es:  "+res); 
}
else{
    alert("Operacion invalida");
}














