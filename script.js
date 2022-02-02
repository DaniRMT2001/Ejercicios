//1.Leer un número entero y determinar si es un número terminado en 4.
function determinar4() {
    let n = document.getElementById("determinar").value;

    if (parseInt(n) % 10 == 4) {
        console.log("el numero termina en 4");
    } else {
        console.log("no termina en 4");
    }
}
//2.Leer un número entero y determinar si tiene 3 dígitos.
function Digitos_3() {

    let n = document.getElementById("Digitos").value;
    if (n.length == '3') {
        console.log("El numero tiene 3 digitos ");
    }
    else {
        console.log(" el numero no tine 3 digitos")
    }
}
//3.Leer un número entero y determinar si es negativo.
function negativo() {
    let n = document.getElementById("negativo").value;
    if (n < 0) {
        console.log("el numero es negativo");
    } else {
        console.log("el nuemro es positivo");
    }
}

//4.Leer un número entero de dos dígitos y determinar a cuánto es igual la suma de sus dígitos.
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

//5.Leer un número entero de dos dígitos y determinar si ambos dígitos son pares.
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
//6.Leer un número entero de dos dígitos menor que 20 y determinar si es primo.
function primos() {
    let n = document.getElementById("primos").value;
    n = parseInt(n);

    if (n <= 20 && n >= 10) {

        if ((n / n == 1) && (n / 1 == n) && (n % 2 == 0)) {
            console.log("el numero no es primo ");
        }
        else {
            console.log("el numero es primo");
        }
    }
    else {
        console.log("tiene que ser de 2 digitos menor que 20");
    }
}
//7.Leer un número entero de dos dígitos y determinar si un dígito es múltiplo del otro.
function multiplo() {

    let n = document.getElementById("multiplo").value;
    let x = n.charAt(0);
    let y = n.charAt(1);
    x = parseInt(x);
    y = parseInt(y);

    if (x % y == 0 || y % x == 0) {
        console.log("son multiplo");
    }
    else {
        console.log("no son multiplos")
    }

}

//8.Leer un número entero de dos dígitos y determinar si los dos dígitos son iguales.
function iguales() {

    let n = document.getElementById("iguales").value;
    let x = n.charAt(0);
    let y = n.charAt(1);
    x = parseInt(x);
    y = parseInt(y);

    if (x == y || y == x) {
        console.log(" son iguales ")
    }
    else {
        console.log("no son iguales")
    }

}

//9.Leer dos números enteros y determinar cuál es el mayor.
function mayor() {

    let x = document.getElementById("mayor1").value;
    let y = document.getElementById("mayor2").value;
    x = parseInt(x);
    y = parseInt(y);

    if (x > y) {
        console.log(x + " es mayor que " + y)
    } else {
        console.log(y + " es mayor que " + x)
    }
}

//10.Leer dos números enteros de dos dígitos y determinar si tienen dígitos comunes.
function comunes() {

    let a = document.getElementById("comun1").value;
    let b = document.getElementById("comun2").value;
    x = a.charAt(0);
    y = a.charAt(1);
    c = b.charAt(0);
    d = b.charAt(1);

    x = parseInt(x);
    y = parseInt(y);
    c = parseInt(c);
    d = parseInt(d);

    if (a > 9 && a < 100) {

        if (x == c && x == d && y == c && y == d) {
            console.log("todos son iguales")
        } else if (x == c || x == d) {
            console.log("solo tienen el: " + x + " en comun ")
        } else if (y == c || y == d) {
            console.log("solo tienen el: " + y + " en comun")
        }
        else {
            console.log("no tiene ninguno en comun")
        }
    }
    else {
        console.log("los 2 numero tienen que ser de 2 digitos ")
    }



}