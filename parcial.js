var numero;
var resultado;
numero= parseInt(prompt( " Digite un numero menor a 1000 "))
alert ( " Su numero es " + numero )

numero= parseInt(prompt( " Ingrese un numero : 1. Un digito 2. Dos digitos 3. Tres digitos 4. Numero mayor a tres digitos, negativo o 0 "))
switch(numero) {
    case 1:
        numero= parseInt(prompt( " Digite un numero de un solo digito "))
        resultado= numero * numero;
        if (numero > 0 && numero < 10) {
            alert("El resultado es: " + resultado);
        }
        break;
    case 2:
        numero= parseInt(prompt( " Digite un numero de dos digitos "))
        resultado= numero * 2;
        if (numero >= 10 && numero<100) {
            alert("El resultado es: " + resultado);
        }
        break;
    case 3:
        numero= parseInt(prompt( " Digite un numero de tres digitos "))
        resultado= numero - 100;
        if (numero >=100 && numero <1000) {
            alert("El resultado es: " + resultado);
        }
        break;
    case 4:
        numero= parseInt(prompt( " Digite un numero "))
        if (numero <= 0 || numero >999) {
            alert("No valido");
        } else {
            resultado= numero;
            alert("El resultado es: " + resultado);
        }
        break;    
    default:
        alert ( " Numero no valido ")
    break;
}