let numero = Number(prompt(`Por favor, ingrese el número del que desea conocer la tabla`));

let numeroDos = Number(prompt(`Por favor, ingrese el número hasta el cuál desea conocer la tabla`))

let tablaMultiplicar = (numero,numeroDos) => {

    for (let i = 0;i<=numeroDos;i++) {
        console.log(`${numero} x ${i} = ${numero*i}`)
    }

}



