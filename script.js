
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
//16.Leer tres números enteros y mostrarlos ascendentemente.
function ascendente() {
    let x, y, z;
    x = document.getElementById("ascendente1").value;
    y = document.getElementById("ascendente2").value;
    z = document.getElementById("ascendente3").value;
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    if (x > y && x > z) {
        if (y > z) {
            console.log(z + " " + y + " " + z);
        }
        else {
            console.log(y + " " + z + " " + x);
        }

    } else if (y > x && y > z) {
        if (x > z) {
            console.log(z + " " + x + " " + y)
        }
        else {
            console.log(x + " " + z + " " + y)
        }
    }
    else if (z > x && z > y) {
        if (x > y) {
            console.log(y + " " + x + " " + z)
        }
        else {
            console.log(x + " " + y + " " + z)
        }
    }
}
//17.Leer tres números enteros de dos dígitos cada uno y determinar en cuál de ellos se encuentra 
//el mayor dígito
function Mayor_3_Enteros() {

    let x, y, z;
    x = document.getElementById("Mayor_3_Enteros1").value;
    y = document.getElementById("Mayor_3_Enteros2").value;
    z = document.getElementById("Mayor_3_Enteros3").value;

    a = parseInt(x);
    b = parseInt(y);
    c = parseInt(z);

    if (x.length == "2" && y.length == "2" && z.length == "2") {
        if (a > b && a > c) {
            console.log("El mayor es el: " + a);
        }
        else if (b > a && b > c) {
            console.log("El mayor es el: " + b);
        }
        else if (c > a && c > b) {
            console.log("El mayor es el: " + c);
        }
    }
    else {
        console.log("Cada numero tiene que ser de 2 digitos")
    }
}
//18.Leer un número entero de tres dígitos y determinar cuántos dígitos pares tiene.
function Digito_3_par() {

    let x, y, z, n;
    n = document.getElementById("Digito_3_par").value;
    x = n.charAt(0);
    y = n.charAt(1);
    z = n.charAt(2);

    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

    if (n.length = "3") {

        if (x % 2 == 0 && y % 2 == 0 && z % 2 == 0) {
            console.log("todos son pares")
        }
        else if (x % 2 == 0 && y % 2 == 0 && z % 2 == 1) {
            console.log("El primer y segundo digito son pares")
        }
        else if (x % 2 == 0 && y % 2 == 1 && z % 2 == 0) {
            console.log("El primer y ultimo digito son pares ")
        }
        else if (x % 2 == 1 && y % 2 == 0 && z % 2 == 0) {
            console.log("El segundo y ultimo digito son pares")
        }
        else if (x % 2 == 0 && y % 2 == 1 && z % 2 == 1) {
            console.log("Solo el primero digito es par")
        }
        else if (x % 2 == 1 && y % 2 == 0 && z % 2 == 1) {
            console.log("Solo el segundo digito es par")
        }
        else if (x % 2 == 1 && y % 2 == 1 && z % 2 == 0) {
            console.log("Solo el ultimo digito es par")
        }
        else {
            console.log("Ninguno es par")
        }
    }
}
// 19.Leer un número entero de tres dígitos y determinar si alguno de sus dígitos es igual a la suma 
// de los otros dos.
function R_Suma_Digitos() {

    let x, y, z, n = "422"
    x = n.charAt(0);
    y = n.charAt(1);
    z = n.charAt(2);

    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

    if (n.length == "3") {
        if (x + y == z) {
            console.log("El tercero es la suma de los 2 primeros digitos")
        }
        else if (x + z == y) {
            console.log("el segundo es la suma del primer y ultimo digito")
        }
        else if (y + z == x) {
            console.log("el primero es la suma de los otros digitos")
        }
        else {
            console.log("Ninguno es la suma del otro ")
        }
    }
    else {
        console.log("Debe terner 3 digito")
    }
}
//20.Leer un número entero de cuatro dígitos y determinar a cuanto es igual la suma de sus dígitos.

function Sumar_4_Digitos() {

    let a, b, c, d, n, suma;
    n = document.getElementById("Sumar_4_Digitos").value;
    a = n.charAt(0);
    b = n.charAt(1);
    c = n.charAt(2);
    d = n.charAt(3);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);

    suma = a + b + c + d;

    if (n.length == "4") {
        console.log("La suma de susdigitos es: " + suma)
    }
    else {
        console.log("El numero debe de tener 4 digitos")
    }
}
//21.Leer un número entero de cuatro dígitos y determinar cuántos dígitos pares tiene.
function Digito_4_pares() {

    let a, b, c, d, n = document.getElementById("Digito_4_pares").value;
    a = n.charAt(0);
    b = n.charAt(1);
    c = n.charAt(2);
    d = n.charAt(3);
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);

    if (n.length == "4") {
        if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0 && d % 2 == 0) {
            console.log("Todos los digitos son pares")
        }
        else if (a % 2 == 1 && b % 2 == 0 && c % 2 == 0 && d % 2 == 0 || a % 2 == 0 && b % 2 == 1 && c % 2 == 0 && d % 2 == 0 ||
            a % 2 == 0 && b % 2 == 0 && c % 2 == 1 && d % 2 == 0 || a % 2 == 0 && b % 2 == 0 && c % 2 == 0 && d % 2 == 1) {
            console.log("3 digitos son pares")
        }
        else if (a % 2 == 1 && b % 2 == 1 && c % 2 == 0 && d % 2 == 0 || a % 2 == 0 && b % 2 == 0 && c % 2 == 1 && d % 2 == 1 ||
            a % 2 == 1 && b % 2 == 0 && c % 2 == 0 && d % 2 == 1 || a % 2 == 0 && b % 2 == 1 && c % 2 == 1 && d % 2 == 0
            || a % 2 == 0 && b % 2 == 1 && c % 2 == 0 && d % 2 == 1 || a % 2 == 1 && b % 2 == 0 && c % 2 == 1 && d % 2 == 0) {
            //1.c y d [a % 2 == 1 && b % 2 == 1 && c % 2 == 0 && d % 2 == 0 ]
            //2.a y b [a % 2 == 0 && b % 2 == 0 && c % 2 == 1 && d % 2 == 1 ]          a=1;b=2;c=3;d=4
            //3.b y c [a % 2 == 1 && b % 2 == 0 && c % 2 == 0 && d % 2 == 1 ]
            //4.a y d [a % 2 == 0 && b % 2 == 1 && c % 2 == 1 && d % 2 == 0 ]        
            //5.a y c [a % 2 == 0 && b % 2 == 1 && c % 2 == 0 && d % 2 == 1 ]         
            //6.b y d [a % 2 == 1 && b % 2 == 0 && c % 2 == 1 && d % 2 == 0 ]         


            console.log("2 digitos son pares")
        }
        else if (a % 2 == 0 && b % 2 == 1 && c % 2 == 1 && d % 2 == 1 || a % 2 == 1 && b % 2 == 0 && c % 2 == 1 && d % 2 == 1 ||
            a % 2 == 1 && b % 2 == 1 && c % 2 == 0 && d % 2 == 1 || a % 2 == 1 && b % 2 == 1 && c % 2 == 1 && d % 2 == 0) {
            console.log("solo 1 digitos es par")
        }
        else {
            console.log("ninguno es par")

        }
    }
}