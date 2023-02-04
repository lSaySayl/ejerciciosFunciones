let menu = () => {

    return Number(prompt(`Por favor, ingrese la operación que desea realizar. \nEscriba 1 para sumar \nEscriba 2 para restar \nEscriba 3 para multiplicar \nEscriba 4 para dividir \nEscriba 5 para salir del menú`));

}


let suma = (a,b) => {
    alert(`La suma del número ${a} y número ${b} es ${a+b}`);
 


}

let resta = (a,b) => {
    alert(`La resta del número ${a} y número ${b} es ${a-b}`);

}


let multiplicacion = (a,b) => {
    alert(`La multiplicación del número ${a} y número ${b} es ${a*b}`);

}
let division = (a,b) => {
    alert(`La división del número ${a} y número ${b} es ${a/b}`);

}

let operaciones = () => {

    let a = Number(prompt(`Por favor, ingrese el primer número`));
    let b = Number(prompt(`Por favor, ingrese el segundo número`));
 
    switch (menu()) {

        case 1:
            return suma(a,b);
  
        
        case 2:
            return resta(a,b);

        
        case 3:
            return multiplicacion(a,b);

     
        case 4:
            return division(a,b);

      
        case 5:
            return repetir = false;
 

    }
}

let repetir = true;

while(repetir) {
    
    operaciones();

}

