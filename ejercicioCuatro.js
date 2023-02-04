let nombre = () => {
    return prompt(`Por favor, ingrese su nombre`);
}
let apellido = () => {
    return prompt(`Por favor, ingrese su apellido`);
}
let edad = () => {
    return Number(prompt(`Por favor, ingrese su edad`));
}
let cargo = () => {
    return prompt(`Por favor, ingrese el cargo que tiene`);
}

let mensaje = () => {
    alert(`Su nombres ${nombre()}\nSu apellido es ${apellido()}\nSu edad es ${edad()}\nSu cargo actual es ${cargo()}`)

}

mensaje();