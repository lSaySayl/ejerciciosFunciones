

let repetir = true;

let menu = () => {
    return Number(prompt(`Por favor, ingrese una opción. \nEscriba 1 para ver las opciones del cuadrado\nEscriba 2 para ver las opciones del rectángulo\nEscriba 3 para ver las opciones del triangulo \nEscriba 4 para salir del menú`));
}

let menuDos = () => {
    return Number(prompt(`Escriba 1 para calcular el área\nEscriba 2 para calcular el perímetro\nEscriba 3 para calcular área y perimetro`))

}

let area = (base,altura) => {
    alert (`el area de tu figura es: ${base*altura}`)
  
}

let perimetro = (base,altura) => {
    alert (`El perimetro de tu figura ${(2*base)+(2*altura)}`);

}

let perimetroArea = (base,altura) => {
    alert (`el area de tu figura es: ${base*altura} y el perimetro de tu figura es ${(2*base)+(2*altura)}`)


}

let areaTriangulo = (base,altura) => {
    alert (`El área de este triangulo es ${(base*altura)/2}`)
}

let perimetroTriangulo = (ladoUno,ladoDos,ladoTres)  => {
    alert (`El perimetro de este triangulo es ${ladoUno+ladoDos+ladoTres}`)
}

let operaciones = ()=> {

    let base = parseInt(prompt(`Por favor, ingrese la base de su figura`));
    let altura = parseInt(prompt(`Por favor, ingrese la altura de su figura`));

    switch (menu()){
        case 1:
            switch (menuDos()) {
                case 1:
                    return area(base,altura);  
                case 2:
                    return perimetro(base,altura);
                case 3:
                    return perimetroArea (base,altura);
            }
        break;

        case 2:
        switch (menuDos()) {
            case 1:
                return area(base,altura);
            case 2:
                return perimetro(base,altura);
            case 3:
                return perimetroArea (base,altura);
        }
   
        break;
        case 3:
        switch (menuDos()) {
            case 1:
                return areaTriangulo(base,altura);     
            case 2:
                let ladoUno = Number(prompt(`Por favor, ingrese el primer lado`))
                let ladoDos = Number(prompt(`Por favor, ingrese el segundo lado`))
                let ladoTres = Number(prompt(`Por favor, ingrese el tercer lado`))
                return perimetroTriangulo(ladoUno,ladoDos,ladoTres);
        }

          
        break;
        case 4:
        repetir = false;


    }
   

}

while(repetir) {
    operaciones ();
}


