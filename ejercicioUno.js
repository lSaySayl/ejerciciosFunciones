//Función flecha
let valorHora = Number(prompt(`Por favor, ingrese el valor de la hora`));
let cantidadHoras = Number(prompt(`Por favor, ingrese la cantidad de horas trabajadas`));


let salarioEmpleados = (valorHora,cantidadHoras) => {
    return valorHora* cantidadHoras


}

alert (salarioEmpleados(valorHora,cantidadHoras));


