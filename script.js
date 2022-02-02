
function determinar4() {
    let n = document.getElementById("determinar").value;

    if (parseInt(n) % 10 == 4) {
        console.log("el numero termina en 4");
    } else {
        console.log("no termina en 4");
    }
}

function Digitos_3() {

    let n = document.getElementById("Digitos").value;
    if (n.length == '3') {
        console.log("El numero tiene 3 digitos ");
    }
    else {
        console.log(" el numero no tine 3 digitos")
    }
}

function negativo() {
    let n = document.getElementById("negativo").value;
    if (n < 0) {
        console.log("el numero es negativo");
    } else {
        console.log("el nuemro es positivo");
    }
}


function sumar() {
    let n = document.getElementById("sumar").value;
    if (n.length == '2') {

        parseInt(n);
        let n1 = n / 10;
        let n2 = n % 10;
        let suma = n1 + n2;
        console.log("La suma es: " + suma.toFixed(0))
    }
    else {
        console.log("el numero tiene mas o menos de 2 digitos ");
    }

}


function par() {
    let n = document.getElementById("par").value;
    let di2 = n % 10;
    n = n / 10;
    let di1 = n % 10;

    di1 = parseInt(di1)
    di2 = parseInt(di2)


    if (di1.toFixed(0) % 2 == 0 && di2.toFixed(0) % 2 == 0) {
        console.log("Ambos numeros son pares")
    }
    else if (di1.toFixed(0) % 2 == 0 && di2.toFixed(0) % 2 == 1) {
        console.log("solo el " + di1 + "es par")
    }
    else if (di1.toFixed(0) % 2 == 1 && di2.toFixed(0) % 2 == 0) {
        console.log("solo el " + di2 + " es par")
    }
    if (di1.toFixed(0) % 2 == 1 && di2.toFixed(0) % 2 == 1) {
        console.log("ninguno de los numero es par")
    }

}



