let n = Number(prompt(`Por favor, ingrese el primer número`));
let m = Number(prompt(`Por favor, ingrese el segundo número`));

//Números pares

let numerosPares = (n,m) => {
    for (let i = n; i<=m; i++){
        if(i%2 === 0) {
            console.log(`Este es el número par ${i}`);

        }

    }

}

//Numeros impares

let numerosImpares = (n,m) => {
    for (let i =  n; i<m;i++){
        if(i%2 === 1) {
            console.log(`Este es el número impar es ${i}`);

        }

    }
}


numerosPares (n,m);
numerosImpares (n,m);