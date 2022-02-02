
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
//11.Leer dos números enteros de dos dígitos y determinar si la suma de los dos números origina un numero par
function doblepar() {
    let n, x, suma;

    n = document.getElementById("par1").value;
    x = document.getElementById("par1").value;

    n = parseInt(n);
    x = parseInt(x);

    suma = n + x;

    if (n > 9 && n < 100 && x > 9 && x < 100) {
        if (suma % 2 == 0) {
            console.log("el numero es par")
        } else {
            console.log("el numero es impar")
        }
    }
}
//12.Leer dos números enteros de dos dígitos y determinar a cuánto es igual la suma de todos los dígitos.
function Doble_Digitos() {

    let x, y, a, b, c, d, suma;
    x = document.getElementById("Doble_Digitos_1").value;
    y = document.getElementById("Doble_Digitos_2").value;
    a = x.charAt(0);
    b = x.charAt(1);
    c = y.charAt(0);
    d = y.charAt(1);

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);

    suma = a + b + c + d;

    if (x.length == "2" && y.length == "2") {
        console.log("La suma de los digitos es: " + suma);
    }
}

//13.Leer un número entero de tres dígitos y determinar a cuánto es igual la suma de sus dígitos.
function Sumar_3() {

    let n, x, y, z, suma;
    n = document.getElementById("Sumar_3").value;
    x = n.charAt(0);
    y = n.charAt(1);
    z = n.charAt(2);

    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

    suma = x + y + z;

    if (n.length == "3") {
        console.log("la suma de los digitos es: " + suma);
    }
    else {
        console.log("tiene que ser de 3 digitos ")
    }
}
//14.Leer un número entero de tres dígitos y determinar si al menos dos de sus tres dígitos son iguales.
function Igualdad() {

    let n, x, y, z;
    n = document.getElementById("Igualdad").value;
    x = n.charAt(0);
    y = n.charAt(1);
    z = n.charAt(2);

    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

    if (n.length == "3") {
        if (x == y && x == z) {
            console.log("todos son iguales");
        } else if (x == y && x != z) {
            console.log("solo los 2 primeros son iguales");
        }
        else if (x != y && x == z) {
            console.log("solo el primer y el ultimo son iguales");
        }
        else if (y != x && y == z) {
            console.log("solo el segundo y terero son iguales");
        }
        else {
            console.log("ninguno son iguales");
        }
    }
    else {
        console.log("Tiene que tener 3 digitos");
    }
}

//15.Leer un número entero de tres dígitos y determinar en qué posición está el mayor dígito.
function Mayor_3() {

    let n, x, y, z;
    n = document.getElementById("Mayor_3").value;
    x = n.charAt(0);
    y = n.charAt(1);
    z = n.charAt(2);

    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

    if (n.length == "3") {
        if (x > y && x > z) {
            console.log("El mayor esta el la primera posicion")
        } else if (y > x && y > z) {
            console.log("El mayor esta en la segunda posicion");
        }
        else if (z > x && z > y) {
            console.log("El mayor esta en la tercera posicion")
        }
    }
    else {
        console.log("Tiene que tener 3 digitos ")
    }

}
